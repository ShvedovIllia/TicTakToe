import * as React from 'react';
import {StyleSheet, View} from 'react-native';

interface IPlayingBoardProps {}

export const PlayingBoard: IPlayingBoardProps = () => {
  return <View style={styles.boardLine} />;
};

const styles = StyleSheet.create({
  boardLine: {
    display: 'flex',
  },
});
