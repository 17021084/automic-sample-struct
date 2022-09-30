import { Schema } from 'rsuite'
const { StringType } = Schema.Types

const validateModel = Schema.Model({
  password: StringType().isRequired('Password is required'),
  loginId: StringType().isRequired('User Id is required'),
  enterpriseId: StringType().isRequired('CompanyId is required')
})

export default validateModel
