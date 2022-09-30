import { Schema } from 'rsuite'
const { StringType, DateType } = Schema.Types

export const validateModelCreate = Schema.Model({
  email: StringType()
    .isEmail('Please enter the correct email')
    .isRequired('Email is required'),
  firstName: StringType().isRequired('FirstName is required'),
  dateOfBirth: DateType().isRequired('Date of Birth is required'),
  lastName: StringType().isRequired('LastName is required')
})

export const validateModelUpdate = Schema.Model({
  firstName: StringType().isRequired('FirstName is required'),
  dateOfBirth: DateType().isRequired('Date of Birth is required'),
  lastName: StringType().isRequired('LastName is required')
})
