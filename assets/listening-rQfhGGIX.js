const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-B_1lhdFN.js","assets/index-Cs5SYE4U.css"])))=>i.map(i=>d[i]);
import{i as e,o as t,s as n}from"./index-B_1lhdFN.js";function r(e){return e===`puhekieli`?`<span class="reg-badge reg-puhe">💬 puhekieli</span>`:e===`kirjakieli`?`<span class="reg-badge reg-kirja">📖 kirjakieli</span>`:``}var i=null,a=null,o=[],s=0,c=0,l=!1;function u(){return document.querySelector(`#app`)}function d(n){return i=n,a=t[n.id]||{color:`#7C3AED`,bg:`#EDE7FB`},o=e(n.id),s=0,c=0,p()}function f(){m()}function p(){return`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="ls-back-list">← Упражнения</button>
      </header>
      <div class="mode-select-screen">
        <h2 class="mode-title">🎧 Аудирование</h2>
        <p style="color:#6B7280;font-size:14px;text-align:center;margin-top:-8px">Suomen Mestari · Глава 1</p>
        <div class="mode-cards" style="margin-top:16px">
          ${o.map((e,t)=>`
            <div class="mode-card ls-track-card" data-i="${t}">
              <div class="mode-icon" style="background:${a.bg}">🎵</div>
              <div class="mode-info">
                <div class="mode-name">${e.title} ${r(e.register)}</div>
                <div class="mode-desc">${e.title_ru} · ${e.questions.length} вопроса</div>
              </div>
              <button class="mode-btn" style="background:${a.color}">Слушать →</button>
            </div>`).join(``)}
        </div>
      </div>
    </div>`}function m(){document.getElementById(`ls-back-list`)?.addEventListener(`click`,()=>{n(()=>import(`./index-B_1lhdFN.js`).then(e=>e.t).then(e=>{u().innerHTML=e.renderExercisesPage(i,[],[]),e.bindExercisesPage()}),__vite__mapDeps([0,1]))}),document.querySelectorAll(`.ls-track-card`).forEach(e=>{e.addEventListener(`click`,()=>{s=+e.dataset.i,c=0,l=!1,h()})})}function h(){let e=o[s];g(e,0)}function g(e,t){let n=e.questions[t],i=t===e.questions.length-1,o=Math.round(t/e.questions.length*100);u().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="ls-back-track">← Аудирование</button>
        <span class="vocab-counter">${t+1} / ${e.questions.length} · ✓ ${c}</span>
      </header>
      <div class="ex-progress-bar">
        <div class="ex-progress-fill" style="width:${o}%;background:${a.color}"></div>
      </div>
      <div class="ex-container">
        <div class="ex-card">
          <div class="ex-type-badge" style="background:${a.bg};color:${a.color}">
            🎧 ${e.title} ${r(e.register)}
          </div>

          <!-- Audio player -->
          <div class="ls-player">
            <audio id="ls-audio" src="${e.src}" preload="auto"></audio>
            <button class="ls-play-btn" id="ls-play" style="background:${a.color}">▶ Слушать</button>
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
          <button class="mg-check-btn" id="ls-check" style="background:${a.color}">Проверить</button>
        </div>
      </div>
    </div>`,document.getElementById(`ls-back-track`)?.addEventListener(`click`,()=>{u().innerHTML=p(),m()});let s=document.getElementById(`ls-audio`),d=document.getElementById(`ls-play`);d?.addEventListener(`click`,()=>{s.paused?(s.play(),d.textContent=`⏸ Пауза`):(s.pause(),d.textContent=`▶ Слушать`)}),s?.addEventListener(`ended`,()=>{d.textContent=`▶ Слушать ещё раз`});let f=document.getElementById(`ls-check`),h=document.getElementById(`ls-feedback`);function v(r){if(l)return;l=!0;let a=n.answer.toLowerCase(),o=r.toLowerCase()===a;o&&c++,h.innerHTML=o?`<span class="mg-correct">✓ Правильно!</span>`:`<span class="mg-wrong">✗ Правильно: <em>${n.answer}</em></span>`,f.textContent=i?`Завершить →`:`Дальше →`,f.onclick=()=>{l=!1,i?_(e):g(e,t+1)}}if(n.type===`mc`)document.querySelectorAll(`.ls-opt-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.ls-opt-btn`).forEach(e=>e.disabled=!0);let t=e.dataset.opt===n.answer;e.style.background=t?`#dcfce7`:`#fee2e2`,t||document.querySelectorAll(`.ls-opt-btn`).forEach(e=>{e.dataset.opt===n.answer&&(e.style.background=`#dcfce7`)}),v(e.dataset.opt)})}),f.style.display=`none`;else{let e=document.getElementById(`ls-input`);e?.focus(),e?.addEventListener(`keydown`,t=>{t.key===`Enter`&&v(e.value.trim())}),f?.addEventListener(`click`,()=>v(e?.value.trim()||``))}}function _(e){let t=e.questions.length,n=Math.round(c/t*100),r=n>=80?`🎉`:n>=50?`👍`:`💪`;u().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="ls-back-done">← Аудирование</button>
      </header>
      <div class="ex-container" style="text-align:center;padding-top:40px">
        <div style="font-size:48px">${r}</div>
        <h2 style="color:${a.color};margin:12px 0 8px">Готово!</h2>
        <p style="color:#6B7280">Результат: <strong style="color:${a.color}">${c} / ${t}</strong> (${n}%)</p>
        <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px;max-width:300px;margin-inline:auto">
          <button class="mode-btn" id="ls-retry" style="background:${a.color}">Повторить →</button>
          <button class="mode-btn" id="ls-all" style="background:white;color:${a.color};border:2px solid ${a.color}">← Все треки</button>
        </div>
      </div>
    </div>`,document.getElementById(`ls-back-done`)?.addEventListener(`click`,()=>{u().innerHTML=p(),m()}),document.getElementById(`ls-all`)?.addEventListener(`click`,()=>{u().innerHTML=p(),m()}),document.getElementById(`ls-retry`)?.addEventListener(`click`,()=>{c=0,l=!1,g(e,0)})}export{f as bindListeningPage,d as renderListeningPage};