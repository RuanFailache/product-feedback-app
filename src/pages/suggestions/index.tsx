import {SideBanner} from "./components/side-banner";
import {TagList} from "./components/tag-list";
import {StatusList} from "./components/status-list";
import styled from "styled-components";

export const Suggestions = () => {
  return (
    <>
      <SideContainer>
        <SideBanner />
        <TagList />
        <StatusList />
      </SideContainer>
      <main></main>
    </>
  )
}

const PAGE_WIDTH = 1110

export const SideContainer = styled.aside`
  position: fixed;
  top: 64px;
  left: calc((100% - ${PAGE_WIDTH}px) / 2);
  width: ${PAGE_WIDTH * 0.25}px;
`
