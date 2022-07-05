interface LeftArrowIconProps {
  color: string
  height?: number
  width?: number
}

export const LeftArrowIcon = (
  {
    color,
    height,
    width
  }: LeftArrowIconProps
) => {
  const iconWidth = width?.toString() ?? '5'
  const iconHeight = height?.toString() ?? "10"
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox={`0 0 ${iconWidth} ${iconHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 9L0 5L4 1" stroke={color} stroke-width="2" />
    </svg>
  )
}
