import { FC } from "react";

import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";

dayjs.extend(calendar);

interface Props {
  type: "sent" | "received";
  text: string;
  date: number;
  previousDate: number;
}

export const MessageWrapper: FC<Props> = ({
  type,
  text,
  date,
  previousDate,
}: Props) => {
  const style =
    type === "sent"
      ? {
          borderRadius: "15px 15px 0px 15px",
          bgcolor: "primary.main",
          color: "text.primary",
          justifyContent: "flex-end",
        }
      : {
          borderRadius: "15px 15px 15px 0px",
          bgcolor: "secondary.main",
          color: "text.secondary",
          justifyContent: "flex-start",
        };

  const current = dayjs.unix(date);
  const previous = dayjs.unix(previousDate);
  const curretDateForDisplay = current.calendar();

  const diffSec = current.diff(previous, "second");
  const diffHour = current.diff(previous, "hour");

  let within20Sec: boolean = false;
  let within1Hour: boolean = false;

  if (diffSec <= 20) within20Sec = true;

  if (diffHour < 1) within1Hour = true;

  return (
    <>
      <Box>
        {!within1Hour && curretDateForDisplay !== "Invalid Date" && (
          <Typography
            mb={1}
            display="flex"
            justifyContent="center"
            variant="caption"
          >
            {curretDateForDisplay}
          </Typography>
        )}
      </Box>
      <Box
        display="flex"
        justifyContent={style.justifyContent}
        mt={within20Sec ? 0.2 : 1.7}
      >
        <Box display="flex" px={1.2} py={1} sx={style}>
          <Typography>{text}</Typography>
          {type === "sent" && (
            <Box ml={1}>
              <DoneAllIcon fontSize="small" color="secondary" />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
