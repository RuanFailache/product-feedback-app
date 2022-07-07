import styled from 'styled-components'

interface StyledBulletProps {
  fill: string
}

export const StyledBullet = styled.div<StyledBulletProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.fill};
`
