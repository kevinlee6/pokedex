!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);const i=[59,130,149];document.getElementById("start-form").addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("start-form"),s=document.getElementById("top-left"),n=t.getElementsByTagName("input")[0].value;(async()=>{const e=e=>document.getElementById(e),t=e("start"),s=e("pokedex"),i=e("middle"),n=e("half-circle-top"),a=e("top-left"),o=e("half-circle-bottom"),d=document.getElementsByClassName("main-container")[0],c=document.getElementById("power-container"),l=(e,t)=>new Promise(s=>setTimeout(()=>{e(),s()},t)),r=()=>{o.classList.add("wobble-less"),n.classList.add("wobble-more")},m=()=>{n.classList.remove("wobble-more"),o.classList.remove("wobble-less")};t.classList.add("fadeout");for(let e=0;e<3;e++)await l(r,1e3),await l(m,1e3);d.removeChild(t),s.style.height="100%",s.classList.add("slide-up"),i.classList.add("open"),i.classList.remove("hidden"),await l(()=>{i.classList.remove("open")},1500),a.classList.add("fadein"),a.classList.remove("hidden"),c.classList.add("fadein"),c.classList.remove("hidden"),await l(()=>{a.classList.remove("fadein"),c.classList.remove("fadein")},1e3)})(),s.textContent=n;const a=new class{constructor(e){this.name=e,this.pokemonByName={},this.pokemonById={},this.isPokemonMaster=!1;const t=e=>document.getElementById(e);this.img=t("img"),this.description=t("description"),this.id=t("id"),this.name=t("name"),this.type1=t("type1"),this.type2=t("type2"),this.hp=t("hp"),this.atk=t("atk"),this.def=t("def"),this.abil=t("abil"),this.moves=t("moves"),this.height=t("height"),this.weight=t("weight"),this.powerContainer=t("power-container"),this.searchBtn=t("search-btn"),i.forEach(e=>this.add(e))}extractData(e){const{name:t,id:s,stats:i,abilities:n,types:a,sprites:o,moves:d,height:c,weight:l}=e;return{name:t,id:s,hp:i[5].base_stat,atk:i[4].base_stat,def:i[3].base_stat,abil:n.map(e=>e.ability.name),type:a.map(e=>e.type.name),photo:o.front_default,moves:d.map(e=>e.move.name),height:c,weight:l}}async fetchPokemon(e){const t=await fetch(`https://pokeapi.co/api/v2/pokemon/${e}/`),s=await t.json();return new class{constructor({name:e,id:t,hp:s,atk:i,def:n,abil:a,type:o,photo:d,moves:c,height:l,weight:r}){this.name=e,this.id=t,this.hp=s,this.atk=i,this.def=n,this.abil=a,this.type=o,this.photo=d,this.moves=c,this.height=l,this.weight=r,this.description=""}}(this.extractData(s))}async fetchDescription(e){const t=await fetch(`https://pokeapi.co/api/v2/pokemon-species/${e}/`),s=(await t.json()).flavor_text_entries.find(e=>"en"===e.language.name);return s?s.flavor_text:"There is no description available for this Pokémon."}add(e){this.searchBtn.classList.add("loading"),this.searchBtn.value="LOADING",Promise.all([this.fetchPokemon(e),this.fetchDescription(e)]).then(([e,t])=>{e.description=t,this.pokemonByName[e.name]=e,this.pokemonById[e.id]=e;const s=document.getElementById(`pokedex-${e.id}`);s.classList.remove("false");let i=e.id.toString();for(;3!==i.length;)i="0"+i;s.textContent=`${i}: ${e.name.toUpperCase()}`,this.changeData(e)}).catch(e=>{alert("There is no such Pokémon! Or there is a network error.")}).finally(()=>{this.searchBtn.classList.remove("loading"),this.searchBtn.value=this.isPokemonMaster?"ADD":"FIND"})}setTypeCSS(e){const t=e.classList;t.remove(t[0]),t.add(e.textContent.toLowerCase())}changeData(e){this.id.textContent=e.id,this.name.textContent=e.name.toUpperCase(),this.type1.textContent=e.type[0].toUpperCase(),this.setTypeCSS(type1),e.type[1]?(this.type2.textContent=e.type[1].toUpperCase(),this.setTypeCSS(type2)):(this.type2.textContent="",this.type2.classList.remove(type2.classList[0])),this.img.setAttribute("src",e.photo),this.description.textContent=e.description,this.hp.textContent=`HP: ${e.hp}`,this.hp.style.width=`${e.hp/2.55}%`,this.atk.textContent=`ATTACK: ${e.atk}`,this.atk.style.width=`${e.atk/1.9}%`,this.def.textContent=`DEFENSE: ${e.def}`,this.def.style.width=`${e.def/2.3}%`,this.abil.textContent=`${e.abil.map(e=>e.toUpperCase()).join(" | ")}`,this.moves.innerText="";for(const t of e.moves){const e=document.createElement("li");e.innerText=t.toUpperCase(),this.moves.appendChild(e)}this.height.innerText=`${e.height/10}m`,this.weight.innerText=`${e.weight/10}kg`}}(n);((e,t)=>{const s=document.getElementById("search-btn"),i=document.getElementById("input");s.addEventListener("click",t=>{t.preventDefault();const n=i.value.toLowerCase(),a=e.pokemonByName[n]||e.pokemonById[n];a?(e.changeData(a),"FIND"!==s.value&&alert("You already have this Pokémon!")):"FIND"===s.value?alert("This Pokémon is not available in this Pokédex!"):e.add(n)});const n=document.getElementById("pokemon-master"),a=document.getElementById("half-circle-top");n.addEventListener("click",()=>{e.isPokemonMaster?(a.classList.remove("master-ball"),s.value="FIND",e.isPokemonMaster=!1):(a.classList.add("master-ball"),s.value="ADD",e.isPokemonMaster=!0)}),document.getElementById("moves-btn").addEventListener("click",e=>{moves.classList.contains("hidden")?moves.classList.remove("hidden"):moves.classList.add("hidden")});const o=document.getElementById("power"),d=document.getElementById("middle");o.addEventListener("click",e=>{d.classList.contains("hidden")?(d.classList.add("open"),d.classList.remove("hidden"),setTimeout(()=>d.classList.remove("open"),2e3)):(d.classList.add("close"),setTimeout(()=>{d.classList.remove("close"),d.classList.add("hidden")},600))});const c=document.getElementById("left"),l=document.getElementById("right"),r=s=>{for(let i=0;i<s.length;i++)if(s[i].name===e.name.textContent.toLowerCase()){t=i;break}};c.addEventListener("click",()=>{if(document.activeElement===i)return;const s=Object.values(e.pokemonByName);r(s),--t<0&&(t=s.length-1),e.changeData(s[t])}),l.addEventListener("click",()=>{if(document.activeElement===i)return;const s=Object.values(e.pokemonByName);r(s),++t>=s.length&&(t=0),e.changeData(s[t])}),window.addEventListener("keydown",e=>{37===e.keyCode?c.click():39===e.keyCode&&l.click()})})(a,void 0),(e=>{const t=document.getElementById("pokemon-list"),s=document.getElementById("main-display"),i=document.getElementById("filter-btn"),n=document.getElementsByClassName("pokedex"),a=document.getElementById("pokemon-list-btn");a.addEventListener("click",()=>{t.classList.contains("hidden")?(t.classList.remove("hidden"),a.classList.add("is-clicked"),s.classList.add("hidden")):(t.classList.add("hidden"),a.classList.remove("is-clicked"),s.classList.remove("hidden"))});for(let i=1;i<803;i++){let n=document.createElement("p");n.setAttribute("id",`pokedex-${i}`),n.classList.add("false","clickable","pokedex"),n.addEventListener("click",o=>{n.classList.contains("false")&&!e.isPokemonMaster?alert("You don't have that Pokémon yet!"):n.classList.contains("false")&&e.isPokemonMaster?(e.add(i),t.classList.add("hidden"),s.classList.remove("hidden"),a.classList.remove("is-clicked")):!n.classList.contains("false")&&e.isPokemonMaster?(alert("You already have that pokemon!"),e.changeData(e.pokemonById[i])):(e.changeData(e.pokemonById[i]),t.classList.add("hidden"),s.classList.remove("hidden"),a.classList.remove("is-clicked"))});let o=i.toString();for(;3!==o.length;)o="0"+o;n.textContent=`${o}: ???`,t.appendChild(n)}let o=!1;i.addEventListener("click",e=>{if(o=!o){i.classList.add("is-clicked");for(let e of n)e.classList.contains("false")&&e.classList.add("hidden")}else{i.classList.remove("is-clicked");for(let e of n)e.classList.remove("hidden")}})})(a)})}]);