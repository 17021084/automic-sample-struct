import { Constant } from 'utils'

const setColorViaValue = (value, theme) => {
  const { ACTIVE, INACTIVE } = Constant.CellColor

  switch (value.toLowerCase()) {
    case ACTIVE:
      return theme?.colors?.status[1]
    case INACTIVE:
      return theme?.colors?.status[0]
    default:
      return theme?.colors?.primary
  }
}

export default setColorViaValue
