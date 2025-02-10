import { e as createComponent, f as createAstro, r as renderTemplate, k as renderSlot, l as renderHead, h as addAttribute } from './astro/server_8uaPVEvv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import require$$0 from 'get-it';
import require$$1 from 'get-it/middleware';
import require$$2 from 'rxjs';
import require$$3 from 'rxjs/operators';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var dist = {};

var nodeMiddlewareGh18jsRe = {};

var stegaEncodeSourceMapZDmZYDbM = {};

var resolveEditInfoDELeeJBE = {};

var hasRequiredResolveEditInfoDELeeJBE;

function requireResolveEditInfoDELeeJBE () {
	if (hasRequiredResolveEditInfoDELeeJBE) return resolveEditInfoDELeeJBE;
	hasRequiredResolveEditInfoDELeeJBE = 1;

	const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	const reKeySegment = /_key\s*==\s*['"](.*)['"]/;
	const reIndexTuple = /^\d*:\d*$/;
	function isIndexSegment(segment) {
	  return typeof segment === "number" || typeof segment === "string" && /^\[\d+\]$/.test(segment);
	}
	function isKeySegment(segment) {
	  if (typeof segment === "string") {
	    return reKeySegment.test(segment.trim());
	  }
	  return typeof segment === "object" && "_key" in segment;
	}
	function isIndexTuple(segment) {
	  if (typeof segment === "string" && reIndexTuple.test(segment)) {
	    return true;
	  }
	  if (!Array.isArray(segment) || segment.length !== 2) {
	    return false;
	  }
	  const [from, to] = segment;
	  return (typeof from === "number" || from === "") && (typeof to === "number" || to === "");
	}
	function get(obj, path, defaultVal) {
	  const select = typeof path === "string" ? fromString(path) : path;
	  if (!Array.isArray(select)) {
	    throw new Error("Path must be an array or a string");
	  }
	  let acc = obj;
	  for (let i = 0; i < select.length; i++) {
	    const segment = select[i];
	    if (isIndexSegment(segment)) {
	      if (!Array.isArray(acc)) {
	        return defaultVal;
	      }
	      acc = acc[segment];
	    }
	    if (isKeySegment(segment)) {
	      if (!Array.isArray(acc)) {
	        return defaultVal;
	      }
	      acc = acc.find((item) => item._key === segment._key);
	    }
	    if (typeof segment === "string") {
	      acc = typeof acc === "object" && acc !== null ? acc[segment] : undefined;
	    }
	    if (typeof acc === "undefined") {
	      return defaultVal;
	    }
	  }
	  return acc;
	}
	function toString(path) {
	  if (!Array.isArray(path)) {
	    throw new Error("Path is not an array");
	  }
	  return path.reduce((target, segment, i) => {
	    const segmentType = typeof segment;
	    if (segmentType === "number") {
	      return "".concat(target, "[").concat(segment, "]");
	    }
	    if (segmentType === "string") {
	      const separator = i === 0 ? "" : ".";
	      return "".concat(target).concat(separator).concat(segment);
	    }
	    if (isKeySegment(segment) && segment._key) {
	      return "".concat(target, '[_key=="').concat(segment._key, '"]');
	    }
	    if (Array.isArray(segment)) {
	      const [from, to] = segment;
	      return "".concat(target, "[").concat(from, ":").concat(to, "]");
	    }
	    throw new Error("Unsupported path segment `".concat(JSON.stringify(segment), "`"));
	  }, "");
	}
	function fromString(path) {
	  if (typeof path !== "string") {
	    throw new Error("Path is not a string");
	  }
	  const segments = path.match(rePropName);
	  if (!segments) {
	    throw new Error("Invalid path string");
	  }
	  return segments.map(parsePathSegment);
	}
	function parsePathSegment(segment) {
	  if (isIndexSegment(segment)) {
	    return parseIndexSegment(segment);
	  }
	  if (isKeySegment(segment)) {
	    return parseKeySegment(segment);
	  }
	  if (isIndexTuple(segment)) {
	    return parseIndexTupleSegment(segment);
	  }
	  return segment;
	}
	function parseIndexSegment(segment) {
	  return Number(segment.replace(/[^\d]/g, ""));
	}
	function parseKeySegment(segment) {
	  const segments = segment.match(reKeySegment);
	  return { _key: segments[1] };
	}
	function parseIndexTupleSegment(segment) {
	  const [from, to] = segment.split(":").map((seg) => seg === "" ? seg : Number(seg));
	  return [from, to];
	}

	var studioPath = /*#__PURE__*/Object.freeze({
	  __proto__: null,
	  fromString: fromString,
	  get: get,
	  isIndexSegment: isIndexSegment,
	  isIndexTuple: isIndexTuple,
	  isKeySegment: isKeySegment,
	  reKeySegment: reKeySegment,
	  toString: toString
	});

	const DRAFTS_PREFIX = "drafts.";
	function getPublishedId(id) {
	  if (id.startsWith(DRAFTS_PREFIX)) {
	    return id.slice(DRAFTS_PREFIX.length);
	  }
	  return id;
	}

	const ESCAPE = {
	  "\f": "\\f",
	  "\n": "\\n",
	  "\r": "\\r",
	  "	": "\\t",
	  "'": "\\'",
	  "\\": "\\\\"
	};
	const UNESCAPE = {
	  "\\f": "\f",
	  "\\n": "\n",
	  "\\r": "\r",
	  "\\t": "	",
	  "\\'": "'",
	  "\\\\": "\\"
	};
	function jsonPath(path) {
	  return "$".concat(path.map((segment) => {
	    if (typeof segment === "string") {
	      const escapedKey = segment.replace(/[\f\n\r\t'\\]/g, (match) => {
	        return ESCAPE[match];
	      });
	      return "['".concat(escapedKey, "']");
	    }
	    if (typeof segment === "number") {
	      return "[".concat(segment, "]");
	    }
	    if (segment._key !== "") {
	      const escapedKey = segment._key.replace(/['\\]/g, (match) => {
	        return ESCAPE[match];
	      });
	      return "[?(@._key=='".concat(escapedKey, "')]");
	    }
	    return "[".concat(segment._index, "]");
	  }).join(""));
	}
	function parseJsonPath(path) {
	  const parsed = [];
	  const parseRe = /\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;
	  let match;
	  while ((match = parseRe.exec(path)) !== null) {
	    if (match[1] !== undefined) {
	      const key = match[1].replace(/\\(\\|f|n|r|t|')/g, (m) => {
	        return UNESCAPE[m];
	      });
	      parsed.push(key);
	      continue;
	    }
	    if (match[2] !== undefined) {
	      parsed.push(parseInt(match[2], 10));
	      continue;
	    }
	    if (match[3] !== undefined) {
	      const _key = match[3].replace(/\\(\\')/g, (m) => {
	        return UNESCAPE[m];
	      });
	      parsed.push({
	        _key,
	        _index: -1
	      });
	      continue;
	    }
	  }
	  return parsed;
	}
	function jsonPathToStudioPath(path) {
	  return path.map((segment) => {
	    if (typeof segment === "string") {
	      return segment;
	    }
	    if (typeof segment === "number") {
	      return segment;
	    }
	    if (segment._key !== "") {
	      return { _key: segment._key };
	    }
	    if (segment._index !== -1) {
	      return segment._index;
	    }
	    throw new Error("invalid segment:".concat(JSON.stringify(segment)));
	  });
	}
	function studioPathToJsonPath(path) {
	  const parsedPath = typeof path === "string" ? fromString(path) : path;
	  return parsedPath.map((segment) => {
	    if (typeof segment === "string") {
	      return segment;
	    }
	    if (typeof segment === "number") {
	      return segment;
	    }
	    if (Array.isArray(segment)) {
	      throw new Error("IndexTuple segments aren't supported:".concat(JSON.stringify(segment)));
	    }
	    if (isContentSourceMapParsedPathKeyedSegment(segment)) {
	      return segment;
	    }
	    if (segment._key) {
	      return { _key: segment._key, _index: -1 };
	    }
	    throw new Error("invalid segment:".concat(JSON.stringify(segment)));
	  });
	}
	function isContentSourceMapParsedPathKeyedSegment(segment) {
	  return typeof segment === "object" && "_key" in segment && "_index" in segment;
	}
	function jsonPathToMappingPath(path) {
	  return path.map((segment) => {
	    if (typeof segment === "string") {
	      return segment;
	    }
	    if (typeof segment === "number") {
	      return segment;
	    }
	    if (segment._index !== -1) {
	      return segment._index;
	    }
	    throw new Error("invalid segment:".concat(JSON.stringify(segment)));
	  });
	}

	function resolveMapping(resultPath, csm) {
	  if (!(csm == null ? undefined : csm.mappings)) {
	    return undefined;
	  }
	  const resultMappingPath = jsonPath(jsonPathToMappingPath(resultPath));
	  if (csm.mappings[resultMappingPath] !== undefined) {
	    return {
	      mapping: csm.mappings[resultMappingPath],
	      matchedPath: resultMappingPath,
	      pathSuffix: ""
	    };
	  }
	  const mappings = Object.entries(csm.mappings).filter(([key]) => resultMappingPath.startsWith(key)).sort(([key1], [key2]) => key2.length - key1.length);
	  if (mappings.length == 0) {
	    return undefined;
	  }
	  const [matchedPath, mapping] = mappings[0];
	  const pathSuffix = resultMappingPath.substring(matchedPath.length);
	  return { mapping, matchedPath, pathSuffix };
	}

	function isArray(value) {
	  return value !== null && Array.isArray(value);
	}

	function isRecord(value) {
	  return typeof value === "object" && value !== null;
	}

	function walkMap(value, mappingFn, path = []) {
	  if (isArray(value)) {
	    return value.map((v, idx) => {
	      if (isRecord(v)) {
	        const _key = v["_key"];
	        if (typeof _key === "string") {
	          return walkMap(v, mappingFn, path.concat({ _key, _index: idx }));
	        }
	      }
	      return walkMap(v, mappingFn, path.concat(idx));
	    });
	  }
	  if (isRecord(value)) {
	    return Object.fromEntries(
	      Object.entries(value).map(([k, v]) => [k, walkMap(v, mappingFn, path.concat(k))])
	    );
	  }
	  return mappingFn(value, path);
	}

	function createEditUrl(options) {
	  const {
	    baseUrl,
	    workspace: _workspace = "default",
	    tool: _tool = "default",
	    id: _id,
	    type,
	    path
	  } = options;
	  if (!baseUrl) {
	    throw new Error("baseUrl is required");
	  }
	  if (!path) {
	    throw new Error("path is required");
	  }
	  if (!_id) {
	    throw new Error("id is required");
	  }
	  if (baseUrl !== "/" && baseUrl.endsWith("/")) {
	    throw new Error("baseUrl must not end with a slash");
	  }
	  const workspace = _workspace === "default" ? undefined : _workspace;
	  const tool = _tool === "default" ? undefined : _tool;
	  const id = getPublishedId(_id);
	  const stringifiedPath = Array.isArray(path) ? toString(jsonPathToStudioPath(path)) : path;
	  const searchParams = new URLSearchParams({
	    baseUrl,
	    id,
	    type,
	    path: stringifiedPath
	  });
	  if (workspace) {
	    searchParams.set("workspace", workspace);
	  }
	  if (tool) {
	    searchParams.set("tool", tool);
	  }
	  const segments = [baseUrl === "/" ? "" : baseUrl];
	  if (workspace) {
	    segments.push(workspace);
	  }
	  const routerParams = [
	    "mode=presentation",
	    "id=".concat(id),
	    "type=".concat(type),
	    "path=".concat(encodeURIComponent(stringifiedPath))
	  ];
	  if (tool) {
	    routerParams.push("tool=".concat(tool));
	  }
	  segments.push("intent", "edit", "".concat(routerParams.join(";"), "?").concat(searchParams));
	  return segments.join("/");
	}

	function resolveEditInfo(options) {
	  const { resultSourceMap: csm, resultPath } = options;
	  const { mapping, pathSuffix } = resolveMapping(resultPath, csm) || {};
	  if (!mapping) {
	    return undefined;
	  }
	  if (mapping.source.type === "literal") {
	    return undefined;
	  }
	  if (mapping.source.type === "unknown") {
	    return undefined;
	  }
	  const sourceDoc = csm.documents[mapping.source.document];
	  const sourcePath = csm.paths[mapping.source.path];
	  if (sourceDoc && sourcePath) {
	    const { baseUrl, workspace, tool } = resolveStudioBaseRoute(
	      typeof options.studioUrl === "function" ? options.studioUrl(sourceDoc) : options.studioUrl
	    );
	    if (!baseUrl)
	      return undefined;
	    const { _id, _type } = sourceDoc;
	    return {
	      baseUrl,
	      workspace,
	      tool,
	      id: _id,
	      type: _type,
	      path: parseJsonPath(sourcePath + pathSuffix)
	    };
	  }
	  return undefined;
	}
	function resolveStudioBaseRoute(studioUrl) {
	  let baseUrl = typeof studioUrl === "string" ? studioUrl : studioUrl.baseUrl;
	  if (baseUrl !== "/") {
	    baseUrl = baseUrl.replace(/\/$/, "");
	  }
	  if (typeof studioUrl === "string") {
	    return { baseUrl };
	  }
	  return { ...studioUrl, baseUrl };
	}

	resolveEditInfoDELeeJBE.DRAFTS_PREFIX = DRAFTS_PREFIX;
	resolveEditInfoDELeeJBE.createEditUrl = createEditUrl;
	resolveEditInfoDELeeJBE.get = get;
	resolveEditInfoDELeeJBE.getPublishedId = getPublishedId;
	resolveEditInfoDELeeJBE.jsonPath = jsonPath;
	resolveEditInfoDELeeJBE.jsonPathToStudioPath = jsonPathToStudioPath;
	resolveEditInfoDELeeJBE.parseJsonPath = parseJsonPath;
	resolveEditInfoDELeeJBE.reKeySegment = reKeySegment;
	resolveEditInfoDELeeJBE.resolveEditInfo = resolveEditInfo;
	resolveEditInfoDELeeJBE.resolveMapping = resolveMapping;
	resolveEditInfoDELeeJBE.resolveStudioBaseRoute = resolveStudioBaseRoute;
	resolveEditInfoDELeeJBE.studioPath = studioPath;
	resolveEditInfoDELeeJBE.studioPathToJsonPath = studioPathToJsonPath;
	resolveEditInfoDELeeJBE.toString = toString;
	resolveEditInfoDELeeJBE.walkMap = walkMap;
	
	return resolveEditInfoDELeeJBE;
}

var hasRequiredStegaEncodeSourceMapZDmZYDbM;

function requireStegaEncodeSourceMapZDmZYDbM () {
	if (hasRequiredStegaEncodeSourceMapZDmZYDbM) return stegaEncodeSourceMapZDmZYDbM;
	hasRequiredStegaEncodeSourceMapZDmZYDbM = 1;

	var nodeMiddleware = /*@__PURE__*/ requireNodeMiddlewareGh18jsRe();
	var resolveEditInfo = /*@__PURE__*/ requireResolveEditInfoDELeeJBE();

	function encodeIntoResult(result, csm, encoder) {
	  return resolveEditInfo.walkMap(result, (value, path) => {
	    if (typeof value !== "string") {
	      return value;
	    }
	    const resolveMappingResult = resolveEditInfo.resolveMapping(path, csm);
	    if (!resolveMappingResult) {
	      return value;
	    }
	    const { mapping, matchedPath } = resolveMappingResult;
	    if (mapping.type !== "value") {
	      return value;
	    }
	    if (mapping.source.type !== "documentValue") {
	      return value;
	    }
	    const sourceDocument = csm.documents[mapping.source.document];
	    const sourcePath = csm.paths[mapping.source.path];
	    const matchPathSegments = resolveEditInfo.parseJsonPath(matchedPath);
	    const sourcePathSegments = resolveEditInfo.parseJsonPath(sourcePath);
	    const fullSourceSegments = sourcePathSegments.concat(path.slice(matchPathSegments.length));
	    return encoder({
	      sourcePath: fullSourceSegments,
	      sourceDocument,
	      resultPath: path,
	      value
	    });
	  });
	}

	const filterDefault = ({ sourcePath, value }) => {
	  if (isValidDate(value) || isValidURL(value)) {
	    return false;
	  }
	  const endPath = sourcePath.at(-1);
	  if (sourcePath.at(-2) === "slug" && endPath === "current") {
	    return false;
	  }
	  if (typeof endPath === "string" && endPath.startsWith("_")) {
	    return false;
	  }
	  if (typeof endPath === "number" && sourcePath.at(-2) === "marks") {
	    return false;
	  }
	  if (endPath === "href" && typeof sourcePath.at(-2) === "number" && sourcePath.at(-3) === "markDefs") {
	    return false;
	  }
	  if (endPath === "style" || endPath === "listItem") {
	    return false;
	  }
	  if (sourcePath.some(
	    (path) => path === "meta" || path === "metadata" || path === "openGraph" || path === "seo"
	  )) {
	    return false;
	  }
	  if (typeof endPath === "string" && denylist.has(endPath)) {
	    return false;
	  }
	  return true;
	};
	const denylist = /* @__PURE__ */ new Set([
	  "color",
	  "colour",
	  "currency",
	  "email",
	  "format",
	  "gid",
	  "hex",
	  "href",
	  "hsl",
	  "hsla",
	  "icon",
	  "id",
	  "index",
	  "key",
	  "language",
	  "layout",
	  "link",
	  "linkAction",
	  "locale",
	  "lqip",
	  "page",
	  "path",
	  "ref",
	  "rgb",
	  "rgba",
	  "route",
	  "secret",
	  "slug",
	  "status",
	  "tag",
	  "template",
	  "theme",
	  "type",
	  "unit",
	  "url",
	  "username",
	  "variant",
	  "website"
	]);
	function isValidDate(dateString) {
	  return /^\d{4}-\d{2}-\d{2}/.test(dateString) ? Boolean(Date.parse(dateString)) : false;
	}
	function isValidURL(url) {
	  try {
	    new URL(url, url.startsWith("/") ? "https://acme.com" : void 0);
	  } catch {
	    return false;
	  }
	  return true;
	}

	const TRUNCATE_LENGTH = 20;
	function stegaEncodeSourceMap(result, resultSourceMap, config) {
	  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
	  const { filter, logger, enabled } = config;
	  if (!enabled) {
	    const msg = "config.enabled must be true, don't call this function otherwise";
	    (_a = logger == null ? undefined : logger.error) == null ? undefined : _a.call(logger, "[@sanity/client/stega]: ".concat(msg), { result, resultSourceMap, config });
	    throw new TypeError(msg);
	  }
	  if (!resultSourceMap) {
	    (_b = logger == null ? undefined : logger.error) == null ? undefined : _b.call(logger, "[@sanity/client/stega]: Missing Content Source Map from response body", {
	      result,
	      resultSourceMap,
	      config
	    });
	    return result;
	  }
	  if (!config.studioUrl) {
	    const msg = "config.studioUrl must be defined";
	    (_c = logger == null ? undefined : logger.error) == null ? undefined : _c.call(logger, "[@sanity/client/stega]: ".concat(msg), { result, resultSourceMap, config });
	    throw new TypeError(msg);
	  }
	  const report = {
	    encoded: [],
	    skipped: []
	  };
	  const resultWithStega = encodeIntoResult(
	    result,
	    resultSourceMap,
	    ({ sourcePath, sourceDocument, resultPath, value }) => {
	      if ((typeof filter === "function" ? filter({ sourcePath, resultPath, filterDefault, sourceDocument, value }) : filterDefault({ sourcePath, value })) === false) {
	        if (logger) {
	          report.skipped.push({
	            path: prettyPathForLogging(sourcePath),
	            value: "".concat(value.slice(0, TRUNCATE_LENGTH)).concat(value.length > TRUNCATE_LENGTH ? "..." : ""),
	            length: value.length
	          });
	        }
	        return value;
	      }
	      if (logger) {
	        report.encoded.push({
	          path: prettyPathForLogging(sourcePath),
	          value: "".concat(value.slice(0, TRUNCATE_LENGTH)).concat(value.length > TRUNCATE_LENGTH ? "..." : ""),
	          length: value.length
	        });
	      }
	      const { baseUrl, workspace, tool } = resolveEditInfo.resolveStudioBaseRoute(
	        typeof config.studioUrl === "function" ? config.studioUrl(sourceDocument) : config.studioUrl
	      );
	      if (!baseUrl)
	        return value;
	      const { _id: id, _type: type } = sourceDocument;
	      return nodeMiddleware.b(
	        value,
	        {
	          origin: "sanity.io",
	          href: resolveEditInfo.createEditUrl({
	            baseUrl,
	            workspace,
	            tool,
	            id,
	            type,
	            path: sourcePath
	          })
	        },
	        // We use custom logic to determine if we should skip encoding
	        false
	      );
	    }
	  );
	  if (logger) {
	    const isSkipping = report.skipped.length;
	    const isEncoding = report.encoded.length;
	    if (isSkipping || isEncoding) {
	      (_d = (logger == null ? undefined : logger.groupCollapsed) || logger.log) == null ? undefined : _d(
	        "[@sanity/client/stega]: Encoding source map into result"
	      );
	      (_e = logger.log) == null ? undefined : _e.call(
	        logger,
	        "[@sanity/client/stega]: Paths encoded: ".concat(report.encoded.length, ", skipped: ").concat(report.skipped.length)
	      );
	    }
	    if (report.encoded.length > 0) {
	      (_f = logger == null ? undefined : logger.log) == null ? undefined : _f.call(logger, "[@sanity/client/stega]: Table of encoded paths");
	      (_g = (logger == null ? undefined : logger.table) || logger.log) == null ? undefined : _g(report.encoded);
	    }
	    if (report.skipped.length > 0) {
	      const skipped = /* @__PURE__ */ new Set();
	      for (const { path } of report.skipped) {
	        skipped.add(path.replace(resolveEditInfo.reKeySegment, "0").replace(/\[\d+\]/g, "[]"));
	      }
	      (_h = logger == null ? undefined : logger.log) == null ? undefined : _h.call(logger, "[@sanity/client/stega]: List of skipped paths", [...skipped.values()]);
	    }
	    if (isSkipping || isEncoding) {
	      (_i = logger == null ? undefined : logger.groupEnd) == null ? undefined : _i.call(logger);
	    }
	  }
	  return resultWithStega;
	}
	function prettyPathForLogging(path) {
	  return resolveEditInfo.toString(resolveEditInfo.jsonPathToStudioPath(path));
	}

	var stegaEncodeSourceMap$1 = /*#__PURE__*/Object.freeze({
	  __proto__: null,
	  stegaEncodeSourceMap: stegaEncodeSourceMap
	});

	stegaEncodeSourceMapZDmZYDbM.encodeIntoResult = encodeIntoResult;
	stegaEncodeSourceMapZDmZYDbM.stegaEncodeSourceMap = stegaEncodeSourceMap;
	stegaEncodeSourceMapZDmZYDbM.stegaEncodeSourceMap$1 = stegaEncodeSourceMap$1;
	
	return stegaEncodeSourceMapZDmZYDbM;
}

var hasRequiredNodeMiddlewareGh18jsRe;

function requireNodeMiddlewareGh18jsRe () {
	if (hasRequiredNodeMiddlewareGh18jsRe) return nodeMiddlewareGh18jsRe;
	hasRequiredNodeMiddlewareGh18jsRe = 1;

	var getIt = require$$0;
	var middleware$1 = require$$1;
	var rxjs = require$$2;
	var operators = require$$3;

	const MAX_ITEMS_IN_ERROR_MESSAGE = 5;
	class ClientError extends Error {
	  constructor(res) {
	    const props = extractErrorProps(res);
	    super(props.message);
	    this.statusCode = 400;
	    Object.assign(this, props);
	  }
	}
	class ServerError extends Error {
	  constructor(res) {
	    const props = extractErrorProps(res);
	    super(props.message);
	    this.statusCode = 500;
	    Object.assign(this, props);
	  }
	}
	function extractErrorProps(res) {
	  const body = res.body;
	  const props = {
	    response: res,
	    statusCode: res.statusCode,
	    responseBody: stringifyBody(body, res),
	    message: "",
	    details: undefined
	  };
	  if (body.error && body.message) {
	    props.message = "".concat(body.error, " - ").concat(body.message);
	    return props;
	  }
	  if (isMutationError(body)) {
	    const allItems = body.error.items || [];
	    const items = allItems.slice(0, MAX_ITEMS_IN_ERROR_MESSAGE).map((item) => {
	      var _a;
	      return (_a = item.error) == null ? undefined : _a.description;
	    }).filter(Boolean);
	    let itemsStr = items.length ? ":\n- ".concat(items.join("\n- ")) : "";
	    if (allItems.length > MAX_ITEMS_IN_ERROR_MESSAGE) {
	      itemsStr += "\n...and ".concat(allItems.length - MAX_ITEMS_IN_ERROR_MESSAGE, " more");
	    }
	    props.message = "".concat(body.error.description).concat(itemsStr);
	    props.details = body.error;
	    return props;
	  }
	  if (body.error && body.error.description) {
	    props.message = body.error.description;
	    props.details = body.error;
	    return props;
	  }
	  props.message = body.error || body.message || httpErrorMessage(res);
	  return props;
	}
	function isMutationError(body) {
	  return isPlainObject(body) && isPlainObject(body.error) && body.error.type === "mutationError" && typeof body.error.description === "string";
	}
	function isPlainObject(obj) {
	  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
	}
	function httpErrorMessage(res) {
	  const statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : "";
	  return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage);
	}
	function stringifyBody(body, res) {
	  const contentType = (res.headers["content-type"] || "").toLowerCase();
	  const isJson = contentType.indexOf("application/json") !== -1;
	  return isJson ? JSON.stringify(body, null, 2) : body;
	}

	const httpError = {
	  onResponse: (res) => {
	    if (res.statusCode >= 500) {
	      throw new ServerError(res);
	    } else if (res.statusCode >= 400) {
	      throw new ClientError(res);
	    }
	    return res;
	  }
	};
	const printWarnings = {
	  onResponse: (res) => {
	    const warn = res.headers["x-sanity-warning"];
	    const warnings = Array.isArray(warn) ? warn : [warn];
	    warnings.filter(Boolean).forEach((msg) => console.warn(msg));
	    return res;
	  }
	};
	function defineHttpRequest(envMiddleware, {
	  maxRetries = 5,
	  retryDelay
	}) {
	  const request = getIt.getIt([
	    maxRetries > 0 ? middleware$1.retry({
	      // eslint-disable-next-line @typescript-eslint/no-explicit-any
	      retryDelay,
	      // This option is typed incorrectly in get-it.
	      maxRetries,
	      shouldRetry
	    }) : {},
	    ...envMiddleware,
	    printWarnings,
	    middleware$1.jsonRequest(),
	    middleware$1.jsonResponse(),
	    middleware$1.progress(),
	    httpError,
	    middleware$1.observable({ implementation: rxjs.Observable })
	  ]);
	  function httpRequest(options, requester = request) {
	    return requester({ maxRedirects: 0, ...options });
	  }
	  httpRequest.defaultRequester = request;
	  return httpRequest;
	}
	function shouldRetry(err, attempt, options) {
	  const isSafe = options.method === "GET" || options.method === "HEAD";
	  const uri = options.uri || options.url;
	  const isQuery = uri.startsWith("/data/query");
	  const isRetriableResponse = err.response && (err.response.statusCode === 429 || err.response.statusCode === 502 || err.response.statusCode === 503);
	  if ((isSafe || isQuery) && isRetriableResponse)
	    return true;
	  return middleware$1.retry.shouldRetry(err, attempt, options);
	}

	function getSelection(sel) {
	  if (typeof sel === "string" || Array.isArray(sel)) {
	    return { id: sel };
	  }
	  if (typeof sel === "object" && sel !== null && "query" in sel && typeof sel.query === "string") {
	    return "params" in sel && typeof sel.params === "object" && sel.params !== null ? { query: sel.query, params: sel.params } : { query: sel.query };
	  }
	  const selectionOpts = [
	    "* Document ID (<docId>)",
	    "* Array of document IDs",
	    "* Object containing `query`"
	  ].join("\n");
	  throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
	}

	const VALID_ASSET_TYPES = ["image", "file"];
	const VALID_INSERT_LOCATIONS = ["before", "after", "replace"];
	const dataset = (name) => {
	  if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(name)) {
	    throw new Error(
	      "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters"
	    );
	  }
	};
	const projectId = (id) => {
	  if (!/^[-a-z0-9]+$/i.test(id)) {
	    throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
	  }
	};
	const validateAssetType = (type) => {
	  if (VALID_ASSET_TYPES.indexOf(type) === -1) {
	    throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(", ")));
	  }
	};
	const validateObject = (op, val) => {
	  if (val === null || typeof val !== "object" || Array.isArray(val)) {
	    throw new Error("".concat(op, "() takes an object of properties"));
	  }
	};
	const validateDocumentId = (op, id) => {
	  if (typeof id !== "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(id) || id.includes("..")) {
	    throw new Error("".concat(op, '(): "').concat(id, '" is not a valid document ID'));
	  }
	};
	const requireDocumentId = (op, doc) => {
	  if (!doc._id) {
	    throw new Error("".concat(op, '() requires that the document contains an ID ("_id" property)'));
	  }
	  validateDocumentId(op, doc._id);
	};
	const validateInsert = (at, selector, items) => {
	  const signature = "insert(at, selector, items)";
	  if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
	    const valid = VALID_INSERT_LOCATIONS.map((loc) => '"'.concat(loc, '"')).join(", ");
	    throw new Error("".concat(signature, ' takes an "at"-argument which is one of: ').concat(valid));
	  }
	  if (typeof selector !== "string") {
	    throw new Error("".concat(signature, ' takes a "selector"-argument which must be a string'));
	  }
	  if (!Array.isArray(items)) {
	    throw new Error("".concat(signature, ' takes an "items"-argument which must be an array'));
	  }
	};
	const hasDataset = (config) => {
	  if (!config.dataset) {
	    throw new Error("`dataset` must be provided to perform queries");
	  }
	  return config.dataset || "";
	};
	const requestTag = (tag) => {
	  if (typeof tag !== "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag)) {
	    throw new Error(
	      "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long."
	    );
	  }
	  return tag;
	};

	var __accessCheck$6 = (obj, member, msg) => {
	  if (!member.has(obj))
	    throw TypeError("Cannot " + msg);
	};
	var __privateGet$6 = (obj, member, getter) => {
	  __accessCheck$6(obj, member, "read from private field");
	  return getter ? getter.call(obj) : member.get(obj);
	};
	var __privateAdd$6 = (obj, member, value) => {
	  if (member.has(obj))
	    throw TypeError("Cannot add the same private member more than once");
	  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	};
	var __privateSet$6 = (obj, member, value, setter) => {
	  __accessCheck$6(obj, member, "write to private field");
	  member.set(obj, value);
	  return value;
	};
	var _client$5, _client2$5;
	class BasePatch {
	  constructor(selection, operations = {}) {
	    this.selection = selection;
	    this.operations = operations;
	  }
	  /**
	   * Sets the given attributes to the document. Does NOT merge objects.
	   * The operation is added to the current patch, ready to be commited by `commit()`
	   *
	   * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
	   */
	  set(attrs) {
	    return this._assign("set", attrs);
	  }
	  /**
	   * Sets the given attributes to the document if they are not currently set. Does NOT merge objects.
	   * The operation is added to the current patch, ready to be commited by `commit()`
	   *
	   * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
	   */
	  setIfMissing(attrs) {
	    return this._assign("setIfMissing", attrs);
	  }
	  /**
	   * Performs a "diff-match-patch" operation on the string attributes provided.
	   * The operation is added to the current patch, ready to be commited by `commit()`
	   *
	   * @param attrs - Attributes to perform operation on. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "dmp"\}
	   */
	  diffMatchPatch(attrs) {
	    validateObject("diffMatchPatch", attrs);
	    return this._assign("diffMatchPatch", attrs);
	  }
	  /**
	   * Unsets the attribute paths provided.
	   * The operation is added to the current patch, ready to be commited by `commit()`
	   *
	   * @param attrs - Attribute paths to unset.
	   */
	  unset(attrs) {
	    if (!Array.isArray(attrs)) {
	      throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
	    }
	    this.operations = Object.assign({}, this.operations, { unset: attrs });
	    return this;
	  }
	  /**
	   * Increment a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
	   *
	   * @param attrs - Object of attribute paths to increment, values representing the number to increment by.
	   */
	  inc(attrs) {
	    return this._assign("inc", attrs);
	  }
	  /**
	   * Decrement a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
	   *
	   * @param attrs - Object of attribute paths to decrement, values representing the number to decrement by.
	   */
	  dec(attrs) {
	    return this._assign("dec", attrs);
	  }
	  /**
	   * Provides methods for modifying arrays, by inserting, appending and replacing elements via a JSONPath expression.
	   *
	   * @param at - Location to insert at, relative to the given selector, or 'replace' the matched path
	   * @param selector - JSONPath expression, eg `comments[-1]` or `blocks[_key=="abc123"]`
	   * @param items - Array of items to insert/replace
	   */
	  insert(at, selector, items) {
	    validateInsert(at, selector, items);
	    return this._assign("insert", { [at]: selector, items });
	  }
	  /**
	   * Append the given items to the array at the given JSONPath
	   *
	   * @param selector - Attribute/path to append to, eg `comments` or `person.hobbies`
	   * @param items - Array of items to append to the array
	   */
	  append(selector, items) {
	    return this.insert("after", "".concat(selector, "[-1]"), items);
	  }
	  /**
	   * Prepend the given items to the array at the given JSONPath
	   *
	   * @param selector - Attribute/path to prepend to, eg `comments` or `person.hobbies`
	   * @param items - Array of items to prepend to the array
	   */
	  prepend(selector, items) {
	    return this.insert("before", "".concat(selector, "[0]"), items);
	  }
	  /**
	   * Change the contents of an array by removing existing elements and/or adding new elements.
	   *
	   * @param selector - Attribute or JSONPath expression for array
	   * @param start - Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.x
	   * @param deleteCount - An integer indicating the number of old array elements to remove.
	   * @param items - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
	   */
	  splice(selector, start, deleteCount, items) {
	    const delAll = typeof deleteCount === "undefined" || deleteCount === -1;
	    const startIndex = start < 0 ? start - 1 : start;
	    const delCount = delAll ? -1 : Math.max(0, start + deleteCount);
	    const delRange = startIndex < 0 && delCount >= 0 ? "" : delCount;
	    const rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
	    return this.insert("replace", rangeSelector, items || []);
	  }
	  /**
	   * Adds a revision clause, preventing the document from being patched if the `_rev` property does not match the given value
	   *
	   * @param rev - Revision to lock the patch to
	   */
	  ifRevisionId(rev) {
	    this.operations.ifRevisionID = rev;
	    return this;
	  }
	  /**
	   * Return a plain JSON representation of the patch
	   */
	  serialize() {
	    return { ...getSelection(this.selection), ...this.operations };
	  }
	  /**
	   * Return a plain JSON representation of the patch
	   */
	  toJSON() {
	    return this.serialize();
	  }
	  /**
	   * Clears the patch of all operations
	   */
	  reset() {
	    this.operations = {};
	    return this;
	  }
	  _assign(op, props, merge = true) {
	    validateObject(op, props);
	    this.operations = Object.assign({}, this.operations, {
	      [op]: Object.assign({}, merge && this.operations[op] || {}, props)
	    });
	    return this;
	  }
	  _set(op, props) {
	    return this._assign(op, props, false);
	  }
	}
	const _ObservablePatch = class _ObservablePatch extends BasePatch {
	  constructor(selection, operations, client) {
	    super(selection, operations);
	    __privateAdd$6(this, _client$5, undefined);
	    __privateSet$6(this, _client$5, client);
	  }
	  /**
	   * Clones the patch
	   */
	  clone() {
	    return new _ObservablePatch(this.selection, { ...this.operations }, __privateGet$6(this, _client$5));
	  }
	  commit(options) {
	    if (!__privateGet$6(this, _client$5)) {
	      throw new Error(
	        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
	      );
	    }
	    const returnFirst = typeof this.selection === "string";
	    const opts = Object.assign({ returnFirst, returnDocuments: true }, options);
	    return __privateGet$6(this, _client$5).mutate({ patch: this.serialize() }, opts);
	  }
	};
	_client$5 = new WeakMap();
	let ObservablePatch = _ObservablePatch;
	const _Patch = class _Patch extends BasePatch {
	  constructor(selection, operations, client) {
	    super(selection, operations);
	    __privateAdd$6(this, _client2$5, undefined);
	    __privateSet$6(this, _client2$5, client);
	  }
	  /**
	   * Clones the patch
	   */
	  clone() {
	    return new _Patch(this.selection, { ...this.operations }, __privateGet$6(this, _client2$5));
	  }
	  commit(options) {
	    if (!__privateGet$6(this, _client2$5)) {
	      throw new Error(
	        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
	      );
	    }
	    const returnFirst = typeof this.selection === "string";
	    const opts = Object.assign({ returnFirst, returnDocuments: true }, options);
	    return __privateGet$6(this, _client2$5).mutate({ patch: this.serialize() }, opts);
	  }
	};
	_client2$5 = new WeakMap();
	let Patch = _Patch;

	var __accessCheck$5 = (obj, member, msg) => {
	  if (!member.has(obj))
	    throw TypeError("Cannot " + msg);
	};
	var __privateGet$5 = (obj, member, getter) => {
	  __accessCheck$5(obj, member, "read from private field");
	  return getter ? getter.call(obj) : member.get(obj);
	};
	var __privateAdd$5 = (obj, member, value) => {
	  if (member.has(obj))
	    throw TypeError("Cannot add the same private member more than once");
	  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	};
	var __privateSet$5 = (obj, member, value, setter) => {
	  __accessCheck$5(obj, member, "write to private field");
	  member.set(obj, value);
	  return value;
	};
	var _client$4, _client2$4;
	const defaultMutateOptions = { returnDocuments: false };
	class BaseTransaction {
	  constructor(operations = [], transactionId) {
	    this.operations = operations;
	    this.trxId = transactionId;
	  }
	  /**
	   * Creates a new Sanity document. If `_id` is provided and already exists, the mutation will fail. If no `_id` is given, one will automatically be generated by the database.
	   * The operation is added to the current transaction, ready to be commited by `commit()`
	   *
	   * @param doc - Document to create. Requires a `_type` property.
	   */
	  create(doc) {
	    validateObject("create", doc);
	    return this._add({ create: doc });
	  }
	  /**
	   * Creates a new Sanity document. If a document with the same `_id` already exists, the create operation will be ignored.
	   * The operation is added to the current transaction, ready to be commited by `commit()`
	   *
	   * @param doc - Document to create if it does not already exist. Requires `_id` and `_type` properties.
	   */
	  createIfNotExists(doc) {
	    const op = "createIfNotExists";
	    validateObject(op, doc);
	    requireDocumentId(op, doc);
	    return this._add({ [op]: doc });
	  }
	  /**
	   * Creates a new Sanity document, or replaces an existing one if the same `_id` is already used.
	   * The operation is added to the current transaction, ready to be commited by `commit()`
	   *
	   * @param doc - Document to create or replace. Requires `_id` and `_type` properties.
	   */
	  createOrReplace(doc) {
	    const op = "createOrReplace";
	    validateObject(op, doc);
	    requireDocumentId(op, doc);
	    return this._add({ [op]: doc });
	  }
	  /**
	   * Deletes the document with the given document ID
	   * The operation is added to the current transaction, ready to be commited by `commit()`
	   *
	   * @param documentId - Document ID to delete
	   */
	  delete(documentId) {
	    validateDocumentId("delete", documentId);
	    return this._add({ delete: { id: documentId } });
	  }
	  transactionId(id) {
	    if (!id) {
	      return this.trxId;
	    }
	    this.trxId = id;
	    return this;
	  }
	  /**
	   * Return a plain JSON representation of the transaction
	   */
	  serialize() {
	    return [...this.operations];
	  }
	  /**
	   * Return a plain JSON representation of the transaction
	   */
	  toJSON() {
	    return this.serialize();
	  }
	  /**
	   * Clears the transaction of all operations
	   */
	  reset() {
	    this.operations = [];
	    return this;
	  }
	  _add(mut) {
	    this.operations.push(mut);
	    return this;
	  }
	}
	const _Transaction = class _Transaction extends BaseTransaction {
	  constructor(operations, client, transactionId) {
	    super(operations, transactionId);
	    __privateAdd$5(this, _client$4, undefined);
	    __privateSet$5(this, _client$4, client);
	  }
	  /**
	   * Clones the transaction
	   */
	  clone() {
	    return new _Transaction([...this.operations], __privateGet$5(this, _client$4), this.trxId);
	  }
	  commit(options) {
	    if (!__privateGet$5(this, _client$4)) {
	      throw new Error(
	        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
	      );
	    }
	    return __privateGet$5(this, _client$4).mutate(
	      this.serialize(),
	      Object.assign({ transactionId: this.trxId }, defaultMutateOptions, options || {})
	    );
	  }
	  patch(patchOrDocumentId, patchOps) {
	    const isBuilder = typeof patchOps === "function";
	    const isPatch = typeof patchOrDocumentId !== "string" && patchOrDocumentId instanceof Patch;
	    if (isPatch) {
	      return this._add({ patch: patchOrDocumentId.serialize() });
	    }
	    if (isBuilder) {
	      const patch = patchOps(new Patch(patchOrDocumentId, {}, __privateGet$5(this, _client$4)));
	      if (!(patch instanceof Patch)) {
	        throw new Error("function passed to `patch()` must return the patch");
	      }
	      return this._add({ patch: patch.serialize() });
	    }
	    return this._add({ patch: { id: patchOrDocumentId, ...patchOps } });
	  }
	};
	_client$4 = new WeakMap();
	let Transaction = _Transaction;
	const _ObservableTransaction = class _ObservableTransaction extends BaseTransaction {
	  constructor(operations, client, transactionId) {
	    super(operations, transactionId);
	    __privateAdd$5(this, _client2$4, undefined);
	    __privateSet$5(this, _client2$4, client);
	  }
	  /**
	   * Clones the transaction
	   */
	  clone() {
	    return new _ObservableTransaction([...this.operations], __privateGet$5(this, _client2$4), this.trxId);
	  }
	  commit(options) {
	    if (!__privateGet$5(this, _client2$4)) {
	      throw new Error(
	        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
	      );
	    }
	    return __privateGet$5(this, _client2$4).mutate(
	      this.serialize(),
	      Object.assign({ transactionId: this.trxId }, defaultMutateOptions, options || {})
	    );
	  }
	  patch(patchOrDocumentId, patchOps) {
	    const isBuilder = typeof patchOps === "function";
	    const isPatch = typeof patchOrDocumentId !== "string" && patchOrDocumentId instanceof ObservablePatch;
	    if (isPatch) {
	      return this._add({ patch: patchOrDocumentId.serialize() });
	    }
	    if (isBuilder) {
	      const patch = patchOps(new ObservablePatch(patchOrDocumentId, {}, __privateGet$5(this, _client2$4)));
	      if (!(patch instanceof ObservablePatch)) {
	        throw new Error("function passed to `patch()` must return the patch");
	      }
	      return this._add({ patch: patch.serialize() });
	    }
	    return this._add({ patch: { id: patchOrDocumentId, ...patchOps } });
	  }
	};
	_client2$4 = new WeakMap();
	let ObservableTransaction = _ObservableTransaction;

	const BASE_URL = "https://www.sanity.io/help/";
	function generateHelpUrl(slug) {
	  return BASE_URL + slug;
	}

	function once(fn) {
	  let didCall = false;
	  let returnValue;
	  return (...args) => {
	    if (didCall) {
	      return returnValue;
	    }
	    returnValue = fn(...args);
	    didCall = true;
	    return returnValue;
	  };
	}

	const createWarningPrinter = (message) => (
	  // eslint-disable-next-line no-console
	  once((...args) => console.warn(message.join(" "), ...args))
	);
	const printCdnWarning = createWarningPrinter([
	  "Since you haven't set a value for `useCdn`, we will deliver content using our",
	  "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
	  "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."
	]);
	const printCdnPreviewDraftsWarning = createWarningPrinter([
	  "The Sanity client is configured with the `perspective` set to `previewDrafts`, which doesn't support the API-CDN.",
	  "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."
	]);
	const printBrowserTokenWarning = createWarningPrinter([
	  "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
	  "See ".concat(generateHelpUrl(
	    "js-client-browser-token"
	  ), " for more information and how to hide this warning.")
	]);
	const printNoApiVersionSpecifiedWarning = createWarningPrinter([
	  "Using the Sanity client without specifying an API version is deprecated.",
	  "See ".concat(generateHelpUrl("js-client-api-version"))
	]);
	const printNoDefaultExport = createWarningPrinter([
	  "The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."
	]);

	const defaultCdnHost = "apicdn.sanity.io";
	const defaultConfig = {
	  apiHost: "https://api.sanity.io",
	  apiVersion: "1",
	  useProjectHostname: true,
	  stega: { enabled: false }
	};
	const LOCALHOSTS = ["localhost", "127.0.0.1", "0.0.0.0"];
	const isLocal = (host) => LOCALHOSTS.indexOf(host) !== -1;
	const validateApiVersion = function validateApiVersion2(apiVersion) {
	  if (apiVersion === "1" || apiVersion === "X") {
	    return;
	  }
	  const apiDate = new Date(apiVersion);
	  const apiVersionValid = /^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0;
	  if (!apiVersionValid) {
	    throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
	  }
	};
	const validateApiPerspective = function validateApiPerspective2(perspective) {
	  switch (perspective) {
	    case "previewDrafts":
	    case "published":
	    case "raw":
	      return;
	    default:
	      throw new TypeError(
	        "Invalid API perspective string, expected `published`, `previewDrafts` or `raw`"
	      );
	  }
	};
	const initConfig = (config, prevConfig) => {
	  const specifiedConfig = {
	    ...prevConfig,
	    ...config,
	    stega: {
	      ...typeof prevConfig.stega === "boolean" ? { enabled: prevConfig.stega } : prevConfig.stega || defaultConfig.stega,
	      ...typeof config.stega === "boolean" ? { enabled: config.stega } : config.stega || {}
	    }
	  };
	  if (!specifiedConfig.apiVersion) {
	    printNoApiVersionSpecifiedWarning();
	  }
	  const newConfig = {
	    ...defaultConfig,
	    ...specifiedConfig
	  };
	  const projectBased = newConfig.useProjectHostname;
	  if (typeof Promise === "undefined") {
	    const helpUrl = generateHelpUrl("js-client-promise-polyfill");
	    throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
	  }
	  if (projectBased && !newConfig.projectId) {
	    throw new Error("Configuration must contain `projectId`");
	  }
	  if (typeof newConfig.perspective === "string") {
	    validateApiPerspective(newConfig.perspective);
	  }
	  if ("encodeSourceMap" in newConfig) {
	    throw new Error(
	      "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?"
	    );
	  }
	  if ("encodeSourceMapAtPath" in newConfig) {
	    throw new Error(
	      "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?"
	    );
	  }
	  if (typeof newConfig.stega.enabled !== "boolean") {
	    throw new Error("stega.enabled must be a boolean, received ".concat(newConfig.stega.enabled));
	  }
	  if (newConfig.stega.enabled && newConfig.stega.studioUrl === undefined) {
	    throw new Error("stega.studioUrl must be defined when stega.enabled is true");
	  }
	  if (newConfig.stega.enabled && typeof newConfig.stega.studioUrl !== "string" && typeof newConfig.stega.studioUrl !== "function") {
	    throw new Error(
	      "stega.studioUrl must be a string or a function, received ".concat(newConfig.stega.studioUrl)
	    );
	  }
	  const isBrowser = typeof window !== "undefined" && window.location && window.location.hostname;
	  const isLocalhost = isBrowser && isLocal(window.location.hostname);
	  if (isBrowser && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true) {
	    printBrowserTokenWarning();
	  } else if (typeof newConfig.useCdn === "undefined") {
	    printCdnWarning();
	  }
	  if (projectBased) {
	    projectId(newConfig.projectId);
	  }
	  if (newConfig.dataset) {
	    dataset(newConfig.dataset);
	  }
	  if ("requestTagPrefix" in newConfig) {
	    newConfig.requestTagPrefix = newConfig.requestTagPrefix ? requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : undefined;
	  }
	  newConfig.apiVersion = "".concat(newConfig.apiVersion).replace(/^v/, "");
	  newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost;
	  newConfig.useCdn = newConfig.useCdn !== false && !newConfig.withCredentials;
	  validateApiVersion(newConfig.apiVersion);
	  const hostParts = newConfig.apiHost.split("://", 2);
	  const protocol = hostParts[0];
	  const host = hostParts[1];
	  const cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
	  if (newConfig.useProjectHostname) {
	    newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v").concat(newConfig.apiVersion);
	    newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v").concat(newConfig.apiVersion);
	  } else {
	    newConfig.url = "".concat(newConfig.apiHost, "/v").concat(newConfig.apiVersion);
	    newConfig.cdnUrl = newConfig.url;
	  }
	  return newConfig;
	};

	const projectHeader = "X-Sanity-Project-ID";
	function requestOptions(config, overrides = {}) {
	  const headers = {};
	  const token = overrides.token || config.token;
	  if (token) {
	    headers.Authorization = "Bearer ".concat(token);
	  }
	  if (!overrides.useGlobalApi && !config.useProjectHostname && config.projectId) {
	    headers[projectHeader] = config.projectId;
	  }
	  const withCredentials = Boolean(
	    typeof overrides.withCredentials === "undefined" ? config.token || config.withCredentials : overrides.withCredentials
	  );
	  const timeout = typeof overrides.timeout === "undefined" ? config.timeout : overrides.timeout;
	  return Object.assign({}, overrides, {
	    headers: Object.assign({}, headers, overrides.headers || {}),
	    timeout: typeof timeout === "undefined" ? 5 * 60 * 1e3 : timeout,
	    proxy: overrides.proxy || config.proxy,
	    json: true,
	    withCredentials,
	    fetch: typeof overrides.fetch === "object" && typeof config.fetch === "object" ? { ...config.fetch, ...overrides.fetch } : overrides.fetch || config.fetch
	  });
	}

	var s={0:8203,1:8204,2:8205,3:8290,4:8291,5:8288,6:65279,7:8289,8:119155,9:119156,a:119157,b:119158,c:119159,d:119160,e:119161,f:119162},c={0:8203,1:8204,2:8205,3:65279},d=new Array(4).fill(String.fromCodePoint(c[0])).join("");function E(t){let e=JSON.stringify(t);return `${d}${Array.from(e).map(r=>{let n=r.charCodeAt(0);if(n>255)throw new Error(`Only ASCII edit info can be encoded. Error attempting to encode ${e} on character ${r} (${n})`);return Array.from(n.toString(4).padStart(4,"0")).map(o=>String.fromCodePoint(c[o])).join("")}).join("")}`}function I(t){return Number.isNaN(Number(t))?Boolean(Date.parse(t)):false}function x(t){try{new URL(t,t.startsWith("/")?"https://acme.com":void 0);}catch{return false}return true}function b(t,e,r="auto"){return r===true||r==="auto"&&(I(t)||x(t))?t:`${t}${E(e)}`}Object.fromEntries(Object.entries(c).map(t=>t.reverse()));Object.fromEntries(Object.entries(s).map(t=>t.reverse()));var S=`${Object.values(s).map(t=>`\\u{${t.toString(16)}}`).join("")}`,f=new RegExp(`[${S}]{4,}`,"gu");function X(t){var e;return {cleaned:t.replace(f,""),encoded:((e=t.match(f))==null?undefined:e[0])||""}}

	function vercelStegaCleanAll(result) {
	  try {
	    return JSON.parse(
	      JSON.stringify(result, (key, value) => {
	        if (typeof value !== "string")
	          return value;
	        return X(value).cleaned;
	      })
	    );
	  } catch {
	    return result;
	  }
	}

	const encodeQueryString = ({
	  query,
	  params = {},
	  options = {}
	}) => {
	  const searchParams = new URLSearchParams();
	  const { tag, ...opts } = options;
	  if (tag)
	    searchParams.append("tag", tag);
	  searchParams.append("query", query);
	  for (const [key, value] of Object.entries(params)) {
	    searchParams.append("$".concat(key), JSON.stringify(value));
	  }
	  for (const [key, value] of Object.entries(opts)) {
	    if (value)
	      searchParams.append(key, "".concat(value));
	  }
	  return "?".concat(searchParams);
	};

	const excludeFalsey = (param, defValue) => {
	  const value = typeof param === "undefined" ? defValue : param;
	  return param === false ? undefined : value;
	};
	const getMutationQuery = (options = {}) => {
	  return {
	    dryRun: options.dryRun,
	    returnIds: true,
	    returnDocuments: excludeFalsey(options.returnDocuments, true),
	    visibility: options.visibility || "sync",
	    autoGenerateArrayKeys: options.autoGenerateArrayKeys,
	    skipCrossDatasetReferenceValidation: options.skipCrossDatasetReferenceValidation
	  };
	};
	const isResponse = (event) => event.type === "response";
	const getBody = (event) => event.body;
	const indexBy = (docs, attr) => docs.reduce((indexed, doc) => {
	  indexed[attr(doc)] = doc;
	  return indexed;
	}, /* @__PURE__ */ Object.create(null));
	const getQuerySizeLimit = 11264;
	function _fetch(client, httpRequest, _stega, query, _params = {}, options = {}) {
	  const stega = "stega" in options ? {
	    ..._stega || {},
	    ...typeof options.stega === "boolean" ? { enabled: options.stega } : options.stega || {}
	  } : _stega;
	  const params = stega.enabled ? vercelStegaCleanAll(_params) : _params;
	  const mapResponse = options.filterResponse === false ? (res) => res : (res) => res.result;
	  const { cache, next, ...opts } = {
	    // Opt out of setting a `signal` on an internal `fetch` if one isn't provided.
	    // This is necessary in React Server Components to avoid opting out of Request Memoization.
	    useAbortSignal: typeof options.signal !== "undefined",
	    // Set `resultSourceMap' when stega is enabled, as it's required for encoding.
	    resultSourceMap: stega.enabled ? "withKeyArraySelector" : options.resultSourceMap,
	    ...options
	  };
	  const reqOpts = typeof cache !== "undefined" || typeof next !== "undefined" ? { ...opts, fetch: { cache, next } } : opts;
	  const $request = _dataRequest(client, httpRequest, "query", { query, params }, reqOpts);
	  return stega.enabled ? $request.pipe(
	    operators.combineLatestWith(
	      rxjs.from(
	        Promise.resolve().then(function () { return /*@__PURE__*/ requireStegaEncodeSourceMapZDmZYDbM(); }).then(function (n) { return n.stegaEncodeSourceMap$1; }).then(
	          ({ stegaEncodeSourceMap }) => stegaEncodeSourceMap
	        )
	      )
	    ),
	    operators.map(
	      ([res, stegaEncodeSourceMap]) => {
	        const result = stegaEncodeSourceMap(res.result, res.resultSourceMap, stega);
	        return mapResponse({ ...res, result });
	      }
	    )
	  ) : $request.pipe(operators.map(mapResponse));
	}
	function _getDocument(client, httpRequest, id, opts = {}) {
	  const options = { uri: _getDataUrl(client, "doc", id), json: true, tag: opts.tag };
	  return _requestObservable(client, httpRequest, options).pipe(
	    operators.filter(isResponse),
	    operators.map((event) => event.body.documents && event.body.documents[0])
	  );
	}
	function _getDocuments(client, httpRequest, ids, opts = {}) {
	  const options = { uri: _getDataUrl(client, "doc", ids.join(",")), json: true, tag: opts.tag };
	  return _requestObservable(client, httpRequest, options).pipe(
	    operators.filter(isResponse),
	    operators.map((event) => {
	      const indexed = indexBy(event.body.documents || [], (doc) => doc._id);
	      return ids.map((id) => indexed[id] || null);
	    })
	  );
	}
	function _createIfNotExists(client, httpRequest, doc, options) {
	  requireDocumentId("createIfNotExists", doc);
	  return _create(client, httpRequest, doc, "createIfNotExists", options);
	}
	function _createOrReplace(client, httpRequest, doc, options) {
	  requireDocumentId("createOrReplace", doc);
	  return _create(client, httpRequest, doc, "createOrReplace", options);
	}
	function _delete(client, httpRequest, selection, options) {
	  return _dataRequest(
	    client,
	    httpRequest,
	    "mutate",
	    { mutations: [{ delete: getSelection(selection) }] },
	    options
	  );
	}
	function _mutate(client, httpRequest, mutations, options) {
	  let mut;
	  if (mutations instanceof Patch || mutations instanceof ObservablePatch) {
	    mut = { patch: mutations.serialize() };
	  } else if (mutations instanceof Transaction || mutations instanceof ObservableTransaction) {
	    mut = mutations.serialize();
	  } else {
	    mut = mutations;
	  }
	  const muts = Array.isArray(mut) ? mut : [mut];
	  const transactionId = options && options.transactionId || undefined;
	  return _dataRequest(client, httpRequest, "mutate", { mutations: muts, transactionId }, options);
	}
	function _dataRequest(client, httpRequest, endpoint, body, options = {}) {
	  const isMutation = endpoint === "mutate";
	  const isQuery = endpoint === "query";
	  const strQuery = isMutation ? "" : encodeQueryString(body);
	  const useGet = !isMutation && strQuery.length < getQuerySizeLimit;
	  const stringQuery = useGet ? strQuery : "";
	  const returnFirst = options.returnFirst;
	  const { timeout, token, tag, headers } = options;
	  const uri = _getDataUrl(client, endpoint, stringQuery);
	  const reqOptions = {
	    method: useGet ? "GET" : "POST",
	    uri,
	    json: true,
	    body: useGet ? undefined : body,
	    query: isMutation && getMutationQuery(options),
	    timeout,
	    headers,
	    token,
	    tag,
	    perspective: options.perspective,
	    resultSourceMap: options.resultSourceMap,
	    canUseCdn: isQuery,
	    signal: options.signal,
	    fetch: options.fetch,
	    useAbortSignal: options.useAbortSignal,
	    useCdn: options.useCdn
	  };
	  return _requestObservable(client, httpRequest, reqOptions).pipe(
	    operators.filter(isResponse),
	    operators.map(getBody),
	    operators.map((res) => {
	      if (!isMutation) {
	        return res;
	      }
	      const results = res.results || [];
	      if (options.returnDocuments) {
	        return returnFirst ? results[0] && results[0].document : results.map((mut) => mut.document);
	      }
	      const key = returnFirst ? "documentId" : "documentIds";
	      const ids = returnFirst ? results[0] && results[0].id : results.map((mut) => mut.id);
	      return {
	        transactionId: res.transactionId,
	        results,
	        [key]: ids
	      };
	    })
	  );
	}
	function _create(client, httpRequest, doc, op, options = {}) {
	  const mutation = { [op]: doc };
	  const opts = Object.assign({ returnFirst: true, returnDocuments: true }, options);
	  return _dataRequest(client, httpRequest, "mutate", { mutations: [mutation] }, opts);
	}
	function _requestObservable(client, httpRequest, options) {
	  var _a, _b;
	  const uri = options.url || options.uri;
	  const config = client.config();
	  const canUseCdn = typeof options.canUseCdn === "undefined" ? ["GET", "HEAD"].indexOf(options.method || "GET") >= 0 && uri.indexOf("/data/") === 0 : options.canUseCdn;
	  let useCdn = ((_a = options.useCdn) != null ? _a : config.useCdn) && canUseCdn;
	  const tag = options.tag && config.requestTagPrefix ? [config.requestTagPrefix, options.tag].join(".") : options.tag || config.requestTagPrefix;
	  if (tag && options.tag !== null) {
	    options.query = { tag: requestTag(tag), ...options.query };
	  }
	  if (["GET", "HEAD", "POST"].indexOf(options.method || "GET") >= 0 && uri.indexOf("/data/query/") === 0) {
	    const resultSourceMap = (_b = options.resultSourceMap) != null ? _b : config.resultSourceMap;
	    if (resultSourceMap !== undefined && resultSourceMap !== false) {
	      options.query = { resultSourceMap, ...options.query };
	    }
	    const perspective = options.perspective || config.perspective;
	    if (typeof perspective === "string" && perspective !== "raw") {
	      validateApiPerspective(perspective);
	      options.query = { perspective, ...options.query };
	      if (perspective === "previewDrafts" && useCdn) {
	        useCdn = false;
	        printCdnPreviewDraftsWarning();
	      }
	    }
	  }
	  const reqOptions = requestOptions(
	    config,
	    Object.assign({}, options, {
	      url: _getUrl(client, uri, useCdn)
	    })
	  );
	  const request = new rxjs.Observable(
	    (subscriber) => httpRequest(reqOptions, config.requester).subscribe(subscriber)
	  );
	  return options.signal ? request.pipe(_withAbortSignal(options.signal)) : request;
	}
	function _request(client, httpRequest, options) {
	  const observable = _requestObservable(client, httpRequest, options).pipe(
	    operators.filter((event) => event.type === "response"),
	    operators.map((event) => event.body)
	  );
	  return observable;
	}
	function _getDataUrl(client, operation, path) {
	  const config = client.config();
	  const catalog = hasDataset(config);
	  const baseUri = "/".concat(operation, "/").concat(catalog);
	  const uri = path ? "".concat(baseUri, "/").concat(path) : baseUri;
	  return "/data".concat(uri).replace(/\/($|\?)/, "$1");
	}
	function _getUrl(client, uri, canUseCdn = false) {
	  const { url, cdnUrl } = client.config();
	  const base = canUseCdn ? cdnUrl : url;
	  return "".concat(base, "/").concat(uri.replace(/^\//, ""));
	}
	function _withAbortSignal(signal) {
	  return (input) => {
	    return new rxjs.Observable((observer) => {
	      const abort = () => observer.error(_createAbortError(signal));
	      if (signal && signal.aborted) {
	        abort();
	        return;
	      }
	      const subscription = input.subscribe(observer);
	      signal.addEventListener("abort", abort);
	      return () => {
	        signal.removeEventListener("abort", abort);
	        subscription.unsubscribe();
	      };
	    });
	  };
	}
	const isDomExceptionSupported = Boolean(globalThis.DOMException);
	function _createAbortError(signal) {
	  var _a, _b;
	  if (isDomExceptionSupported) {
	    return new DOMException((_a = signal == null ? undefined : signal.reason) != null ? _a : "The operation was aborted.", "AbortError");
	  }
	  const error = new Error((_b = signal == null ? undefined : signal.reason) != null ? _b : "The operation was aborted.");
	  error.name = "AbortError";
	  return error;
	}

	var __accessCheck$4 = (obj, member, msg) => {
	  if (!member.has(obj))
	    throw TypeError("Cannot " + msg);
	};
	var __privateGet$4 = (obj, member, getter) => {
	  __accessCheck$4(obj, member, "read from private field");
	  return getter ? getter.call(obj) : member.get(obj);
	};
	var __privateAdd$4 = (obj, member, value) => {
	  if (member.has(obj))
	    throw TypeError("Cannot add the same private member more than once");
	  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	};
	var __privateSet$4 = (obj, member, value, setter) => {
	  __accessCheck$4(obj, member, "write to private field");
	  member.set(obj, value);
	  return value;
	};
	var _client$3, _httpRequest$4, _client2$3, _httpRequest2$4;
	class ObservableAssetsClient {
	  constructor(client, httpRequest) {
	    __privateAdd$4(this, _client$3, undefined);
	    __privateAdd$4(this, _httpRequest$4, undefined);
	    __privateSet$4(this, _client$3, client);
	    __privateSet$4(this, _httpRequest$4, httpRequest);
	  }
	  upload(assetType, body, options) {
	    return _upload(__privateGet$4(this, _client$3), __privateGet$4(this, _httpRequest$4), assetType, body, options);
	  }
	}
	_client$3 = new WeakMap();
	_httpRequest$4 = new WeakMap();
	class AssetsClient {
	  constructor(client, httpRequest) {
	    __privateAdd$4(this, _client2$3, undefined);
	    __privateAdd$4(this, _httpRequest2$4, undefined);
	    __privateSet$4(this, _client2$3, client);
	    __privateSet$4(this, _httpRequest2$4, httpRequest);
	  }
	  upload(assetType, body, options) {
	    const observable = _upload(__privateGet$4(this, _client2$3), __privateGet$4(this, _httpRequest2$4), assetType, body, options);
	    return rxjs.lastValueFrom(
	      observable.pipe(
	        operators.filter((event) => event.type === "response"),
	        operators.map(
	          (event) => event.body.document
	        )
	      )
	    );
	  }
	}
	_client2$3 = new WeakMap();
	_httpRequest2$4 = new WeakMap();
	function _upload(client, httpRequest, assetType, body, opts = {}) {
	  validateAssetType(assetType);
	  let meta = opts.extract || undefined;
	  if (meta && !meta.length) {
	    meta = ["none"];
	  }
	  const dataset = hasDataset(client.config());
	  const assetEndpoint = assetType === "image" ? "images" : "files";
	  const options = optionsFromFile(opts, body);
	  const { tag, label, title, description, creditLine, filename, source } = options;
	  const query = {
	    label,
	    title,
	    description,
	    filename,
	    meta,
	    creditLine
	  };
	  if (source) {
	    query.sourceId = source.id;
	    query.sourceName = source.name;
	    query.sourceUrl = source.url;
	  }
	  return _requestObservable(client, httpRequest, {
	    tag,
	    method: "POST",
	    timeout: options.timeout || 0,
	    uri: "/assets/".concat(assetEndpoint, "/").concat(dataset),
	    headers: options.contentType ? { "Content-Type": options.contentType } : {},
	    query,
	    body
	  });
	}
	function optionsFromFile(opts, file) {
	  if (typeof File === "undefined" || !(file instanceof File)) {
	    return opts;
	  }
	  return Object.assign(
	    {
	      filename: opts.preserveFilename === false ? undefined : file.name,
	      contentType: file.type
	    },
	    opts
	  );
	}

	var defaults = (obj, defaults) => Object.keys(defaults).concat(Object.keys(obj)).reduce((target, prop) => {
	  target[prop] = typeof obj[prop] === "undefined" ? defaults[prop] : obj[prop];
	  return target;
	}, {});

	const pick = (obj, props) => props.reduce((selection, prop) => {
	  if (typeof obj[prop] === "undefined") {
	    return selection;
	  }
	  selection[prop] = obj[prop];
	  return selection;
	}, {});

	const MAX_URL_LENGTH = 16e3 - 1200;
	const possibleOptions = [
	  "includePreviousRevision",
	  "includeResult",
	  "visibility",
	  "effectFormat",
	  "tag"
	];
	const defaultOptions = {
	  includeResult: true
	};
	function _listen(query, params, opts = {}) {
	  const { url, token, withCredentials, requestTagPrefix } = this.config();
	  const tag = opts.tag && requestTagPrefix ? [requestTagPrefix, opts.tag].join(".") : opts.tag;
	  const options = { ...defaults(opts, defaultOptions), tag };
	  const listenOpts = pick(options, possibleOptions);
	  const qs = encodeQueryString({ query, params, options: { tag, ...listenOpts } });
	  const uri = "".concat(url).concat(_getDataUrl(this, "listen", qs));
	  if (uri.length > MAX_URL_LENGTH) {
	    return new rxjs.Observable((observer) => observer.error(new Error("Query too large for listener")));
	  }
	  const listenFor = options.events ? options.events : ["mutation"];
	  const shouldEmitReconnect = listenFor.indexOf("reconnect") !== -1;
	  const esOptions = {};
	  if (token || withCredentials) {
	    esOptions.withCredentials = true;
	  }
	  if (token) {
	    esOptions.headers = {
	      Authorization: "Bearer ".concat(token)
	    };
	  }
	  return new rxjs.Observable((observer) => {
	    let es;
	    getEventSource().then((eventSource) => {
	      es = eventSource;
	    }).catch((reason) => {
	      observer.error(reason);
	      stop();
	    });
	    let reconnectTimer;
	    let stopped = false;
	    function onError() {
	      if (stopped) {
	        return;
	      }
	      emitReconnect();
	      if (stopped) {
	        return;
	      }
	      if (es.readyState === es.CLOSED) {
	        unsubscribe();
	        clearTimeout(reconnectTimer);
	        reconnectTimer = setTimeout(open, 100);
	      }
	    }
	    function onChannelError(err) {
	      observer.error(cooerceError(err));
	    }
	    function onMessage(evt) {
	      const event = parseEvent(evt);
	      return event instanceof Error ? observer.error(event) : observer.next(event);
	    }
	    function onDisconnect() {
	      stopped = true;
	      unsubscribe();
	      observer.complete();
	    }
	    function unsubscribe() {
	      if (!es)
	        return;
	      es.removeEventListener("error", onError);
	      es.removeEventListener("channelError", onChannelError);
	      es.removeEventListener("disconnect", onDisconnect);
	      listenFor.forEach((type) => es.removeEventListener(type, onMessage));
	      es.close();
	    }
	    function emitReconnect() {
	      if (shouldEmitReconnect) {
	        observer.next({ type: "reconnect" });
	      }
	    }
	    async function getEventSource() {
	      const { default: EventSource } = await import('@sanity/eventsource');
	      const evs = new EventSource(uri, esOptions);
	      evs.addEventListener("error", onError);
	      evs.addEventListener("channelError", onChannelError);
	      evs.addEventListener("disconnect", onDisconnect);
	      listenFor.forEach((type) => evs.addEventListener(type, onMessage));
	      return evs;
	    }
	    function open() {
	      getEventSource().then((eventSource) => {
	        es = eventSource;
	      }).catch((reason) => {
	        observer.error(reason);
	        stop();
	      });
	    }
	    function stop() {
	      stopped = true;
	      unsubscribe();
	    }
	    return stop;
	  });
	}
	function parseEvent(event) {
	  try {
	    const data = event.data && JSON.parse(event.data) || {};
	    return Object.assign({ type: event.type }, data);
	  } catch (err) {
	    return err;
	  }
	}
	function cooerceError(err) {
	  if (err instanceof Error) {
	    return err;
	  }
	  const evt = parseEvent(err);
	  return evt instanceof Error ? evt : new Error(extractErrorMessage(evt));
	}
	function extractErrorMessage(err) {
	  if (!err.error) {
	    return err.message || "Unknown listener error";
	  }
	  if (err.error.description) {
	    return err.error.description;
	  }
	  return typeof err.error === "string" ? err.error : JSON.stringify(err.error, null, 2);
	}

	var __accessCheck$3 = (obj, member, msg) => {
	  if (!member.has(obj))
	    throw TypeError("Cannot " + msg);
	};
	var __privateGet$3 = (obj, member, getter) => {
	  __accessCheck$3(obj, member, "read from private field");
	  return getter ? getter.call(obj) : member.get(obj);
	};
	var __privateAdd$3 = (obj, member, value) => {
	  if (member.has(obj))
	    throw TypeError("Cannot add the same private member more than once");
	  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	};
	var __privateSet$3 = (obj, member, value, setter) => {
	  __accessCheck$3(obj, member, "write to private field");
	  member.set(obj, value);
	  return value;
	};
	var _client$2, _httpRequest$3, _client2$2, _httpRequest2$3;
	class ObservableDatasetsClient {
	  constructor(client, httpRequest) {
	    __privateAdd$3(this, _client$2, undefined);
	    __privateAdd$3(this, _httpRequest$3, undefined);
	    __privateSet$3(this, _client$2, client);
	    __privateSet$3(this, _httpRequest$3, httpRequest);
	  }
	  /**
	   * Create a new dataset with the given name
	   *
	   * @param name - Name of the dataset to create
	   * @param options - Options for the dataset
	   */
	  create(name, options) {
	    return _modify(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), "PUT", name, options);
	  }
	  /**
	   * Edit a dataset with the given name
	   *
	   * @param name - Name of the dataset to edit
	   * @param options - New options for the dataset
	   */
	  edit(name, options) {
	    return _modify(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), "PATCH", name, options);
	  }
	  /**
	   * Delete a dataset with the given name
	   *
	   * @param name - Name of the dataset to delete
	   */
	  delete(name) {
	    return _modify(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), "DELETE", name);
	  }
	  /**
	   * Fetch a list of datasets for the configured project
	   */
	  list() {
	    return _request(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), {
	      uri: "/datasets",
	      tag: null
	    });
	  }
	}
	_client$2 = new WeakMap();
	_httpRequest$3 = new WeakMap();
	class DatasetsClient {
	  constructor(client, httpRequest) {
	    __privateAdd$3(this, _client2$2, undefined);
	    __privateAdd$3(this, _httpRequest2$3, undefined);
	    __privateSet$3(this, _client2$2, client);
	    __privateSet$3(this, _httpRequest2$3, httpRequest);
	  }
	  /**
	   * Create a new dataset with the given name
	   *
	   * @param name - Name of the dataset to create
	   * @param options - Options for the dataset
	   */
	  create(name, options) {
	    return rxjs.lastValueFrom(
	      _modify(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), "PUT", name, options)
	    );
	  }
	  /**
	   * Edit a dataset with the given name
	   *
	   * @param name - Name of the dataset to edit
	   * @param options - New options for the dataset
	   */
	  edit(name, options) {
	    return rxjs.lastValueFrom(
	      _modify(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), "PATCH", name, options)
	    );
	  }
	  /**
	   * Delete a dataset with the given name
	   *
	   * @param name - Name of the dataset to delete
	   */
	  delete(name) {
	    return rxjs.lastValueFrom(_modify(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), "DELETE", name));
	  }
	  /**
	   * Fetch a list of datasets for the configured project
	   */
	  list() {
	    return rxjs.lastValueFrom(
	      _request(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), { uri: "/datasets", tag: null })
	    );
	  }
	}
	_client2$2 = new WeakMap();
	_httpRequest2$3 = new WeakMap();
	function _modify(client, httpRequest, method, name, options) {
	  dataset(name);
	  return _request(client, httpRequest, {
	    method,
	    uri: "/datasets/".concat(name),
	    body: options,
	    tag: null
	  });
	}

	var __accessCheck$2 = (obj, member, msg) => {
	  if (!member.has(obj))
	    throw TypeError("Cannot " + msg);
	};
	var __privateGet$2 = (obj, member, getter) => {
	  __accessCheck$2(obj, member, "read from private field");
	  return member.get(obj);
	};
	var __privateAdd$2 = (obj, member, value) => {
	  if (member.has(obj))
	    throw TypeError("Cannot add the same private member more than once");
	  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	};
	var __privateSet$2 = (obj, member, value, setter) => {
	  __accessCheck$2(obj, member, "write to private field");
	  member.set(obj, value);
	  return value;
	};
	var _client$1, _httpRequest$2, _client2$1, _httpRequest2$2;
	class ObservableProjectsClient {
	  constructor(client, httpRequest) {
	    __privateAdd$2(this, _client$1, undefined);
	    __privateAdd$2(this, _httpRequest$2, undefined);
	    __privateSet$2(this, _client$1, client);
	    __privateSet$2(this, _httpRequest$2, httpRequest);
	  }
	  list(options) {
	    const uri = (options == null ? undefined : options.includeMembers) === false ? "/projects?includeMembers=false" : "/projects";
	    return _request(__privateGet$2(this, _client$1), __privateGet$2(this, _httpRequest$2), { uri });
	  }
	  /**
	   * Fetch a project by project ID
	   *
	   * @param projectId - ID of the project to fetch
	   */
	  getById(projectId) {
	    return _request(__privateGet$2(this, _client$1), __privateGet$2(this, _httpRequest$2), { uri: "/projects/".concat(projectId) });
	  }
	}
	_client$1 = new WeakMap();
	_httpRequest$2 = new WeakMap();
	class ProjectsClient {
	  constructor(client, httpRequest) {
	    __privateAdd$2(this, _client2$1, undefined);
	    __privateAdd$2(this, _httpRequest2$2, undefined);
	    __privateSet$2(this, _client2$1, client);
	    __privateSet$2(this, _httpRequest2$2, httpRequest);
	  }
	  list(options) {
	    const uri = (options == null ? undefined : options.includeMembers) === false ? "/projects?includeMembers=false" : "/projects";
	    return rxjs.lastValueFrom(_request(__privateGet$2(this, _client2$1), __privateGet$2(this, _httpRequest2$2), { uri }));
	  }
	  /**
	   * Fetch a project by project ID
	   *
	   * @param projectId - ID of the project to fetch
	   */
	  getById(projectId) {
	    return rxjs.lastValueFrom(
	      _request(__privateGet$2(this, _client2$1), __privateGet$2(this, _httpRequest2$2), { uri: "/projects/".concat(projectId) })
	    );
	  }
	}
	_client2$1 = new WeakMap();
	_httpRequest2$2 = new WeakMap();

	var __accessCheck$1 = (obj, member, msg) => {
	  if (!member.has(obj))
	    throw TypeError("Cannot " + msg);
	};
	var __privateGet$1 = (obj, member, getter) => {
	  __accessCheck$1(obj, member, "read from private field");
	  return member.get(obj);
	};
	var __privateAdd$1 = (obj, member, value) => {
	  if (member.has(obj))
	    throw TypeError("Cannot add the same private member more than once");
	  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	};
	var __privateSet$1 = (obj, member, value, setter) => {
	  __accessCheck$1(obj, member, "write to private field");
	  member.set(obj, value);
	  return value;
	};
	var _client, _httpRequest$1, _client2, _httpRequest2$1;
	class ObservableUsersClient {
	  constructor(client, httpRequest) {
	    __privateAdd$1(this, _client, undefined);
	    __privateAdd$1(this, _httpRequest$1, undefined);
	    __privateSet$1(this, _client, client);
	    __privateSet$1(this, _httpRequest$1, httpRequest);
	  }
	  /**
	   * Fetch a user by user ID
	   *
	   * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
	   */
	  getById(id) {
	    return _request(
	      __privateGet$1(this, _client),
	      __privateGet$1(this, _httpRequest$1),
	      { uri: "/users/".concat(id) }
	    );
	  }
	}
	_client = new WeakMap();
	_httpRequest$1 = new WeakMap();
	class UsersClient {
	  constructor(client, httpRequest) {
	    __privateAdd$1(this, _client2, undefined);
	    __privateAdd$1(this, _httpRequest2$1, undefined);
	    __privateSet$1(this, _client2, client);
	    __privateSet$1(this, _httpRequest2$1, httpRequest);
	  }
	  /**
	   * Fetch a user by user ID
	   *
	   * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
	   */
	  getById(id) {
	    return rxjs.lastValueFrom(
	      _request(__privateGet$1(this, _client2), __privateGet$1(this, _httpRequest2$1), {
	        uri: "/users/".concat(id)
	      })
	    );
	  }
	}
	_client2 = new WeakMap();
	_httpRequest2$1 = new WeakMap();

	var __accessCheck = (obj, member, msg) => {
	  if (!member.has(obj))
	    throw TypeError("Cannot " + msg);
	};
	var __privateGet = (obj, member, getter) => {
	  __accessCheck(obj, member, "read from private field");
	  return getter ? getter.call(obj) : member.get(obj);
	};
	var __privateAdd = (obj, member, value) => {
	  if (member.has(obj))
	    throw TypeError("Cannot add the same private member more than once");
	  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	};
	var __privateSet = (obj, member, value, setter) => {
	  __accessCheck(obj, member, "write to private field");
	  member.set(obj, value);
	  return value;
	};
	var _clientConfig, _httpRequest, _clientConfig2, _httpRequest2;
	const _ObservableSanityClient = class _ObservableSanityClient {
	  constructor(httpRequest, config = defaultConfig) {
	    /**
	     * Private properties
	     */
	    __privateAdd(this, _clientConfig, undefined);
	    __privateAdd(this, _httpRequest, undefined);
	    /**
	     * Instance properties
	     */
	    this.listen = _listen;
	    this.config(config);
	    __privateSet(this, _httpRequest, httpRequest);
	    this.assets = new ObservableAssetsClient(this, __privateGet(this, _httpRequest));
	    this.datasets = new ObservableDatasetsClient(this, __privateGet(this, _httpRequest));
	    this.projects = new ObservableProjectsClient(this, __privateGet(this, _httpRequest));
	    this.users = new ObservableUsersClient(this, __privateGet(this, _httpRequest));
	  }
	  /**
	   * Clone the client - returns a new instance
	   */
	  clone() {
	    return new _ObservableSanityClient(__privateGet(this, _httpRequest), this.config());
	  }
	  config(newConfig) {
	    if (newConfig === undefined) {
	      return { ...__privateGet(this, _clientConfig) };
	    }
	    if (__privateGet(this, _clientConfig) && __privateGet(this, _clientConfig).allowReconfigure === false) {
	      throw new Error(
	        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
	      );
	    }
	    __privateSet(this, _clientConfig, initConfig(newConfig, __privateGet(this, _clientConfig) || {}));
	    return this;
	  }
	  /**
	   * Clone the client with a new (partial) configuration.
	   *
	   * @param newConfig - New client configuration properties, shallowly merged with existing configuration
	   */
	  withConfig(newConfig) {
	    const thisConfig = this.config();
	    return new _ObservableSanityClient(__privateGet(this, _httpRequest), {
	      ...thisConfig,
	      ...newConfig,
	      stega: {
	        ...thisConfig.stega || {},
	        ...typeof (newConfig == null ? undefined : newConfig.stega) === "boolean" ? { enabled: newConfig.stega } : (newConfig == null ? undefined : newConfig.stega) || {}
	      }
	    });
	  }
	  fetch(query, params, options) {
	    return _fetch(
	      this,
	      __privateGet(this, _httpRequest),
	      __privateGet(this, _clientConfig).stega,
	      query,
	      params,
	      options
	    );
	  }
	  /**
	   * Fetch a single document with the given ID.
	   *
	   * @param id - Document ID to fetch
	   * @param options - Request options
	   */
	  getDocument(id, options) {
	    return _getDocument(this, __privateGet(this, _httpRequest), id, options);
	  }
	  /**
	   * Fetch multiple documents in one request.
	   * Should be used sparingly - performing a query is usually a better option.
	   * The order/position of documents is preserved based on the original array of IDs.
	   * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
	   *
	   * @param ids - Document IDs to fetch
	   * @param options - Request options
	   */
	  getDocuments(ids, options) {
	    return _getDocuments(this, __privateGet(this, _httpRequest), ids, options);
	  }
	  create(document, options) {
	    return _create(this, __privateGet(this, _httpRequest), document, "create", options);
	  }
	  createIfNotExists(document, options) {
	    return _createIfNotExists(this, __privateGet(this, _httpRequest), document, options);
	  }
	  createOrReplace(document, options) {
	    return _createOrReplace(this, __privateGet(this, _httpRequest), document, options);
	  }
	  delete(selection, options) {
	    return _delete(this, __privateGet(this, _httpRequest), selection, options);
	  }
	  mutate(operations, options) {
	    return _mutate(this, __privateGet(this, _httpRequest), operations, options);
	  }
	  /**
	   * Create a new buildable patch of operations to perform
	   *
	   * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
	   * @param operations - Optional object of patch operations to initialize the patch instance with
	   * @returns Patch instance - call `.commit()` to perform the operations defined
	   */
	  patch(selection, operations) {
	    return new ObservablePatch(selection, operations, this);
	  }
	  /**
	   * Create a new transaction of mutations
	   *
	   * @param operations - Optional array of mutation operations to initialize the transaction instance with
	   */
	  transaction(operations) {
	    return new ObservableTransaction(operations, this);
	  }
	  /**
	   * Perform an HTTP request against the Sanity API
	   *
	   * @param options - Request options
	   */
	  request(options) {
	    return _request(this, __privateGet(this, _httpRequest), options);
	  }
	  /**
	   * Get a Sanity API URL for the URI provided
	   *
	   * @param uri - URI/path to build URL for
	   * @param canUseCdn - Whether or not to allow using the API CDN for this route
	   */
	  getUrl(uri, canUseCdn) {
	    return _getUrl(this, uri, canUseCdn);
	  }
	  /**
	   * Get a Sanity API URL for the data operation and path provided
	   *
	   * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
	   * @param path - Path to append after the operation
	   */
	  getDataUrl(operation, path) {
	    return _getDataUrl(this, operation, path);
	  }
	};
	_clientConfig = new WeakMap();
	_httpRequest = new WeakMap();
	let ObservableSanityClient = _ObservableSanityClient;
	const _SanityClient = class _SanityClient {
	  constructor(httpRequest, config = defaultConfig) {
	    /**
	     * Private properties
	     */
	    __privateAdd(this, _clientConfig2, undefined);
	    __privateAdd(this, _httpRequest2, undefined);
	    /**
	     * Instance properties
	     */
	    this.listen = _listen;
	    this.config(config);
	    __privateSet(this, _httpRequest2, httpRequest);
	    this.assets = new AssetsClient(this, __privateGet(this, _httpRequest2));
	    this.datasets = new DatasetsClient(this, __privateGet(this, _httpRequest2));
	    this.projects = new ProjectsClient(this, __privateGet(this, _httpRequest2));
	    this.users = new UsersClient(this, __privateGet(this, _httpRequest2));
	    this.observable = new ObservableSanityClient(httpRequest, config);
	  }
	  /**
	   * Clone the client - returns a new instance
	   */
	  clone() {
	    return new _SanityClient(__privateGet(this, _httpRequest2), this.config());
	  }
	  config(newConfig) {
	    if (newConfig === undefined) {
	      return { ...__privateGet(this, _clientConfig2) };
	    }
	    if (__privateGet(this, _clientConfig2) && __privateGet(this, _clientConfig2).allowReconfigure === false) {
	      throw new Error(
	        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
	      );
	    }
	    if (this.observable) {
	      this.observable.config(newConfig);
	    }
	    __privateSet(this, _clientConfig2, initConfig(newConfig, __privateGet(this, _clientConfig2) || {}));
	    return this;
	  }
	  /**
	   * Clone the client with a new (partial) configuration.
	   *
	   * @param newConfig - New client configuration properties, shallowly merged with existing configuration
	   */
	  withConfig(newConfig) {
	    const thisConfig = this.config();
	    return new _SanityClient(__privateGet(this, _httpRequest2), {
	      ...thisConfig,
	      ...newConfig,
	      stega: {
	        ...thisConfig.stega || {},
	        ...typeof (newConfig == null ? undefined : newConfig.stega) === "boolean" ? { enabled: newConfig.stega } : (newConfig == null ? undefined : newConfig.stega) || {}
	      }
	    });
	  }
	  fetch(query, params, options) {
	    return rxjs.lastValueFrom(
	      _fetch(
	        this,
	        __privateGet(this, _httpRequest2),
	        __privateGet(this, _clientConfig2).stega,
	        query,
	        params,
	        options
	      )
	    );
	  }
	  /**
	   * Fetch a single document with the given ID.
	   *
	   * @param id - Document ID to fetch
	   * @param options - Request options
	   */
	  getDocument(id, options) {
	    return rxjs.lastValueFrom(_getDocument(this, __privateGet(this, _httpRequest2), id, options));
	  }
	  /**
	   * Fetch multiple documents in one request.
	   * Should be used sparingly - performing a query is usually a better option.
	   * The order/position of documents is preserved based on the original array of IDs.
	   * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
	   *
	   * @param ids - Document IDs to fetch
	   * @param options - Request options
	   */
	  getDocuments(ids, options) {
	    return rxjs.lastValueFrom(_getDocuments(this, __privateGet(this, _httpRequest2), ids, options));
	  }
	  create(document, options) {
	    return rxjs.lastValueFrom(
	      _create(this, __privateGet(this, _httpRequest2), document, "create", options)
	    );
	  }
	  createIfNotExists(document, options) {
	    return rxjs.lastValueFrom(
	      _createIfNotExists(this, __privateGet(this, _httpRequest2), document, options)
	    );
	  }
	  createOrReplace(document, options) {
	    return rxjs.lastValueFrom(
	      _createOrReplace(this, __privateGet(this, _httpRequest2), document, options)
	    );
	  }
	  delete(selection, options) {
	    return rxjs.lastValueFrom(_delete(this, __privateGet(this, _httpRequest2), selection, options));
	  }
	  mutate(operations, options) {
	    return rxjs.lastValueFrom(_mutate(this, __privateGet(this, _httpRequest2), operations, options));
	  }
	  /**
	   * Create a new buildable patch of operations to perform
	   *
	   * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
	   * @param operations - Optional object of patch operations to initialize the patch instance with
	   * @returns Patch instance - call `.commit()` to perform the operations defined
	   */
	  patch(documentId, operations) {
	    return new Patch(documentId, operations, this);
	  }
	  /**
	   * Create a new transaction of mutations
	   *
	   * @param operations - Optional array of mutation operations to initialize the transaction instance with
	   */
	  transaction(operations) {
	    return new Transaction(operations, this);
	  }
	  /**
	   * Perform a request against the Sanity API
	   * NOTE: Only use this for Sanity API endpoints, not for your own APIs!
	   *
	   * @param options - Request options
	   * @returns Promise resolving to the response body
	   */
	  request(options) {
	    return rxjs.lastValueFrom(_request(this, __privateGet(this, _httpRequest2), options));
	  }
	  /**
	   * Perform an HTTP request a `/data` sub-endpoint
	   * NOTE: Considered internal, thus marked as deprecated. Use `request` instead.
	   *
	   * @deprecated - Use `request()` or your own HTTP library instead
	   * @param endpoint - Endpoint to hit (mutate, query etc)
	   * @param body - Request body
	   * @param options - Request options
	   * @internal
	   */
	  dataRequest(endpoint, body, options) {
	    return rxjs.lastValueFrom(_dataRequest(this, __privateGet(this, _httpRequest2), endpoint, body, options));
	  }
	  /**
	   * Get a Sanity API URL for the URI provided
	   *
	   * @param uri - URI/path to build URL for
	   * @param canUseCdn - Whether or not to allow using the API CDN for this route
	   */
	  getUrl(uri, canUseCdn) {
	    return _getUrl(this, uri, canUseCdn);
	  }
	  /**
	   * Get a Sanity API URL for the data operation and path provided
	   *
	   * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
	   * @param path - Path to append after the operation
	   */
	  getDataUrl(operation, path) {
	    return _getDataUrl(this, operation, path);
	  }
	};
	_clientConfig2 = new WeakMap();
	_httpRequest2 = new WeakMap();
	let SanityClient = _SanityClient;

	function defineCreateClientExports(envMiddleware, ClassConstructor) {
	  const httpRequest = defineHttpRequest(envMiddleware, {});
	  const requester = httpRequest.defaultRequester;
	  const createClient = (config) => new ClassConstructor(
	    defineHttpRequest(envMiddleware, {
	      maxRetries: config.maxRetries,
	      retryDelay: config.retryDelay
	    }),
	    config
	  );
	  return { requester, createClient };
	}

	var name = "@sanity/client";
	var version = "6.12.3";

	const middleware = [
	  middleware$1.debug({ verbose: true, namespace: "sanity:client" }),
	  middleware$1.headers({ "User-Agent": "".concat(name, " ").concat(version) }),
	  // Enable keep-alive, and in addition limit the number of sockets that can be opened.
	  // This avoids opening too many connections to the server if someone tries to execute
	  // a bunch of requests in parallel. It's recommended to have a concurrency limit
	  // at a "higher limit" (i.e. you shouldn't actually execute hundreds of requests in parallel),
	  // and this is mainly to minimize the impact for the network and server.
	  //
	  // We're currently matching the same defaults as browsers:
	  // https://stackoverflow.com/questions/26003756/is-there-a-limit-practical-or-otherwise-to-the-number-of-web-sockets-a-page-op
	  middleware$1.agent({
	    keepAlive: true,
	    maxSockets: 30,
	    maxTotalSockets: 256
	  })
	];

	nodeMiddlewareGh18jsRe.BasePatch = BasePatch;
	nodeMiddlewareGh18jsRe.BaseTransaction = BaseTransaction;
	nodeMiddlewareGh18jsRe.ClientError = ClientError;
	nodeMiddlewareGh18jsRe.ObservablePatch = ObservablePatch;
	nodeMiddlewareGh18jsRe.ObservableSanityClient = ObservableSanityClient;
	nodeMiddlewareGh18jsRe.ObservableTransaction = ObservableTransaction;
	nodeMiddlewareGh18jsRe.Patch = Patch;
	nodeMiddlewareGh18jsRe.SanityClient = SanityClient;
	nodeMiddlewareGh18jsRe.ServerError = ServerError;
	nodeMiddlewareGh18jsRe.Transaction = Transaction;
	nodeMiddlewareGh18jsRe.b = b;
	nodeMiddlewareGh18jsRe.defineCreateClientExports = defineCreateClientExports;
	nodeMiddlewareGh18jsRe.middleware = middleware;
	nodeMiddlewareGh18jsRe.printNoDefaultExport = printNoDefaultExport;
	nodeMiddlewareGh18jsRe.vercelStegaCleanAll = vercelStegaCleanAll;
	
	return nodeMiddlewareGh18jsRe;
}

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist;
	hasRequiredDist = 1;
	(function (exports) {

		Object.defineProperty(exports, '__esModule', { value: true });

		var nodeMiddleware = /*@__PURE__*/ requireNodeMiddlewareGh18jsRe();
		var getIt = require$$0;

		function defineDeprecatedCreateClient(createClient) {
		  return function deprecatedCreateClient(config) {
		    nodeMiddleware.printNoDefaultExport();
		    return createClient(config);
		  };
		}

		const exp = nodeMiddleware.defineCreateClientExports(nodeMiddleware.middleware, nodeMiddleware.SanityClient);
		const requester = exp.requester;
		const createClient = exp.createClient;
		const deprecatedCreateClient = defineDeprecatedCreateClient(createClient);

		exports.BasePatch = nodeMiddleware.BasePatch;
		exports.BaseTransaction = nodeMiddleware.BaseTransaction;
		exports.ClientError = nodeMiddleware.ClientError;
		exports.ObservablePatch = nodeMiddleware.ObservablePatch;
		exports.ObservableSanityClient = nodeMiddleware.ObservableSanityClient;
		exports.ObservableTransaction = nodeMiddleware.ObservableTransaction;
		exports.Patch = nodeMiddleware.Patch;
		exports.SanityClient = nodeMiddleware.SanityClient;
		exports.ServerError = nodeMiddleware.ServerError;
		exports.Transaction = nodeMiddleware.Transaction;
		Object.defineProperty(exports, "unstable__adapter", {
		  enumerable: true,
		  get: function () { return getIt.adapter; }
		});
		Object.defineProperty(exports, "unstable__environment", {
		  enumerable: true,
		  get: function () { return getIt.environment; }
		});
		exports.createClient = createClient;
		exports.default = deprecatedCreateClient;
		exports.requester = requester;
		
	} (dist));
	return dist;
}

