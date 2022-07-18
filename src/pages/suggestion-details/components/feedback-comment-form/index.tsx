import { useState } from 'react'
import styled from 'styled-components'
import { StyledButton } from '~/styles/styled-button'
import { StyledFlexCard } from '~/styles/styled-card'
import { StyledFlex } from '~/styles/styled-flex'
import { StyledText } from '~/styles/styled-text'

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.whiteGhost1};
  resize: none;
  outline: none;
  font-size: 15px;
`

export function FeedbackCommentForm() {
  const [comment, setComment] = useState('')

  return (
    <StyledFlexCard
      as="form"
      gap={24}
      align="start"
      direction="column"
      backgroundColor="white"
      fullWidth
    >
      <StyledText color="navyPurple1" size={18} weight={700}>
        Add a comment
      </StyledText>

      <StyledTextarea
        value={comment}
        maxLength={250}
        placeholder="Type your comment here"
        onChange={(e) => setComment(e.target.value)}
      />

      <StyledFlex fullWidth>
        <StyledText color="darkBlueGray">
          {250 - comment.length} Characters left
        </StyledText>
        <StyledButton backgroundColor="purple">
          <StyledText>Post Comment</StyledText>
        </StyledButton>
      </StyledFlex>
    </StyledFlexCard>
  )
}
