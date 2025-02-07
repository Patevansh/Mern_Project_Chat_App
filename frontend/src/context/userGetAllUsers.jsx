import { useEffect ,useState} from "react";
import Cookies from "js-cookie";
import axios from "axios";

function userGetAllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(async () => {
    const getUsers = async () => {
      setLoading(true);
    };
    try {
      const token = Cookies.get("jwt");
      const response = await axios.get(
        "http://localhost:3000/user/getUserProfile",
        {
          Credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers(response.data);
      setLoading(false);
    } catch(error) {
      console.log(error);
      setLoading(false);
    }
    getUsers();
  }, []);
  return [ users, loading ];
}
export default userGetAllUsers;
