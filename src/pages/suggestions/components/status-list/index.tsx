import { colors } from '~/helpers/ color-palette'
import { StyledBullet } from '~/styles/styled-bullet'
import { StyledFlex } from '~/styles/styled-flex'
import { StyledText } from '~/styles/styled-text'
import * as StyledComponents from './styles'

const statusList = [
  {
    title: 'Planned',
    bullet: colors.tangerine,
    suggestions: 2,
  },
  {
    title: 'In-Progress',
    bullet: colors.purple,
    suggestions: 3,
  },
  {
    title: 'Live',
    bullet: colors.maya,
    suggestions: 1,
  },
]

export function StatusList() {
  return (
    <StyledComponents.StyledSection>
      <StyledFlex>
        <StyledText as="strong" size={18} weight={700} color="navyPurple2">
          Roadmap
        </StyledText>
        <StyledComponents.StyledLinkButton>
          <StyledComponents.StyledLinkText
            as="span"
            size={13}
            weight={600}
            color="ultramarine"
          >
            View
          </StyledComponents.StyledLinkText>
        </StyledComponents.StyledLinkButton>
      </StyledFlex>

      <StyledComponents.StyledStatusList as="ul" direction="column" wrap>
        {statusList.map((status) => (
          <StyledComponents.StyledStatus key={status.title}>
            <StyledFlex gap={16} justify="start">
              <StyledBullet fill={status.bullet} />
              <StyledText color="darkBlueGray">{status.title}</StyledText>
            </StyledFlex>
            <StyledText as="span" weight={700} color="darkBlueGray">
              {status.suggestions}
            </StyledText>
          </StyledComponents.StyledStatus>
        ))}
      </StyledComponents.StyledStatusList>
    </StyledComponents.StyledSection>
  )
}
