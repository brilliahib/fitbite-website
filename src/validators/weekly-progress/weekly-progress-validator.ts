import z from "zod";

export const weeklyProgressSchema = z.object({
  weight_end: z.number().min(0),
});

export type WeeklyProgressType = z.infer<typeof weeklyProgressSchema>;
