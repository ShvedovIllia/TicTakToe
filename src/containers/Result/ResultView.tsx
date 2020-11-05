import { StackScreenProps } from "@react-navigation/stack";
import * as React from 'react';

import { Button, ContainerWrapper, H1 } from "../../components";
import { ScreenConst, SignsConst } from "../../consts";
import { EngTexts } from '../../translations';

export type IResultViewParamsList = {
  [ScreenConst.ResultView]: {winner: SignsConst | null} | undefined;
}

interface IResultViewProps extends StackScreenProps<IResultViewParamsList, ScreenConst.ResultView> {}

export const ResultView: React.FC<IResultViewProps> = ({ route, navigation}) => {
  const result = route.params?.winner;
  const winner = result && result === SignsConst.RedSign ? EngTexts.RedPlayer : EngTexts.BluePlayer;
  return (
    <ContainerWrapper>
      <H1>
        {result === null ? EngTexts.Draw : EngTexts.Winner + winner.toLowerCase()}
      </H1>
      <Button onPress={() => navigation.goBack()} text={EngTexts.PlayAgain}/>
    </ContainerWrapper>
  );
};
