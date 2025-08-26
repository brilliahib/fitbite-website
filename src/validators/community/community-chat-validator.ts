import { z } from "zod";

export const communityChatSchema = z.object({
  message: z.string().nonempty(),
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

export type CommunityChatType = z.infer<typeof communityChatSchema>;
