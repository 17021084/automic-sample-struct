import styled from 'styled-components'
import { BaseTitle } from 'atoms'
import { ItemRowConfig } from 'molecules'

export const Wrapper = styled.div``
export const Title = styled(BaseTitle)`
  margin: 10px;
`
export const Block = styled.div`
  margin: 10px;
  padding: 10px;
`
export const ItemInfo = styled(ItemRowConfig)``
export const Table = styled.table`
  border-collapse: collapse;
`
export const HeaderCell = styled.th`
  border-collapse: collapse;
  padding: 5px;
  text-align: center;
`
export const Row = styled.tr`
  border-collapse: collapse;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`
