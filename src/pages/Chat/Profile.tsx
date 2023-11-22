import { FC } from "react";
import { Box, Typography } from "@mui/material";

import user from "../../assets/user.png";
interface Props {
  avatar?: string;
  name?: string;
}

export const Profile: FC<Props> = ({ avatar, name }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt={3}
    >
      <Typography variant="h3">{name ?? "Coming soon!"}</Typography>
      {avatar ? (
        <img src={avatar} />
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center">
          <img alt="logo" src={user} />
        </Box>
      )}
    </Box>
  );
};
