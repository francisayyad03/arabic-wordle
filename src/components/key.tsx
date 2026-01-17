import { Pressable, Text, StyleSheet } from 'react-native';

interface KeyProps {
  label: string;
  onPress: () => void;
  wide?: boolean;
}

export function Key({ label, onPress, wide }: KeyProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.key, wide && styles.wide]}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  key: {
    flex: 1,
    backgroundColor: '#818384',
    margin: 3,
    paddingVertical: 18,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wide: {
    flex: 1.5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
