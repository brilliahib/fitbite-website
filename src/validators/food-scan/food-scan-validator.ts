import z from "zod";

export const foodScanSchema = z.object({
  image: z
    .instanceof(File)
    .refine(
      (file) => ["image/jpeg", "image/jpg", "image/png"].includes(file.type),
      {
        message: "File harus berupa gambar (JPG, JPEG, atau PNG)",
      },
    )
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Ukuran file maksimal 5MB",
    })
    .nullable()
    .optional(),
});

export type FoodScanType = z.infer<typeof foodScanSchema>;
