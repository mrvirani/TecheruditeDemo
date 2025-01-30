import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import matrics from '../../constants/matrics';

const InputText = ({
  value,
  onChangeText,
  placeholder,
  validation = () => true,
  errorMessage = 'Invalid input',
  titleText,
  inputContainer,
  ...props
}) => {
  const [validationMessage, setValidationMessage] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = text => {
    onChangeText(text);
    setIsValid(validation(text));
  };

  return (
    <View style={[styles.inputContainer]}>
      <Text style={styles.titleText}>{titleText}</Text>
      <TextInput
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder}
        placeholderTextColor="gray"
        style={[styles.input,inputContainer, !isValid && styles.errorInput]}
        {...props}
      />
      {!isValid && (
        <Text style={styles.errorText}>
          {validationMessage || errorMessage}
        </Text>
      )}
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputContainer: {},
  titleText:{
    marginVertical: matrics.vs(4),
    lineHeight: matrics.vs(24),
    color: '#333333'
  },
  input: {
    paddingVertical: matrics.vs(12),
    paddingHorizontal: matrics.s(16),
    borderRadius: 10,
    backgroundColor: 'white',
    elevation:20,
    color:"black"
  },
  errorInput: {
    // borderColor: Colors.error_toast,
  },
  errorText: {
    // color: Colors.error_toast,
    fontSize: 12,
    marginTop: 4,
  },
});
