import { useCallback, useEffect, useRef, useState } from 'react';
import { type Message, type ConnectionStatus } from './types';

export const useWebSocketChat = (url: string) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const chatMessages = localStorage.getItem('chatMessages');
      return chatMessages ? JSON.parse(chatMessages) : [];
    } catch {
      return [];
    }
  });

  const [status, setStatus] = useState<ConnectionStatus>('Connecting');
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => setStatus('Connected');
    ws.onclose = () => setStatus('Disconnected');
    ws.onerror = (error: Event) => {
      console.error('Websocket error observed: ', error);
      setStatus('Disconnected');
    };

    ws.onmessage = (event: MessageEvent<string>) => {
      const newMessage: Message = {
        id: crypto.randomUUID(),
        text: event.data,
        sender: 'server',
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, newMessage]);
    };

    return () => ws.close();
  }, [url]);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const sendMessage = useCallback((text: string) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(text);

      const outgoingMessage: Message = {
        id: crypto.randomUUID(),
        text,
        sender: 'user',
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, outgoingMessage]);
    }
  }, []);

  const clearChat = useCallback(() => {
    setMessages([]);
    localStorage.removeItem('chatMessages');
  }, []);

  return { messages, status, sendMessage, clearChat };
};
