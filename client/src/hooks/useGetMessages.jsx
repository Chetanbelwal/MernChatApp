import { useEffect } from "react";
import axios from "axios";

const useGetMessages = () => {
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // axios.defaults.withCredentials = true; is used because we should be authenticated first to Go ahead
        axios.defaults.withCredentials = true;    
        const res = await axios.get(
          `http://localhost:5000/api/v1/message/677ed58ac841ed30b0d1c867`
        );
        console.log(res.data.messages);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMessages();
  }, []);
};

export default useGetMessages;
