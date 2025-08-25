import z from "zod";

export const mealPlanSchema = z.object({
  name: z.string().min(2).max(100),
  meal: z.string().max(500),
  gram: z.string().max(100),
  meal_date: z.string(),
  meal_time: z.string().max(100),
});

export type MealPlanType = z.infer<typeof mealPlanSchema>;
