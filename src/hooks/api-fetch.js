import AsyncStorage from "@react-native-async-storage/async-storage";

const apiFetch = async (params) => {
    const url = "http://10.0.2.2:8000/api/";
    if (!params) return;

    let user = await AsyncStorage.getItem("user");
    let { token } = await JSON.parse(user);

    const response = await fetch(url + params.endpoint, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        method: params.method,
        ...(params.method == "POST" && { body: JSON.stringify(params.body) })
    })

    const data = await response.json();

    return data;
};

export default apiFetch;