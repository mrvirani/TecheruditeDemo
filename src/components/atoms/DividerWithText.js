import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import matrics from '../../constants/matrics';

const DividerWithText = ({ text = 'or Sign In with:' , style}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default DividerWithText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#4F4F4F',
  },
  text: {
    marginHorizontal: matrics.s(4),
    color: '#4F4F4F',
    fontSize: 12,
    lineHeight: 14
  },
});
