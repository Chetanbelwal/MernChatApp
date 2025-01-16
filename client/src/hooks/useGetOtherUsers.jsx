import { useEffect } from "react";
import axios from "axios";
import { setOtherUsers } from "../store/userSlice";
import { useDispatch } from "react-redux";  

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:5000/api/v1/user/getOtherUsers`
        );

        console.log(res.data.otherUsers);
        dispatch(setOtherUsers(res.data.otherUsers));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
