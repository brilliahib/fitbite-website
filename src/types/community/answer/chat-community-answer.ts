export interface ChatCommunityAnswer {
  id: number;
  user_id: number;
  community_chat_id: number;
  message: string;
  image: string;
  created_at: Date;
  updated_at: Date;
  user: {
    id: number;
    name: string;
  };
}
