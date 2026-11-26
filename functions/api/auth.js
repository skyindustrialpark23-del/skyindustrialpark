import { isAdmin } from "../_auth.js";
export async function onRequestPost({ request, env }) {
  const ok = isAdmin(request, env);
  return new Response(JSON.stringify({ ok }), { status: ok ? 200 : 401, headers: { "content-type": "application/json", "cache-control": "no-store" } });
}
