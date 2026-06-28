import React from "react";
import axios from "axios";

const API_URL = "http://localhost:5001/api/messages";

export const getMessages = async (room) => {
    try {
        const response = await axios.get(`${API_URL}/${room}`);
        return response.data;
    } catch (error) {
        console.error("Error in fetching messages: ", error);
        return [];
    }
};

