import Toast from 'react-native-toast-message';

export default function useToast(params) {
    return (
        Toast.show({
            type: params.type,
            text1: params.text1,
            text2: params.text2,
            visibilityTime: 2000,
            topOffset: 60
        })
    );
}