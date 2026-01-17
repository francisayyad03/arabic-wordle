import { Modal, View, Text, StyleSheet, Pressable } from 'react-native';

interface GameOverModalProps {
  visible: boolean;
  status: 'won' | 'lost';
  answer: string;
  onClose: () => void;
}

export function GameOverModal({
  visible,
  status,
  answer,
  onClose,
}: GameOverModalProps) {
  const isWin = status === 'won';

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>
            {isWin ? '🎉 فزت!' : '😔 انتهت اللعبة'}
          </Text>

          <Text style={styles.subtitle}>
            الكلمة كانت
          </Text>

          <Text style={styles.answer}>
            {answer}
          </Text>

          <Pressable onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>حسناً</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    padding: 24,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 4,
  },
  answer: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    letterSpacing: 2,
  },
  button: {
    backgroundColor: '#538d4e',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
