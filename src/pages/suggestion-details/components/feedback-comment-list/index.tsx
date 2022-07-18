import styled from 'styled-components'
import { Comment } from '~/entities/comment'
import { StyledFlexCard } from '~/styles/styled-card'
import { StyledFlex } from '~/styles/styled-flex'
import { StyledText } from '~/styles/styled-text'
import { FeedbackComment } from './components/feedback-comment'

const StyledFeedbackCommentList = styled(StyledFlexCard)`
  background-color: ${(props) => props.theme.white};
`

const StyledDivider = styled.hr`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.softBlueGray};
  border: none;
`

interface CommentListProps {
  comments: Comment[]
}

export function FeedbackCommentList({ comments }: CommentListProps) {
  return (
    <StyledFeedbackCommentList
      direction="column"
      align="start"
      gap={28}
      fullWidth
    >
      <header>
        <StyledText color="navyPurple1" size={18} weight={700}>
          {comments.length} comments
        </StyledText>
      </header>
      <StyledFlex as="ul" direction="column" gap={32} fullWidth>
        {comments.map((comment, index) => {
          return (
            <>
              <FeedbackComment key={comment.id} comment={comment} />
              {index < comments.length - 1 ? <StyledDivider /> : null}
            </>
          )
        })}
      </StyledFlex>
    </StyledFeedbackCommentList>
  )
}
