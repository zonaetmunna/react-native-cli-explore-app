import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LanguageModal from '../components/modal/LanguageModal';
import SafeAreaWrapper from '../components/common/SafeAreaWrapper';

const Welcome = ({navigation}) => {
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
  const [language, setLanguage] = useState('English');

  const handleLanguageSelect = lang => {
    setLanguage(lang);
    setLanguageModalVisible(false);
  };

  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        {/* Logo in the center of the screen */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')} // Replace with your logo path
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Bottom content */}
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Invest Smarter</Text>
            <Text style={styles.subtitle}>
              Welcome to Cashora – your simple path to growing wealth.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => navigation.navigate('TermsOfUse')}>
            <Text style={styles.getStartedText}>Get Start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.languageButton}
            onPress={() => setLanguageModalVisible(true)}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/48px-Flag_of_the_United_States.svg.png',
              }}
              style={styles.flagIcon}
            />
            <Text style={styles.languageText}>{language}</Text>
          </TouchableOpacity>
        </View>

        {/* Language Modal */}
        <LanguageModal
          isVisible={isLanguageModalVisible}
          onClose={() => setLanguageModalVisible(false)}
          onSelectLanguage={handleLanguageSelect}
          selectedLanguage={language}
        />
      </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  logoContainer: {
    flex: 1, // Ensure it takes up available space
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  textContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    width: '100%',
  },
  getStartedButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  getStartedText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 25,
    borderColor: '#444',
    borderWidth: 1,
    width: '100%',
  },
  languageText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  flagIcon: {
    width: 24,
    height: 24,
  },
});

export default Welcome;
