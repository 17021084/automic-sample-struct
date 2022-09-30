import React from 'react'
import { Wrapper } from './styled'
import PropTypes from 'prop-types'

const BaseForm = ({ children, model, onSubmit, ...rest }) => {
  const ref = React.createRef()
  const [formValue, setFormValue] = React.useState(null)

  const handleOnSubmit = React.useCallback(() => {
    const isFunction = onSubmit instanceof Function

    if (ref?.current?.check() && isFunction) {
      onSubmit()
    }
  }, [onSubmit])

  return (
    <Wrapper
      fluid
      model={model}
      ref={ref}
      formValue={formValue}
      onChange={v => setFormValue(v)}
      onSubmit={handleOnSubmit}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

BaseForm.propTypes = {
  children: PropTypes.node,
  model: PropTypes.any,
  onSubmit: PropTypes.func
}

export default React.memo(BaseForm)
