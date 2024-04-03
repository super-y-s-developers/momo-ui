import styled from "styled-components";

export interface CardProps {
  padding?: number;
}

const Card = styled.div<CardProps>`
  background-color: ${(props) => props.theme.backgroundColor};
  padding: ${(props) => props.padding || "15"}px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export default Card;
