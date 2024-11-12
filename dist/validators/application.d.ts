export const applicationSchema: z.ZodObject<{
    body: z.ZodObject<{
        applicationData: z.ZodObject<{
            applyingFor: z.ZodObject<{
                name: z.ZodString;
                timing: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name?: string;
                timing?: string;
            }, {
                name?: string;
                timing?: string;
            }>;
            admissionSeekingIn: z.ZodArray<z.ZodEnum<["playGroup", "nursery", "prepJunior", "prepSenior", "motherToddler", "dayCare", "dayAfter"]>, "many">;
            candidateDetails: z.ZodObject<{
                studentName: z.ZodObject<{
                    first: z.ZodString;
                    middle: z.ZodOptional<z.ZodString>;
                    last: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    first?: string;
                    middle?: string;
                    last?: string;
                }, {
                    first?: string;
                    middle?: string;
                    last?: string;
                }>;
                dateOfBirth: z.ZodEffects<z.ZodString, string, string>;
                gender: z.ZodEnum<["Male", "Female"]>;
                placeOfBirth: z.ZodOptional<z.ZodString>;
                nationality: z.ZodOptional<z.ZodString>;
                firstLanguage: z.ZodOptional<z.ZodString>;
                otherLanguagesKnown: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                studentName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                dateOfBirth?: string;
                gender?: "Male" | "Female";
                placeOfBirth?: string;
                nationality?: string;
                firstLanguage?: string;
                otherLanguagesKnown?: string;
            }, {
                studentName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                dateOfBirth?: string;
                gender?: "Male" | "Female";
                placeOfBirth?: string;
                nationality?: string;
                firstLanguage?: string;
                otherLanguagesKnown?: string;
            }>;
            residentialAddress: z.ZodObject<{
                addressLine: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                country: z.ZodString;
                pinCode: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                addressLine?: string;
                city?: string;
                state?: string;
                country?: string;
                pinCode?: string;
            }, {
                addressLine?: string;
                city?: string;
                state?: string;
                country?: string;
                pinCode?: string;
            }>;
            father: z.ZodObject<{
                fullName: z.ZodObject<{
                    first: z.ZodString;
                    middle: z.ZodOptional<z.ZodString>;
                    last: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    first?: string;
                    middle?: string;
                    last?: string;
                }, {
                    first?: string;
                    middle?: string;
                    last?: string;
                }>;
                email: z.ZodOptional<z.ZodString>;
                educationalQualification: z.ZodOptional<z.ZodString>;
                profession: z.ZodOptional<z.ZodString>;
                designation: z.ZodOptional<z.ZodString>;
                phone: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            }, {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            }>;
            mother: z.ZodObject<{
                fullName: z.ZodObject<{
                    first: z.ZodString;
                    middle: z.ZodOptional<z.ZodString>;
                    last: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    first?: string;
                    middle?: string;
                    last?: string;
                }, {
                    first?: string;
                    middle?: string;
                    last?: string;
                }>;
                email: z.ZodOptional<z.ZodString>;
                educationalQualification: z.ZodOptional<z.ZodString>;
                profession: z.ZodOptional<z.ZodString>;
                designation: z.ZodOptional<z.ZodString>;
                phone: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            }, {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            }>;
            guardian: z.ZodOptional<z.ZodObject<{
                fullName: z.ZodObject<{
                    first: z.ZodOptional<z.ZodString>;
                    middle: z.ZodOptional<z.ZodString>;
                    last: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    first?: string;
                    middle?: string;
                    last?: string;
                }, {
                    first?: string;
                    middle?: string;
                    last?: string;
                }>;
                relationWithStudent: z.ZodOptional<z.ZodString>;
                email: z.ZodOptional<z.ZodString>;
                phone: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                phone?: string[];
                relationWithStudent?: string;
            }, {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                phone?: string[];
                relationWithStudent?: string;
            }>>;
            location: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            applyingFor?: {
                name?: string;
                timing?: string;
            };
            admissionSeekingIn?: ("playGroup" | "nursery" | "prepJunior" | "prepSenior" | "motherToddler" | "dayCare" | "dayAfter")[];
            candidateDetails?: {
                studentName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                dateOfBirth?: string;
                gender?: "Male" | "Female";
                placeOfBirth?: string;
                nationality?: string;
                firstLanguage?: string;
                otherLanguagesKnown?: string;
            };
            residentialAddress?: {
                addressLine?: string;
                city?: string;
                state?: string;
                country?: string;
                pinCode?: string;
            };
            father?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            };
            mother?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            };
            guardian?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                phone?: string[];
                relationWithStudent?: string;
            };
            location?: string;
        }, {
            applyingFor?: {
                name?: string;
                timing?: string;
            };
            admissionSeekingIn?: ("playGroup" | "nursery" | "prepJunior" | "prepSenior" | "motherToddler" | "dayCare" | "dayAfter")[];
            candidateDetails?: {
                studentName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                dateOfBirth?: string;
                gender?: "Male" | "Female";
                placeOfBirth?: string;
                nationality?: string;
                firstLanguage?: string;
                otherLanguagesKnown?: string;
            };
            residentialAddress?: {
                addressLine?: string;
                city?: string;
                state?: string;
                country?: string;
                pinCode?: string;
            };
            father?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            };
            mother?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            };
            guardian?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                phone?: string[];
                relationWithStudent?: string;
            };
            location?: string;
        }>;
    }, "strict", z.ZodTypeAny, {
        applicationData?: {
            applyingFor?: {
                name?: string;
                timing?: string;
            };
            admissionSeekingIn?: ("playGroup" | "nursery" | "prepJunior" | "prepSenior" | "motherToddler" | "dayCare" | "dayAfter")[];
            candidateDetails?: {
                studentName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                dateOfBirth?: string;
                gender?: "Male" | "Female";
                placeOfBirth?: string;
                nationality?: string;
                firstLanguage?: string;
                otherLanguagesKnown?: string;
            };
            residentialAddress?: {
                addressLine?: string;
                city?: string;
                state?: string;
                country?: string;
                pinCode?: string;
            };
            father?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            };
            mother?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            };
            guardian?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                phone?: string[];
                relationWithStudent?: string;
            };
            location?: string;
        };
    }, {
        applicationData?: {
            applyingFor?: {
                name?: string;
                timing?: string;
            };
            admissionSeekingIn?: ("playGroup" | "nursery" | "prepJunior" | "prepSenior" | "motherToddler" | "dayCare" | "dayAfter")[];
            candidateDetails?: {
                studentName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                dateOfBirth?: string;
                gender?: "Male" | "Female";
                placeOfBirth?: string;
                nationality?: string;
                firstLanguage?: string;
                otherLanguagesKnown?: string;
            };
            residentialAddress?: {
                addressLine?: string;
                city?: string;
                state?: string;
                country?: string;
                pinCode?: string;
            };
            father?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            };
            mother?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            };
            guardian?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                phone?: string[];
                relationWithStudent?: string;
            };
            location?: string;
        };
    }>;
    params: z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>;
    query: z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    params?: {};
    body?: {
        applicationData?: {
            applyingFor?: {
                name?: string;
                timing?: string;
            };
            admissionSeekingIn?: ("playGroup" | "nursery" | "prepJunior" | "prepSenior" | "motherToddler" | "dayCare" | "dayAfter")[];
            candidateDetails?: {
                studentName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                dateOfBirth?: string;
                gender?: "Male" | "Female";
                placeOfBirth?: string;
                nationality?: string;
                firstLanguage?: string;
                otherLanguagesKnown?: string;
            };
            residentialAddress?: {
                addressLine?: string;
                city?: string;
                state?: string;
                country?: string;
                pinCode?: string;
            };
            father?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            };
            mother?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            };
            guardian?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                phone?: string[];
                relationWithStudent?: string;
            };
            location?: string;
        };
    };
    query?: {};
}, {
    params?: {};
    body?: {
        applicationData?: {
            applyingFor?: {
                name?: string;
                timing?: string;
            };
            admissionSeekingIn?: ("playGroup" | "nursery" | "prepJunior" | "prepSenior" | "motherToddler" | "dayCare" | "dayAfter")[];
            candidateDetails?: {
                studentName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                dateOfBirth?: string;
                gender?: "Male" | "Female";
                placeOfBirth?: string;
                nationality?: string;
                firstLanguage?: string;
                otherLanguagesKnown?: string;
            };
            residentialAddress?: {
                addressLine?: string;
                city?: string;
                state?: string;
                country?: string;
                pinCode?: string;
            };
            father?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            };
            mother?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                educationalQualification?: string;
                profession?: string;
                designation?: string;
                phone?: string[];
            };
            guardian?: {
                email?: string;
                fullName?: {
                    first?: string;
                    middle?: string;
                    last?: string;
                };
                phone?: string[];
                relationWithStudent?: string;
            };
            location?: string;
        };
    };
    query?: {};
}>;
import { z } from "zod/lib";
//# sourceMappingURL=application.d.ts.map