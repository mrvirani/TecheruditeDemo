import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import matrics from '../../constants/matrics';

const SocialButton = ({ iconSource, onPress, iconImage }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={iconSource} style={[styles.icon, iconImage]} />
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  button: {
    width: matrics.vs(40),
    height:  matrics.vs(40),
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 16,
    marginHorizontal: 8,    
    overflow:'hidden',
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
