import{d as e,n as t}from"./index-CccB4dPX.js";function n(e){let n=t(e.id);if(!n.length)return`<div class="app-wrap"><p>Кроссворд для этой главы пока не добавлен.</p></div>`;let r=e.color||`#7C3AED`,i=e.bg||`#EDE7FB`,a=n.map((e,t)=>{let n=e.word.split(``).map((e,n)=>`<input class="cw-box" data-word="${t}" data-idx="${n}" maxlength="1" autocomplete="off" spellcheck="false" />`).join(``);return`
      <div class="cw-row" data-word="${t}">
        <span class="cw-num" style="color:${r}">${t+1}</span>
        <div class="cw-boxes">${n}</div>
        <span class="cw-clue">${e.clue}</span>
      </div>`}).join(``);return`
    <div class="app-wrap">
      <header class="header">
        <button class="btn-back" id="btn-back-cw">← Упражнения</button>
        <div class="header-right"><span style="font-weight:600;color:${r}">Кроссворд</span></div>
      </header>

      <div style="padding:0 16px 24px">
        <h2 style="margin:16px 0 4px;font-size:1.2rem">🔤 Кроссворд — Глава ${e.id?.replace(`ch`,``)}</h2>
        <p style="color:#6b7280;font-size:0.85rem;margin:0 0 20px">Введи финское слово по подсказке. Буквы заглавные — вводи как обычно.</p>

        <div class="cw-grid">
          ${a}
        </div>

        <div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap">
          <button class="btn-primary" id="btn-cw-check" style="background:${r}">Проверить</button>
          <button class="btn-secondary" id="btn-cw-reset">Сбросить</button>
          <button class="btn-secondary" id="btn-cw-hint">💡 Подсказка</button>
        </div>

        <div id="cw-result" style="margin-top:16px;display:none"></div>
      </div>

      <style>
        .cw-grid { display:flex;flex-direction:column;gap:14px }
        .cw-row { display:flex;align-items:center;gap:10px;flex-wrap:wrap }
        .cw-num { font-weight:700;font-size:0.9rem;min-width:20px;text-align:right }
        .cw-boxes { display:flex;gap:4px }
        .cw-box {
          width:34px;height:40px;border:2px solid #d1d5db;border-radius:6px;
          text-align:center;font-size:1.1rem;font-weight:700;text-transform:uppercase;
          font-family:inherit;background:#fff;color:#111;
          transition:border-color .15s,background .15s;
        }
        .cw-box:focus { border-color:${r};outline:none;background:${i} }
        .cw-box.correct { border-color:#22c55e;background:#f0fdf4;color:#16a34a }
        .cw-box.wrong { border-color:#ef4444;background:#fef2f2;color:#dc2626 }
        .cw-clue { font-size:0.82rem;color:#6b7280;flex:1;min-width:120px }
      </style>
    </div>
  `}function r(n){let r=t(n.id);document.getElementById(`btn-back-cw`)?.addEventListener(`click`,()=>{e(`/chapter/${n.id}/exercises`)}),document.querySelectorAll(`.cw-box`).forEach(e=>{e.addEventListener(`keydown`,t=>{let n=+e.dataset.word,r=+e.dataset.idx;if(t.key===`Backspace`&&!e.value){let e=document.querySelector(`.cw-box[data-word="${n}"][data-idx="${r-1}"]`);e&&(e.value=``,e.focus())}}),e.addEventListener(`input`,t=>{e.value=e.value.toUpperCase().replace(/[^A-ZÄÖÅ]/gi,``)||e.value.toUpperCase();let n=+e.dataset.word,r=+e.dataset.idx;if(e.value){let e=document.querySelector(`.cw-box[data-word="${n}"][data-idx="${r+1}"]`);e&&e.focus()}e.classList.remove(`correct`,`wrong`)})}),document.getElementById(`btn-cw-check`)?.addEventListener(`click`,()=>{let e=0;r.forEach((t,n)=>{let r=t.word.split(``),i=!0;r.forEach((e,t)=>{let r=document.querySelector(`.cw-box[data-word="${n}"][data-idx="${t}"]`);r&&(r.value.toUpperCase()===e?(r.classList.add(`correct`),r.classList.remove(`wrong`)):(r.classList.add(`wrong`),r.classList.remove(`correct`),i=!1))}),i&&e++});let t=document.getElementById(`cw-result`);t.style.display=`block`;let n=Math.round(e/r.length*100);t.innerHTML=n===100?`<div style="background:#f0fdf4;border:1px solid #86efac;border-radius:10px;padding:12px 16px;color:#16a34a;font-weight:600">🎉 Все слова верно! ${e}/${r.length}</div>`:`<div style="background:#fef9c3;border:1px solid #fde047;border-radius:10px;padding:12px 16px;color:#854d0e">Верно ${e} из ${r.length} слов (${n}%). Красные клетки — ошибки.</div>`}),document.getElementById(`btn-cw-reset`)?.addEventListener(`click`,()=>{document.querySelectorAll(`.cw-box`).forEach(e=>{e.value=``,e.classList.remove(`correct`,`wrong`)});let e=document.getElementById(`cw-result`);e&&(e.style.display=`none`)}),document.getElementById(`btn-cw-hint`)?.addEventListener(`click`,()=>{for(let e=0;e<r.length;e++){let t=r[e].word.split(``);for(let n=0;n<t.length;n++){let r=document.querySelector(`.cw-box[data-word="${e}"][data-idx="${n}"]`);if(r&&r.value!==t[n]){r.value=t[n],r.classList.add(`correct`),r.classList.remove(`wrong`),r.focus();return}}}})}export{r as bindCrosswordPage,n as renderCrosswordPage};