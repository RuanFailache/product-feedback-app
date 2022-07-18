import styled from 'styled-components'
import { NoSuggestionsIcon } from '~/assets/icons/NoSuggestionsIcon'
import { StyledButton } from '~/styles/styled-button'
import { StyledCard } from '~/styles/styled-card'
import { StyledFlex } from '~/styles/styled-flex'
import { StyledText } from '~/styles/styled-text'

const FULL_HEIGHT_CONTAINER = 600

const StyledNoSuggestionsContainer = styled(StyledCard)`
  display: grid;
  place-items: center;
  height: ${FULL_HEIGHT_CONTAINER}px;
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: ${(props) => props.theme.white};
`

export function NoSuggestions() {
  return (
    <StyledNoSuggestionsContainer>
      <StyledFlex direction="column" gap={48}>
        <NoSuggestionsIcon />
        <StyledFlex direction="column" gap={16}>
          <StyledText as="strong" color="navyPurple1" weight={700} size={24}>
            There is no feedback
          </StyledText>
          <StyledText as="pre" color="darkBlueGray" centered>
            {`Got a suggestion? Found a bug that needs to be squashed?\nWe love hearing about new ideas to improve our app.`}
          </StyledText>
        </StyledFlex>
        <StyledButton backgroundColor="purple">
          <StyledText size={14} weight={700}>
            + Add Feedback
          </StyledText>
        </StyledButton>
      </StyledFlex>
    </StyledNoSuggestionsContainer>
  )
}
