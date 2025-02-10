import { c as client, u as urlFor, $ as $$Layout } from '../../chunks/sanity_Bv0UMM-2.mjs';
import { e as createComponent, f as createAstro, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_8uaPVEvv.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await client.fetch(`
    *[_type == "post"]{
      _id,
      _createdAt,
      "slug": slug.current,
      title,
      mainImage,
      excerpt,
      body
    }
  `);
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-4sn4zg3r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="wrapper" data-astro-cid-4sn4zg3r> <div class="normal-wrapper" data-astro-cid-4sn4zg3r> ${post.mainImage && renderTemplate`<img${addAttribute(urlFor(post.mainImage).width(1200).url(), "src")}${addAttribute(post.title, "alt")} class="post-image" data-astro-cid-4sn4zg3r>`} <h1 class="heading_55px" data-astro-cid-4sn4zg3r>${post.title}</h1> ${post.excerpt && renderTemplate`<p class="paragraph_18px" data-astro-cid-4sn4zg3r>${post.excerpt}</p>`} <!-- Add more content rendering here --> </div> </article> ` })} `;
}, "C:/Users/AYZ STUDIO/Downloads/webflow-export/my-webflow-conversion/src/pages/blog/[slug].astro", undefined);

const $$file = "C:/Users/AYZ STUDIO/Downloads/webflow-export/my-webflow-conversion/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
