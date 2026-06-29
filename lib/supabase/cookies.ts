export const ACCESS_TOKEN_COOKIE = "os-access-token";
export const REFRESH_TOKEN_COOKIE = "os-refresh-token";

export const AUTH_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
};
