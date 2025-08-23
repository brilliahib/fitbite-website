import z from "zod";

export const caloriesSchema = z.object({
  name: z.string().max(100),
  portion: z.string().nullable().optional(),
  calories: z.number().min(0).max(10000),
});

export type CaloriesType = z.infer<typeof caloriesSchema>;
