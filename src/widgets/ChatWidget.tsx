import { Box, Button, IconButton, Paper, Stack, TextField } from '@mui/material';
import { getRouteApi, useNavigate } from '@tanstack/react-router';
import { useWebSocketChat } from '../entities/message/model/useWebSocketChat';
import { useEffect, useRef, useState, type SubmitEvent } from 'react';
import DeleteIcon from '../assets/icons/delete.svg?react';
import SendIcon from '@mui/icons-material/Send';

const WS_URL = 'wss://ws.ifelse.io';

export const ChatWidget = () => {
  const routeApi = getRouteApi('/_authenticated');
  const { chat } = routeApi.useSearch();
  const navigate = useNavigate();

  const { messages, status, sendMessage, clearChat } = useWebSocketChat(WS_URL);
  const [inputValue, setInputValue] = useState<string>('');
  const isConnected = status === 'Connected';

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e: SubmitEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  if (!chat || chat !== 'open') return null;

  return (
    <Paper
      elevation={6}
      sx={{
        position: 'absolute',
        right: 25,
        bottom: 25,
        width: 300,
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: 5,
      }}
    >
      <Stack
        direction={'row'}
        sx={{
          padding: 2,
          paddingBottom: 1.5,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Button
          onClick={clearChat}
          sx={{
            fontSize: 14,
            fontWeight: 400,
            textTransform: 'none',
            border: '1px solid',
            borderRadius: 8,
            lineHeight: '14px',
          }}
        >
          Clear chat
        </Button>
        <IconButton
          size="small"
          onClick={() => navigate({ search: { chat: undefined } })}
          sx={{ padding: 0, display: 'flex', '&:hover': { opacity: 0.8 } }}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
      <Box
        sx={{
          flex: 1,
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          backgroundColor: 'common.white',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {messages.map((msg) => {
          if (msg.sender === 'server' && msg.text.startsWith('Request served by')) return null;

          const isUser = msg.sender === 'user';

          return (
            <Box
              key={msg.id}
              sx={{
                alignSelf: isUser ? 'flex-end' : 'flex-start',
                maxWidth: '75%',
                fontSize: 14,
                px: 1.5,
                py: 1,
                borderRadius: isUser ? '16px 16px 0px 16px' : '16px 16px 16px 0px',
                bgcolor: isUser ? 'primary.main' : 'grey.300',
                color: isUser ? 'primary.contrastText' : 'text.primary',
                whiteSpace: 'pre-wrap',
                overflowWrap: 'break-word',
              }}
            >
              {msg.text}
            </Box>
          );
        })}
        <div ref={messagesEndRef}></div>
      </Box>

      <Stack
        component={'form'}
        direction={'row'}
        onSubmit={handleSend}
        sx={{
          padding: 1.5,
          borderTop: 1,
          borderColor: 'divider',
          display: 'flex',
          gap: 1,
          bgcolor: 'background.paper',
        }}
      >
        <TextField
          multiline
          maxRows={4}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              if (inputValue.trim()) {
                sendMessage(inputValue);
                setInputValue('');
              }
            }
          }}
          fullWidth
          size="small"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          disabled={!isConnected}
          sx={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '& .MuiInputBase-input::placeholder': {
              fontSize: '14px',
            },
            '& fieldset': {
              fontSize: '10px',
              border: 'none',
              borderRadius: 0,
              height: 36,
            },
          }}
        />

        <IconButton type="submit" disabled={!isConnected || !inputValue.trim()}>
          <SendIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
};
