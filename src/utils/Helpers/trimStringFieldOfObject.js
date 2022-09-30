const trimStringFieldOfObject = object => {
  let newObject = { ...object }
  for (const [key, value] of Object.entries(newObject)) {
    if (typeof value === 'string') {
      newObject[key] = value.trim()
    }
  }
  return newObject
}

export default trimStringFieldOfObject
