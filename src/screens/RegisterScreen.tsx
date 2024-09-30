import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
console.log('🚀 ~ Icon:', Icon);

const RegisterScreen = ({navigation}: any) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default country code

  const activeRoute =
    navigation.getState().routes[navigation.getState().index].name;

  const handleKeyPress = (key: string) => {
    if (key === '⌫') {
      setMobileNumber(mobileNumber.slice(0, -1)); // Remove last digit
    } else if (key === '+' && !mobileNumber.includes('+')) {
      setMobileNumber(mobileNumber + key); // Add plus only once
    } else if (mobileNumber.length < 15 && key !== '⌫') {
      setMobileNumber(mobileNumber + key); // Add the key if within limit
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StatusBar translucent backgroundColor="transparent" />

      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="rocket" size={30} color="#900" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create your Account</Text>
      </View>

      <Text style={styles.title}>Sign up to Cashora</Text>
      <Text style={styles.subtitle}>
        We may store and send a verification code to this mobile number.
      </Text>

      {/* Register Content */}
      <View style={styles.contentContainer}>
        <View style={styles.innerContent}>
          {/* Toggle for Login and Sign Up */}
          <View style={styles.toggleContainer}>
            <View style={styles.toggleBackground}>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  activeRoute === 'login'
                    ? styles.activeToggle
                    : styles.inactiveToggle,
                ]}
                onPress={() => navigation.navigate('login')}>
                <Text
                  style={[
                    styles.toggleText,
                    activeRoute === 'login' && styles.activeToggleText,
                  ]}>
                  Log in
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  activeRoute === 'register'
                    ? styles.activeToggle
                    : styles.inactiveToggle,
                ]}
                onPress={() => navigation.navigate('register')}>
                <Text
                  style={[
                    styles.toggleText,
                    activeRoute === 'register' && styles.activeToggleText,
                  ]}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Country and Mobile Number Input */}
          <View style={styles.formContainer}>
            <View style={styles.inputRow}>
              <TouchableOpacity style={styles.countryPicker}>
                <Text style={styles.countryText}>🇬🇧 {countryCode}</Text>
              </TouchableOpacity>
              <TextInput
                value={mobileNumber}
                placeholder="Enter mobile number"
                placeholderTextColor="#AAA"
                style={styles.mobileInput}
                editable={false} // Disable default keyboard
              />
            </View>

            {/* Register Button */}
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => console.log('Registering...')}>
              <Text style={styles.registerButtonText}>Sign up</Text>
            </TouchableOpacity>
          </View>

          {/* Custom Number Pad */}
          <View style={styles.keyboardContainer}>
            <View style={styles.keyboardRow}>
              {[1, 2, 3].map(num => (
                <TouchableOpacity
                  key={num}
                  style={styles.key}
                  onPress={() => handleKeyPress(num.toString())}>
                  <Text style={styles.keyText}>{num}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.keyboardRow}>
              {[4, 5, 6].map(num => (
                <TouchableOpacity
                  key={num}
                  style={styles.key}
                  onPress={() => handleKeyPress(num.toString())}>
                  <Text style={styles.keyText}>{num}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.keyboardRow}>
              {[7, 8, 9].map(num => (
                <TouchableOpacity
                  key={num}
                  style={styles.key}
                  onPress={() => handleKeyPress(num.toString())}>
                  <Text style={styles.keyText}>{num}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.keyboardRow}>
              <TouchableOpacity
                style={styles.key}
                onPress={() => handleKeyPress('+')}>
                <Text style={styles.keyText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.key}
                onPress={() => handleKeyPress('0')}>
                <Text style={styles.keyText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.key}
                onPress={() => handleKeyPress('⌫')}>
                <Text style={styles.keyText}>⌫</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(23,27,32,255)',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the header text
    paddingHorizontal: 20,
    paddingTop: 40,
    marginBottom: 20,
    marginTop: 20,
    position: 'relative', // Necessary for absolute positioning of the back icon
  },
  backButton: {
    position: 'absolute',
    left: 20, // Align the back button to the left
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Push content to the bottom
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  innerContent: {
    paddingTop: 30,
    backgroundColor: 'rgba(36,36,39,255)',
    borderRadius: 20,
  },
  toggleContainer: {
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 50, // Adjust the radius to make it more rounded
    backgroundColor: '#1E1E1F',
    paddingHorizontal: 20,
    padding: 10,
  },
  toggleBackground: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1C1C1E',
    borderRadius: 50, // Ensure the background of the toggle is rounded
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 50, // Ensure each button is rounded
  },
  activeToggle: {
    backgroundColor: 'rgba(48,48,51,255)',
  },
  inactiveToggle: {
    backgroundColor: 'transparent',
  },
  toggleText: {
    color: '#fff',
    fontSize: 16,
  },
  activeToggleText: {
    color: '#fff',
  },
  formContainer: {
    paddingHorizontal: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  countryPicker: {
    backgroundColor: 'rgba(48,48,51,255)',
    borderRadius: 50,
    padding: 15,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryText: {
    color: '#fff',
    marginLeft: 10,
  },
  mobileInput: {
    backgroundColor: 'rgba(48,48,51,255)',
    borderRadius: 50,
    padding: 15,
    color: '#fff',
    flex: 4,
  },
  registerButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  keyboardContainer: {
    backgroundColor: 'rgba(48,48,51,255)',
    paddingVertical: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingHorizontal: 10,
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  key: {
    backgroundColor: 'rgba(70,70,71,255)',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  keyText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default RegisterScreen;
