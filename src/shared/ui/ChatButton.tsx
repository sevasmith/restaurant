import { IconButton, SvgIcon } from '@mui/material';
import CommentWhiteIcon from '../../assets/icons/comment-white.svg?react';

export const ChatButton = ({
  isChatOpen,
  toggleChatOpen,
}: {
  isChatOpen: boolean;
  toggleChatOpen: () => void;
}) => {
  if (isChatOpen) return null;

  return (
    <IconButton
      onClick={toggleChatOpen}
      size="small"
      sx={{
        position: 'absolute',
        right: 15,
        bottom: 60,
        zIndex: 1000,
        width: 50,
        height: 50,
        borderRadius: '50%',
        color: 'primary.contrastText',
        backgroundColor: 'primary.light',
        border: 1,
        borderColor: 'grey.200',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
        opacity: 0.6,
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          opacity: 1,
          backgroundColor: 'primary.light',
          transform: 'scale(1.05)',
          boxShadow: '0px 6px 14px rgba(0, 0, 0, 0.2)',
        },
        '&:active': {
          transform: 'scale(0.95)',
        },
      }}
    >
      <SvgIcon component={CommentWhiteIcon} inheritViewBox />
    </IconButton>
  );
};
