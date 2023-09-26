import { Close, Reply } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { brown, deepOrange, grey } from "@mui/material/colors";
import EmojiPicker from "./EmojiPicker";

export default function InputCard() {
  const existingMessageExample = (
    <>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        marginBottom="6px"
      >
        <Avatar sx={{ bgcolor: deepOrange[500], width: 24, height: 24 }}>
          <Typography variant="button">N</Typography>
        </Avatar>
        <Typography marginLeft="6px" variant="subtitle2">
          Nancy Truman
        </Typography>
        <Typography marginLeft="12px" variant="body2" color={grey[500]}>
          1 hour ago
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
          }}
        >
          <Typography marginLeft="12px" variant="body2">
            I'm a comment
          </Typography>
        </Box>
        <EmojiPicker />
      </Stack>
    </>
  );

  return (
    <Paper sx={{ width: "300px", paddingLeft: "12px", paddingBottom: "12px" }}>
      <Stack flexDirection="row" justifyContent="flex-end">
        <IconButton size="small">
          <Close fontSize="inherit" />
        </IconButton>
      </Stack>
      {existingMessageExample}
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
        />
        <IconButton size="small">
          <Reply fontSize="inherit" />
        </IconButton>
      </Stack>
    </Paper>
  );
}
