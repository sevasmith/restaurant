export interface Message {
  id: string;
  text: string;
  timestamp: number;
  sender: 'user' | 'server';
}

export type ConnectionStatus = 'Connecting' | 'Connected' | 'Disconnected';
