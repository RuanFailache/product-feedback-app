import styled from 'styled-components'
import { StyledFlexCard } from '../../../../styles/styled-card'
import { StyledTag } from '../../../../styles/styled-tag'

interface Tag {
  name: string
  selected: boolean
}

const tags: Tag[] = [
  {
    name: 'All',
    selected: true,
  },
  {
    name: 'UX',
    selected: false,
  },
  {
    name: 'UI',
    selected: false,
  },
  {
    name: 'Enhancement',
    selected: false,
  },
  {
    name: 'Bug',
    selected: false,
  },
  {
    name: 'Feature',
    selected: false,
  },
]

export function TagList() {
  return (
    <StyledTagList as="ul" gap={16} justify="start" wrap>
      {tags.map((tag) => (
        <StyledTag selected={tag.selected}>{tag.name}</StyledTag>
      ))}
    </StyledTagList>
  )
}

const StyledTagList = styled(StyledFlexCard)`
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: ${(props) => props.theme.white};
`
