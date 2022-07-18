import styled from 'styled-components'
import { colors } from '../../helpers/ color-palette'

// eslint-disable-next-line no-shadow
enum FLEX_ALIGN_OPTIONS {
  between = 'space-between',
  center = 'center',
  start = 'flex-start',
  end = 'flex-end',
}

interface StyledFlexProps {
  gap?: number
  justify?: keyof typeof FLEX_ALIGN_OPTIONS
  align?: keyof typeof FLEX_ALIGN_OPTIONS
  direction?: 'row' | 'column'
  wrap?: boolean
  backgroundColor?: keyof typeof colors
}

export const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  justify-content: ${(props) =>
    FLEX_ALIGN_OPTIONS[props?.justify ?? 'between']};
  align-items: ${(props) => FLEX_ALIGN_OPTIONS[props?.align ?? 'center']};
  gap: ${(props) => props.gap ?? 0}px;
  flex-flow: ${(props) => props.direction ?? 'row'}
    ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
  background-color: ${(props) =>
    props.backgroundColor ? colors[props.backgroundColor] : 'transparent'};
  position: relative;
`
