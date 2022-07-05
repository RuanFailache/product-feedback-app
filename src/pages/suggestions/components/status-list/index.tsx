import {StyledCard} from "../../../../components/styled-card";
import styled from "styled-components";
import {colors} from "../../../../helpers/ color-palette";

const statusList = [
  {
    title: 'Planned',
    bullet: colors.secondary.tangerine,
    suggestions: 2
  },
  {
    title: 'In-Progress',
    bullet: colors.primary.purple,
    suggestions: 3
  },
  {
    title: 'Live',
    bullet: colors.secondary.maya,
    suggestions: 1
  },
]

export const StatusList = () => {
  return (
    <StyledSection>
      <StyledSectionHeader>
        <StyledSectionTitle>Roadmap</StyledSectionTitle>
        <StyledLinkButton>View</StyledLinkButton>
      </StyledSectionHeader>

      <StyledStatusList>
        {statusList.map((status) => (
          <StyledStatusItem>
            <StyledStatusItemGroup>
              <StyledBullet fill={status.bullet}/>
              <p>{status.title}</p>
            </StyledStatusItemGroup>
            <StyledStatusItemValue>{status.suggestions}</StyledStatusItemValue>
          </StyledStatusItem>
        ))}
      </StyledStatusList>
    </StyledSection>
  )
}

const StyledSection = styled(StyledCard)`
  background-color: white;
`

const StyledSectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledSectionTitle = styled.strong`
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  color: ${props => props.theme.primary.navyPurple2};
`

const StyledLinkButton = styled.button`
  font-size: 13px;
  line-height: 19px;
  font-weight: 600;
  text-decoration: underline;

  border: none;
  background: transparent;
  color: ${props => props.theme.secondary.ultramarine};
`

interface StyledBulletProps {
  fill: string
}

const StyledBullet = styled.div<StyledBulletProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.fill};
`

const StyledStatusList = styled.ul`
  display: flex;
  flex-flow: nowrap column;
  gap: 8px;
  margin-top: 24px;
`

const StyledStatusItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: ${props => props.theme.neutral.darkGray};
`

const StyledStatusItemGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

const StyledStatusItemValue = styled.span`
  font-weight: 700;
`
