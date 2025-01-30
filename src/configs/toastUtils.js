import Toast from 'react-native-toast-message';

export const showSuccessToast = (message) => {
    Toast.show({
        type: 'success',
        text1: 'Success',
        text2: message || 'Operation was successful!',
    });
};

export const showErrorToast = (message) => {
    Toast.show({
        type: 'error',
        text1: 'Error',
        text2: message || 'Something went wrong!',
    });
};
