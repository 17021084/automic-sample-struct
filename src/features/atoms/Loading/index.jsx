import React from 'react'
import { LoadingSpinner, LoadingBox, LoadingWrapper } from './styled'

const Loading = () => {
  return (
    <>
      <LoadingWrapper>
        <LoadingBox>
          <LoadingSpinner size={50} color={'#FF814D'} />
        </LoadingBox>
      </LoadingWrapper>
    </>
  )
}

export default React.memo(Loading)
