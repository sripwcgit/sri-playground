const PUBLIC_PATHS = ["/login.html", "/style.css"];

function getCookie(request, name) {
  const header = request.headers.get("cookie") || "";
  for (const part of header.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name) return rest.join("=");
  }
  return null;
}

export default function middleware(request) {
  const { pathname } = new URL(request.url);

  if (PUBLIC_PATHS.includes(pathname) || pathname.startsWith("/api/")) {
    return;
  }

  if (getCookie(request, "auth") === "valid") {
    return;
  }

  return Response.redirect(new URL("/login.html", request.url));
}

export const config = {
  matcher: ["/((?!_vercel).*)"],
};
