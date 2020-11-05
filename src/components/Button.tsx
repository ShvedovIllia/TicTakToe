import * as React from 'react';

import { styled } from "../styles";
import { H1 } from "./Text";

const ButtonBase = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  padding-vertical: ${({ theme }) => theme.util.wp('4.25%')};
  background-color: ${({ theme }) => theme.color.lightBlue};
  border-radius: ${({ theme }) => theme.util.wp('4.25%')};
`;

interface IButtonProps {
  onPress: () => void;
  text: string;
}

export const Button: React.FC<IButtonProps> = ({ text, onPress }) => {
  return (
    <ButtonBase onPress={onPress}>
      <H1>{text}</H1>
    </ButtonBase>
  );
};
