export type AuthFormStatus = "idle" | "loading" | "success" | "error";

export interface AuthFormState {
  status: AuthFormStatus;
  message: string;
}
