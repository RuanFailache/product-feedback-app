import { SuggestionCard } from '~/components/suggestion-card'
import { Suggestion } from '~/entities/suggestion'
import { StyledSuggetionList } from './styles'

interface SuggestionListProps {
  suggestions: Suggestion[]
}

export function SuggestionList({ suggestions }: SuggestionListProps) {
  return (
    <StyledSuggetionList as="ul" gap={24} direction="column">
      {suggestions.map((suggestion) => (
        <SuggestionCard key={suggestion.id} suggestion={suggestion} />
      ))}
    </StyledSuggetionList>
  )
}
