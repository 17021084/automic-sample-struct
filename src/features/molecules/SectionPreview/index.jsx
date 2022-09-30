import { withArray, withEmpty } from 'exp-value'
import PropTypes from 'prop-types'
import React from 'react'
import { Section, Wrapper } from './styled'
const SectionPreview = ({ orderNumber, section, ...others }) => {
  return (
    <Wrapper {...others}>
      <Section
        type={withEmpty('inputTypeId', section)}
        preview={true}
        orderNumber={orderNumber}
        sectionTitle={withEmpty('title', section)}
        description={withEmpty('description', section)}
        sectionItems={withArray('sectionItems', section)}
      />
    </Wrapper>
  )
}

SectionPreview.propTypes = {
  section: PropTypes.object.isRequired,
  orderNumber: PropTypes.number.isRequired
}

export default SectionPreview
