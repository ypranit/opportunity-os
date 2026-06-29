export async function syncSessionToCookies(accessToken: string, refreshToken: string) {
  await fetch("/api/auth/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_token: accessToken,
      refresh_token: refreshToken,
    }),
  });
}
