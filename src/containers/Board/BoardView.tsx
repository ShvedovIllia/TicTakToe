import { StackScreenProps } from "@react-navigation/stack";
import * as React from 'react';

import { checkWinningCombinations } from "./checkWinningCombinations";

import { Board, RedSign, ContainerWrapper, BlueSign, H1 } from '../../components';
import { ScreenConst, SignsConst } from '../../consts';
import {EngTexts} from '../../translations';
import { IResultViewParamsList } from "containers";

export type IBoardViewParamsList = {
  [ScreenConst.BoardView]: undefined
}

interface IBoardViewProps extends StackScreenProps<IBoardViewParamsList & IResultViewParamsList>{}

export const BoardView: React.FC<IBoardViewProps> = ({ navigation }) => {

  const [currentTurn, setCurrentTurn] = React.useState<SignsConst>(SignsConst.BlueSign);
  const [redPlayed, setRedPlayed] = React.useState<number[]>([]);
  const [bluePlayed, setBluePlayed] = React.useState<number[]>([]);

  const toggleTurn = React.useCallback((squareIndex: number) => {
    const isBlueTurn = currentTurn === SignsConst.BlueSign;

    const next = isBlueTurn ? SignsConst.RedSign : SignsConst.BlueSign;
    isBlueTurn
      ? setRedPlayed(prevState => prevState.concat(squareIndex))
      : setBluePlayed(prevState => prevState.concat(squareIndex));

    setCurrentTurn(next)
  }, [bluePlayed, redPlayed, currentTurn]);

  React.useEffect(() => {
    let winner = checkWinningCombinations(bluePlayed, redPlayed);
    if (winner !== null || bluePlayed.length + redPlayed.length === 9 ) {
      setBluePlayed([]);
      setRedPlayed([]);
      navigation.navigate(ScreenConst.ResultView, { winner });
    }
  }, [bluePlayed, redPlayed])

  return (
    <ContainerWrapper>
      <H1>{EngTexts.Board}</H1>
      <Board onPress={toggleTurn} redPlayed={redPlayed} bluePlayed={bluePlayed}/>
      {currentTurn === SignsConst.BlueSign ? <BlueSign /> : <RedSign/>}
    </ContainerWrapper>
  );
};
