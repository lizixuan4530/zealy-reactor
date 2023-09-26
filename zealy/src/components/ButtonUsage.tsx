import { Avatar, Badge, IconButton, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
import { InputCard } from "./InputCard";

export default function ButtonUsage() {
  const [isInputPaperOpen, setIsInputPaperOpen] = useState(false);
  const handleOnClick = () => {
    setIsInputPaperOpen(!isInputPaperOpen);
  };
  const handleOnClose = () => {
    setIsInputPaperOpen(false);
  };
  return (
    <>
      <IconButton color="secondary" onClick={handleOnClick}>
        <Badge color="secondary" overlap="circular" badgeContent={1}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>
            <Typography variant="h5">N</Typography>
          </Avatar>
        </Badge>
      </IconButton>
      {isInputPaperOpen ? <InputCard onClose={handleOnClose} /> : null}
    </>
  );
}
