const PASSWORD = process.env.SITE_PASSWORD || "111";

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let password = "";
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    password = body?.password ?? "";
  } catch {
    return res.status(400).json({ error: "Invalid request" });
  }

  if (password !== PASSWORD) {
    return res.status(401).json({ error: "Invalid password" });
  }

  res.setHeader(
    "Set-Cookie",
    "auth=valid; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=604800"
  );
  return res.status(200).json({ ok: true });
};
