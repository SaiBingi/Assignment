import styled from 'styled-components'

export const ButtonContainer = styled.div`
  padding-top: ${props => (props.firstButtonClick ? '30px' : '11px')};
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
