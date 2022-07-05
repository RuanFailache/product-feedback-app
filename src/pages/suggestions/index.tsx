import {SideBanner} from "./components/side-banner";
import {TagList} from "./components/tag-list";
import {StatusList} from "./components/status-list";
import styled from "styled-components";
import {MainHeader} from "./components/main-header";

export const Suggestions = () => {
  return (
    <>
      <SideContainer>
        <SideBanner/>
        <TagList/>
        <StatusList/>
      </SideContainer>
      <MainContainer>
        <MainHeader/>
      </MainContainer>
    </>
  )
}

const PAGE_WIDTH = 1110

const SideContainer = styled.aside`
  position: fixed;
  top: 64px;
  left: calc((100% - ${PAGE_WIDTH}px) / 2);
  width: ${PAGE_WIDTH * 0.25}px;
`

const MainContainer = styled.main`
  position: absolute;
  top: 64px;
  left: calc((100% - ${PAGE_WIDTH}px) / 2 + ${PAGE_WIDTH * 0.25 + 30}px);
  width: ${PAGE_WIDTH * 0.75 - 30}px;
`
