import { createContext, useReducer, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  
  const getUser = async () => {
    setIsAuthLoading(true);
    try {
      const userDetails = await window.catalyst.auth.isUserAuthenticated();
      userDetails?.content ? loginUser(userDetails.content) : logoutUser();
    } catch (err) {
      console.log(err);
      logoutUser();
    } finally {
      setIsAuthLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loginUser = (user) => dispatch({ type: "LOGIN", payload: user });
  const logoutUser = () => dispatch({ type: "LOGOUT" });
  const getUserDetails = () => state;

  const value = { loginUser, logoutUser, getUserDetails, isAuthLoading };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
export { UserProvider, useUser };
