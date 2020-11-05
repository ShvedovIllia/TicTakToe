import * as React from 'react';

import { styled } from "../styles";

interface ISignBaseProps {
	isRed: boolean;
}

const SignBase = styled.View<ISignBaseProps>`
  background-color: ${({ theme, isRed }) =>
		isRed ? theme.color.red : theme.color.blue };
  height: ${({ theme }) => theme.util.wp("10")};
  width: ${({ theme }) => theme.util.wp("10")};
  border-radius: ${({ theme }) => theme.util.wp('4.25%')};
`;

export const RedSign: React.FC = () => {
	return <SignBase isRed={true}/>;
};

export const BlueSign: React.FC = () => {
	return <SignBase isRed={false}/>
}
