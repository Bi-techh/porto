export { renderers } from '../../renderers.mjs';

const GET = async ({ request, redirect }) => {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");
  if (!slug) {
    return new Response("No slug in URL", { status: 401 });
  }
  return redirect(`/${slug}`, 307);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
