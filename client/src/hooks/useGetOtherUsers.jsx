import { useEffect, useState } from "react";
import axios from "axios";
import { setOtherUsers } from "../store/userSlice";
import { useDispatch } from "react-redux";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(`${BASE_URL}/api/v1/user/getOtherUsers`);
        dispatch(setOtherUsers(res.data.otherUsers));
      } catch (error) {
        console.error("Error Fetching Other Users:", error.response || error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!isLoading) {
      fetchOtherUsers();
    }
  }, [isLoading]);
};

export default useGetOtherUsers;
