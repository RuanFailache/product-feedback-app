import { colors } from '../../helpers/ color-palette'

interface UpIndicatorIconProps {
  color?: keyof typeof colors
}

export function UpIndicatorIcon({ color }: UpIndicatorIconProps) {
  return (
    <svg
      width="9"
      height="7"
      viewBox="0 0 9 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6L5 2L9 6"
        stroke={colors[color ?? 'white']}
        strokeWidth="2"
      />
    </svg>
  )
}
