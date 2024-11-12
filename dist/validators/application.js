const { z } = require("zod");
exports.applicationSchema = z.object({
    body: z
        .object({
        applicationData: z.object({
            applyingFor: z.object({
                name: z.string().min(1, "Applying for name is required"),
                timing: z.string().min(1, "Applying for timing is required"),
            }),
            admissionSeekingIn: z.array(z.enum([
                "playGroup",
                "nursery",
                "prepJunior",
                "prepSenior",
                "motherToddler",
                "dayCare",
                "dayAfter",
            ])),
            candidateDetails: z.object({
                studentName: z.object({
                    first: z.string().min(1, "First name is required"),
                    middle: z.string().optional(),
                    last: z.string().optional(),
                }),
                dateOfBirth: z
                    .string()
                    .refine((val) => !isNaN(Date.parse(val)), "Date of birth must be a valid date"),
                gender: z.enum(["Male", "Female"]),
                placeOfBirth: z.string().optional(),
                nationality: z.string().optional(),
                firstLanguage: z.string().optional(),
                otherLanguagesKnown: z.string().optional(),
            }),
            residentialAddress: z.object({
                addressLine: z.string().min(1, "Address line is required"),
                city: z.string().min(1, "City is required"),
                state: z.string().min(1, "State is required"),
                country: z.string().min(1, "Country is required"),
                pinCode: z.string().min(1, "Pin code is required"),
            }),
            father: z.object({
                fullName: z.object({
                    first: z.string().min(1, "Father's first name is required"),
                    middle: z.string().optional(),
                    last: z.string().optional(),
                }),
                email: z.string().email("Invalid email").optional(),
                educationalQualification: z.string().optional(),
                profession: z.string().optional(),
                designation: z.string().optional(),
                phone: z
                    .array(z.string().min(1, "Phone number is required"))
                    .optional(),
            }),
            mother: z.object({
                fullName: z.object({
                    first: z.string().min(1, "Mother's first name is required"),
                    middle: z.string().optional(),
                    last: z.string().optional(),
                }),
                email: z.string().email("Invalid email").optional(),
                educationalQualification: z.string().optional(),
                profession: z.string().optional(),
                designation: z.string().optional(),
                phone: z
                    .array(z.string().min(1, "Phone number is required"))
                    .optional(),
            }),
            guardian: z
                .object({
                fullName: z.object({
                    first: z.string().optional(),
                    middle: z.string().optional(),
                    last: z.string().optional(),
                }),
                relationWithStudent: z.string().optional(),
                email: z.string().email("Invalid email").optional(),
                phone: z
                    .array(z.string().min(1, "Phone number is required"))
                    .optional(),
            })
                .optional(),
            location: z.string().optional(),
        }),
    })
        .strict(),
    params: z.object({}).strict(),
    query: z.object({}).strict(),
});
//# sourceMappingURL=application.js.map