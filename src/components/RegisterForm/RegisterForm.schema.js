import { z } from "zod";

export const formSchemaRegister = z
  .object({
    name: z.string().min(1, "O nome é obrigatório."),
    email: z
      .string()
      .min(1, "O email é obrigatório.")
      .email("Insira um email válido."),
    password: z
      .string()
      .min(1, "Insira uma senha")
      .min(8, "É necessário pelo menos oito caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
    confirmPassword: z.string().min(1, "É necessário confirmar a senha"),
    bio: z.string().min(1, "A bio é obrigatória."),
    contact: z.string().min(1, "O contato é obrigatório."),
    course_module: z.string().min(1, "Selecione uma opção."),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
  });
