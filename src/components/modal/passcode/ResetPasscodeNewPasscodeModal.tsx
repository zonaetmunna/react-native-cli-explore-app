import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';

const ResetPasscodeNewPasscodeModal = ({visible, onClose}) => {
  const [passcode, setPasscode] = useState('');

  // Function to handle adding passcode input
  const handleKeyPress = digit => {
    if (passcode.length < 4) {
      setPasscode(passcode + digit);
    }
  };

  // Function to handle backspace
  const handleBackspace = () => {
    setPasscode(passcode.slice(0, -1));
  };

  // Automatically close the modal when passcode is complete
  useEffect(() => {
    if (passcode.length === 4) {
      setTimeout(() => {
        onClose(); // Call onClose when passcode is complete
      }, 500); // Optionally delay it slightly for a smoother UX
    }
  }, [passcode, onClose]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Reset Your Passcode</Text>
          <Text style={styles.modalSubtitle}>
            The passcode must be different than before.
          </Text>

          {/* New Passcode Label */}
          <Text style={styles.newPasscodeLabel}>New passcode</Text>

          {/* Passcode Input Dots */}
          <View style={styles.passcodeBoxContainer}>
            {[...Array(4)].map((_, index) => (
              <View
                key={index}
                style={[
                  styles.passcodeBox,
                  passcode.length > index && styles.filledBox,
                ]}>
                <Text style={styles.passcodeText}>
                  {passcode.length > index ? '●' : ''}
                </Text>
              </View>
            ))}
          </View>

          {/* Custom Keypad */}
          <View style={styles.keypad}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(digit => (
              <TouchableOpacity
                key={digit}
                style={styles.keypadButton}
                onPress={() => handleKeyPress(digit.toString())}>
                <Text style={styles.keypadButtonText}>{digit}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.keypadButton} />
            <TouchableOpacity
              style={styles.keypadButton}
              onPress={() => handleKeyPress('0')}>
              <Text style={styles.keypadButtonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keypadButton}
              onPress={handleBackspace}>
              <Text style={styles.keypadButtonText}>⌫</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'rgba(36,36,39,255)',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 10,
    textAlign: 'center',
  },
  newPasscodeLabel: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  passcodeBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginBottom: 20,
    gap: 5,
  },
  passcodeBox: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(48,48,51,255)',
  },
  filledBox: {
    backgroundColor: 'rgba(48,48,51,255)',
  },
  passcodeText: {
    fontSize: 24,
    color: '#0077ED',
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    height: 'auto',
    marginBottom: 20,
    backgroundColor: 'rgba(48,48,51,255)',
    gap: 5,
    paddingTop: 20,
    paddingBottom: 10,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  keypadButton: {
    width: '30%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(70,70,71,255)',
    borderRadius: 10,
  },
  keypadButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default ResetPasscodeNewPasscodeModal;
