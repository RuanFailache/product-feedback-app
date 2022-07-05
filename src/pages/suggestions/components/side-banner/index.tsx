import styled from "styled-components";
import {StyledCard} from "../../../../components/styled-card";

export const SideBanner = () => {
  return (
    <StyledBannerContainer as='header'>
      <StyledBannerTitle>FrontEnd Mentor</StyledBannerTitle>
      <StyledBannerSubtitle>Feedback Board</StyledBannerSubtitle>
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

const StyledBannerTitle = styled.h1`
  font-size: 20px;
  line-height: 29px;
  font-weight: 700;
  color: white
`

const StyledBannerSubtitle = styled.p`
  font-size: 15px;
  line-height: 22px;
  font-weight: 500;
  color: white
`