var distExports = /*@__PURE__*/ requireDist();
const cjs = /*@__PURE__*/getDefaultExportFromCjs(distExports);

cjs.BasePatch;
cjs.BaseTransaction;
cjs.ClientError;
cjs.ObservablePatch;
cjs.ObservableSanityClient;
cjs.ObservableTransaction;
cjs.Patch;
cjs.SanityClient;
cjs.ServerError;
cjs.Transaction;
cjs.unstable__adapter;
cjs.unstable__environment;
const createClient = cjs.createClient;
cjs.requester;

cjs.default;

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

var builder$1 = {};

var urlForImage = {};

var parseAssetId = {};

var hasRequiredParseAssetId;

function requireParseAssetId () {
	if (hasRequiredParseAssetId) return parseAssetId;
	hasRequiredParseAssetId = 1;
	Object.defineProperty(parseAssetId, "__esModule", { value: true });
	var example = 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg';
	function parseAssetId$1(ref) {
	    var _a = ref.split('-'), id = _a[1], dimensionString = _a[2], format = _a[3];
	    if (!id || !dimensionString || !format) {
	        throw new Error("Malformed asset _ref '".concat(ref, "'. Expected an id like \"").concat(example, "\"."));
	    }
	    var _b = dimensionString.split('x'), imgWidthStr = _b[0], imgHeightStr = _b[1];
	    var width = +imgWidthStr;
	    var height = +imgHeightStr;
	    var isValidAssetId = isFinite(width) && isFinite(height);
	    if (!isValidAssetId) {
	        throw new Error("Malformed asset _ref '".concat(ref, "'. Expected an id like \"").concat(example, "\"."));
	    }
	    return { id: id, width: width, height: height, format: format };
	}
	parseAssetId.default = parseAssetId$1;
	
	return parseAssetId;
}

