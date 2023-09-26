import { Avatar, Box, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FunctionComponent } from "react";

type MessageInput = {
  userName: string;
  time: string;
  message: string;
  color: string;
};
export const Message: FunctionComponent<MessageInput> = (
  input: MessageInput
) => {
  return (
    <>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        marginBottom="6px"
      >
        <Avatar sx={{ bgcolor: input.color, width: 24, height: 24 }}>
          <Typography variant="button">
            {input.userName.split("")[0]}
          </Typography>
        </Avatar>
        <Typography marginLeft="6px" variant="subtitle2">
          {input.userName}
        </Typography>
        <Typography marginLeft="12px" variant="body2" color={grey[500]}>
          {input.time}
        </Typography>
      </Stack>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        marginBottom="6px"
      >
        <Box
          textAlign="left"
          marginBottom="12px"
          paddingY="6px"
          marginRight="12px"
          sx={{
            borderRadius: "12px",
            backgroundColor: grey[100],
            width: 1,
          }}
        >
          <Typography marginLeft="12px" variant="body2">
            {input.message}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};
