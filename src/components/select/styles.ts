import styled, { keyframes } from 'styled-components'
import { StyledFlex } from '../../styles/styled-flex'

export const StyledInAnimation = keyframes`
  from {
    margin-top: -20px;
  }
  to {
    margin-top: 0px;
  }
`

export const StyledOutAnimation = keyframes`
  from {
    opacity: 1;
    margin-top: 0px;
  }
  to {
    margin-top: -20px;
  }
`

export const StyledSelectField = styled(StyledFlex)`
  cursor: pointer;
`

interface StyledDropdownListProps {
  isDropdownOpen: boolean
}

export const StyledDropdownList = styled.ul<StyledDropdownListProps>`
  position: absolute;
  top: 74px;
  left: 0px;
  width: 255px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 10px 40px -7px rgba(55, 63, 104, 35%);
  animation-name: ${(props) =>
    props.isDropdownOpen ? StyledInAnimation : StyledOutAnimation};
  animation-duration: 0.3s;
  opacity: ${(props) => (props.isDropdownOpen ? 1 : 0)};
  z-index: 1;
`

export const StyledDropdownItem = styled.li`
  padding: 12px 24px;
  cursor: pointer;

  & + li {
    border-top: solid 1px ${(props) => props.theme.whiteGhost1};
  }

  & :hover {
    color: ${(props) => props.theme.purple};
  }
`
