import z from "zod";

export const personalInformationSchema = z.object({
  age: z.number().min(0),
  gender: z.enum(["male", "female"]),
  weight: z.number().min(0),
  height: z.number().min(0),
  activity_level: z.number().min(1).max(5),
});

export type PersonalInformationType = z.infer<typeof personalInformationSchema>;
