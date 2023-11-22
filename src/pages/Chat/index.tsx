import { ChangeEvent, FC, useState } from "react";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Grid from "@mui/material/Grid";
import { ChatRoom } from "./ChatRoom";
import { Profile } from "./Profile";

export const ChatWindow: FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("chat");

  const handleTabsChange = (
    _event: ChangeEvent<unknown>,
    value: string
  ): void => {
    setCurrentTab(value);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box boxShadow={3} flexDirection="column">
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="Chat" value="chat" sx={{ width: "50%" }} />
            <Tab label="Profile" value="profile" sx={{ width: "50%" }} />
          </Tabs>
        </Box>
        {currentTab === "chat" && (
          <Box mt={2} px={2} flex={1}>
            <ChatRoom />
          </Box>
        )}
        {currentTab === "profile" && <Profile />}
      </Grid>
    </Grid>
  );
};
