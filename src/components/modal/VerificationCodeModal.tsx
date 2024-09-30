import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  StyleSheet,
} from 'react-native';

const VerificationCodeModal = ({visible, onClose, openPasscodeModal}: any) => {
  const [verificationCode, setVerificationCode] = useState(
    new Array(6).fill(''),
  );
  const inputRefs = useRef([]);

  const handleInputChange = (text, index) => {
    const newCode = [...verificationCode];
    newCode[index] = text;
    setVerificationCode(newCode);

    // Move focus to the next input field if text is entered
    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (nativeEvent, index) => {
    if (nativeEvent.key === 'Backspace') {
      if (verificationCode[index] === '' && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      {/* Add a semi-transparent overlay if modal is visible */}
      {visible && (
        <TouchableOpacity style={styles.overlay} onPress={onClose}>
          <View style={styles.overlay} />
        </TouchableOpacity>
      )}

      {/* Modal */}
      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Verify your Account</Text>
            <Text style={styles.modalSubtitle}>
              Enter 6 digits verification code we sent to example@gmail.com
            </Text>

            {/* Code Input */}
            <View style={styles.codeInputContainer}>
              {verificationCode.map((value, index) => (
                <TextInput
                  key={index}
                  ref={el => (inputRefs.current[index] = el)}
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

            {/* Resend Code Section */}
            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Code hasn’t arrived?</Text>
              <TouchableOpacity>
                <Text style={styles.resendLink}>Re-send Code</Text>
              </TouchableOpacity>
            </View>

            {/* Verify Button */}
            <TouchableOpacity style={styles.verifyButton} onPress={onClose}>
              <Text style={styles.verifyButtonText}>Verify</Text>
            </TouchableOpacity>

            {/* Or verify with Biometric */}
            <Text style={styles.orVerifyText}>Or verify with</Text>

            {/* Passcode/Biometric Button */}
            <TouchableOpacity
              style={styles.biometricButton}
              onPress={openPasscodeModal}>
              <Text style={styles.biometricText}>Passcode / Biometric</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent dark overlay
    zIndex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background effect
  },
  modalContent: {
    backgroundColor: 'rgba(36,36,39,255)',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 50,
  },
  modalTitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
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
  },
  codeInput: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(48,48,51,255)',
    borderRadius: 10,
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  resendText: {
    color: '#aaa',
    marginRight: 5,
  },
  resendLink: {
    color: '#007AFF',
  },
  verifyButton: {
    backgroundColor: 'rgba(0,119,237,255)',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  orVerifyText: {
    textAlign: 'center',
    color: '#aaa',
    marginBottom: 10,
  },
  biometricButton: {
    backgroundColor: 'rgba(48,48,51,255)',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  biometricText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default VerificationCodeModal;
