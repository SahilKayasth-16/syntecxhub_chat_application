import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getMessages = async (room) => {
    try {
        const response = await axios.get(`${API_URL}/${room}`);
        return response.data;
    } catch (error) {
        console.error("Error in fetching messages: ", error);
        return [];
    }
};