import { LeftArrowIcon } from '~/assets/icons/LeftArrowIcon'
import { StyledButton } from '~/styles/styled-button'
import { StyledFlex } from '~/styles/styled-flex'
import { StyledText } from '~/styles/styled-text'

export function SuggestionDetailsHeader() {
  return (
    <StyledFlex as="header" fullWidth>
      <StyledButton>
        <StyledFlex gap={16}>
          <LeftArrowIcon color="ultramarine" />
          <StyledText color="darkBlueGray" size={14} weight={700}>
            Go back
          </StyledText>
        </StyledFlex>
      </StyledButton>
      <StyledButton backgroundColor="ultramarine">
        <StyledText>Edit Feedback</StyledText>
      </StyledButton>
    </StyledFlex>
  )
}
