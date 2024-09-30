import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

const ResetPasscodeVerificationModal = ({visible, onClose}: any) => {
  const [verificationCode, setVerificationCode] = useState(
    new Array(6).fill(''),
  );
  const inputRefs = useRef([]);

  // Handle the text input changes and focus management
  const handleInputChange = (text: string, index: number) => {
    const newCode = [...verificationCode];
    newCode[index] = text;
    setVerificationCode(newCode);

    // Move focus to the next input if text is entered
    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace key press to focus previous input
  const handleKeyPress = (nativeEvent: any, index: number) => {
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

          {/* Numeric Keypad (Optional) */}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
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
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 10,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(48,48,51,255)',
  },
  verifyButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  resendContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
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
    gap: 10,
    backgroundColor: 'rgba(48,48,51,255)',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 20,
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

export default ResetPasscodeVerificationModal;
