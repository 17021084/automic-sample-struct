import { Schema } from 'rsuite'
const { StringType } = Schema.Types

const validateModel = Schema.Model({
  password: StringType()
    .minLength(8, "Can't be less than 8 characters")
    .isRequired('Password is required'),
  cfPassword: StringType()
    .minLength(8, "Can't be less than 8 characters")
    .isRequired('Password is required')
})

export default validateModel
