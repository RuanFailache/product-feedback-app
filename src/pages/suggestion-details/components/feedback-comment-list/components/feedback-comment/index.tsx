import styled from 'styled-components'
import { Comment } from '~/entities/comment'
import { StyledLinkButton } from '~/pages/suggestions/components/status-list/styles'
import { StyledFlexCard } from '~/styles/styled-card'
import { StyledFlex } from '~/styles/styled-flex'
import { StyledText } from '~/styles/styled-text'

const StyledCircleImage = styled.img`
  width: 40px;
  height: same-as-width;
  border-radius: 100%;
`

interface CommentProps {
  comment: Comment
}

export function FeedbackComment({ comment }: CommentProps) {
  return (
    <StyledFlexCard
      key={comment.id}
      as="li"
      gap={32}
      align="start"
      justify="start"
      fullWidth
    >
      <StyledCircleImage src={comment.user.image} alt="user's profile" />
      <StyledFlex direction="column" gap={16} fullWidth>
        <StyledFlex fullWidth>
          <div>
            <StyledText color="navyPurple1" weight={700} size={14}>
              {comment.user.name}
            </StyledText>
            <StyledText color="darkBlueGray" size={14}>
              @{comment.user.username}
            </StyledText>
          </div>
          <StyledLinkButton>
            <StyledText color="ultramarine" size={13} weight={700}>
              Reply
            </StyledText>
          </StyledLinkButton>
        </StyledFlex>
        <StyledText color="darkBlueGray" fullWidth>
          {comment.content}
        </StyledText>
      </StyledFlex>
    </StyledFlexCard>
  )
}
