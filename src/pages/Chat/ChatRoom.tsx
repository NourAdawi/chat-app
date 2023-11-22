import { FC, useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";

import { Box, IconButton, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

import { useRef } from "react";
import { useAuth, useDatabase } from "../../services/firebaseHook";
import { MessageWrapper } from "../../components/MessageWrapper";

export const ChatRoom: FC = () => {
  const dummy = useRef<any>();
  const theme = useTheme();

  const { user } = useAuth();
  const { messages, writeMessage } = useDatabase();

  const [newMessage, setNewMessage] = useState<string>("");

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e: any) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    writeMessage(newMessage);
    setNewMessage("");
  };

  return (
    <>
      <Box
        height="78vh"
        overflow="auto"
        sx={{
          "&::-webkit-scrollbar": {
            width: "0.3em",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#f5f6f7",
            borderRadius: "20px",
          },
        }}
      >
        {messages.map((message, i) => (
          <Box key={i}>
            <MessageWrapper
              type={message.uid === user?.uid ? "sent" : "received"}
              text={message.text}
              date={(message?.createdAt as Timestamp)?.seconds}
              previousDate={(messages[i - 1]?.createdAt as Timestamp)?.seconds}
            />
          </Box>
        ))}
        <span ref={dummy}></span>
      </Box>
      <Box width="100%" my={2}>
        <form style={{ display: "flex", alignItems: "center" }}>
          <TextField
            value={newMessage}
            variant="outlined"
            type="text"
            placeholder="Type a message..."
            fullWidth
            onChange={(e) => setNewMessage(e.target.value)}
            sx={{
              input: {
                color: theme.palette.grey[700],
              },
            }}
            InputProps={{
              sx: { borderRadius: 20, bgcolor: theme.palette.common.white },
            }}
          />
          <IconButton
            onClick={(e) => {
              sendMessage(e);
            }}
            type="submit"
          >
            <SendIcon fontSize="medium" />
          </IconButton>
        </form>
      </Box>
    </>
  );
};
