import { useCallback, useState } from 'react'
import { BalloonIcon } from '../../assets/icons/BalloonIcon'
import { UpIndicatorIcon } from '../../assets/icons/UpIndicatorIcon'
import { Suggestion } from '../../entities/suggestion'
import { StyledFlex } from '../../styles/styled-flex'
import { StyledCategory } from '../../styles/styled-tag'
import { StyledText } from '../../styles/styled-text'
import * as StyledComponents from './styles'

interface SuggestionCardProps {
  suggestion: Suggestion
}

export function SuggestionCard({ suggestion }: SuggestionCardProps) {
  const [isUpvoted, setIsUpvoted] = useState(false)

  const handleUpvoteClick = useCallback(() => {
    setIsUpvoted((prevState) => !prevState)
  }, [isUpvoted])

  return (
    <StyledComponents.StyledSuggestion
      key={suggestion.id}
      gap={40}
      backgroundColor="white"
    >
      <StyledComponents.StyledUpvoteButton
        onClick={handleUpvoteClick}
        backgroundColor={isUpvoted ? 'ultramarine' : 'whiteGhost1'}
      >
        <UpIndicatorIcon color={isUpvoted ? 'white' : 'ultramarine'} />
        <StyledText color={isUpvoted ? 'white' : 'navyPurple1'}>112</StyledText>
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
          {suggestion.comments?.length ?? 0}
        </StyledText>
      </StyledFlex>
    </StyledComponents.StyledSuggestion>
  )
}
