export interface Calories {
  id: number;
  user_id: number;
  name: string;
  portion: string | null;
  calories: number;
  created_at: Date;
  updated_at: Date;
}
