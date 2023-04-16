import{g as y}from"./index-2be6102d.js";function v(i,f){for(var e=0;e<f.length;e++){const u=f[e];if(typeof u!="string"&&!Array.isArray(u)){for(const a in u)if(a!=="default"&&!(a in i)){const l=Object.getOwnPropertyDescriptor(u,a);l&&Object.defineProperty(i,a,l.get?l:{enumerable:!0,get:()=>u[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var _,m;function $(){if(m)return _;m=1,_=i,i.displayName="markdown",i.aliases=["md"];function i(f){(function(e){var u=/(?:\\.|[^\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))/.source;function a(t,n){return t=t.replace(/<inner>/g,u),n&&(t=t+"|"+t.replace(/_/g,"\\*")),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+t+")")}var l=/(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,p=/\|?__(?:\|__)+\|?(?:(?:\r?\n|\r)|$)/.source.replace(/__/g,l),b=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\r?\n|\r)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+p+b+"(?:"+p+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+p+b+")(?:"+p+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(l),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+p+")"+b+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+p+"$"),inside:{"table-header":{pattern:RegExp(l),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,lookbehind:!0,alias:"keyword"},{pattern:/``.+?``|`[^`\r\n]+`/,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:a(/__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source,!0),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:a(/_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source,!0),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:a(/(~~?)(?:(?!~)<inner>)+?\2/.source,!1),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},url:{pattern:a(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/.source,!1),lookbehind:!0,greedy:!0,inside:{variable:{pattern:/(\[)[^\]]+(?=\]$)/,lookbehind:!0},content:{pattern:/(^!?\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),["url","bold","italic","strike"].forEach(function(t){["url","bold","italic","strike"].forEach(function(n){t!==n&&(e.languages.markdown[t].inside.content.inside[n]=e.languages.markdown[n])})}),e.hooks.add("after-tokenize",function(t){if(t.language!=="markdown"&&t.language!=="md")return;function n(o){if(!(!o||typeof o=="string"))for(var g=0,k=o.length;g<k;g++){var s=o[g];if(s.type!=="code"){n(s.content);continue}var d=s.content[1],r=s.content[3];if(d&&r&&d.type==="code-language"&&r.type==="code-block"&&typeof d.content=="string"){var c="language-"+d.content.trim().split(/\s+/)[0].toLowerCase();r.alias?typeof r.alias=="string"?r.alias=[r.alias,c]:r.alias.push(c):r.alias=[c]}}}n(t.tokens)}),e.hooks.add("wrap",function(t){if(t.type==="code-block"){for(var n="",o=0,g=t.classes.length;o<g;o++){var k=t.classes[o],s=/language-(.+)/.exec(k);if(s){n=s[1];break}}var d=e.languages[n];if(d){var c=t.content.value.replace(/&lt;/g,"<").replace(/&amp;/g,"&");t.content=e.highlight(c,d,n)}else if(n&&n!=="none"&&e.plugins.autoloader){var r="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);t.attributes.id=r,e.plugins.autoloader.loadLanguages(n,function(){var h=document.getElementById(r);h&&(h.innerHTML=e.highlight(h.textContent,e.languages[n],n))})}}}),e.languages.md=e.languages.markdown})(f)}return _}var w=$();const x=y(w),R=v({__proto__:null,default:x},[w]);export{R as m};
