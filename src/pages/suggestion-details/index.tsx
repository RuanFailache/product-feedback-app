import styled from 'styled-components'
import { SuggestionCard } from '../../components/suggestion-card'
import data from '../../data.json'
import { PAGE_WIDTH } from '../../helpers/reset-css'
import { StyledFlex } from '../../styles/styled-flex'
import { FeedbackCommentForm } from './components/feedback-comment-form'
import { FeedbackCommentList } from './components/feedback-comment-list'
import { SuggestionDetailsHeader } from './components/suggestion-details-header'

const StyledSuggestionDetailsContainer = styled(StyledFlex)`
  width: ${PAGE_WIDTH}px;
  margin: 80px auto 24px;
`

const suggestion = data.productRequests[0]

export function SuggestionDetailsPage() {
  return (
    <StyledSuggestionDetailsContainer direction="column" gap={24}>
      <SuggestionDetailsHeader />
      <SuggestionCard suggestion={suggestion} />
      <FeedbackCommentList comments={suggestion.comments ?? []} />
      <FeedbackCommentForm />
    </StyledSuggestionDetailsContainer>
  )
}
