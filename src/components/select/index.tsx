import { useState } from 'react'
import { CheckIcon } from '../../assets/icons/CheckIcon'
import { DownIndicatorIcon } from '../../assets/icons/DowIndicatorIcon'
import { UpIndicatorIcon } from '../../assets/icons/UpIndicatorIcon'
import { StyledFlex } from '../../styles/styled-flex'
import { StyledText } from '../../styles/styled-text'
import * as StyledComponents from './styles'

interface SelectProps {
  options: string[]
}

export function Select({ options }: SelectProps) {
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const selectOption = (option: string) => {
    setSelectedOption(option)
    setIsDropdownOpen(false)
  }

  return (
    <>
      <StyledComponents.StyledSelectField
        gap={4}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <StyledText color="whiteGhost1" size={14} weight={700}>
          {selectedOption}
        </StyledText>

        {isDropdownOpen ? <UpIndicatorIcon /> : <DownIndicatorIcon />}
      </StyledComponents.StyledSelectField>

      <StyledComponents.StyledDropdownList isDropdownOpen={isDropdownOpen}>
        {options.map((option) => (
          <StyledComponents.StyledDropdownItem
            key={option}
            onClick={() => selectOption(option)}
          >
            <StyledFlex>
              <StyledText color="darkBlueGray">{option}</StyledText>
              {option === selectedOption && <CheckIcon />}
            </StyledFlex>
          </StyledComponents.StyledDropdownItem>
        ))}
      </StyledComponents.StyledDropdownList>
    </>
  )
}
