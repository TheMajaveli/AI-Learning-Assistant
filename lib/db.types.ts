export type MessageRole = 'user' | 'assistant' | 'system';

export interface Message {
  id: string;
  conversation_id: string;
  role: MessageRole;
  content: string;
  tool_calls?: ToolCall[];
  created_at: string;
}

export interface ToolCall {
  id: string;
  name: string;
  arguments: Record<string, any>;
  result?: any;
}

export type MemoryType = 'preference' | 'objectif' | 'connaissance' | 'autre';

export interface Memory {
  id: string;
  user_id: string;
  content: string;
  type: MemoryType;
  created_at: string;
}

export interface Conversation {
  id: string;
  user_id: string;
  title?: string;
  created_at: string;
  updated_at: string;
}

export type QuizDifficulty = 'easy' | 'medium' | 'hard';

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correct_answer: number;
  explanation?: string;
  subject: string;
  difficulty: QuizDifficulty;
}

