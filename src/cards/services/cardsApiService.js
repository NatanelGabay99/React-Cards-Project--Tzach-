import axios from "axios";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";

export const getCards = async () => {
  try {
    const response = await axios.get(`${apiUrl}/cards`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getMyCards = async () => {
  console.log("get my cards");
  try {
    const response = await axios.get(`${apiUrl}/cards/my-cards`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteCard = async (cardId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getCard = async (cardId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const createCard = async (card) => {
  try {
    const { data } = await axios.post(`${apiUrl}/cards`, card);
    return data;
  } catch (error) {
    if (error.response) {
      console.error("Error response from server:");
      console.error("Status Code:", error.response.status);
      console.error("Status Text:", error.response.statusText); 
      console.error("Headers:", error.response.headers); 
      console.error("Data:", error.response.data); 
      return Promise.reject(
        `Error ${error.response.status}: ${error.response.statusText} - ${error.response.data}`
      );
    } else if (error.request) {
      console.error("No response received from server:");
      console.error("Request Data:", error.request);
      return Promise.reject("No response received from server.");
    } else {
      console.error("Error setting up request:", error.message);
      return Promise.reject(`Request setup error: ${error.message}`);
    }
  }
};

/* export const createCard = async (card) => {
  try {
    const { data } = await axios.post(`${apiUrl}/cards`, card);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
 */

export const editCard = async (cardId, normalaizedCard) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/cards/${cardId}`,
      normalaizedCard
    );
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const changeLikeStatus = async (cardId) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};