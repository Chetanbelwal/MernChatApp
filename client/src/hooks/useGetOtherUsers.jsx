import { useEffect, useState } from "react";
import axios from "axios";
import { setOtherUsers } from "../store/userSlice";
import { useDispatch } from "react-redux";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true;
        setTimeout(async () => {
          const res = await axios.get(`${BASE_URL}/api/v1/user/getOtherUsers`);
          dispatch(setOtherUsers(res.data.otherUsers));
        }, 5000); // Delay for debugging
      } catch (error) {
        console.error("Error Fetching Other Users:", error.response || error);
      }
    };

    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
