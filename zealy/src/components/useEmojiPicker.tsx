import { useState } from "react";

export const useEmojiPicker = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedEmoji, setSelectedEmoji] = useState<null | string>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEmojiClick = (emoji: string) => {
    setSelectedEmoji(emoji);
    handleClose();
  };

  console.log(selectedEmoji);

  return {
    selectedEmoji,
    handleEmojiClick,
    anchorEl,
    handleClick,
    handleClose,
  };
};
