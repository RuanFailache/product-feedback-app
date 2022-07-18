import styled from 'styled-components'
import { StyledButton } from '../../styles/styled-button'
import { StyledFlexCard } from '../../styles/styled-card'
import { StyledText } from '../../styles/styled-text'

export const StyledSuggestion = styled(StyledFlexCard)`
  width: 100%;
`

export const StyledSuggestionContainer = styled.main`
  flex: 1;
`

export const StyledSuggestionDescription = styled(StyledText)`
  margin-top: 4px;
  margin-bottom: 12px;
`

export const StyledUpvoteButton = styled(StyledButton)`
  padding: 8px;
`