var parseSource = {};

var hasRequiredParseSource;

function requireParseSource () {
	if (hasRequiredParseSource) return parseSource;
	hasRequiredParseSource = 1;
	var __assign = (parseSource && parseSource.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	Object.defineProperty(parseSource, "__esModule", { value: true });
	var isRef = function (src) {
	    var source = src;
	    return source ? typeof source._ref === 'string' : false;
	};
	var isAsset = function (src) {
	    var source = src;
	    return source ? typeof source._id === 'string' : false;
	};
	var isAssetStub = function (src) {
	    var source = src;
	    return source && source.asset ? typeof source.asset.url === 'string' : false;
	};
	// Convert an asset-id, asset or image to an image record suitable for processing
	// eslint-disable-next-line complexity
	function parseSource$1(source) {
	    if (!source) {
	        return null;
	    }
	    var image;
	    if (typeof source === 'string' && isUrl(source)) {
	        // Someone passed an existing image url?
	        image = {
	            asset: { _ref: urlToId(source) },
	        };
	    }
	    else if (typeof source === 'string') {
	        // Just an asset id
	        image = {
	            asset: { _ref: source },
	        };
	    }
	    else if (isRef(source)) {
	        // We just got passed an asset directly
	        image = {
	            asset: source,
	        };
	    }
	    else if (isAsset(source)) {
	        // If we were passed an image asset document
	        image = {
	            asset: {
	                _ref: source._id || '',
	            },
	        };
	    }
	    else if (isAssetStub(source)) {
	        // If we were passed a partial asset (`url`, but no `_id`)
	        image = {
	            asset: {
	                _ref: urlToId(source.asset.url),
	            },
	        };
	    }
	    else if (typeof source.asset === 'object') {
	        // Probably an actual image with materialized asset
	        image = __assign({}, source);
	    }
	    else {
	        // We got something that does not look like an image, or it is an image
	        // that currently isn't sporting an asset.
	        return null;
	    }
	    var img = source;
	    if (img.crop) {
	        image.crop = img.crop;
	    }
	    if (img.hotspot) {
	        image.hotspot = img.hotspot;
	    }
	    return applyDefaults(image);
	}
	parseSource.default = parseSource$1;
	function isUrl(url) {
	    return /^https?:\/\//.test("".concat(url));
	}
	function urlToId(url) {
	    var parts = url.split('/').slice(-1);
	    return "image-".concat(parts[0]).replace(/\.([a-z]+)$/, '-$1');
	}
	// Mock crop and hotspot if image lacks it
	function applyDefaults(image) {
	    if (image.crop && image.hotspot) {
	        return image;
	    }
	    // We need to pad in default values for crop or hotspot
	    var result = __assign({}, image);
	    if (!result.crop) {
	        result.crop = {
	            left: 0,
	            top: 0,
	            bottom: 0,
	            right: 0,
	        };
	    }
	    if (!result.hotspot) {
	        result.hotspot = {
	            x: 0.5,
	            y: 0.5,
	            height: 1.0,
	            width: 1.0,
	        };
	    }
	    return result;
	}
	
	return parseSource;
}

var hasRequiredUrlForImage;

function requireUrlForImage () {
	if (hasRequiredUrlForImage) return urlForImage;
	hasRequiredUrlForImage = 1;
	(function (exports) {
		var __assign = (urlForImage && urlForImage.__assign) || function () {
		    __assign = Object.assign || function(t) {
		        for (var s, i = 1, n = arguments.length; i < n; i++) {
		            s = arguments[i];
		            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
		                t[p] = s[p];
		        }
		        return t;
		    };
		    return __assign.apply(this, arguments);
		};
		var __importDefault = (urlForImage && urlForImage.__importDefault) || function (mod) {
		    return (mod && mod.__esModule) ? mod : { "default": mod };
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.parseSource = exports.SPEC_NAME_TO_URL_NAME_MAPPINGS = undefined;
		var parseAssetId_1 = __importDefault(/*@__PURE__*/ requireParseAssetId());
		var parseSource_1 = __importDefault(/*@__PURE__*/ requireParseSource());
		exports.parseSource = parseSource_1.default;
		exports.SPEC_NAME_TO_URL_NAME_MAPPINGS = [
		    ['width', 'w'],
		    ['height', 'h'],
		    ['format', 'fm'],
		    ['download', 'dl'],
		    ['blur', 'blur'],
		    ['sharpen', 'sharp'],
		    ['invert', 'invert'],
		    ['orientation', 'or'],
		    ['minHeight', 'min-h'],
		    ['maxHeight', 'max-h'],
		    ['minWidth', 'min-w'],
		    ['maxWidth', 'max-w'],
		    ['quality', 'q'],
		    ['fit', 'fit'],
		    ['crop', 'crop'],
		    ['saturation', 'sat'],
		    ['auto', 'auto'],
		    ['dpr', 'dpr'],
		    ['pad', 'pad'],
		];
		function urlForImage$1(options) {
		    var spec = __assign({}, (options || {}));
		    var source = spec.source;
		    delete spec.source;
		    var image = (0, parseSource_1.default)(source);
		    if (!image) {
		        throw new Error("Unable to resolve image URL from source (".concat(JSON.stringify(source), ")"));
		    }
		    var id = image.asset._ref || image.asset._id || '';
		    var asset = (0, parseAssetId_1.default)(id);
		    // Compute crop rect in terms of pixel coordinates in the raw source image
		    var cropLeft = Math.round(image.crop.left * asset.width);
		    var cropTop = Math.round(image.crop.top * asset.height);
		    var crop = {
		        left: cropLeft,
		        top: cropTop,
		        width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
		        height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop),
		    };
		    // Compute hot spot rect in terms of pixel coordinates
		    var hotSpotVerticalRadius = (image.hotspot.height * asset.height) / 2;
		    var hotSpotHorizontalRadius = (image.hotspot.width * asset.width) / 2;
		    var hotSpotCenterX = image.hotspot.x * asset.width;
		    var hotSpotCenterY = image.hotspot.y * asset.height;
		    var hotspot = {
		        left: hotSpotCenterX - hotSpotHorizontalRadius,
		        top: hotSpotCenterY - hotSpotVerticalRadius,
		        right: hotSpotCenterX + hotSpotHorizontalRadius,
		        bottom: hotSpotCenterY + hotSpotVerticalRadius,
		    };
		    // If irrelevant, or if we are requested to: don't perform crop/fit based on
		    // the crop/hotspot.
		    if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
		        spec = __assign(__assign({}, spec), fit({ crop: crop, hotspot: hotspot }, spec));
		    }
		    return specToImageUrl(__assign(__assign({}, spec), { asset: asset }));
		}
		exports.default = urlForImage$1;
		// eslint-disable-next-line complexity
		function specToImageUrl(spec) {
		    var cdnUrl = (spec.baseUrl || 'https://cdn.sanity.io').replace(/\/+$/, '');
		    var filename = "".concat(spec.asset.id, "-").concat(spec.asset.width, "x").concat(spec.asset.height, ".").concat(spec.asset.format);
		    var baseUrl = "".concat(cdnUrl, "/images/").concat(spec.projectId, "/").concat(spec.dataset, "/").concat(filename);
		    var params = [];
		    if (spec.rect) {
		        // Only bother url with a crop if it actually crops anything
		        var _a = spec.rect, left = _a.left, top_1 = _a.top, width = _a.width, height = _a.height;
		        var isEffectiveCrop = left !== 0 || top_1 !== 0 || height !== spec.asset.height || width !== spec.asset.width;
		        if (isEffectiveCrop) {
		            params.push("rect=".concat(left, ",").concat(top_1, ",").concat(width, ",").concat(height));
		        }
		    }
		    if (spec.bg) {
		        params.push("bg=".concat(spec.bg));
		    }
		    if (spec.focalPoint) {
		        params.push("fp-x=".concat(spec.focalPoint.x));
		        params.push("fp-y=".concat(spec.focalPoint.y));
		    }
		    var flip = [spec.flipHorizontal && 'h', spec.flipVertical && 'v'].filter(Boolean).join('');
		    if (flip) {
		        params.push("flip=".concat(flip));
		    }
		    // Map from spec name to url param name, and allow using the actual param name as an alternative
		    exports.SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function (mapping) {
		        var specName = mapping[0], param = mapping[1];
		        if (typeof spec[specName] !== 'undefined') {
		            params.push("".concat(param, "=").concat(encodeURIComponent(spec[specName])));
		        }
		        else if (typeof spec[param] !== 'undefined') {
		            params.push("".concat(param, "=").concat(encodeURIComponent(spec[param])));
		        }
		    });
		    if (params.length === 0) {
		        return baseUrl;
		    }
		    return "".concat(baseUrl, "?").concat(params.join('&'));
		}
		function fit(source, spec) {
		    var cropRect;
		    var imgWidth = spec.width;
		    var imgHeight = spec.height;
		    // If we are not constraining the aspect ratio, we'll just use the whole crop
		    if (!(imgWidth && imgHeight)) {
		        return { width: imgWidth, height: imgHeight, rect: source.crop };
		    }
		    var crop = source.crop;
		    var hotspot = source.hotspot;
		    // If we are here, that means aspect ratio is locked and fitting will be a bit harder
		    var desiredAspectRatio = imgWidth / imgHeight;
		    var cropAspectRatio = crop.width / crop.height;
		    if (cropAspectRatio > desiredAspectRatio) {
		        // The crop is wider than the desired aspect ratio. That means we are cutting from the sides
		        var height = Math.round(crop.height);
		        var width = Math.round(height * desiredAspectRatio);
		        var top_2 = Math.max(0, Math.round(crop.top));
		        // Center output horizontally over hotspot
		        var hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left);
		        var left = Math.max(0, Math.round(hotspotXCenter - width / 2));
		        // Keep output within crop
		        if (left < crop.left) {
		            left = crop.left;
		        }
		        else if (left + width > crop.left + crop.width) {
		            left = crop.left + crop.width - width;
		        }
		        cropRect = { left: left, top: top_2, width: width, height: height };
		    }
		    else {
		        // The crop is taller than the desired ratio, we are cutting from top and bottom
		        var width = crop.width;
		        var height = Math.round(width / desiredAspectRatio);
		        var left = Math.max(0, Math.round(crop.left));
		        // Center output vertically over hotspot
		        var hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
		        var top_3 = Math.max(0, Math.round(hotspotYCenter - height / 2));
		        // Keep output rect within crop
		        if (top_3 < crop.top) {
		            top_3 = crop.top;
		        }
		        else if (top_3 + height > crop.top + crop.height) {
		            top_3 = crop.top + crop.height - height;
		        }
		        cropRect = { left: left, top: top_3, width: width, height: height };
		    }
		    return {
		        width: imgWidth,
		        height: imgHeight,
		        rect: cropRect,
		    };
		}
		
	} (urlForImage));
	return urlForImage;
}

