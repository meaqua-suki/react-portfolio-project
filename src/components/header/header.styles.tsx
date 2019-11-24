import styled from "styled-components";
import {css} from "styled-components";
import { Link } from "react-router-dom";

const optionContainerStyles = css`
  padding: 10px 15px;
  font-size: 1.7rem;
  cursor: pointer;
`

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
`;

export const Optionscontainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${optionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${optionContainerStyles}
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`
