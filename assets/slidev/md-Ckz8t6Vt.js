import{d as u,z as p,f as b,o as c,g as e,j as m,k as v,b as f,w as g,i as a,v as k,x,T as i}from"../modules/vue-C-lq0ZUA.js";import{u as d,f as h}from"./context-DdaKDF5l.js";import"../index-8picXKqk.js";import"../modules/shiki-CUeUv8pe.js";function l(t){return t.startsWith("/")?"/"+t.slice(1):t}function _(t,n=!1){const o=t&&["#","rgb","hsl"].some(r=>t.indexOf(r)===0),s={background:o?t:void 0,color:t&&!o?"white":void 0,backgroundImage:o?void 0:t?n?`linear-gradient(#0005, #0008), url(${l(t)})`:`url("${l(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const $={class:"my-auto w-full"},w=u({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(t){d();const n=t,o=p(()=>_(n.background,!0));return(s,r)=>(c(),b("div",{class:"slidev-layout cover text-center",style:v(o.value)},[e("div",$,[m(s.$slots,"default")])],4))}}),P={__name:"slides.md__slidev_1",setup(t){const{$clicksContext:n,$frontmatter:o}=d();return n.setup(),(s,r)=>(c(),f(w,k(x(i(h)(i(o),0))),{default:g(()=>[r[0]||(r[0]=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1)),r[1]||(r[1]=e("h2",null,"Mobile frameworks",-1)),r[2]||(r[2]=e("h2",null,"EASV",-1)),r[3]||(r[3]=e("h3",null,"Kristian Urup",-1)),a(` <div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div> `),a(` 
<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div> `)]),_:1},16))}};export{P as default};
