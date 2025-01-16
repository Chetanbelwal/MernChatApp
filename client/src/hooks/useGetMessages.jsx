import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../store/messageSlice";

const useGetMessages = () => {
  
  const { selectedUser} = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser?._id) {
        console.error("No user ID available.");
        return;
      }
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/message/${selectedUser._id}`
        );
        console.log("API response received:", res);
        dispatch(setMessages(res.data))
      } catch (error) {
        console.error(
          "Error in API call:",
          error.response?.data || error.message || error
        );
      }
    };
    fetchMessages();
  }, [selectedUser?._id, setMessages]);
};

export default useGetMessages;
