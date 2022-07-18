import styled from 'styled-components'
import { StyledButton } from '~/styles/styled-button'
import { StyledCard } from '~/styles/styled-card'
import { StyledFlex } from '~/styles/styled-flex'
import { StyledText } from '~/styles/styled-text'

export const StyledSection = styled(StyledCard)`
  background-color: white;
`

export const StyledStatusList = styled(StyledFlex)`
  margin-top: 12px;
`

export const StyledStatus = styled(StyledFlex)`
  width: 100%;
`

export const StyledLinkButton = styled(StyledButton)`
  padding-left: 12px;
  padding-right: 0;
`

export const StyledLinkText = styled(StyledText)`
  text-decoration: underline;
`
