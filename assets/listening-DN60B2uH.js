const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-H0niVZwf.js","assets/index-Cs5SYE4U.css"])))=>i.map(i=>d[i]);
import{c as e,i as t,o as n,s as r}from"./index-H0niVZwf.js";function i(e){return e===`puhekieli`?`<span class="reg-badge reg-puhe">💬 puhekieli</span>`:e===`kirjakieli`?`<span class="reg-badge reg-kirja">📖 kirjakieli</span>`:``}var a=null,o=null,s=[],c=0,l=0,u=!1;function d(){return document.querySelector(`#app`)}function f(e){return a=e,o=n[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`},s=t(e.id),c=0,l=0,m()}function p(){h()}function m(){return`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="ls-back-list">← Упражнения</button>
      </header>
      <div class="mode-select-screen">
        <h2 class="mode-title">🎧 Аудирование</h2>
        <p style="color:#6B7280;font-size:14px;text-align:center;margin-top:-8px">Suomen Mestari · Глава 1</p>
        <div class="mode-cards" style="margin-top:16px">
          ${s.map((e,t)=>`
            <div class="mode-card ls-track-card" data-i="${t}">
              <div class="mode-icon" style="background:${o.bg}">🎵</div>
              <div class="mode-info">
                <div class="mode-name">${e.title} ${i(e.register)}</div>
                <div class="mode-desc">${e.title_ru} · ${e.questions.length} вопроса</div>
              </div>
              <button class="mode-btn" style="background:${o.color}">Слушать →</button>
            </div>`).join(``)}
        </div>
      </div>
    </div>`}function h(){document.getElementById(`ls-back-list`)?.addEventListener(`click`,()=>{e(()=>import(`./index-H0niVZwf.js`).then(e=>e.t).then(e=>{d().innerHTML=e.renderExercisesPage(a,[],[]),e.bindExercisesPage()}),__vite__mapDeps([0,1]))}),document.querySelectorAll(`.ls-track-card`).forEach(e=>{e.addEventListener(`click`,()=>{c=+e.dataset.i,l=0,u=!1,r.listeningStart(a.id,s[c].id),g()})})}function g(){let e=s[c];_(e,0)}function _(e,t){let n=e.questions[t],r=t===e.questions.length-1,a=Math.round(t/e.questions.length*100);d().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="ls-back-track">← Аудирование</button>
        <span class="vocab-counter">${t+1} / ${e.questions.length} · ✓ ${l}</span>
      </header>
      <div class="ex-progress-bar">
        <div class="ex-progress-fill" style="width:${a}%;background:${o.color}"></div>
      </div>
      <div class="ex-container">
        <div class="ex-card">
          <div class="ex-type-badge" style="background:${o.bg};color:${o.color}">
            🎧 ${e.title} ${i(e.register)}
          </div>

          <!-- Audio player -->
          <div class="ls-player">
            <audio id="ls-audio" src="${e.src}" preload="auto"></audio>
            <button class="ls-play-btn" id="ls-play" style="background:${o.color}">▶ Слушать</button>
            <div class="ls-hint">${e.hint}</div>
          </div>

          <!-- Question -->
          <div class="ls-question">${n.q}</div>

          ${n.type===`mc`?`
            <div class="ls-options">
              ${n.options.map(e=>`<button class="ls-opt-btn" data-opt="${e}">${e}</button>`).join(``)}
            </div>
          `:`
            <div class="grammar-input-row">
              <input class="grammar-input" id="ls-input" type="text" placeholder="Напиши ответ..." autocomplete="off" autocorrect="off" spellcheck="false">
            </div>
          `}

          <div class="mg-feedback" id="ls-feedback"></div>
          <button class="mg-check-btn" id="ls-check" style="background:${o.color}">Проверить</button>
        </div>
      </div>
    </div>`,document.getElementById(`ls-back-track`)?.addEventListener(`click`,()=>{d().innerHTML=m(),h()});let s=document.getElementById(`ls-audio`),c=document.getElementById(`ls-play`);c?.addEventListener(`click`,()=>{s.paused?(s.play(),c.textContent=`⏸ Пауза`):(s.pause(),c.textContent=`▶ Слушать`)}),s?.addEventListener(`ended`,()=>{c.textContent=`▶ Слушать ещё раз`});let f=document.getElementById(`ls-check`),p=document.getElementById(`ls-feedback`);function g(i){if(u)return;u=!0;let a=n.answer.toLowerCase(),o=i.toLowerCase()===a;o&&l++,p.innerHTML=o?`<span class="mg-correct">✓ Правильно!</span>`:`<span class="mg-wrong">✗ Правильно: <em>${n.answer}</em></span>`,f.textContent=r?`Завершить →`:`Дальше →`,f.onclick=()=>{u=!1,r?v(e):_(e,t+1)}}if(n.type===`mc`)document.querySelectorAll(`.ls-opt-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.ls-opt-btn`).forEach(e=>e.disabled=!0);let t=e.dataset.opt===n.answer;e.style.background=t?`#dcfce7`:`#fee2e2`,t||document.querySelectorAll(`.ls-opt-btn`).forEach(e=>{e.dataset.opt===n.answer&&(e.style.background=`#dcfce7`)}),g(e.dataset.opt)})}),f.style.display=`none`;else{let e=document.getElementById(`ls-input`);e?.focus(),e?.addEventListener(`keydown`,t=>{t.key===`Enter`&&g(e.value.trim())}),f?.addEventListener(`click`,()=>g(e?.value.trim()||``))}}function v(e){let t=e.questions.length,n=Math.round(l/t*100);r.listeningComplete(a.id,e.id,l,t);let i=n>=80?`🎉`:n>=50?`👍`:`💪`;d().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="ls-back-done">← Аудирование</button>
      </header>
      <div class="ex-container" style="text-align:center;padding-top:40px">
        <div style="font-size:48px">${i}</div>
        <h2 style="color:${o.color};margin:12px 0 8px">Готово!</h2>
        <p style="color:#6B7280">Результат: <strong style="color:${o.color}">${l} / ${t}</strong> (${n}%)</p>
        <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px;max-width:300px;margin-inline:auto">
          <button class="mode-btn" id="ls-retry" style="background:${o.color}">Повторить →</button>
          <button class="mode-btn" id="ls-all" style="background:white;color:${o.color};border:2px solid ${o.color}">← Все треки</button>
        </div>
      </div>
    </div>`,document.getElementById(`ls-back-done`)?.addEventListener(`click`,()=>{d().innerHTML=m(),h()}),document.getElementById(`ls-all`)?.addEventListener(`click`,()=>{d().innerHTML=m(),h()}),document.getElementById(`ls-retry`)?.addEventListener(`click`,()=>{l=0,u=!1,_(r,0)})}export{p as bindListeningPage,f as renderListeningPage};