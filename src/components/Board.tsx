import * as React from 'react';
import { View } from "react-native";

import { BoardSquare } from "./BoardSquare";
import { BlueSign, RedSign } from "./Signs";

import { styled } from "../styles";

const BOARD_SIZE = 3;

const LineWrapper = styled.View`
  flex-direction: row;
`;

interface ILineProps {
	onPress: (squareIndex: number) => void;
	lineNumber: number;
	redPlayed: number[];
	bluePlayed: number[];
}

const Line: React.FC<ILineProps> = ({onPress, lineNumber, redPlayed, bluePlayed}) => {

	const renderedSquares = React.useMemo(() => {
		const result = [];
		for (let i = 0; i < BOARD_SIZE; i++) {
			const squareIndex = (BOARD_SIZE) * lineNumber + i + 1;
			let sign = null;
			if (bluePlayed.includes(squareIndex)) {
				sign = (<RedSign/>)
			}
			if (redPlayed.includes(squareIndex)) {
				sign = (<BlueSign/>)
			}
				result.push(<BoardSquare sign={ sign } onPress={() => onPress(squareIndex) }/>)
		}
		return result;
	}, [redPlayed, bluePlayed, onPress, lineNumber]);

	return (
		<LineWrapper>
			{ renderedSquares }
		</LineWrapper>
	)
};

interface IBoardProps {
	onPress: (squareIndex: number) => void;
	redPlayed: number[];
	bluePlayed: number[];
}

export const Board: React.FC<IBoardProps> = ({onPress, redPlayed, bluePlayed}) => {

	const renderedLines = React.useMemo(() => {
		const result = [];
		for (let i = 0; i < BOARD_SIZE; i++) {
			result.push(<Line onPress={ onPress } lineNumber={ i } redPlayed={ redPlayed } bluePlayed={ bluePlayed }/>)
		}
		return result;
	}, [redPlayed, bluePlayed, onPress]);

	return (
		<View>
			{ renderedLines }
		</View>
	)
};
