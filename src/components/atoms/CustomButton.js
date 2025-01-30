import {StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import matrics from '../../constants/matrics';

const CustomButton = ({title, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#21D393',
    borderRadius: 4,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: matrics.vs(10),
    paddingVertical: matrics.vs(8),
    paddingHorizontal: matrics.s(24)
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
