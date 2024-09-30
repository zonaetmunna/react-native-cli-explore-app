import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';

const ResetPasscodeConfirmPasscodeModal = ({
  visible,
  onClose,
  setShowResetPasscodeConfirmModal,
  navigation,
}: any) => {
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

  // Ensure the modal is only visible if `visible` is true
  const handleContinue = () => {
    setShowResetPasscodeConfirmModal(false);
  };

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

          <Text style={styles.confirmPasscodeLabel}>Confirm passcode</Text>

          {/* Passcode Input Boxes */}
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

          {/* Continue Button */}
          <TouchableOpacity
            style={[
              styles.continueButton,
              passcode.length < 4 && styles.disabledButton,
            ]}
            onPress={handleContinue}
            disabled={passcode.length < 4}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
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
    backgroundColor: '#1C1C1E',
    padding: 20,
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
  confirmPasscodeLabel: {
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
    paddingBottom: 20,
    borderRadius: 20,
    // borderTopStartRadius: 20,
    // borderTopEndRadius: 20,
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
  continueButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#555', // Grayish color for disabled state
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ResetPasscodeConfirmPasscodeModal;
