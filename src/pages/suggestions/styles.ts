import styled from 'styled-components'
import { PAGE_WIDTH } from '~/helpers/reset-css'

export const SideContainer = styled.aside`
  position: fixed;
  top: 64px;
  left: calc((100% - ${PAGE_WIDTH}px) / 2);
  width: ${PAGE_WIDTH * 0.25}px;
`

export const MainContainer = styled.main`
  position: absolute;
  top: 64px;
  left: calc((100% - ${PAGE_WIDTH}px) / 2 + ${PAGE_WIDTH * 0.25 + 30}px);
  width: ${PAGE_WIDTH * 0.75 - 30}px;
`
