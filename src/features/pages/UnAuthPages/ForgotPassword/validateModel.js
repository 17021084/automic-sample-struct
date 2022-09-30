import { Schema } from 'rsuite'
const { StringType } = Schema.Types

const validateModel = Schema.Model({
  email: StringType().isEmail('Please enter the correct email').isRequired('Email is required'),
})

export default validateModel
