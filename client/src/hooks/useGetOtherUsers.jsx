import { useEffect } from "react";
import axios from "axios";
import { setOtherUsers } from "../store/userSlice";
import { useDispatch } from "react-redux";  

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_BASE_URL
  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `${BASE_URL}/api/v1/user/getOtherUsers`
        );

        // console.log(res.data.otherUsers);
        dispatch(setOtherUsers(res.data.otherUsers));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