var hasRequiredBuilder;

function requireBuilder () {
	if (hasRequiredBuilder) return builder$1;
	hasRequiredBuilder = 1;
	var __assign = (builder$1 && builder$1.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	var __createBinding = (builder$1 && builder$1.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (builder$1 && builder$1.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (builder$1 && builder$1.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	Object.defineProperty(builder$1, "__esModule", { value: true });
	builder$1.ImageUrlBuilder = undefined;
	var urlForImage_1 = __importStar(/*@__PURE__*/ requireUrlForImage());
	var validFits = ['clip', 'crop', 'fill', 'fillmax', 'max', 'scale', 'min'];
	var validCrops = ['top', 'bottom', 'left', 'right', 'center', 'focalpoint', 'entropy'];
	var validAutoModes = ['format'];
	function isSanityModernClientLike(client) {
	    return client && 'config' in client ? typeof client.config === 'function' : false;
	}
	function isSanityClientLike(client) {
	    return client && 'clientConfig' in client ? typeof client.clientConfig === 'object' : false;
	}
	function rewriteSpecName(key) {
	    var specs = urlForImage_1.SPEC_NAME_TO_URL_NAME_MAPPINGS;
	    for (var _i = 0, specs_1 = specs; _i < specs_1.length; _i++) {
	        var entry = specs_1[_i];
	        var specName = entry[0], param = entry[1];
	        if (key === specName || key === param) {
	            return specName;
	        }
	    }
	    return key;
	}
	function urlBuilder(options) {
	    // Did we get a modernish client?
	    if (isSanityModernClientLike(options)) {
	        // Inherit config from client
	        var _a = options.config(), apiUrl = _a.apiHost, projectId = _a.projectId, dataset = _a.dataset;
	        var apiHost = apiUrl || 'https://api.sanity.io';
	        return new ImageUrlBuilder(null, {
	            baseUrl: apiHost.replace(/^https:\/\/api\./, 'https://cdn.'),
	            projectId: projectId,
	            dataset: dataset,
	        });
	    }
	    // Did we get a SanityClient?
	    var client = options;
	    if (isSanityClientLike(client)) {
	        // Inherit config from client
	        var _b = client.clientConfig, apiUrl = _b.apiHost, projectId = _b.projectId, dataset = _b.dataset;
	        var apiHost = apiUrl || 'https://api.sanity.io';
	        return new ImageUrlBuilder(null, {
	            baseUrl: apiHost.replace(/^https:\/\/api\./, 'https://cdn.'),
	            projectId: projectId,
	            dataset: dataset,
	        });
	    }
	    // Or just accept the options as given
	    return new ImageUrlBuilder(null, options);
	}
	builder$1.default = urlBuilder;
	var ImageUrlBuilder = /** @class */ (function () {
	    function ImageUrlBuilder(parent, options) {
	        this.options = parent
	            ? __assign(__assign({}, (parent.options || {})), (options || {})) : __assign({}, (options || {})); // Copy options
	    }
	    ImageUrlBuilder.prototype.withOptions = function (options) {
	        var baseUrl = options.baseUrl || this.options.baseUrl;
	        var newOptions = { baseUrl: baseUrl };
	        for (var key in options) {
	            if (options.hasOwnProperty(key)) {
	                var specKey = rewriteSpecName(key);
	                newOptions[specKey] = options[key];
	            }
	        }
	        return new ImageUrlBuilder(this, __assign({ baseUrl: baseUrl }, newOptions));
	    };
	    // The image to be represented. Accepts a Sanity 'image'-document, 'asset'-document or
	    // _id of asset. To get the benefit of automatic hot-spot/crop integration with the content
	    // studio, the 'image'-document must be provided.
	    ImageUrlBuilder.prototype.image = function (source) {
	        return this.withOptions({ source: source });
	    };
	    // Specify the dataset
	    ImageUrlBuilder.prototype.dataset = function (dataset) {
	        return this.withOptions({ dataset: dataset });
	    };
	    // Specify the projectId
	    ImageUrlBuilder.prototype.projectId = function (projectId) {
	        return this.withOptions({ projectId: projectId });
	    };
	    // Specify background color
	    ImageUrlBuilder.prototype.bg = function (bg) {
	        return this.withOptions({ bg: bg });
	    };
	    // Set DPR scaling factor
	    ImageUrlBuilder.prototype.dpr = function (dpr) {
	        // A DPR of 1 is the default - so only include it if we have a different value
	        return this.withOptions(dpr && dpr !== 1 ? { dpr: dpr } : {});
	    };
	    // Specify the width of the image in pixels
	    ImageUrlBuilder.prototype.width = function (width) {
	        return this.withOptions({ width: width });
	    };
	    // Specify the height of the image in pixels
	    ImageUrlBuilder.prototype.height = function (height) {
	        return this.withOptions({ height: height });
	    };
	    // Specify focal point in fraction of image dimensions. Each component 0.0-1.0
	    ImageUrlBuilder.prototype.focalPoint = function (x, y) {
	        return this.withOptions({ focalPoint: { x: x, y: y } });
	    };
	    ImageUrlBuilder.prototype.maxWidth = function (maxWidth) {
	        return this.withOptions({ maxWidth: maxWidth });
	    };
	    ImageUrlBuilder.prototype.minWidth = function (minWidth) {
	        return this.withOptions({ minWidth: minWidth });
	    };
	    ImageUrlBuilder.prototype.maxHeight = function (maxHeight) {
	        return this.withOptions({ maxHeight: maxHeight });
	    };
	    ImageUrlBuilder.prototype.minHeight = function (minHeight) {
	        return this.withOptions({ minHeight: minHeight });
	    };
	    // Specify width and height in pixels
	    ImageUrlBuilder.prototype.size = function (width, height) {
	        return this.withOptions({ width: width, height: height });
	    };
	    // Specify blur between 0 and 100
	    ImageUrlBuilder.prototype.blur = function (blur) {
	        return this.withOptions({ blur: blur });
	    };
	    ImageUrlBuilder.prototype.sharpen = function (sharpen) {
	        return this.withOptions({ sharpen: sharpen });
	    };
	    // Specify the desired rectangle of the image
	    ImageUrlBuilder.prototype.rect = function (left, top, width, height) {
	        return this.withOptions({ rect: { left: left, top: top, width: width, height: height } });
	    };
	    // Specify the image format of the image. 'jpg', 'pjpg', 'png', 'webp'
	    ImageUrlBuilder.prototype.format = function (format) {
	        return this.withOptions({ format: format });
	    };
	    ImageUrlBuilder.prototype.invert = function (invert) {
	        return this.withOptions({ invert: invert });
	    };
	    // Rotation in degrees 0, 90, 180, 270
	    ImageUrlBuilder.prototype.orientation = function (orientation) {
	        return this.withOptions({ orientation: orientation });
	    };
	    // Compression quality 0-100
	    ImageUrlBuilder.prototype.quality = function (quality) {
	        return this.withOptions({ quality: quality });
	    };
	    // Make it a download link. Parameter is default filename.
	    ImageUrlBuilder.prototype.forceDownload = function (download) {
	        return this.withOptions({ download: download });
	    };
	    // Flip image horizontally
	    ImageUrlBuilder.prototype.flipHorizontal = function () {
	        return this.withOptions({ flipHorizontal: true });
	    };
	    // Flip image vertically
	    ImageUrlBuilder.prototype.flipVertical = function () {
	        return this.withOptions({ flipVertical: true });
	    };
	    // Ignore crop/hotspot from image record, even when present
	    ImageUrlBuilder.prototype.ignoreImageParams = function () {
	        return this.withOptions({ ignoreImageParams: true });
	    };
	    ImageUrlBuilder.prototype.fit = function (value) {
	        if (validFits.indexOf(value) === -1) {
	            throw new Error("Invalid fit mode \"".concat(value, "\""));
	        }
	        return this.withOptions({ fit: value });
	    };
	    ImageUrlBuilder.prototype.crop = function (value) {
	        if (validCrops.indexOf(value) === -1) {
	            throw new Error("Invalid crop mode \"".concat(value, "\""));
	        }
	        return this.withOptions({ crop: value });
	    };
	    // Saturation
	    ImageUrlBuilder.prototype.saturation = function (saturation) {
	        return this.withOptions({ saturation: saturation });
	    };
	    ImageUrlBuilder.prototype.auto = function (value) {
	        if (validAutoModes.indexOf(value) === -1) {
	            throw new Error("Invalid auto mode \"".concat(value, "\""));
	        }
	        return this.withOptions({ auto: value });
	    };
	    // Specify the number of pixels to pad the image
	    ImageUrlBuilder.prototype.pad = function (pad) {
	        return this.withOptions({ pad: pad });
	    };
	    // Gets the url based on the submitted parameters
	    ImageUrlBuilder.prototype.url = function () {
	        return (0, urlForImage_1.default)(this.options);
	    };
	    // Alias for url()
	    ImageUrlBuilder.prototype.toString = function () {
	        return this.url();
	    };
	    return ImageUrlBuilder;
	}());
	builder$1.ImageUrlBuilder = ImageUrlBuilder;
	
	return builder$1;
}

var node;
var hasRequiredNode;

function requireNode () {
	if (hasRequiredNode) return node;
	hasRequiredNode = 1;
	var __importDefault = (node && node.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	var builder_1 = __importDefault(/*@__PURE__*/ requireBuilder());
	node = builder_1.default;
	
	return node;
}

var nodeExports = /*@__PURE__*/ requireNode();
const imageUrlBuilder = /*@__PURE__*/getDefaultExportFromCjs(nodeExports);

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
