import { useEffect } from "react";
import axios from "axios";
import { setOtherUsers } from "../store/userSlice";
import { useDispatch } from "react-redux";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true; // Include cookies in requests
        const res = await axios.get(`${BASE_URL}/api/v1/user/getOtherUsers`);

        console.log("Response:", res.data); // Debugging logs
        dispatch(setOtherUsers(res.data.otherUsers));
      } catch (error) {
        console.error("Error Fetching Other Users:", error.response || error);
      }
    };

    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
