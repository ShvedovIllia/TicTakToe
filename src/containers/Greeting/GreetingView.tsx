import {StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';

import { Button, ContainerWrapper, H1 } from "../../components";
import {ScreenConst} from '../../consts';
import {EngTexts} from '../../translations';
import { IBoardViewParamsList } from "containers";

export type IGreetingViewParamsList = {
  [ScreenConst.GreetingView]: undefined;
}

interface IGreetingViewProps extends StackScreenProps<IGreetingViewParamsList & IBoardViewParamsList> {}

export const GreetingView: React.FC<IGreetingViewProps> = ({navigation}) => {
  return (
    <ContainerWrapper>
      <H1>{EngTexts.Greeting}</H1>
      <Button onPress={() => navigation.navigate(ScreenConst.BoardView)} text={EngTexts.StartButton}/>
    </ContainerWrapper>
  );
};
