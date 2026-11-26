import { isAdmin } from "../_auth.js";
const OK = ["image/jpeg", "image/png", "image/webp", "image/gif", "video/mp4", "video/webm"];
const MAX = 95 * 1024 * 1024;
const J = { "content-type": "application/json" };
export async function onRequestPost({ request, env }) {
  if (!isAdmin(request, env)) return new Response('{"error":"unauthorized"}', { status: 401, headers: J });
  const type = (request.headers.get("content-type") || "").split(";")[0];
  if (!OK.includes(type)) return new Response('{"error":"file type not allowed"}', { status: 415, headers: J });
  if (+request.headers.get("content-length") > MAX) return new Response('{"error":"file too large (max 95 MB)"}', { status: 413, headers: J });
  const name = (new URL(request.url).searchParams.get("name") || "file").toLowerCase().replace(/[^a-z0-9._-]/g, "-").slice(-60);
  const key = Date.now().toString(36) + "-" + name;
  await env.MEDIA.put(key, request.body, { httpMetadata: { contentType: type } });
  return new Response(JSON.stringify({ url: "/media/" + key }), { headers: J });
}
