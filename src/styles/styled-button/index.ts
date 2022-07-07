import styled from 'styled-components'
import { colors } from '../../helpers/ color-palette'

interface StyledButtonProps {
  backgroundColor?: keyof typeof colors
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) =>
    props.backgroundColor ? colors[props.backgroundColor] : 'transparent'};
  cursor: pointer;
`
