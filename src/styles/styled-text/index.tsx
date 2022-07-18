import styled from 'styled-components'
import { colors } from '../../helpers/ color-palette'

interface StyledTextProps {
  size?: number
  lineHeight?: number
  weight?: number
  color?: keyof typeof colors
  centered?: boolean
  fullWidth?: boolean
}

const calculateLineHeight = (props: StyledTextProps) => {
  if (props.lineHeight) return props.lineHeight
  if (props.size) return props.size * 1.5
  return 24
}

export const StyledText = styled.p<StyledTextProps>`
  font-size: ${(props) => props.size ?? 16}px;
  font-weight: ${(props) => props.weight ?? 400};
  line-height: ${calculateLineHeight}px;
  color: ${(props) => colors[props.color ?? 'white']};
  text-align: ${(props) => (props.centered ? 'center' : 'normal')};
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
`
