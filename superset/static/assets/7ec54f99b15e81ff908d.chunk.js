"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5181],{47249:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(90317),r=a(69842),l=a(69244);function o(e,t){void 0===t&&(t=!1);const a=t?n.i$:n.g0,o=a("%Y-%m-%d %H:%M:%S.%L"),i=a("%Y-%m-%d %H:%M:%S"),s=a("%Y-%m-%d %H:%M"),u=a("%Y-%m-%d %H:%M"),c=a("%Y-%m-%d"),d=a("%Y-%m-%d"),f=a("%Y"),{hasMillisecond:p,hasSecond:h,hasMinute:m,hasHour:v,isNotFirstDayOfMonth:S,isNotFirstMonth:g}=t?r.Z:r.b;let b=f;return e.forEach((e=>{b===f&&g(e)&&(b=d),b===d&&S(e)&&(b=c),b===c&&v(e)&&(b=u),b===u&&m(e)&&(b=s),b===s&&h(e)&&(b=i),b===i&&p(e)&&(b=o)})),new l.Z({description:"Use the finest grain in an array of dates to format all dates in the array",formatFunc:b,id:"finest_temporal_grain",label:"Format temporal columns with the finest grain",useLocalTime:t})}},45181:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var n=a(67294),r=a(55786),l=a(10581),o=a(47249),i=a(61988),s=a(16355),u=a(23279),c=a.n(u),d=a(90057),f=a(4715),p=a(27600),h=a(85633),m=a(52004),v=a(74448),S=a(56080),g=a(11965);function b(e,t){switch(t.type){case"ownState":return e.ownState={...e.ownState,...t.ownState},e;case"filterState":return JSON.stringify(e.extraFormData)!==JSON.stringify(t.extraFormData)&&(e.extraFormData=t.extraFormData),JSON.stringify(e.filterState)!==JSON.stringify(t.filterState)&&(e.filterState={...e.filterState,...t.filterState}),e;default:return e}}function y(e){const{coltypeMap:t,data:a,filterState:u,formData:y,height:w,isRefreshing:M,width:F,setDataMask:O,setHoveredFilter:N,unsetHoveredFilter:C,setFocusedFilter:Z,unsetFocusedFilter:E,setFilterActive:T,appSection:x,showOverflow:L,parentRef:A,inputRef:D,filterBarOrientation:k}=e,{enableEmptyFilter:R,multiSelect:H,showSearch:I,inverseSelection:J,defaultToFirstItem:$,searchAllOptions:j}=y,Y=(0,n.useMemo)((()=>(0,r.Z)(y.groupby).map(l.Z)),[y.groupby]),[_]=Y,[P]=(0,n.useState)(t),[G,B]=(0,n.useState)(""),[K,V]=(0,d.C)(b,{extraFormData:{},filterState:u}),q=t[_],U=(0,n.useMemo)((()=>(0,S.EG)({timeFormatter:(0,o.Z)(a.map((e=>e[_])))})),[a,_]),W=(0,n.useCallback)((e=>{const t=R&&!J&&!(null!=e&&e.length),a=J&&null!=e&&e.length?(0,i.t)(" (excluded)"):"";V({type:"filterState",extraFormData:(0,S.vb)(_,e,t,J),filterState:{...u,label:null!=e&&e.length?`${(e||[]).map((e=>U(e,q))).join(", ")}${a}`:void 0,value:x===s.Tr.FILTER_CONFIG_MODAL&&$?void 0:e}})}),[x,_,q,$,V,R,J,JSON.stringify(u),U]),Q=x===s.Tr.FILTER_CONFIG_MODAL&&$,z=(0,n.useMemo)((()=>c()((e=>{B(e),j&&V({type:"ownState",ownState:{coltypeMap:P,search:e}})}),p.M$)),[V,P,j]),X=(0,n.useCallback)((()=>{E()}),[E]),ee=(0,n.useCallback)((e=>{const t=null===e?[null]:(0,r.Z)(e);0===t.length?W(null):W(t)}),[W]),te=0===a.length?(0,i.t)("No data"):(0,i.tn)("%s option","%s options",a.length,a.length),ae=(0,n.useMemo)((()=>{if(u.validateMessage)return(0,g.tZ)(v.Am,{status:u.validateStatus},u.validateMessage)}),[u.validateMessage,u.validateStatus]),ne=(0,n.useMemo)((()=>[...new Set([...a.map((e=>e[_]))])].map((e=>({label:U(e,q),value:e,isNewOption:!1})))),[a,q,_,U]),re=(0,n.useMemo)((()=>(!G||H||(0,h.Gq)(G,ne,!0)||ne.unshift({label:G,value:G,isNewOption:!0}),ne)),[H,G,ne]),le=(0,n.useCallback)(((e,t)=>{const a=(0,h.mj)("label");return y.sortAscending?a(e,t):a(t,e)}),[y.sortAscending]);return(0,n.useEffect)((()=>{if($&&void 0===u.value){const e=a[0]?Y.map((e=>a[0][e])):null;void 0!==(null==e?void 0:e[0])&&W(e)}else W(Q?null:u.value)}),[_,Q,$,R,J,W,a,Y,JSON.stringify(u.value)]),(0,n.useEffect)((()=>{O(K)}),[JSON.stringify(K)]),(0,g.tZ)(v.un,{height:w,width:F},(0,g.tZ)(v.jp,{validateStatus:u.validateStatus,extra:ae},(0,g.tZ)(f.Ph,{allowClear:!0,allowNewOptions:!0,allowSelectAll:!j,value:u.value||[],disabled:Q,getPopupContainer:L?()=>(null==A?void 0:A.current)||document.body:e=>(null==e?void 0:e.parentNode)||document.body,showSearch:I,mode:H?"multiple":"single",placeholder:te,onSearch:z,onBlur:X,onFocus:Z,onMouseEnter:N,onMouseLeave:C,onChange:ee,ref:D,loading:M,oneLine:k===m.Bp.HORIZONTAL,invertSelection:J,options:re,sortComparator:le,onDropdownVisibleChange:T})))}},74448:(e,t,a)=>{a.d(t,{Am:()=>s,h2:()=>l,jp:()=>i,un:()=>o});var n=a(51995),r=a(4591);const l=0,o=n.iK.div`
  min-height: ${e=>{let{height:t}=e;return t}}px;
  width: ${e=>{let{width:t}=e;return t===l?"100%":`${t}px`}};
