import styled from 'styled-components'

interface StyledTagProps {
  selected?: boolean
}

export const StyledTag = styled.li<StyledTagProps>`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 13px;
  line-height: 19px;
  font-weight: 600;

  background-color: ${(props) =>
    props.selected ? props.theme.ultramarine : props.theme.whiteGhost1};

  color: ${(props) =>
    props.selected ? props.theme.whiteGhost1 : props.theme.ultramarine};
`
