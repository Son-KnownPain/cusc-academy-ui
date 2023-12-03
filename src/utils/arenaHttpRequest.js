import axios from "axios";

const arenaHttpRequest = axios.create({
    baseURL: process.env.REACT_APP_ARENA_BASE_URL,
});

export const get = async (path, options) => {
    const response = await arenaHttpRequest.get(path, options);

    return response.data;
};

export default arenaHttpRequest;