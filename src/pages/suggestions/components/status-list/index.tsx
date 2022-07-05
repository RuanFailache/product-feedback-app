import {StyledCard} from "../../../../styles/styled-card";
import {StyledBullet} from "../../../../styles/styled-bullet";
import styled from "styled-components";
import {colors} from "../../../../helpers/ color-palette";
import {StyledText} from "../../../../styles/styled-text";
import {StyledFlex} from "../../../../styles/styled-flex";
import {StyledButton} from "../../../../styles/styled-button";

const statusList = [
  {
    title: 'Planned',
    bullet: colors.tangerine,
    suggestions: 2
  },
  {
    title: 'In-Progress',
    bullet: colors.purple,
    suggestions: 3
  },
  {
    title: 'Live',
    bullet: colors.maya,
    suggestions: 1
  },
]

export const StatusList = () => {
  return (
    <StyledSection>
      <StyledFlex>
        <StyledText as="strong" size={18} weight={700} color="navyPurple2">Roadmap</StyledText>
        <StyledLinkButton>
          <StyledLinkText as="span" size={13} weight={600} color="ultramarine">View</StyledLinkText>
        </StyledLinkButton>
      </StyledFlex>

      <StyledStatusList as="ul" direction="column" wrap>
        {statusList.map((status) => (
          <StyledStatus>
            <StyledFlex gap={16} justify="start">
              <StyledBullet fill={status.bullet}/>
              <StyledText color="darkGray">{status.title}</StyledText>
            </StyledFlex>
            <StyledText as="span" weight={700} color="darkGray">{status.suggestions}</StyledText>
          </StyledStatus>
        ))}
      </StyledStatusList>
    </StyledSection>
  )
}

const StyledSection = styled(StyledCard)`
  background-color: white;
`

const StyledStatusList = styled(StyledFlex)`
  margin-top: 12px;
`

const StyledStatus = styled(StyledFlex)`
  width: 100%;
`

const StyledLinkButton = styled(StyledButton)`
  padding-left: 12px;
  padding-right: 0;
`

const StyledLinkText = styled(StyledText)`
  text-decoration: underline;
`
