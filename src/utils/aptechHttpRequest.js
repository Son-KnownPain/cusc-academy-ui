import axios from "axios";

const aptechHttpRequest = axios.create({
    baseURL: process.env.REACT_APP_APTECH_BASE_URL,
});

export const get = async (path, options) => {
    const response = await aptechHttpRequest.get(path, options);

    return response.data;
};

export default aptechHttpRequest;