`,i=(0,n.iK)(r.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,s=n.iK.div`
  color: ${e=>{var t;let{theme:a,status:n="error"}=e;return null==(t=a.colors[n])?void 0:t.base}};
`},56080:(e,t,a)=>{a.d(t,{EG:()=>s,WO:()=>i,vb:()=>o});var n=a(88889),r=a(54076),l=a(61641);const o=function(e,t,a,n){void 0===a&&(a=!1),void 0===n&&(n=!1);const r={};return a?r.adhoc_filters=[{expressionType:l.v.SQL,clause:l.P.WHERE,sqlExpression:"1 = 0"}]:null!=t&&0!==t.length&&(r.filters=[{col:e,op:n?"NOT IN":"IN",val:t}]),r},i=(e,t,a)=>{const n=[];return null!=t&&t!==a&&n.push({col:e,op:">=",val:t}),null!=a&&a!==t&&n.push({col:e,op:"<=",val:a}),null!=a&&null!=t&&a===t&&n.push({col:e,op:"==",val:a}),n.length?{filters:n}:{}};function s(e){let{timeFormatter:t,numberFormatter:a}=void 0===e?{}:e;return(e,l)=>{if(null==e)return r.li;if("boolean"==typeof e)return e?r.Tb:r.jy;if(l===n.Z.BOOLEAN)try{return JSON.parse(String(e).toLowerCase())?r.Tb:r.jy}catch{return r.jy}return"string"==typeof e?e:t&&l===n.Z.TEMPORAL?t(e):a&&"number"==typeof e&&l===n.Z.NUMERIC?a(e):String(e)}}},90057:(e,t,a)=>{a.d(t,{C:()=>o,x:()=>l});var n=a(12902),r=a(67294);function l(e){var t=(0,r.useState)((function(){return(0,n.vV)("function"==typeof e?e():e,!0)})),a=t[1];return[t[0],(0,r.useCallback)((function(e){a("function"==typeof e?(0,n.ZP)(e):(0,n.vV)(e))}),[])]}function o(e,t,a){var l=(0,r.useMemo)((function(){return(0,n.ZP)(e)}),[e]);return(0,r.useReducer)(l,t,a)}}}]);
//# sourceMappingURL=7ec54f99b15e81ff908d.chunk.js.map