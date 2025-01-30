import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({name, subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Hello {name}!</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#0F0F0F',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 2,
    fontWeight: '400',
    lineHeight: 24,
  },
});
