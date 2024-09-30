import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const TermsOfUse = ({navigation}: any) => {
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[
          'rgba(23,25,28,255)',
          'rgba(23,25,28,255)',
          'rgba(23,25,28,255)',
        ]}
        start={{x: 0.0, y: 0.0}}
        end={{x: 1.0, y: 1.0}}
        style={styles.gradientBackground}>
        <View style={styles.container}>
          <StatusBar translucent backgroundColor="transparent" />

          {/* Custom Transparent Header */}
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Cashora Terms of Use</Text>
          </View>

          {/* Scrollable Terms Content */}
          <View style={styles.termsContainer}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <Text style={styles.termsHeader}>Terms of Use</Text>
              <Text style={styles.termsText}>
                1. Acceptance of Terms {'\n'}
                By using Cashora, you agree to our terms... {'\n\n'}
                2. Eligibility {'\n'}
                You must be at least 18 years old and capable of entering into a
                binding agreement... {'\n\n'}
                3. Account Registration {'\n'}
                You must create an account to use certain features of the app...{' '}
                {'\n\n'}
                4. Investment Risk {'\n'}
                Investing involves risks. Cashora does not guarantee any return
                on investments... {'\n\n'}
                5. Fees and Charges {'\n'}
                Some services might be subject to fees... {'\n\n'}
                6. Fees and Charges {'\n'}
                Some services might be subject to fees... {'\n\n'}
                7. Fees and Charges {'\n'}
                Some services might be subject to fees... {'\n\n'}
                7. Fees and Charges {'\n'}
                Some services might be subject to fees... {'\n\n'}
                7. Fees and Charges {'\n'}
                Some services might be subject to fees... {'\n\n'}
              </Text>
            </ScrollView>
          </View>

          {/* Bottom Section (Fixed Checkbox and Button) */}
          <View style={styles.bottomContainer}>
            <View style={styles.agreeContainer}>
              <TouchableOpacity
                style={[styles.radio, isAgreed && styles.radioSelected]}
                onPress={() => setIsAgreed(!isAgreed)}>
                {isAgreed && <View style={styles.radioInner} />}
              </TouchableOpacity>
              <Text style={styles.agreeText}>I agree to the Terms of Use</Text>
            </View>

            <TouchableOpacity
              style={[
                styles.continueButton,
                !isAgreed && styles.disabledButton,
              ]}
              onPress={() => navigation.navigate('register')}
              disabled={!isAgreed}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 50, // Adjust for status bar height
    paddingHorizontal: 20,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  termsContainer: {
    flex: 1, // Allows the ScrollView to take the remaining space
    marginTop: 120, // Push content below the transparent header
    backgroundColor: 'rgba(36,36,39,255)',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignSelf: 'center',
  },
  scrollContent: {
    paddingBottom: 10,
  },
  termsHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  termsText: {
    color: '#E5E5E5',
    fontSize: 16,
    lineHeight: 24,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  agreeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  agreeText: {
    color: '#fff',
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#555',
  },
});

export default TermsOfUse;
