import { Close, Reply } from "@mui/icons-material";
import { Avatar, IconButton, Paper, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { brown, deepOrange } from "@mui/material/colors";
import { FunctionComponent, useState } from "react";
import { Message } from "./Message";

export const InputCard: FunctionComponent<{ onClose: () => void }> = ({
  onClose,
}) => {
  const [inputText, setInputText] = useState("");
  const [isReplied, setIsReplied] = useState(false);

  const handleInputChange = (e: { target: { value: string } }) => {
    setInputText(e.target.value);
  };

  const handleOnClick = () => {
    setIsReplied(true);
  };

  return (
    <Paper sx={{ width: "300px", paddingLeft: "12px", paddingBottom: "12px" }}>
      <Stack flexDirection="row" justifyContent="flex-end">
        <IconButton size="small" onClick={onClose}>
          <Close fontSize="inherit" />
        </IconButton>
      </Stack>
      <Message
        userName="Nancy Truman"
        time="1 hour ago"
        message="I'm a comment"
        color={deepOrange[500]}
      ></Message>
      {isReplied ? (
        <Message
          userName="Lily Collins"
          time="Just now"
          message={inputText}
          color={brown[500]}
        ></Message>
      ) : null}

      {isReplied ? null : (
        <>
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            marginBottom="6px"
          >
            <Avatar sx={{ bgcolor: brown[500], width: 24, height: 24 }}>
              <Typography variant="button">L</Typography>
            </Avatar>
            <Typography marginLeft="6px" variant="subtitle2">
              Lily Collins
            </Typography>
          </Stack>
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            marginBottom="6px"
          >
            <TextField
              multiline
              label="Reply"
              variant="filled"
              color="secondary"
              fullWidth
              value={inputText}
              onChange={handleInputChange}
            />
            <IconButton size="small" onClick={handleOnClick}>
              <Reply fontSize="inherit" />
            </IconButton>
          </Stack>
        </>
      )}
    </Paper>
  );
};
