import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';

const LanguageModal = ({
  isVisible,
  onClose,
  onSelectLanguage,
  selectedLanguage,
}: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalPosition] = useState(new Animated.Value(300)); // Initial height (for bottom modal)
  const [isSearchFocused, setSearchFocused] = useState(false); // State to track search input focus
  const screenHeight = Dimensions.get('window').height;

  const languages = [
    'English',
    'Spanish',
    'Russian',
    'Portuguese',
    'French',
    'Arabic',
    'Bengali',
    'Dutch',
    'German',
    'Hindi',
    'Italian',
  ];

  const handleSearchInputFocus = () => {
    setSearchFocused(true);
    Animated.timing(modalPosition, {
      toValue: screenHeight - 50, // Animate to cover more of the screen
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleSearchInputBlur = () => {
    setSearchFocused(false);
    if (!searchQuery) {
      Animated.timing(modalPosition, {
        toValue: 300, // Animate back to original position when search input is empty
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.modalContent, {height: modalPosition}]}>
          {!isSearchFocused && (
            <Text style={styles.modalTitle}>Choose Language</Text>
          )}

          {/* Search Input */}
          <View
            style={[
              styles.searchContainer,
              isSearchFocused ? styles.focusedSearchContainer : null,
            ]}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search your language"
              placeholderTextColor="#aaa"
              value={searchQuery}
              onFocus={handleSearchInputFocus}
              onBlur={handleSearchInputBlur}
              onChangeText={text => setSearchQuery(text)}
            />
          </View>

          {/* Language List */}
          <ScrollView>
            {languages
              .filter(lang =>
                lang.toLowerCase().includes(searchQuery.toLowerCase()),
              )
              .map(lang => (
                <TouchableOpacity
                  key={lang}
                  style={[
                    styles.languageOption,
                    selectedLanguage === lang && styles.languageSelected,
                  ]}
                  onPress={() => onSelectLanguage(lang)}>
                  <Text style={styles.languageOptionText}>{lang}</Text>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </Animated.View>
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
    width: '100%',
    backgroundColor: '#222',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    alignSelf: 'center',
  },
  searchContainer: {
    position: 'absolute',
    top: -60,
    right: 20,
    width: 160,
    zIndex: 1,
    backgroundColor: '#333',
    borderRadius: 50,
  },
  focusedSearchContainer: {
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    padding: 10,
  },
  searchInput: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 50,
  },
  languageOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#444',
    borderRadius: 20,
  },
  languageSelected: {
    backgroundColor: '#333',
    borderColor: '#007AFF',
  },
  languageOptionText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LanguageModal;
