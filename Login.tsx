import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import VerificationCodeModal from './src/components/modal/VerificationCodeModal';
import PasscodeModal from './src/components/modal/PasscodeModal';
import ForgotPasswordModal from './src/components/modal/forgotPassword/ForgotPasswordModal';
import ForgotVerificationCodeModal from './src/components/modal/forgotPassword/ForgotVerificationCodeModal';
import ForgotResetPasswordModal from './src/components/modal/forgotPassword/ForgotResetPasswordModal';
import ForgotResetSuccessModal from './src/components/modal/forgotPassword/ForgotResetSuccessModal';
import ForgotPasscodeModal from './src/components/modal/passcode/ForgotPasscodeModal';
import ResetPasscodeVerificationModal from './src/components/modal/passcode/ResetPasscodeVerificationModal';
import ResetPasscodeNewPasscodeModal from './src/components/modal/passcode/ResetPasscodeNewPasscodeModal';
import ResetPasscodeConfirmPasscodeModal from './src/components/modal/passcode/ResetPasscodeConfirmPasscodeModal';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMe, setIsRememberMe] = useState(false);

  // verify related modal
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showPasscodeModal, setShowPasscodeModal] = useState(false);
  const [showForgotPasscodeModal, setShowForgotPasscodeModal] = useState(false);
  const [showResetPasscodeVerifyModal, setShowResetPasscodeVerifyModal] =
    useState(false);
  const [
    showResetPasscodeNewPasscodeModal,
    setShowResetPasscodeNewPasscodeModal,
  ] = useState(false);
  const [showResetPasscodeConfirmModal, setShowResetPasscodeConfirmModal] =
    useState(false);
  console.log(
    '🚀 ~ Login ~ showResetPasscodeConfirmModal:',
    showResetPasscodeConfirmModal,
  );

  // forgot related modal
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showForgotVerifyModal, setShowForgotVerifyModal] = useState(false);
  const [showForgotResetPasswordModal, setShowForgotResetPasswordModal] =
    useState(false);
  const [showForgotResetSuccessModal, setShowForgotResetSuccessModal] =
    useState(false);

  // Get the current route name to highlight the active toggle
  const activeRoute =
    navigation.getState().routes[navigation.getState().index].name;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Text style={styles.iconText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Get Started</Text>
      </View>

      <Text style={styles.title}>Get Started with us!</Text>
      <Text style={styles.subtitle}>
        Sign in or create an account to begin your journey toward smarter
        investing.
      </Text>

      {/* Login Content */}
      <View style={styles.loginContainer}>
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

        {/* Email Input */}
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email address"
          placeholderTextColor="#AAA"
          style={styles.input}
        />

        {/* Password Input */}
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          placeholderTextColor="#AAA"
          secureTextEntry
          style={styles.input}
        />

        {/* Remember Me and Forgot Password */}
        <View style={styles.rememberContainer}>
          <TouchableOpacity style={styles.checkboxContainer}>
            <TouchableOpacity
              onPress={() => setIsRememberMe(!isRememberMe)}
              style={[
                styles.radioButton,
                isRememberMe && styles.radioButtonSelected,
              ]}>
              {isRememberMe && <View style={styles.radioButtonInner} />}
            </TouchableOpacity>
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setShowForgotPasswordModal(true)}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Log in Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => setShowVerifyModal(true)}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

        {/* Or login with */}
        <Text style={styles.orText}>Or login with</Text>
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* passCode Verification Modal */}
        <VerificationCodeModal
          visible={showVerifyModal}
          onClose={() => setShowVerifyModal(false)}
          openPasscodeModal={() => {
            setShowVerifyModal(false);
            setShowPasscodeModal(true);
          }}
        />
        <PasscodeModal
          visible={showPasscodeModal}
          onClose={() => setShowPasscodeModal(false)}
          openForgotPasscodeModal={() => {
            setShowPasscodeModal(false);
            setShowForgotPasscodeModal(true);
          }}
        />
        <ForgotPasscodeModal
          visible={showForgotPasscodeModal}
          onClose={() => {
            setShowForgotPasscodeModal(false);
            setShowResetPasscodeVerifyModal(true);
          }}
        />
        <ResetPasscodeVerificationModal
          visible={showResetPasscodeVerifyModal}
          onClose={() => {
            setShowResetPasscodeVerifyModal(false);
            setShowResetPasscodeNewPasscodeModal(true);
          }}
        />
        <ResetPasscodeNewPasscodeModal
          visible={showResetPasscodeNewPasscodeModal}
          onClose={() => {
            setShowResetPasscodeNewPasscodeModal(false);
            // setShowResetPasscodeConfirmModal(true);
          }}
        />
        {showResetPasscodeConfirmModal === true && (
          <ResetPasscodeConfirmPasscodeModal
            visible={showResetPasscodeConfirmModal}
            onClose={() => setShowResetPasscodeConfirmModal(false)}
            setShowResetPasscodeConfirmModal={setShowResetPasscodeConfirmModal}
            navigation={navigation}
          />
        )}

        {/* Forgot Password Modal */}
        <ForgotPasswordModal
          visible={showForgotPasswordModal}
          onClose={() => setShowForgotPasswordModal(false)}
          openVerifyModal={() => {
            setShowForgotPasswordModal(false);
            setShowForgotVerifyModal(true);
          }}
        />
        <ForgotVerificationCodeModal
          visible={showForgotVerifyModal}
          onClose={() => {
            setShowForgotVerifyModal(false);
            setShowForgotResetPasswordModal(true);
          }}
        />
        <ForgotResetPasswordModal
          visible={showForgotResetPasswordModal}
          onClose={() => {
            setShowForgotResetPasswordModal(false);
            setShowForgotResetSuccessModal(true);
          }}
        />
        <ForgotResetSuccessModal
          visible={showForgotResetSuccessModal}
          onClose={() => setShowForgotResetSuccessModal(false)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(23,27,32,255)',
    paddingTop: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  iconText: {
    fontSize: 18,
    color: '#fff',
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
    marginTop: 10,
  },
  loginContainer: {
    flexGrow: 1, // Allows the content to grow and fill the available space
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(36,36,39,255)',
    paddingTop: 30,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: 20,
  },

  toggleContainer: {
    marginBottom: 20,
    borderRadius: 50,
    backgroundColor: 'rgba(22,22,23,255)',
    padding: 10,
  },
  toggleBackground: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(22,22,23,255)',
    borderRadius: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 50,
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
  input: {
    backgroundColor: 'rgba(48,48,51,255)',
    borderRadius: 50,
    paddingHorizontal: 25,
    paddingVertical: 15,
    color: '#fff',
    marginBottom: 20,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  rememberText: {
    color: '#aaa',
  },
  forgotText: {
    color: '#007AFF',
    textAlign: 'right',
  },
  loginButton: {
    backgroundColor: 'rgba(0,119,237,255)',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  orText: {
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 10,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#333',
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  socialText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Login;
