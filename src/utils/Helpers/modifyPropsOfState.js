const modifyPropsOfState = (state, setState, key, value) => {
  if (!key) {
    return
  }
  let newState = { ...state }
  newState[key] = value
  setState(newState)
}

export default modifyPropsOfState
