const { z } = require("zod");

exports.signupSchema = z.object({
  body: z
    .object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(4, "Password should be at least 6 characters"),
    })
    .strict(),
  params: z.object({}).strict(),
  query: z.object({}).strict(),
});

exports.loginSchema = z.object({
  body: z
    .object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password should be at least 6 characters"),
    })
    .strict(),
  params: z.object({}).strict(),
  query: z.object({}).strict(),
});
