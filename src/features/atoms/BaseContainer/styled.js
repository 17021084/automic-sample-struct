import styled from 'styled-components'

export const Wrapper = styled.div`
  display: block;
  margin: 0 20px;
  overflow: scroll;
  max-height: calc(100vh - 120px);
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0;
  }
  scrollbar-width: none;
`
