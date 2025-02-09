import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_8uaPVEvv.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/AYZ%20STUDIO/Downloads/webflow-export/my-webflow-conversion/","cacheDir":"file:///C:/Users/AYZ%20STUDIO/Downloads/webflow-export/my-webflow-conversion/node_modules/.astro/","outDir":"file:///C:/Users/AYZ%20STUDIO/Downloads/webflow-export/my-webflow-conversion/dist/","srcDir":"file:///C:/Users/AYZ%20STUDIO/Downloads/webflow-export/my-webflow-conversion/src/","publicDir":"file:///C:/Users/AYZ%20STUDIO/Downloads/webflow-export/my-webflow-conversion/public/","buildClientDir":"file:///C:/Users/AYZ%20STUDIO/Downloads/webflow-export/my-webflow-conversion/dist/","buildServerDir":"file:///C:/Users/AYZ%20STUDIO/Downloads/webflow-export/my-webflow-conversion/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/assets/page.q8RHDzvA.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/assets/page.q8RHDzvA.js"}],"styles":[],"routeData":{"route":"/api/disable-preview","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/disable-preview\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"disable-preview","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/disable-preview.ts","pathname":"/api/disable-preview","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/assets/page.q8RHDzvA.js"}],"styles":[],"routeData":{"route":"/api/preview","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/preview\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"preview","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/preview.ts","pathname":"/api/preview","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/assets/page.q8RHDzvA.js"}],"styles":[{"type":"inline","content":"[data-sanity]{outline:1px solid rgba(0,0,0,.1)}[data-sanity]:hover{outline:1px solid #00e}\n.post-image[data-astro-cid-4sn4zg3r]{width:100%;height:auto;border-radius:8px;margin-bottom:2rem}\n"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/assets/page.q8RHDzvA.js"}],"styles":[{"type":"inline","content":"[data-sanity]{outline:1px solid rgba(0,0,0,.1)}[data-sanity]:hover{outline:1px solid #00e}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/AYZ STUDIO/Downloads/webflow-export/my-webflow-conversion/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/AYZ STUDIO/Downloads/webflow-export/my-webflow-conversion/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/disable-preview@_@ts":"pages/api/disable-preview.astro.mjs","\u0000@astro-page:src/pages/api/preview@_@ts":"pages/api/preview.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_QUSJe8f2.mjs","C:/Users/AYZ STUDIO/Downloads/webflow-export/my-webflow-conversion/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_5hwgBbT2.mjs","astro:scripts/page.js":"assets/page.q8RHDzvA.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/assets/page.q8RHDzvA.js","/css/animation-fixes.css","/css/webflow-style.css","/js/jquery.js","/js/webflow.59a188e2.1ce79b971debf99d.js","/images/app-icon.png","/images/arrow.svg","/images/cbre.svg","/images/dribbble.jpg","/images/dribbble.svg","/images/epiq.svg","/images/fannit.svg","/images/favicon.png","/images/fresh.svg","/images/hero-20image.jpg","/images/instagram.jpg","/images/linkedin.svg","/images/menu-20icon.svg","/images/mm.svg","/images/motion-20design.svg","/images/open-20graph-20image.jpg","/images/philosophy.jpg","/images/photography.svg","/images/placeformom.svg","/images/product-20design.svg","/images/project-201.jpg","/images/project-202.jpg","/images/project-203.jpg","/images/project-204.jpg","/images/project-25201-p-1080.jpeg","/images/project-25201-p-1600.jpeg","/images/project-25202-p-1080.jpeg","/images/project-25202-p-1600.jpeg","/images/project-25203-p-1080.jpeg","/images/project-25203-p-1600.jpeg","/images/project-25204-p-1080.jpeg","/images/project-25204-p-1600.jpeg","/images/robin-20logo.svg","/images/testimonial-201.jpg","/images/testimonial-202.jpg","/images/testimonial-203.jpg","/images/testimonial-25201-p-500.jpeg","/images/testimonial-25202-p-1080.jpeg","/images/testimonial-25202-p-1600.jpeg","/images/testimonial-25202-p-500.jpeg","/images/testimonial-25203-p-500.jpeg","/images/travel-201.jpg","/images/travel-202.jpg","/images/travel-203.jpg","/images/travel-204.jpg","/images/travel-25201-p-500.jpeg","/images/travel-25202-p-500.jpeg","/images/travel-25203-p-1080.jpeg","/images/travel-25203-p-500.jpeg","/images/travel-25203-p-800.jpeg","/images/travel-25204-p-1080.jpeg","/images/travel-25204-p-500.jpeg","/images/travel-25204-p-800.jpeg","/images/twitter.svg","/images/visual-20design.svg","/images/webflow-badge-icon-d2.89e12c322e.svg","/images/webflow-badge-text-d2.c82cec3b78.svg","/scripts/form-handler.js","/scripts/init.js","/scripts/webflow-animations.js","/assets/page.q8RHDzvA.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"leUVnWG3zbNmgU/A3BzFeCkD1Ei8Xz8hOFxKhFGb0Ro="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
