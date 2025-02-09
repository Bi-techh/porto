import { createClient } from '@sanity/client';
import { e as createComponent, f as createAstro, r as renderTemplate, k as renderSlot, l as renderHead, h as addAttribute } from './astro/server_8uaPVEvv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient(
            {"apiVersion":"2024-03-01","projectId":"qpes3s7p","dataset":"production","useCdn":true,"studioUrl":"\u002Fstudio"}
          );

globalThis.sanityClient = sanityClient;

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const projectId = "qpes3s7p";
  const dataset = "production";
  createClient({
    projectId,
    dataset,
    apiVersion: "2024-03-01",
    useCdn: true,
    perspective: "published"
  });
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-sanity> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="/css/webflow-style.css"><link rel="stylesheet" href="/css/animation-fixes.css"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><!-- Font loading --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap" rel="stylesheet">', "<!-- Visual Editing Styles -->", '</head> <body class="body"> ', ` <!-- Scripts --> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> <script src="/scripts/init.js"></script> <script src="/js/webflow.59a188e2.1ce79b971debf99d.js"></script> <script src="/scripts/webflow-animations.js"></script> <script src="/scripts/form-handler.js"></script> <script>
            // Load visual editing script
            (function() {
                const script = document.createElement('script');
                script.src = 'https://esm.sh/@sanity/visual-editing@2.13.0';
                script.type = 'module';
                script.onload = () => {
                    window.enableVisualEditing({
                        studioUrl: '/studio',
                        projectId: 'qpes3s7p',
                        dataset: 'production',
                        tool: 'presentation',
                        allowBackgroundUpdates: true,
                        overlay: {
                            enabled: true,
                            perspective: 'previewDrafts'
                        }
                    });
                };
                document.body.appendChild(script);
            })();
        </script> </body> </html>`])), addAttribute(Astro2.generator, "content"), title, renderSlot($$result, $$slots["head"]), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/AYZ STUDIO/Downloads/webflow-export/my-webflow-conversion/src/layouts/Layout.astro", undefined);

const client = createClient({
  projectId: "qpes3s7p",
  dataset: "production",
  apiVersion: "2024-03-01",
  token: "skIhWJB3kYlbBEq1ggrS5yyUceB3oUADVr7QMakWCXEABotsPe1hMSnRmjI677gKAvMMxEuaVvCEb5crjBOvWxMGjm61vDsQbBfKXhs9CL1FrXP8JAwEomdGpoJTkKrUvyESOgA4TcWzITcebtUrewvFL1EvcYvZrPQuzAHk24gv41nXBpBT",
  useCdn: true
});
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export { $$Layout as $, client as c, urlFor as u };
