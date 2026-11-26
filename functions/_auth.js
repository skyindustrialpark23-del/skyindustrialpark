export function isAdmin(request, env) {
  const given = new TextEncoder().encode(request.headers.get("x-admin-key") || "");
  const real = new TextEncoder().encode(env.ADMIN_PASSWORD || "");
  if (!real.length) return false;
  let d = given.length ^ real.length;
  for (let i = 0; i < real.length; i++) d |= (given[i] || 0) ^ real[i];
  return d === 0;
}
