import z from "zod";

export const postSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().min(10),
  banner: z.url(),
  authors: z.array(z.string()).default(["Caleb"]),
  featured: z.boolean().default(false),
  date: z.coerce.date().default(() => new Date()),
  tags: z.array(z.string()).default([]),
});
