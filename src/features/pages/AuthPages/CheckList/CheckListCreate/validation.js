import { Schema } from 'rsuite'
const { StringType } = Schema.Types

export const formCheckListCreate = Schema.Model({
  title: StringType().isRequired('Title is required field'),
  description: StringType().isRequired('Description is required field'),
  // unit: StringType(),
  displayMode: StringType().isRequired('Display mode is required field')
})
