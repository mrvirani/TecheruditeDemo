import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/routes/Navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';


export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={[style.commonContainer, style.successContainer]}
      text1Style={[style.successTxt, style.titleText]}
      text2Style={style.successTxt}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={[style.commonContainer, style.errorContainer,]}
      text1Style={[style.errorTxt, style.titleText]}
      text2Style={style.errorTxt}
    />
  ),
};


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
      <Toast config={toastConfig} />
    </Provider>
  );
};

export default App;


const style = StyleSheet.create({
  commonContainer: {
    marginVertical: 15,
  },
  successContainer: {
    borderLeftColor: 'green',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  titleText:{
    color: 'black',
    fontWeight:'bold'
  },
  successTxt: {
    color: 'gray',
  },
  errorContainer: {
    borderLeftColor: '#ff3333',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  errorTxt: {
    color: 'gray',
  },
});
