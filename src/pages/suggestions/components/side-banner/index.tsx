import styled from 'styled-components'
import { StyledCard } from '../../../../styles/styled-card'
import { StyledText } from '../../../../styles/styled-text'

export function SideBanner() {
  return (
    <StyledBannerContainer as="header">
      <StyledText as="h1" size={20} weight={700}>
        FrontEnd Mentor
      </StyledText>
      <StyledText size={15} weight={500}>
        Feedback Board
      </StyledText>
    </StyledBannerContainer>
  )
}

const StyledBannerContainer = styled(StyledCard)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: end;
  height: 128px;
  background: linear-gradient(-135deg, #e84d70, #a337f6, #28a7ed);
`
