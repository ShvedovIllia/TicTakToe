import * as React from 'react';

import { styled } from '../styles';

interface IBoardSquareProps {
  sign: React.ReactElement | null;
  onPress: () => void;
}

const Square = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.util.wp(20)};
  width: ${({ theme }) => theme.util.wp(20)};
  border: solid 1px ${({ theme }) => theme.color.black}
`;

export const BoardSquare: React.FC<IBoardSquareProps> = ({ sign, onPress }) => {
  return <Square onPress={onPress} disabled={sign !== null}>{sign}</Square>;
};
