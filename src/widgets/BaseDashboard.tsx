import { Stack } from '@mui/material';
import { Outlet } from '@tanstack/react-router';
import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { Header } from './Header';
import { ChatButton } from '../shared/ui/ChatButton';
import { ChatWidget } from './ChatWidget';

export interface BaseDAshboardProps {
  sidebar: ReactNode;
}

export const BaseDashboard = ({ sidebar }: BaseDAshboardProps) => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(() => {
    try {
      const isChatOpen = localStorage.getItem('isChatOpen');
      return isChatOpen ? JSON.parse(isChatOpen) : false;
    } catch {
      return false;
    }
  });

  const toggleChatOpen = useCallback(() => {
    setIsChatOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    localStorage.setItem('isChatOpen', JSON.stringify(isChatOpen));
  }, [isChatOpen]);

  return (
    <Stack direction={'row'} sx={{ flex: 1, overflow: 'hidden' }}>
      {sidebar}
      <Stack spacing={1} sx={{ flex: '1 1 auto', padding: 3, position: 'relative' }}>
        <Header></Header>
        <Outlet />
        <ChatButton isChatOpen={isChatOpen} toggleChatOpen={toggleChatOpen} />
        <ChatWidget isChatOpen={isChatOpen} toggleChatOpen={toggleChatOpen} />
      </Stack>
    </Stack>
  );
};
