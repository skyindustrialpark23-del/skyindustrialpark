export async function onRequestGet({ request, env, params }) {
  const key = [].concat(params.path || []).join("/");
  const obj = await env.MEDIA.get(key, { range: request.headers });
  if (!obj) return new Response("Not found", { status: 404 });
  const h = new Headers();
  obj.writeHttpMetadata(h);
  h.set("etag", obj.httpEtag);
  h.set("accept-ranges", "bytes");
  h.set("cache-control", "public, max-age=31536000, immutable");
  h.set("x-content-type-options", "nosniff");
  let status = 200;
  if (obj.range && obj.range.offset !== undefined) {
    status = 206;
    const end = obj.range.offset + obj.range.length - 1;
    h.set("content-range", `bytes ${obj.range.offset}-${end}/${obj.size}`);
  }
  return new Response(obj.body, { status, headers: h });
}
