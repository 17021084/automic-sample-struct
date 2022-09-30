import { Schema } from 'rsuite'
const { StringType } = Schema.Types

const validateModel = Schema.Model({
  password: StringType().minLength(7, "Can't be less than 7 characters").isRequired('Password is required'),
})

export default validateModel
