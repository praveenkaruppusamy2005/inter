export default async function handler(req, res) {
  try {
    const defaultUrl = "https://inter-backend-lpmb.onrender.com";
    const backendUrl = process.env.BACKEND_URL || defaultUrl;
    let urlTried = `${backendUrl}/health`;
    let r = await fetch(urlTried, { method: "GET", headers: { "Accept": "application/json" } });
    let data = await r.json().catch(() => ({}));
    if (r.status >= 400) {
      urlTried = backendUrl;
      r = await fetch(urlTried, { method: "GET" });
    }
    return res.status(200).json({ ok: true, url: urlTried, status: r.status, data });
  } catch (e) {
    return res.status(200).json({ ok: false, error: e?.message || String(e) });
  }
}
