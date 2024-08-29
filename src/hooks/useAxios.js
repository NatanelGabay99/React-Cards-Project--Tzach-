import { useEffect } from "react";
import { useCurrentUser } from "../users/providers/UserProvider";
import axios from "axios";

export default function useAxios() {
  // pulls the token from the currentUser context
  const { token } = useCurrentUser();

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = token;
  }, [token]);
}
