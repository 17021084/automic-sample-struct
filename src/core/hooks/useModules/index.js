import { useCallback } from 'react'
import { withArray } from 'exp-value'

const useModules = () => {
  const handleError = useCallback(modules => {
    let temp
    if (modules.length < 1) {
      temp = 'No module'
    }
    modules.forEach((module, index) => {
      if (module.title == '') {
        temp = `Module ${index + 1} no title`
        return
      }
      if (!module.description) {
        temp = `Module ${index + 1} no description`
        return
      }
      if (module.sections.length < 1) {
        temp = `Section of module ${index + 1} is empty`
        return
      }
      withArray('sections', module).map((section, order) => {
        if (!section.title) {
          temp = `Section ${order + 1} of module ${index + 1} no title`
          return
        }
        if (!section.description) {
          temp = `Section ${order + 1} of module ${index + 1} no description`
          return
        }
        if (
          (section.inputTypeId == 'multiple_choice' ||
            section.inputTypeId == 'single_choice') &&
          section.sectionItems.length < 1
        ) {
          temp = `Section ${order + 1} of module ${index + 1} no section items`
          return
        }
      })
    })
    return temp
  }, [])

  return { handleError }
}

export default useModules
