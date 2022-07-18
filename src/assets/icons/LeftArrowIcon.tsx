import { colors } from '../../helpers/ color-palette'

/* eslint-disable react/require-default-props */
interface LeftArrowIconProps {
  color: keyof typeof colors
  height?: number
  width?: number
}

export function LeftArrowIcon({ color, height, width }: LeftArrowIconProps) {
  const iconWidth = width?.toString() ?? '5'
  const iconHeight = height?.toString() ?? '10'

  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox={`0 0 ${iconWidth} ${iconHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 9L0 5L4 1" stroke={colors[color]} strokeWidth="2" />
    </svg>
  )
}
