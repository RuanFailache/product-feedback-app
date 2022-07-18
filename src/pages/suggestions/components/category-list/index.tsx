import styled from 'styled-components'
import { StyledFlexCard } from '../../../../styles/styled-card'
import { StyledCategory } from '../../../../styles/styled-tag'

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

const StyledCategoryList = styled(StyledFlexCard)`
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: ${(props) => props.theme.white};
`

export function CategoryList() {
  return (
    <StyledCategoryList as="ul" gap={16} justify="start" wrap>
      {tags.map((tag) => (
        <StyledCategory key={tag.name} selected={tag.selected}>
          {tag.name}
        </StyledCategory>
      ))}
    </StyledCategoryList>
  )
}
