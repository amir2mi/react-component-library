import{g as u}from"./index-2be6102d.js";function c(e,a){for(var n=0;n<a.length;n++){const r=a[n];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const o=Object.getOwnPropertyDescriptor(r,t);o&&Object.defineProperty(e,t,o.get?o:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,s;function f(){if(s)return i;s=1,i=e,e.displayName="j",e.aliases=[];function e(a){a.languages.j={comment:/\bNB\..*/,string:{pattern:/'(?:''|[^'\r\n])*'/,greedy:!0},keyword:/\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,verb:{pattern:/(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,alias:"keyword"},number:/\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:[ejpx]|ad|ar)_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_(?!\.))/,adverb:{pattern:/[~}]|[\/\\]\.?|[bfM]\.|t[.:]/,alias:"builtin"},operator:/[=a][.:]|_\./,conjunction:{pattern:/&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,alias:"variable"},punctuation:/[()]/}}return i}var d=f();const l=u(d),p=c({__proto__:null,default:l},[d]);export{p as j};
