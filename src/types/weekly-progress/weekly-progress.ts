export interface WeeklyProgress {
  id: number;
  user_id: number;
  weight_start: number;
  weight_end: number;
  progress_percentage: number;
  created_at: Date;
  updated_at: Date;
}
