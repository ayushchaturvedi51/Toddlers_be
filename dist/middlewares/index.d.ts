export function validateRequest(schema: any): (req: any, res: any, next: any) => Promise<any>;
export function authenticateUser(req: any, res: any, next: any): Promise<any>;
export function parseStringifiedFields(fieldsToParse?: any[]): (req: any, res: any, next: any) => void;
export const multer: typeof import("./multer");
//# sourceMappingURL=index.d.ts.map