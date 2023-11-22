import { useContext } from "react";
import { FirebaseContext } from "./firebaseContext";

export const useAuth = () => {
  const authContext = useContext(FirebaseContext);

  if (!authContext) {
    throw new Error("FirebaseContext not found");
  }

  const { user, loginWithGoogle, logout } = authContext;
  return {
    user,
    loginWithGoogle,
    logout,
  };
};

export const useDatabase = () => {
  const dbContext = useContext(FirebaseContext);

  if (!dbContext) {
    throw new Error("FirebaseContext not found");
  }

  const { messages, writeMessage } = dbContext;
  return { messages, writeMessage };
};
