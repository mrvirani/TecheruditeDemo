import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputText from '../../components/atoms/InputText';
import {validateEmail, validatePassword} from '../../utiles/utiles';
import matrics from '../../constants/matrics';
import CustomButton from '../../components/atoms/CustomButton';
import DividerWithText from '../../components/atoms/DividerWithText';
import {useLoginMutation} from '../../api/authApi';
import Navigation from '../../helper/Navigation';
import {showSuccessToast} from '../../configs/toastUtils';
import SocialButtons from '../../components/atoms/SocialButtons';

const Login = () => {
  const [email, setEmail] = useState('testpracticaluser001@mailinator.com');
  const [password, setPassword] = useState('Test@123');
  const [login, {isLoading, isSuccess, isError}] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const response = await login({email, password}).unwrap();
      if (response?.data?.token) {
        console.log('response?.data?.token', response?.data);
        Navigation.reset(0, [{name: 'BottomTab'}]);
        showSuccessToast('Successfully Login!!');
      }
    } catch (err) {
      showSuccessToast('Login failed!!');
    }
  };
  const handleForgot = () => {
    // navigation.navigate('ForgotPasswordScreen');
  };

  const handleGoogleSignIn = () => {
    showSuccessToast('Google Sign In added soon...');
  };

  const handleAppleSignIn = () => {
    showSuccessToast('Apple Sign In added soon...');
  };

  const handleFacebookSignIn = () => {
    showSuccessToast('Facebook Sign In added soon...');
  };

  const onPressGuest = () => {};

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0.3)" />
      <View style={styles.upperContainer}>
        <Text style={styles.titleApp}>Plie</Text>
        <Image
          source={require('../../assets/Images/gallery.png')}
          style={styles.image}
          resizeMode="contain"
          tintColor={'black'}
        />
      </View>
      <View style={styles.bottomContainer}>
        <InputText
          value={email}
          onChangeText={setEmail}
          placeholder="email@email.com"
          validation={validateEmail}
          titleText={'Email'}
          errorMessage="Invalid email address"
        />
        <InputText
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          validation={validatePassword}
          titleText={'Password'}
          errorMessage="Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character"
        />
        <Text style={styles.forgotPasswordText} onPress={handleForgot}>
          Forgot Password?
        </Text>

        <CustomButton
          title="Sign In"
          onPress={handleLogin}
          style={{alignSelf: 'flex-end'}}
        />

        <Text style={styles.staticText} onPress={handleForgot}>
          Not a member? <Text style={styles.signUpText}> Sign Up Here</Text>
        </Text>

        <DividerWithText style={styles.divider} />

        <SocialButtons
          onGoogleSignIn={handleGoogleSignIn}
          onAppleSignIn={handleAppleSignIn}
          onFacebookSignIn={handleFacebookSignIn}
        />
        <Text
          style={styles.guestText}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onPress={onPressGuest}>
          Enter as Guest
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleApp: {
    marginVertical: matrics.vs(30),
    fontSize: 36,
  },
  image: {
    width: matrics.vs(30),
    height: matrics.vs(30),
    marginBottom: matrics.vs(20),
  },
  bottomContainer: {
    backgroundColor: 'white',
    paddingTop: matrics.vs(20),
    paddingBottom: matrics.vs(40),
    paddingHorizontal: matrics.s(22),
  },
  forgotPasswordText: {
    color: '#828282',
    marginVertical: matrics.vs(8),
    alignSelf: 'flex-end',
    marginRight: matrics.s(8),
  },
  staticText: {
    color: '#000000',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    alignSelf: 'flex-end',
    marginTop: matrics.vs(4),
  },
  signUpText: {
    textDecorationLine: 'underline',
    fontWeight: '400',
  },

  divider: {
    marginTop: matrics.vs(40),
  },
  guestText: {
    color: '#828282',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: '14',
    position: 'absolute',
    bottom: 20,
    right: 22,
  },
});
