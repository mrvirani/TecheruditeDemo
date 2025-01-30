import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import SocialButton from './SocialButton';

const SocialButtons = ({ onGoogleSignIn, onAppleSignIn, onFacebookSignIn }) => {
  return (
    <View style={styles.socialContainer}>
      <SocialButton
        iconSource={require('../../assets/Images/google.png')}
        onPress={onGoogleSignIn}
      />
      <SocialButton
        iconSource={require('../../assets/Images/apple.png')}
        onPress={onAppleSignIn}
      />
      <SocialButton
        iconSource={require('../../assets/Images/facebook.png')}
        onPress={onFacebookSignIn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  socialContainer: {
    marginTop: 32, 
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    marginHorizontal: 10, 
  },
  socialIcon: { 
    width: 30, 
    height: 30,
  },
});

export default SocialButtons;
