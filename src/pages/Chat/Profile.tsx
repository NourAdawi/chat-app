import { FC } from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  avatar?: string;
  name?: string;
}

export const Profile: FC<Props> = ({ avatar, name }) => {
  return (
    <Box>
      <Typography>{name}</Typography>
      <img src={avatar} />
    </Box>
  );
};
