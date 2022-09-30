import React from 'react'
import { ModalWrapper, EmailWrapper } from './styled'
import PropTypes from 'prop-types'
import { BaseTitle } from 'atoms'
import { ProfileBlock, StaffForm } from 'molecules'

const StaffModal = ({
  isUpdate = true,
  units,
  viewOnlyData,
  footerHandle,
  staffData,
  formOthers,
  ...others
}) => {
  const { handleInput, data, error } = staffData
  const { dataDisplay } = viewOnlyData
  const { onClickBtn1, onClickBtn2 } = footerHandle
  return (
    <ModalWrapper
      header={
        <BaseTitle H5 bold>
          {isUpdate ? 'Profile Detail' : ' Create staff'}
        </BaseTitle>
      }
      body={
        <>
          {isUpdate ? (
            <ProfileBlock
              canNavigate={false}
              name={dataDisplay.firstName}
              subText={<EmailWrapper>{dataDisplay.email}</EmailWrapper>}
            />
          ) : null}
          <StaffForm
            isUpdate={isUpdate}
            units={units}
            handleInput={handleInput}
            data={data}
            error={error}
            onSubmit={onClickBtn2}
            onClose={onClickBtn1}
            formOthers={formOthers}
          />
        </>
      }
      {...others}
    />
  )
}

StaffModal.propTypes = {
  children: PropTypes.node,
  staffData: PropTypes.object,
  viewOnlyData: PropTypes.object,
  formOthers: PropTypes.object,
  isUpdate: PropTypes.bool,
  units: PropTypes.array,
  footerHandle: PropTypes.object
}

export default React.memo(StaffModal)
