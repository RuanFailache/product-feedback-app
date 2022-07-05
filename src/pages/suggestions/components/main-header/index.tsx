import {StyledFlexCard} from "../../../../styles/styled-card";
import {StyledFlex} from "../../../../styles/styled-flex";
import {BulbIcon} from "../../../../assets/icons/BulbIcon";
import {StyledText} from "../../../../styles/styled-text";
import {StyledButton} from "../../../../styles/styled-button";

export const MainHeader = () => {
  return (
    <StyledFlexCard as='header' backgroundColor="navyPurple1">
      <StyledFlex gap={38}>
        <StyledFlex gap={16}>
          <BulbIcon />
          <StyledText weight={700} size={18}>6 suggestions</StyledText>
        </StyledFlex>

        <StyledFlex gap={4}>
          <StyledText color="whiteGhost2" size={14}>Sort by:</StyledText>
          <select>
            <option>Most Upvote</option>
          </select>
        </StyledFlex>
      </StyledFlex>

      <StyledButton backgroundColor="purple">
        <StyledText size={14} weight={700}>+ Add Feedback</StyledText>
      </StyledButton>
    </StyledFlexCard>
  )
}
