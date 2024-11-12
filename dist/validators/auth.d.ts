export const signupSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        email?: string;
        password?: string;
    }, {
        email?: string;
        password?: string;
    }>;
    params: z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>;
    query: z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    params?: {};
    body?: {
        email?: string;
        password?: string;
    };
    query?: {};
}, {
    params?: {};
    body?: {
        email?: string;
        password?: string;
    };
    query?: {};
}>;
export const loginSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        email?: string;
        password?: string;
    }, {
        email?: string;
        password?: string;
    }>;
    params: z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>;
    query: z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    params?: {};
    body?: {
        email?: string;
        password?: string;
    };
    query?: {};
}, {
    params?: {};
    body?: {
        email?: string;
        password?: string;
    };
    query?: {};
}>;
import { z } from "zod/lib";
//# sourceMappingURL=auth.d.ts.map