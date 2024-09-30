import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  StyleSheet,
} from 'react-native';

const ForgotVerificationCodeModal = ({visible, onClose}) => {
  const [verificationCode, setVerificationCode] = useState(
    new Array(6).fill(''),
  );
  const inputRefs = useRef([]);

  // Handle the text input changes and focus management
  const handleInputChange = (text, index) => {
    const newCode = [...verificationCode];
    newCode[index] = text;
    setVerificationCode(newCode);

    // Move focus to the next input if text is entered
    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace key press to focus previous input
  const handleKeyPress = (nativeEvent, index) => {
    if (nativeEvent.key === 'Backspace' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Enter Verification Code</Text>
          <Text style={styles.modalSubtitle}>
            Enter 6 digits verification code we have sent to example@gmail.com
          </Text>

          {/* Code Input */}
          <View style={styles.codeInputContainer}>
            {verificationCode.map((value, index) => (
              <TextInput
                key={index}
                ref={el => (inputRefs.current[index] = el)} // Assign refs dynamically
                style={styles.codeInput}
                maxLength={1}
                keyboardType="number-pad"
                value={value}
                onChangeText={text => handleInputChange(text, index)}
                onKeyPress={({nativeEvent}) =>
                  handleKeyPress(nativeEvent, index)
                }
              />
            ))}
          </View>

          {/* Verify Button */}
          <TouchableOpacity style={styles.verifyButton} onPress={onClose}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>

          {/* Resend Code Section */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Code hasn’t arrived?</Text>
            <TouchableOpacity>
              <Text style={styles.resendLink}>Re-send Code</Text>
            </TouchableOpacity>
          </View>

          {/* Numeric Keypad */}
          <View style={styles.keypad}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(digit => (
              <TouchableOpacity key={digit} style={styles.keypadButton}>
                <Text style={styles.keypadButtonText}>{digit}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.keypadButton}>
              {/* Empty Button */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadButtonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    width: 40,
    height: 50,
    backgroundColor: '#333',
    borderRadius: 10,
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  verifyButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  resendText: {
    color: '#aaa',
    marginRight: 5,
  },
  resendLink: {
    color: '#007AFF',
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  keypadButton: {
    width: '30%',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  keypadButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default ForgotVerificationCodeModal;
