import { Suggestion } from '../../entites/suggestion'
import { CategoryList } from './components/category-list'
import { MainHeader } from './components/main-header'
import { NoSuggestions } from './components/no-suggestions'
import { SideBanner } from './components/side-banner'
import { StatusList } from './components/status-list'
import { SuggestionList } from './components/suggestion-list'
import * as StyledComponents from './styles'

const suggestions: Suggestion[] = []

export function SuggestionsPage() {
  const suggestionPageContent = () => {
    if (suggestions.length > 0) {
      return <SuggestionList suggestions={suggestions} />
    }
    return <NoSuggestions />
  }

  return (
    <>
      <StyledComponents.SideContainer>
        <SideBanner />
        <CategoryList />
        <StatusList />
      </StyledComponents.SideContainer>
      <StyledComponents.MainContainer>
        <MainHeader />
        {suggestionPageContent()}
      </StyledComponents.MainContainer>
    </>
  )
}
