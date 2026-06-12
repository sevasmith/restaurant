import { Box, Drawer, Stack } from '@mui/material';
import { Outlet } from '@tanstack/react-router';
import {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { ChatButton } from '../../../shared/ui/ChatButton';
import { ChatWidget } from '../../chat-widget/ui/ChatWidget';
import { Header } from '../../header/ui/Header';

export interface BaseDAshboardProps {
  sidebar: ReactNode;
}

interface SidebarProps {
  onClose?: () => void;
}

export const BaseDashboard = ({ sidebar }: BaseDAshboardProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

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
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>{sidebar}</Box>
      <Drawer
        variant="temporary"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 260 },
        }}
      >
        {isValidElement<SidebarProps>(sidebar)
          ? cloneElement(sidebar, { onClose: toggleMobileMenu })
          : sidebar}
      </Drawer>
      <Stack
        spacing={1}
        sx={{
          flex: '1 1 auto',
          padding: { xs: 2, sm: 3 },
          position: 'relative',
          overflowY: 'auto',
        }}
      >
        <Header onMenuClick={toggleMobileMenu} />
        <Outlet />
        <ChatButton isChatOpen={isChatOpen} toggleChatOpen={toggleChatOpen} />
        <ChatWidget isChatOpen={isChatOpen} toggleChatOpen={toggleChatOpen} />
      </Stack>
    </Stack>
  );
};
