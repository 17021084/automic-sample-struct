import { Schema } from 'rsuite'
const { StringType } = Schema.Types

const validateModel = Schema.Model({
  email: StringType().isEmail('Please enter the correct email').isRequired('Email is required'),
  password: StringType().minLength(7, "Can't be less than 7 characters").isRequired('Password is required'),
})

export default validateModel
