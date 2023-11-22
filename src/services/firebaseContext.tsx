import "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  Timestamp,
  addDoc,
  serverTimestamp,
  FieldValue,
  DocumentData,
} from "firebase/firestore";

import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export interface Message {
  text: string;
  uid: string;
  createdAt: Timestamp | FieldValue;
  name?: string | null;
  avatar?: string | null;
}

export const FirebaseContext = React.createContext<{
  user: User | null;
  loginWithGoogle: () => Promise<User>;
  logout: () => void;
  authError: string | null;
  messages: Record<string, any>[];
  writeMessage: (text: string) => void;
} | null>(null);

const googleAuthProvider = new GoogleAuthProvider();

export const FirebaseProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const [messages, setMessages] = useState<Record<string, any>[]>([]);

  const getMessages = (
    setMessages: Dispatch<SetStateAction<DocumentData[]>>
  ) => {
    const messagesCol = collection(db, "messages");
    const q = query(messagesCol, orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesList = querySnapshot.docs.map((doc) => doc.data());
      setMessages(messagesList);
    });

    return unsubscribe;
  };

  useEffect(() => {
    const unsubscribe = getMessages(setMessages);
    return () => {
      unsubscribe();
    };
  }, []);

  const writeMessage = async (text: string) => {
    if (!user) return;
    const newMessage: Message = {
      text: text,
      uid: user.uid,
      createdAt: serverTimestamp(),
      name: user.displayName,
      avatar: user.photoURL,
    };
    await addDoc(collection(db, "messages"), newMessage);
  };

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
    setLoading(false);
  }, []);

  const loginWithGoogle = async () => {
    try {
      const cred = await signInWithPopup(auth, googleAuthProvider);
      if (cred) {
        window.localStorage.setItem("auth", "true");
        return cred.user;
      } else {
        throw new Error("User not found");
      }
    } catch (err: any) {
      setAuthError(err.message);
      throw err;
    }
  };

  const logout = () => {
    auth.signOut();
    localStorage.setItem("auth", "false");
  };

  if (loading) {
    return <>Loading...</>;
  }
  return (
    <FirebaseContext.Provider
      value={{
        user,
        loginWithGoogle,
        logout,
        authError,
        messages,
        writeMessage,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
