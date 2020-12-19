const { ToastAndroid } = require("react-native");

export default function useToast(text) {
    return (
        ToastAndroid.showWithGravityAndOffset(
            text,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            0,
            300
        )
    );
}