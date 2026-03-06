import { View, Text, StyleSheet } from 'react-native';
import { TileState } from '../game/types';
import { COLORS } from '../utils/colors';

interface TileProps {
  letter?: string;
  state?: TileState;
  size: number;
}

export function Tile({ letter = '', state, size }: TileProps) {
  const backgroundColor =
    state === 'correct'
      ? COLORS.green
      : state === 'present'
      ? COLORS.yellow
      : COLORS.grid;
  const fontSize = Math.round(size * 0.55);

  let textColor = 'white';

  if (state === 'correct' || state === 'present') {
    textColor = 'black';
  }

  if (state === 'absent') {
    textColor = COLORS.lightGrey;
  }

  const fontWeight = state === 'correct' || state === 'present' ? '700' : '600';

  return (
    <View
      style={[
        styles.tile,
        { backgroundColor, width: size, height: size },
      ]}
    >
      <Text
        allowFontScaling={false}
        style={[
          styles.letter,
          {
            fontSize,
            color: textColor,
            fontFamily: 'System',
            fontWeight,
            includeFontPadding: false,
            textAlignVertical: 'center',
          },
        ]}
      >
        {letter}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    margin: 4,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    fontWeight: '600',
  },
});
