import { SignsConst, WinningCombinationsConst } from "../../consts";

type ICheckWinningCombination = (redPlayed: number[], bluePlayed: number[]) => SignsConst | null;

export const checkWinningCombinations: ICheckWinningCombination = (redPlayed, bluePlayed) => {
	const isRedWin = checkCombo(redPlayed);
	const isBlueWin = checkCombo(bluePlayed);

	return isRedWin
		? SignsConst.RedSign
		: isBlueWin
			? SignsConst.BlueSign
			: null;
};

type ICheckCombo = (playedFields: number[]) => boolean;

const checkCombo: ICheckCombo = (playedFields) => {
	let result = false;
	WinningCombinationsConst.forEach(combo => {
		let count = 0;
		playedFields.forEach(field => {
			if (combo.includes(field)) {
				count++;
			}
			if (count === 3) {
				result = true;
			}
		})
	})
	return result;
}
