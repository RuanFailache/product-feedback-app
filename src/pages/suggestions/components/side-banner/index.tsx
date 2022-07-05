import styled from "styled-components";
import {StyledCard} from "../../../../styles/styled-card";
import {StyledText} from "../../../../styles/styled-text";

export const SideBanner = () => {
  return (
    <StyledBannerContainer as='header'>
      <StyledText as="h1" size={20} weight={700}>FrontEnd Mentor</StyledText>
      <StyledText size={15} weight={500}>Feedback Board</StyledText>
    </StyledBannerContainer>
  )
}

const StyledBannerContainer = styled(StyledCard)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: end;
  height: 128px;
  background: linear-gradient(-135deg, #E84D70, #A337F6, #28A7ED);
`
