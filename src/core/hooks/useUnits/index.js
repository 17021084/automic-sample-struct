import React from 'react'

import { useRecoilValue } from 'recoil'
import { useRequestManager } from 'hooks'
import { EndPoint } from 'config/api'
import { globalUserState } from 'stores/profile/atom'
import { globalUnitsState } from 'stores/Units/atom'
import { useRecoilState } from 'recoil'

// Check Had new units
// waiting API
const useUnits = () => {
  const [units, setUnitsState] = useRecoilState(globalUnitsState)
  const admin = useRecoilValue(globalUserState)
  const { onGetExecute } = useRequestManager()
  React.useEffect(() => {
    async function execute() {
      if (units && units.length) {
        const response = await onGetExecute(
          EndPoint.UNITS_LIST(admin.enterpriseId),
          {
            params: {
              offset: 0,
              limit: 1000,
              fromId: units[units.length - 1].id
            }
          },
          true
        )
        if (response && response.length) {
          setUnitsState(
            response.map(u => {
              return { ...u, label: u.name, value: u.id }
            })
          )
        }
      }
    }
    execute()
  }, [])

  return
}

export default useUnits
