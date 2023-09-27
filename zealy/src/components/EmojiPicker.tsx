import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { IconButton } from "@mui/material";
import Popover from "@mui/material/Popover";
import { FunctionComponent } from "react";

export const EmojiPicker: FunctionComponent<{
  input: {
    anchorEl: HTMLElement | null;
    handleEmojiClick: (emoji: string) => void;
    handleClick: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    handleClose: () => void;
  };
}> = ({ input: { anchorEl, handleEmojiClick, handleClick, handleClose } }) => {
  const emojis = ["😀", "😂", "😍", "🥰", "😎", "😊", "🤩", "😇", "🤗", "🥳"];

  return (
    <div>
      <IconButton onClick={handleClick}>
        <EmojiEmotionsIcon />
      </IconButton>
      <Popover
        id="emoji-popover"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", padding: "8px" }}>
          {emojis.map((emoji) => (
            <span
              key={emoji}
              style={{ fontSize: "24px", margin: "4px", cursor: "pointer" }}
              onClick={() => handleEmojiClick(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
      </Popover>
    </div>
  );
};
