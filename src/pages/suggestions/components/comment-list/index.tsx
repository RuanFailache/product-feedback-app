import styled from 'styled-components'
import { BalloonIcon } from '../../../../assets/icons/BalloonIcon'
import { UpvoteButton } from './components/upvote-button'
import { StyledFlexCard } from '../../../../styles/styled-card'
import { StyledFlex } from '../../../../styles/styled-flex'
import { StyledTag } from '../../../../styles/styled-tag'
import { StyledText } from '../../../../styles/styled-text'

interface Comment {
  id: number
  upvotes: number
  title: string
  description: string
  tag: string
  comments: number
}

const comments: Comment[] = [
  {
    id: 1,
    upvotes: 112,
    title: 'Add tags for solutions',
    description: 'Easier to search for solutions based on a specific stack.',
    tag: 'Enhacement',
    comments: 2
  },
  {
    id: 2,
    upvotes: 112,
    title: 'Add tags for solutions',
    description: 'Easier to search for solutions based on a specific stack.',
    tag: 'Enhacement',
    comments: 2
  },
  {
    id: 3,
    upvotes: 112,
    title: 'Add tags for solutions',
    description: 'Easier to search for solutions based on a specific stack.',
    tag: 'Enhacement',
    comments: 2
  },
  {
    id: 4,
    upvotes: 112,
    title: 'Add tags for solutions',
    description: 'Easier to search for solutions based on a specific stack.',
    tag: 'Enhacement',
    comments: 2
  },
  {
    id: 5,
    upvotes: 112,
    title: 'Add tags for solutions',
    description: 'Easier to search for solutions based on a specific stack.',
    tag: 'Enhacement',
    comments: 2
  },
  {
    id: 6,
    upvotes: 112,
    title: 'Add tags for solutions',
    description: 'Easier to search for solutions based on a specific stack.',
    tag: 'Enhacement',
    comments: 2
  },
]

export function CommentList() {
  return (
    <StyledCommentList as='ul' gap={24} direction='column'>
      {comments.map(comment => (
        <StyledComment key={comment.id} gap={40} backgroundColor="white">
          <UpvoteButton />
          <StyledCommentContainer>
            <StyledText size={18} color='navyPurple1' weight={700}>{comment.title}</StyledText>
            <StyledCommentDescription color='darkBlueGray'>{comment.description}</StyledCommentDescription>
            <StyledTag as='div'>{comment.tag}</StyledTag>
          </StyledCommentContainer>
          <StyledFlex gap={8}>
            <BalloonIcon />
            <StyledText color='navyPurple1' weight={700}>{comment.comments}</StyledText>
          </StyledFlex>
        </StyledComment>
      ))}
    </StyledCommentList>
  )
}

const StyledCommentList = styled(StyledFlex)`
  margin-top: 24px;
  margin-bottom: 24px;
`

const StyledComment = styled(StyledFlexCard)`
  width: 100%;
`

const StyledCommentContainer = styled.main`
  flex: 1;
`

const StyledCommentDescription = styled(StyledText)`
  margin-top: 4px;
  margin-bottom: 12px;
`
