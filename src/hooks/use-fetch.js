import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

const useFetch = (params) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    const url = "http://10.0.2.2:8000/api/";

    useEffect(() => {
        if (!params) return;

        const fetchData = async () => {
            setStatus('loading');

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
            setData(data);
            setStatus('loaded');
        };

        fetchData();
    }, []);

    return { status, data };
};

export default useFetch;