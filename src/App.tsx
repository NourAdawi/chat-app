import { ThemeProvider } from "@mui/material/styles";
import { FirebaseProvider } from "./services/firebaseContext";

import { MuzzTheme } from "./theme/MuzzTheme";
import { ChatWindow } from "./pages/Chat";
import Grid from "@mui/material/Grid";
import { Login } from "./pages/Login";
import { useAuth } from "./services/firebaseHook";
import "firebase/auth";
import { CssBaseline, useTheme } from "@mui/material";

function App() {
  const theme = useTheme();
  return (
    <FirebaseProvider>
      <ThemeProvider theme={MuzzTheme}>
        <CssBaseline />
        <Grid
          container
          bgcolor={theme.palette.grey[50]}
          sx={{
            width: { xs: "100%", md: "50%" },
            mx: { md: "auto" },
            display: "flex",
            justifyContent: "center",
          }}
          height="100vh"
        >
          <Content />
        </Grid>
      </ThemeProvider>
    </FirebaseProvider>
  );
}

function Content() {
  const { user } = useAuth();

  return <>{user ? <ChatWindow /> : <Login />}</>;
}

export default App;
