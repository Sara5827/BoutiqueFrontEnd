import axios from "axios";

export const getCustomers = () => {
    
    return axios
      .get("http://localhost:8000/api/customers", {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  };
  