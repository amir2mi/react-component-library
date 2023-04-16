import{c as Q}from"./index-2be6102d.js";import{a as dn}from"./markup-9a6ccc8c.js";import{a as pn}from"./css-b87affbb.js";import{a as gn}from"./clike-e18fd25b.js";import{a as mn}from"./javascript-79c2f953.js";function vn(e,n){for(var r=0;r<n.length;r++){const a=n[r];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in e)){const u=Object.getOwnPropertyDescriptor(a,s);u&&Object.defineProperty(e,s,u.get?u:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var ce={},hn={get exports(){return ce},set exports(e){ce=e}},yn=xn,bn=Object.prototype.hasOwnProperty;function xn(){for(var e={},n=0;n<arguments.length;n++){var r=arguments[n];for(var a in r)bn.call(r,a)&&(e[a]=r[a])}return e}var Fe=We,pe=We.prototype;pe.space=null;pe.normal={};pe.property={};function We(e,n,r){this.property=e,this.normal=n,r&&(this.space=r)}var Ee=yn,wn=Fe,Cn=Sn;function Sn(e){for(var n=e.length,r=[],a=[],s=-1,u,o;++s<n;)u=e[s],r.push(u.property),a.push(u.normal),o=u.space;return new wn(Ee.apply(null,r),Ee.apply(null,a),o)}var ge=An;function An(e){return e.toLowerCase()}var Ge=Ve,U=Ve.prototype;U.space=null;U.attribute=null;U.property=null;U.boolean=!1;U.booleanish=!1;U.overloadedBoolean=!1;U.number=!1;U.commaSeparated=!1;U.spaceSeparated=!1;U.commaOrSpaceSeparated=!1;U.mustUseProperty=!1;U.defined=!1;function Ve(e,n){this.property=e,this.attribute=n}var H={},Pn=0;H.boolean=K();H.booleanish=K();H.overloadedBoolean=K();H.number=K();H.spaceSeparated=K();H.commaSeparated=K();H.commaOrSpaceSeparated=K();function K(){return Math.pow(2,++Pn)}var Ke=Ge,ke=H,Ye=me;me.prototype=new Ke;me.prototype.defined=!0;var Xe=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],On=Xe.length;function me(e,n,r,a){var s=-1,u;for($e(this,"space",a),Ke.call(this,e,n);++s<On;)u=Xe[s],$e(this,u,(r&ke[u])===ke[u])}function $e(e,n,r){r&&(e[n]=r)}var Te=ge,En=Fe,kn=Ye,re=$n;function $n(e){var n=e.space,r=e.mustUseProperty||[],a=e.attributes||{},s=e.properties,u=e.transform,o={},v={},p,t;for(p in s)t=new kn(p,u(a,p),s[p],n),r.indexOf(p)!==-1&&(t.mustUseProperty=!0),o[p]=t,v[Te(p)]=p,v[Te(t.attribute)]=p;return new En(o,v,n)}var Tn=re,Ln=Tn({space:"xlink",transform:Nn,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function Nn(e,n){return"xlink:"+n.slice(5).toLowerCase()}var Mn=re,In=Mn({space:"xml",transform:jn,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function jn(e,n){return"xml:"+n.slice(3).toLowerCase()}var Dn=Un;function Un(e,n){return n in e?e[n]:n}var Rn=Dn,Je=qn;function qn(e,n){return Rn(e,n.toLowerCase())}var zn=re,Hn=Je,_n=zn({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Hn,properties:{xmlns:null,xmlnsXLink:null}}),ve=H,Bn=re,L=ve.booleanish,D=ve.number,V=ve.spaceSeparated,Fn=Bn({transform:Wn,properties:{ariaActiveDescendant:null,ariaAtomic:L,ariaAutoComplete:null,ariaBusy:L,ariaChecked:L,ariaColCount:D,ariaColIndex:D,ariaColSpan:D,ariaControls:V,ariaCurrent:null,ariaDescribedBy:V,ariaDetails:null,ariaDisabled:L,ariaDropEffect:V,ariaErrorMessage:null,ariaExpanded:L,ariaFlowTo:V,ariaGrabbed:L,ariaHasPopup:null,ariaHidden:L,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:V,ariaLevel:D,ariaLive:null,ariaModal:L,ariaMultiLine:L,ariaMultiSelectable:L,ariaOrientation:null,ariaOwns:V,ariaPlaceholder:null,ariaPosInSet:D,ariaPressed:L,ariaReadOnly:L,ariaRelevant:null,ariaRequired:L,ariaRoleDescription:V,ariaRowCount:D,ariaRowIndex:D,ariaRowSpan:D,ariaSelected:L,ariaSetSize:D,ariaSort:null,ariaValueMax:D,ariaValueMin:D,ariaValueNow:D,ariaValueText:null,role:null}});function Wn(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}var Z=H,Gn=re,Vn=Je,g=Z.boolean,Kn=Z.overloadedBoolean,ee=Z.booleanish,x=Z.number,k=Z.spaceSeparated,te=Z.commaSeparated,Yn=Gn({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Vn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:te,acceptCharset:k,accessKey:k,action:null,allow:null,allowFullScreen:g,allowPaymentRequest:g,allowUserMedia:g,alt:null,as:null,async:g,autoCapitalize:null,autoComplete:k,autoFocus:g,autoPlay:g,capture:g,charSet:null,checked:g,cite:null,className:k,cols:x,colSpan:null,content:null,contentEditable:ee,controls:g,controlsList:k,coords:x|te,crossOrigin:null,data:null,dateTime:null,decoding:null,default:g,defer:g,dir:null,dirName:null,disabled:g,download:Kn,draggable:ee,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:g,formTarget:null,headers:k,height:x,hidden:g,high:x,href:null,hrefLang:null,htmlFor:k,httpEquiv:k,id:null,imageSizes:null,imageSrcSet:te,inputMode:null,integrity:null,is:null,isMap:g,itemId:null,itemProp:k,itemRef:k,itemScope:g,itemType:k,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:g,low:x,manifest:null,max:null,maxLength:x,media:null,method:null,min:null,minLength:x,multiple:g,muted:g,name:null,nonce:null,noModule:g,noValidate:g,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:g,optimum:x,pattern:null,ping:k,placeholder:null,playsInline:g,poster:null,preload:null,readOnly:g,referrerPolicy:null,rel:k,required:g,reversed:g,rows:x,rowSpan:x,sandbox:k,scope:null,scoped:g,seamless:g,selected:g,shape:null,size:x,sizes:null,slot:null,span:x,spellCheck:ee,src:null,srcDoc:null,srcLang:null,srcSet:te,start:x,step:null,style:null,tabIndex:x,target:null,title:null,translate:null,type:null,typeMustMatch:g,useMap:null,value:ee,width:x,wrap:null,align:null,aLink:null,archive:k,axis:null,background:null,bgColor:null,border:x,borderColor:null,bottomMargin:x,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:g,declare:g,event:null,face:null,frame:null,frameBorder:null,hSpace:x,leftMargin:x,link:null,longDesc:null,lowSrc:null,marginHeight:x,marginWidth:x,noResize:g,noHref:g,noShade:g,noWrap:g,object:null,profile:null,prompt:null,rev:null,rightMargin:x,rules:null,scheme:null,scrolling:ee,standby:null,summary:null,text:null,topMargin:x,valueType:null,version:null,vAlign:null,vLink:null,vSpace:x,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:g,disableRemotePlayback:g,prefix:null,property:null,results:x,security:null,unselectable:null}}),Xn=Cn,Jn=Ln,Qn=In,Zn=_n,er=Fn,nr=Yn,rr=Xn([Qn,Jn,Zn,er,nr]),ar=ge,tr=Ye,lr=Ge,he="data",or=cr,ir=/^data[-\w.:]+$/i,Qe=/-[a-z]/g,sr=/[A-Z]/g;function cr(e,n){var r=ar(n),a=n,s=lr;return r in e.normal?e.property[e.normal[r]]:(r.length>4&&r.slice(0,4)===he&&ir.test(n)&&(n.charAt(4)==="-"?a=ur(n):n=fr(n),s=tr),new s(a,n))}function ur(e){var n=e.slice(5).replace(Qe,pr);return he+n.charAt(0).toUpperCase()+n.slice(1)}function fr(e){var n=e.slice(4);return Qe.test(n)?e:(n=n.replace(sr,dr),n.charAt(0)!=="-"&&(n="-"+n),he+n)}function dr(e){return"-"+e.toLowerCase()}function pr(e){return e.charAt(1).toUpperCase()}var gr=mr,Le=/[#.]/g;function mr(e,n){for(var r=e||"",a=n||"div",s={},u=0,o,v,p;u<r.length;)Le.lastIndex=u,p=Le.exec(r),o=r.slice(u,p?p.index:r.length),o&&(v?v==="#"?s.id=o:s.className?s.className.push(o):s.className=[o]:a=o,u+=o.length),p&&(v=p[0],u++);return{type:"element",tagName:a,properties:s,children:[]}}var ye={};ye.parse=yr;ye.stringify=br;var Ne="",vr=" ",hr=/[ \t\n\r\f]+/g;function yr(e){var n=String(e||Ne).trim();return n===Ne?[]:n.split(hr)}function br(e){return e.join(vr).trim()}var be={};be.parse=xr;be.stringify=wr;var ue=",",Me=" ",ne="";function xr(e){for(var n=[],r=String(e||ne),a=r.indexOf(ue),s=0,u=!1,o;!u;)a===-1&&(a=r.length,u=!0),o=r.slice(s,a).trim(),(o||!u)&&n.push(o),s=a+1,a=r.indexOf(ue,s);return n}function wr(e,n){var r=n||{},a=r.padLeft===!1?ne:Me,s=r.padRight?Me:ne;return e[e.length-1]===ne&&(e=e.concat(ne)),e.join(s+ue+a).trim()}var Cr=or,Ie=ge,Sr=gr,je=ye.parse,De=be.parse,Ar=Or,Pr={}.hasOwnProperty;function Or(e,n,r){var a=r?Lr(r):null;return s;function s(o,v){var p=Sr(o,n),t=Array.prototype.slice.call(arguments,2),i=p.tagName.toLowerCase(),l;if(p.tagName=a&&Pr.call(a,i)?a[i]:i,v&&Er(v,p)&&(t.unshift(v),v=null),v)for(l in v)u(p.properties,l,v[l]);return Ze(p.children,t),p.tagName==="template"&&(p.content={type:"root",children:p.children},p.children=[]),p}function u(o,v,p){var t,i,l;p==null||p!==p||(t=Cr(e,v),i=t.property,l=p,typeof l=="string"&&(t.spaceSeparated?l=je(l):t.commaSeparated?l=De(l):t.commaOrSpaceSeparated&&(l=je(De(l).join(" ")))),i==="style"&&typeof p!="string"&&(l=Tr(l)),i==="className"&&o.className&&(l=o.className.concat(l)),o[i]=$r(t,i,l))}}function Er(e,n){return typeof e=="string"||"length"in e||kr(n.tagName,e)}function kr(e,n){var r=n.type;return e==="input"||!r||typeof r!="string"?!1:typeof n.children=="object"&&"length"in n.children?!0:(r=r.toLowerCase(),e==="button"?r!=="menu"&&r!=="submit"&&r!=="reset"&&r!=="button":"value"in n)}function Ze(e,n){var r,a;if(typeof n=="string"||typeof n=="number"){e.push({type:"text",value:String(n)});return}if(typeof n=="object"&&"length"in n){for(r=-1,a=n.length;++r<a;)Ze(e,n[r]);return}if(typeof n!="object"||!("type"in n))throw new Error("Expected node, nodes, or string, got `"+n+"`");e.push(n)}function $r(e,n,r){var a,s,u;if(typeof r!="object"||!("length"in r))return Ue(e,n,r);for(s=r.length,a=-1,u=[];++a<s;)u[a]=Ue(e,n,r[a]);return u}function Ue(e,n,r){var a=r;return e.number||e.positiveNumber?!isNaN(a)&&a!==""&&(a=Number(a)):(e.boolean||e.overloadedBoolean)&&typeof a=="string"&&(a===""||Ie(r)===Ie(n))&&(a=!0),a}function Tr(e){var n=[],r;for(r in e)n.push([r,e[r]].join(": "));return n.join("; ")}function Lr(e){for(var n=e.length,r=-1,a={},s;++r<n;)s=e[r],a[s.toLowerCase()]=s;return a}var Nr=rr,Mr=Ar,en=Mr(Nr,"div");en.displayName="html";var Ir=en;(function(e){e.exports=Ir})(hn);const jr="Æ",Dr="&",Ur="Á",Rr="Â",qr="À",zr="Å",Hr="Ã",_r="Ä",Br="©",Fr="Ç",Wr="Ð",Gr="É",Vr="Ê",Kr="È",Yr="Ë",Xr=">",Jr="Í",Qr="Î",Zr="Ì",ea="Ï",na="<",ra="Ñ",aa="Ó",ta="Ô",la="Ò",oa="Ø",ia="Õ",sa="Ö",ca='"',ua="®",fa="Þ",da="Ú",pa="Û",ga="Ù",ma="Ü",va="Ý",ha="á",ya="â",ba="´",xa="æ",wa="à",Ca="&",Sa="å",Aa="ã",Pa="ä",Oa="¦",Ea="ç",ka="¸",$a="¢",Ta="©",La="¤",Na="°",Ma="÷",Ia="é",ja="ê",Da="è",Ua="ð",Ra="ë",qa="½",za="¼",Ha="¾",_a=">",Ba="í",Fa="î",Wa="¡",Ga="ì",Va="¿",Ka="ï",Ya="«",Xa="<",Ja="¯",Qa="µ",Za="·",et=" ",nt="¬",rt="ñ",at="ó",tt="ô",lt="ò",ot="ª",it="º",st="ø",ct="õ",ut="ö",ft="¶",dt="±",pt="£",gt='"',mt="»",vt="®",ht="§",yt="­",bt="¹",xt="²",wt="³",Ct="ß",St="þ",At="×",Pt="ú",Ot="û",Et="ù",kt="¨",$t="ü",Tt="ý",Lt="¥",Nt="ÿ",Mt={AElig:jr,AMP:Dr,Aacute:Ur,Acirc:Rr,Agrave:qr,Aring:zr,Atilde:Hr,Auml:_r,COPY:Br,Ccedil:Fr,ETH:Wr,Eacute:Gr,Ecirc:Vr,Egrave:Kr,Euml:Yr,GT:Xr,Iacute:Jr,Icirc:Qr,Igrave:Zr,Iuml:ea,LT:na,Ntilde:ra,Oacute:aa,Ocirc:ta,Ograve:la,Oslash:oa,Otilde:ia,Ouml:sa,QUOT:ca,REG:ua,THORN:fa,Uacute:da,Ucirc:pa,Ugrave:ga,Uuml:ma,Yacute:va,aacute:ha,acirc:ya,acute:ba,aelig:xa,agrave:wa,amp:Ca,aring:Sa,atilde:Aa,auml:Pa,brvbar:Oa,ccedil:Ea,cedil:ka,cent:$a,copy:Ta,curren:La,deg:Na,divide:Ma,eacute:Ia,ecirc:ja,egrave:Da,eth:Ua,euml:Ra,frac12:qa,frac14:za,frac34:Ha,gt:_a,iacute:Ba,icirc:Fa,iexcl:Wa,igrave:Ga,iquest:Va,iuml:Ka,laquo:Ya,lt:Xa,macr:Ja,micro:Qa,middot:Za,nbsp:et,not:nt,ntilde:rt,oacute:at,ocirc:tt,ograve:lt,ordf:ot,ordm:it,oslash:st,otilde:ct,ouml:ut,para:ft,plusmn:dt,pound:pt,quot:gt,raquo:mt,reg:vt,sect:ht,shy:yt,sup1:bt,sup2:xt,sup3:wt,szlig:Ct,thorn:St,times:At,uacute:Pt,ucirc:Ot,ugrave:Et,uml:kt,uuml:$t,yacute:Tt,yen:Lt,yuml:Nt},It={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var nn=jt;function jt(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=48&&n<=57}var Dt=Ut;function Ut(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}var Rt=qt;function qt(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}var zt=Rt,Ht=nn,_t=Bt;function Bt(e){return zt(e)||Ht(e)}var le,Ft=59,Wt=Gt;function Gt(e){var n="&"+e+";",r;return le=le||document.createElement("i"),le.innerHTML=n,r=le.textContent,r.charCodeAt(r.length-1)===Ft&&e!=="semi"||r===n?!1:r}var Re=Mt,qe=It,Vt=nn,Kt=Dt,rn=_t,Yt=Wt,Xt=cl,Jt={}.hasOwnProperty,X=String.fromCharCode,Qt=Function.prototype,ze={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},Zt=9,He=10,el=12,nl=32,_e=38,rl=59,al=60,tl=61,ll=35,ol=88,il=120,sl=65533,J="named",xe="hexadecimal",we="decimal",Ce={};Ce[xe]=16;Ce[we]=10;var oe={};oe[J]=rn;oe[we]=Vt;oe[xe]=Kt;var an=1,tn=2,ln=3,on=4,sn=5,fe=6,cn=7,W={};W[an]="Named character references must be terminated by a semicolon";W[tn]="Numeric character references must be terminated by a semicolon";W[ln]="Named character references cannot be empty";W[on]="Numeric character references cannot be empty";W[sn]="Named character references must be known";W[fe]="Numeric character references cannot be disallowed";W[cn]="Numeric character references cannot be outside the permissible Unicode range";function cl(e,n){var r={},a,s;n||(n={});for(s in ze)a=n[s],r[s]=a??ze[s];return(r.position.indent||r.position.start)&&(r.indent=r.position.indent||[],r.position=r.position.start),ul(e,r)}function ul(e,n){var r=n.additional,a=n.nonTerminated,s=n.text,u=n.reference,o=n.warning,v=n.textContext,p=n.referenceContext,t=n.warningContext,i=n.position,l=n.indent||[],c=e.length,f=0,m=-1,h=i.column||1,d=i.line||1,b="",N=[],y,Y,q,E,j,P,S,w,M,_,$,R,B,I,G,C,F,T,A;for(typeof r=="string"&&(r=r.charCodeAt(0)),C=z(),w=o?ie:Qt,f--,c++;++f<c;)if(j===He&&(h=l[m]||1),j=e.charCodeAt(f),j===_e){if(S=e.charCodeAt(f+1),S===Zt||S===He||S===el||S===nl||S===_e||S===al||S!==S||r&&S===r){b+=X(j),h++;continue}for(B=f+1,R=B,A=B,S===ll?(A=++R,S=e.charCodeAt(A),S===ol||S===il?(I=xe,A=++R):I=we):I=J,y="",$="",E="",G=oe[I],A--;++A<c&&(S=e.charCodeAt(A),!!G(S));)E+=X(S),I===J&&Jt.call(Re,E)&&(y=E,$=Re[E]);q=e.charCodeAt(A)===rl,q&&(A++,Y=I===J?Yt(E):!1,Y&&(y=E,$=Y)),T=1+A-B,!q&&!a||(E?I===J?(q&&!$?w(sn,1):(y!==E&&(A=R+y.length,T=1+A-R,q=!1),q||(M=y?an:ln,n.attribute?(S=e.charCodeAt(A),S===tl?(w(M,T),$=null):rn(S)?$=null:w(M,T)):w(M,T))),P=$):(q||w(tn,T),P=parseInt(E,Ce[I]),fl(P)?(w(cn,T),P=X(sl)):P in qe?(w(fe,T),P=qe[P]):(_="",dl(P)&&w(fe,T),P>65535&&(P-=65536,_+=X(P>>>10|55296),P=56320|P&1023),P=_+X(P))):I!==J&&w(on,T)),P?(Ae(),C=z(),f=A-1,h+=A-B+1,N.push(P),F=z(),F.offset++,u&&u.call(p,P,{start:C,end:F},e.slice(B-1,A)),C=F):(E=e.slice(B-1,A),b+=E,h+=E.length,f=A-1)}else j===10&&(d++,m++,h=0),j===j?(b+=X(j),h++):Ae();return N.join("");function z(){return{line:d,column:h,offset:f+(i.offset||0)}}function ie(Pe,Oe){var se=z();se.column+=Oe,se.offset+=Oe,o.call(t,W[Pe],se,Pe)}function Ae(){b&&(N.push(b),s&&s.call(v,b,{start:C,end:z()}),b="")}}function fl(e){return e>=55296&&e<=57343||e>1114111}function dl(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var de={},pl={get exports(){return de},set exports(e){de=e}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},r=function(a){var s=/\blang(?:uage)?-([\w-]+)\b/i,u=0,o={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function(t){return t instanceof v?new v(t.type,o.util.encode(t.content),t.alias):Array.isArray(t)?t.map(o.util.encode):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++u}),t.__id},clone:function t(i,l){var c,f,m=o.util.type(i);switch(l=l||{},m){case"Object":if(f=o.util.objId(i),l[f])return l[f];c={},l[f]=c;for(var h in i)i.hasOwnProperty(h)&&(c[h]=t(i[h],l));return c;case"Array":return f=o.util.objId(i),l[f]?l[f]:(c=[],l[f]=c,i.forEach(function(d,b){c[b]=t(d,l)}),c);default:return i}}},languages:{extend:function(t,i){var l=o.util.clone(o.languages[t]);for(var c in i)l[c]=i[c];return l},insertBefore:function(t,i,l,c){c=c||o.languages;var f=c[t],m={};for(var h in f)if(f.hasOwnProperty(h)){if(h==i)for(var d in l)l.hasOwnProperty(d)&&(m[d]=l[d]);l.hasOwnProperty(h)||(m[h]=f[h])}var b=c[t];return c[t]=m,o.languages.DFS(o.languages,function(N,y){y===b&&N!=t&&(this[N]=m)}),m},DFS:function t(i,l,c,f){f=f||{};var m=o.util.objId;for(var h in i)if(i.hasOwnProperty(h)){l.call(i,h,i[h],c||h);var d=i[h],b=o.util.type(d);b==="Object"&&!f[m(d)]?(f[m(d)]=!0,t(d,l,null,f)):b==="Array"&&!f[m(d)]&&(f[m(d)]=!0,t(d,l,h,f))}}},plugins:{},highlightAll:function(t,i){o.highlightAllUnder(document,t,i)},highlightAllUnder:function(t,i,l){var c={callback:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",c);for(var f=t.querySelectorAll(c.selector),m=0,h;h=f[m++];)o.highlightElement(h,i===!0,c.callback)},highlightElement:function(t,i,l){for(var c="none",f,m=t;m&&!s.test(m.className);)m=m.parentNode;m&&(c=(m.className.match(s)||[,"none"])[1].toLowerCase(),f=o.languages[c]),t.className=t.className.replace(s,"").replace(/\s+/g," ")+" language-"+c,t.parentNode&&(m=t.parentNode,/pre/i.test(m.nodeName)&&(m.className=m.className.replace(s,"").replace(/\s+/g," ")+" language-"+c));var h=t.textContent,d={element:t,language:c,grammar:f,code:h},b=function(y){d.highlightedCode=y,o.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,o.hooks.run("after-highlight",d),o.hooks.run("complete",d),l&&l.call(d.element)};if(o.hooks.run("before-sanity-check",d),!d.code){o.hooks.run("complete",d);return}if(o.hooks.run("before-highlight",d),!d.grammar){b(o.util.encode(d.code));return}if(i&&a.Worker){var N=new Worker(o.filename);N.onmessage=function(y){b(y.data)},N.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else b(o.highlight(d.code,d.grammar,d.language))},highlight:function(t,i,l){var c={code:t,grammar:i,language:l};return o.hooks.run("before-tokenize",c),c.tokens=o.tokenize(c.code,c.grammar),o.hooks.run("after-tokenize",c),v.stringify(o.util.encode(c.tokens),c.language)},matchGrammar:function(t,i,l,c,f,m,h){for(var d in l)if(!(!l.hasOwnProperty(d)||!l[d])){if(d==h)return;var b=l[d];b=o.util.type(b)==="Array"?b:[b];for(var N=0;N<b.length;++N){var y=b[N],Y=y.inside,q=!!y.lookbehind,E=!!y.greedy,j=0,P=y.alias;if(E&&!y.pattern.global){var S=y.pattern.toString().match(/[imuy]*$/)[0];y.pattern=RegExp(y.pattern.source,S+"g")}y=y.pattern||y;for(var w=c,M=f;w<i.length;M+=i[w].length,++w){var _=i[w];if(i.length>t.length)return;if(!(_ instanceof v)){if(E&&w!=i.length-1){y.lastIndex=M;var C=y.exec(t);if(!C)break;for(var G=C.index+(q?C[1].length:0),F=C.index+C[0].length,$=w,R=M,B=i.length;$<B&&(R<F||!i[$].type&&!i[$-1].greedy);++$)R+=i[$].length,G>=R&&(++w,M=R);if(i[w]instanceof v)continue;I=$-w,_=t.slice(M,R),C.index-=M}else{y.lastIndex=0;var C=y.exec(_),I=1}if(!C){if(m)break;continue}q&&(j=C[1]?C[1].length:0);var G=C.index+j,C=C[0].slice(j),F=G+C.length,T=_.slice(0,G),A=_.slice(F),z=[w,I];T&&(++w,M+=T.length,z.push(T));var ie=new v(d,Y?o.tokenize(C,Y):C,P,C,E);if(z.push(ie),A&&z.push(A),Array.prototype.splice.apply(i,z),I!=1&&o.matchGrammar(t,i,l,w,M,!0,d),m)break}}}}},tokenize:function(t,i){var l=[t],c=i.rest;if(c){for(var f in c)i[f]=c[f];delete i.rest}return o.matchGrammar(t,l,i,0,0,!1),l},hooks:{all:{},add:function(t,i){var l=o.hooks.all;l[t]=l[t]||[],l[t].push(i)},run:function(t,i){var l=o.hooks.all[t];if(!(!l||!l.length))for(var c=0,f;f=l[c++];)f(i)}},Token:v};a.Prism=o;function v(t,i,l,c,f){this.type=t,this.content=i,this.alias=l,this.length=(c||"").length|0,this.greedy=!!f}if(v.stringify=function(t,i){if(typeof t=="string")return t;if(Array.isArray(t))return t.map(function(m){return v.stringify(m,i)}).join("");var l={type:t.type,content:v.stringify(t.content,i),tag:"span",classes:["token",t.type],attributes:{},language:i};if(t.alias){var c=Array.isArray(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(l.classes,c)}o.hooks.run("wrap",l);var f=Object.keys(l.attributes).map(function(m){return m+'="'+(l.attributes[m]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+(f?" "+f:"")+">"+l.content+"</"+l.tag+">"},!a.document)return a.addEventListener&&(o.disableWorkerMessageHandler||a.addEventListener("message",function(t){var i=JSON.parse(t.data),l=i.language,c=i.code,f=i.immediateClose;a.postMessage(o.highlight(c,o.languages[l],l)),f&&a.close()},!1)),o;var p=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return p&&(o.filename=p.src,!o.manual&&!p.hasAttribute("data-manual")&&(document.readyState!=="loading"?window.requestAnimationFrame?window.requestAnimationFrame(o.highlightAll):window.setTimeout(o.highlightAll,16):document.addEventListener("DOMContentLoaded",o.highlightAll))),o}(n);e.exports&&(e.exports=r),typeof Q<"u"&&(Q.Prism=r)})(pl);var gl=Tl(),ml=typeof window>"u"?typeof self>"u"?{}:self:window;ml.Prism={manual:!0,disableWorkerMessageHandler:!0};var vl=ce,hl=Xt,un=de,yl=dn,bl=pn,xl=gn,wl=mn;gl();var Se={}.hasOwnProperty;function fn(){}fn.prototype=un;var O=new fn,Be=O;O.highlight=Sl;O.register=ae;O.alias=Cl;O.registered=Al;O.listLanguages=Pl;ae(yl);ae(bl);ae(xl);ae(wl);O.util.encode=kl;O.Token.stringify=Ol;function ae(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");O.languages[e.displayName]===void 0&&e(O)}function Cl(e,n){var r=O.languages,a=e,s,u,o,v;n&&(a={},a[e]=n);for(s in a)for(u=a[s],u=typeof u=="string"?[u]:u,o=u.length,v=-1;++v<o;)r[u[v]]=r[s]}function Sl(e,n){var r=un.highlight,a;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(O.util.type(n)==="Object")a=n,n=null;else{if(typeof n!="string")throw new Error("Expected `string` for `name`, got `"+n+"`");if(Se.call(O.languages,n))a=O.languages[n];else throw new Error("Unknown language: `"+n+"` is not registered")}return r.call(this,e,a,n)}function Al(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Se.call(O.languages,e)}function Pl(){var e=O.languages,n=[],r;for(r in e)Se.call(e,r)&&typeof e[r]=="object"&&n.push(r);return n}function Ol(e,n,r){var a;return typeof e=="string"?{type:"text",value:e}:O.util.type(e)==="Array"?El(e,n):(a={type:e.type,content:O.Token.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:r},e.alias&&(a.classes=a.classes.concat(e.alias)),O.hooks.run("wrap",a),vl(a.tag+"."+a.classes.join("."),$l(a.attributes),a.content))}function El(e,n){for(var r=[],a=e.length,s=-1,u;++s<a;)u=e[s],u!==""&&u!==null&&u!==void 0&&r.push(u);for(s=-1,a=r.length;++s<a;)u=r[s],r[s]=O.Token.stringify(u,n,r);return r}function kl(e){return e}function $l(e){var n;for(n in e)e[n]=hl(e[n]);return e}function Tl(){var e="Prism"in Q,n=e?Q.Prism:void 0;return r;function r(){e?Q.Prism=n:delete Q.Prism,e=void 0,n=void 0}}const Dl=vn({__proto__:null,default:Be},[Be]);export{Dl as c};
