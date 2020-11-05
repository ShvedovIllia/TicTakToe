import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {ScreenConst} from './consts';
import {
  GreetingView,
  BoardView,
  ResultView,
  IGreetingViewParamsList,
  IBoardViewParamsList,
  IResultViewParamsList
} from './containers';

type IAppContainerParamsList = {} & IGreetingViewParamsList & IBoardViewParamsList & IResultViewParamsList;

const RootStack = createStackNavigator<IAppContainerParamsList>();

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={ScreenConst.GreetingView}
        headerMode="none">
        <RootStack.Screen
          name={ScreenConst.GreetingView}
          component={GreetingView}
        />
        <RootStack.Screen name={ScreenConst.BoardView} component={BoardView} />
        <RootStack.Screen
          name={ScreenConst.ResultView}
          component={ResultView}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
