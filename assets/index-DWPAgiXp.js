(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`finnish_app`;function t(){return{activeProfile:`julia`,profiles:{julia:{name:`Julia`,avatar:`🦊`,chapters:{},vocabulary:{},exercises:{}},paul:{name:`Paul`,avatar:`🐱`,chapters:{},vocabulary:{},exercises:{}}}}}function n(){try{return JSON.parse(localStorage.getItem(e))||t()}catch{return t()}}function r(t){localStorage.setItem(e,JSON.stringify(t))}function i(){let e=n();return e.profiles[e.activeProfile]}function a(e){let t=n();t.activeProfile=e,r(t)}var o=[{id:`ch1`,title_fi:`Hei ja tervetuloa`,title_ru:`Привет и добро пожаловать`,color:`#7C3AED`,bg:`#EDE7FB`,img:`ch1.png`},{id:`ch2`,title_fi:`Minkämaalainen sinä olet?`,title_ru:`Ты откуда?`,color:`#EC4899`,bg:`#FAE9F2`,img:`ch2.png`},{id:`ch3`,title_fi:`Pedro soittaa Mikkolle`,title_ru:`Педро звонит Микко`,color:`#F59E0B`,bg:`#FEEEDB`,img:`ch3.png`},{id:`ch4`,title_fi:`Minä`,title_ru:`Я`,color:`#10B981`,bg:`#E8F7EE`,img:`ch4.png`},{id:`ch5`,title_fi:`Meidän tavallinen päivä`,title_ru:`Наш обычный день`,color:`#3B82F6`,bg:`#E9EEFB`,img:`ch5.png`}];function s(e){let t=new Date().getHours();return t>=6&&t<12?`Hyvää huomenta, ${e}! ☀️ Готова к финскому?`:t>=12&&t<18?`Hei hei, ${e}! Продолжим?`:`Hyvää iltaa, ${e}! Один урок перед сном?`}function c(e,t,n=20){let r=e.exercises[t]||{},i=e.vocabulary[t]||{},a=Object.values(r).filter(e=>e.completed).length+Object.values(i).filter(e=>e.seen).length;return Math.min(100,Math.round(a/n*100))}function l(e){let t=e.profiles;return`
    <header class="header">
      <div class="logo">
        <img src="/lets-go-finnish/logo.png" alt="Let's Go Learn Finnish!" class="logo-img">
      </div>
      <div class="header-right">
        <div class="profile-switcher">
          ${Object.entries(t).map(([t,n])=>`
            <button class="profile-btn ${e.activeProfile===t?`active`:``}"
                    data-profile="${t}">
              <img class="avatar" src="/lets-go-finnish/${t}.png" alt="${n.name}">
              <span class="pname">${n.name}</span>
            </button>
          `).join(``)}
        </div>
        <button class="btn-cta">Начать учить</button>
      </div>
    </header>
  `}function u(e,t){let n=i();return`
    ${l(e)}
    <div class="hero">
      <div class="hero-text">
        <h1><span class="hero-accent">Suomi on vaikea.</span><br>Mutta me справимся 💪</h1>
        <p class="greeting">${s(n.name)}</p>
      </div>
      <div class="hero-deco">
        <div class="deco-card deco-1"><span class="deco-dot"></span>Moikka! — Привет!</div>
        <div class="deco-card deco-2"><span class="deco-dot"></span>Kiitos — Спасибо</div>
        <div class="deco-card deco-3"><span class="deco-dot"></span>Hyvää! — Отлично!</div>
      </div>
    </div>
    <p class="section-title">Главы учебника</p>
    <div class="chapters-grid">
      ${t.map((e,t)=>d(e,t+1,n)).join(``)}
    </div>
  `}function d(e,t,n){let r=c(n,e.id),i=r===100,a=r===0?`Начать`:i?`Повторить`:`Продолжить →`;return`
    <div class="chapter-card ${i?`done`:``} ${r>0?`in-progress`:``}"
         data-chapter="${e.id}"
         style="--card-color: ${e.color}">
      <div class="card-img-wrap" style="background: ${e.bg}">
        <img src="/lets-go-finnish/${e.img}" alt="${e.title_fi}" class="card-img">
      </div>
      <div class="card-body">
        <div class="card-top">
          <span class="card-label">Глава ${t}</span>
          ${i?`<span class="done-badge">✓</span>`:``}
        </div>
        <div class="card-title">${e.title_fi}</div>
        <div class="card-subtitle">${e.title_ru}</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${r}%; background: ${e.color}"></div>
        </div>
        <div class="card-footer">
          <span class="progress-label">${r}%</span>
          <button class="btn-card" style="color: ${e.color}; border-color: ${e.color}">${a}</button>
        </div>
      </div>
    </div>
  `}function f(e){document.querySelector(`#app`).innerHTML=e}function p(){document.querySelectorAll(`.profile-btn`).forEach(e=>{e.addEventListener(`click`,()=>{a(e.dataset.profile),m()})}),document.querySelectorAll(`.chapter-card`).forEach(e=>{e.addEventListener(`click`,()=>{alert(`Глава ${e.dataset.chapter} — скоро откроем!`)})})}function m(){f(u(n(),o)),p()}m();