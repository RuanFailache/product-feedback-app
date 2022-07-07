import styled from 'styled-components'
import { UpIndicatorIcon } from '../../../../../../assets/icons/UpIndicatorIcon'
import { StyledButton } from '../../../../../../styles/styled-button'
import { StyledText } from '../../../../../../styles/styled-text'

export function UpvoteButton() {
  return (
    <StyledUpvoteButton backgroundColor="whiteGhost1">
      <UpIndicatorIcon color="ultramarine" />
      <StyledText color="navyPurple1">112</StyledText>
    </StyledUpvoteButton>
  )
}

const StyledUpvoteButton = styled(StyledButton)`
  padding: 8px;
`
