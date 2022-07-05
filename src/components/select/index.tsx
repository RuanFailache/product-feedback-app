import styled from "styled-components";
import {useState} from "react";
import {StyledFlex} from "../../styles/styled-flex";
import {StyledText} from "../../styles/styled-text";
import {CheckIcon} from "../../assets/icons/CheckIcon";

interface SelectProps {
  options: string[]
}

export const Select = (
  {
    options
  }: SelectProps
) => {
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const selectOption = (option: string) => {
    setSelectedOption(option)
    setIsDropdownOpen(false)
  }

  return (
    <>
      <StyledText
        color="whiteGhost1"
        size={14}
        weight={700}
        onClick={() => setIsDropdownOpen(prev => !prev)}
      >
        {selectedOption}
      </StyledText>

      {isDropdownOpen && (
        <StyledDropdownList>
          {options.map(option => (
            <StyledDropdownItem onClick={() => selectOption(option)}>
              <StyledFlex>
                <StyledText color="darkBlueGray">{option}</StyledText>
                {option === selectedOption && <CheckIcon/>}
              </StyledFlex>
            </StyledDropdownItem>
          ))}
        </StyledDropdownList>
      )}
    </>
  )
}

const StyledDropdownList = styled.ul`
  position: absolute;
  top: 74px;
  left: 0px;
  width: 255px;
  border-radius: 10px;
  background-color: ${props => props.theme.white};
  box-shadow: 0 10px 40px -7px rgba(55, 63, 104, 35%);
`

const StyledDropdownItem = styled.li`
  padding: 12px 24px;
  cursor: pointer;

  & + li {
    border-top: solid 1px ${props => props.theme.whiteGhost1};
  }

  & :hover {
    color: ${props => props.theme.purple};
  }
`
