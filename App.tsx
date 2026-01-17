import { View, StyleSheet } from 'react-native';
import { useGame } from './src/game/useGame';
import { Board } from './src/components/board';
import { Keyboard } from './src/components/keyboard';

export default function App() {
  const game = useGame();

  return (
    <View style={styles.container}>
      <Board
        guesses={game.guesses}
        results={game.results}
        currentGuess={game.currentGuess}
      />

      <Keyboard
        onKey={game.addLetter}
        onEnter={game.submitGuess}
        onBackspace={game.removeLetter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121213',
    justifyContent: 'center',
    paddingBottom: 12,
  },
});
