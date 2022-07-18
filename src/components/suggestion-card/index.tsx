import { BalloonIcon } from '../../assets/icons/BalloonIcon'
import { UpIndicatorIcon } from '../../assets/icons/UpIndicatorIcon'
import { Suggestion } from '../../entites/suggestion'
import { StyledFlex } from '../../styles/styled-flex'
import { StyledCategory } from '../../styles/styled-tag'
import { StyledText } from '../../styles/styled-text'
import * as StyledComponents from './styles'

interface SuggestionCardProps {
  suggestion: Suggestion
}

export function SuggestionCard({ suggestion }: SuggestionCardProps) {
  return (
    <StyledComponents.StyledSuggestion
      key={suggestion.id}
      gap={40}
      backgroundColor="white"
    >
      <StyledComponents.StyledUpvoteButton backgroundColor="whiteGhost1">
        <UpIndicatorIcon color="ultramarine" />
        <StyledText color="navyPurple1">112</StyledText>
      </StyledComponents.StyledUpvoteButton>
      <StyledComponents.StyledSuggestionContainer>
        <StyledText size={18} color="navyPurple1" weight={700}>
          {suggestion.title}
        </StyledText>
        <StyledComponents.StyledSuggestionDescription color="darkBlueGray">
          {suggestion.description}
        </StyledComponents.StyledSuggestionDescription>
        <StyledCategory as="div">{suggestion.category}</StyledCategory>
      </StyledComponents.StyledSuggestionContainer>
      <StyledFlex gap={8}>
        <BalloonIcon />
        <StyledText color="navyPurple1" weight={700}>
          {suggestion.comments.length}
        </StyledText>
      </StyledFlex>
    </StyledComponents.StyledSuggestion>
  )
}
