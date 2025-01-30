import { Dimensions, Platform, StatusBar } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const window = Dimensions.get('window');

const screenHeight = window.height;

const screenWidth = window.width;

const baselineHeight = screenHeight == 812 ? 800 : 680;

const X_WIDTH = 812;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 896;
const XSMAX_HEIGHT = 896;
const isIPhoneX = () =>
    Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV
        ? screenWidth >= X_WIDTH ||
        screenHeight >= X_HEIGHT ||
        screenWidth >= XSMAX_WIDTH ||
        screenHeight >= XSMAX_HEIGHT
        : false;

// Scales the item based on the screen height and baselineHeight
const scale = (value) => Math.round((screenHeight / baselineHeight) * value);
const statusBarHeight = Platform.select({
    ios: isIPhoneX() ? 44 : 20,
    android: StatusBar.currentHeight,
    default: 0,
});

export default {
    screenHeight: screenWidth < screenHeight ? screenHeight : screenWidth,
    screenWidth: screenWidth < screenHeight ? screenWidth : screenHeight,
    statusBarHeight,
    isIPhoneX,
    s, //Width
    vs, //Height
    ms,
    mvs, //Font size
    scale,
};