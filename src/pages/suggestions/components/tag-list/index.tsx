import styled from "styled-components";
import {StyledCard} from "../../../../components/styled-card";

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

export const TagList = () => {
  return (
    <StyledTagList as='ul'>
      {tags.map((tag) => (
        <StyledTagItem selected={tag.selected}>
          {tag.name}
        </StyledTagItem>
      ))}
    </StyledTagList>
  )
}

const StyledTagList = styled(StyledCard)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: ${props => props.theme.neutral.white};
`

interface StyledTagItemProps {
  selected: boolean
}

const StyledTagItem = styled.li<StyledTagItemProps>`
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 13px;
  line-height: 19px;
  font-weight: 600;

  background-color: ${props => props.selected
    ? props.theme.secondary.ultramarine
    : props.theme.neutral.whiteGhost1
  };

  color: ${props => props.selected
    ? props.theme.neutral.whiteGhost1
    : props.theme.secondary.ultramarine
  };
`
