import { isAdmin } from "../_auth.js";
const J = { "content-type": "application/json", "cache-control": "no-store" };
export async function onRequestGet({ env }) {
  return new Response((await env.CONTENT.get("site")) || "{}", { headers: J });
}
export async function onRequestPut({ request, env }) {
  if (!isAdmin(request, env)) return new Response('{"error":"unauthorized"}', { status: 401, headers: J });
  const text = await request.text();
  if (text.length > 900000) return new Response('{"error":"too large"}', { status: 413, headers: J });
  try { JSON.parse(text); } catch { return new Response('{"error":"bad json"}', { status: 400, headers: J }); }
  await env.CONTENT.put("site", text);
  return new Response('{"ok":true}', { headers: J });
}
