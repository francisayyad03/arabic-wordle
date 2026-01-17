import { View, Text, StyleSheet } from 'react-native';
import { TileState } from '../game/types';

interface TileProps {
  letter?: string;
  state?: TileState;
}

export function Tile({ letter = '', state }: TileProps) {
  const backgroundColor =
    state === 'correct'
      ? '#538d4e' // green
      : state === 'present'
      ? '#b59f3b' // yellow
      : state === 'absent'
      ? '#3a3a3c' // gray
      : '#121213'; // empty

  const borderColor = letter ? '#565758' : '#3a3a3c';

  return (
    <View style={[styles.tile, { backgroundColor, borderColor }]}>
      <Text style={styles.letter}>{letter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: 60,
    height: 60,
    margin: 4,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
