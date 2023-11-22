import { FC } from "react";

import { Box, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useAuth } from "../../services/firebaseHook";

import login from "../../assets/2992779.jpg";

export const Login: FC = () => {
  const { loginWithGoogle } = useAuth();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <img height="auto" src={login} style={{ maxWidth: "80%" }} />
      <Box>
        <Button
          variant="contained"
          sx={{
            mb: 2,
            fontWeight: "400",
            ".MuiButton-startIcon": {
              mr: 1.2,
            },
          }}
          startIcon={<GoogleIcon />}
          onClick={loginWithGoogle}
        >
          Continue with Google
        </Button>
      </Box>
    </Box>
  );
};
