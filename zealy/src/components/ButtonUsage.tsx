import { Avatar, Badge, IconButton, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function ButtonUsage() {
  return (
    <IconButton color="secondary">
      <Badge color="secondary" overlap="circular" badgeContent={1}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>
          <Typography variant="h5">N</Typography>
        </Avatar>
      </Badge>
    </IconButton>
  );
}
