const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-MPk59e3e.js","assets/index-CdQz-gzi.css"])))=>i.map(i=>d[i]);
import{a as e,c as t,d as n,l as r,s as i,u as a}from"./index-MPk59e3e.js";function o(e){return e===`puhekieli`?`<span class="reg-badge reg-puhe">💬 puhekieli</span>`:e===`kirjakieli`?`<span class="reg-badge reg-kirja">📖 kirjakieli</span>`:``}var s=null,c=null,l=[],u=0,d=0,f=!1;function p(){return document.querySelector(`#app`)}function m(t){return s=t,c=i[t.id]||{color:`#7C3AED`,bg:`#EDE7FB`},l=e(t.id),u=0,d=0,g()}function h(){_()}function g(){return`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="ls-back-list">← Упражнения</button>
      </header>
      <div class="mode-select-screen">
        <h2 class="mode-title">🎧 Аудирование</h2>
        <p style="color:#6B7280;font-size:14px;text-align:center;margin-top:-8px">Suomen Mestari · Глава 1</p>
        <div class="mode-cards" style="margin-top:16px">
          ${l.map((e,t)=>`
            <div class="mode-card ls-track-card" data-i="${t}">
              <div class="mode-icon" style="background:${c.bg}">🎵</div>
              <div class="mode-info">
                <div class="mode-name">${e.title} ${o(e.register)}</div>
                <div class="mode-desc">${e.title_ru} · ${e.questions.length} вопроса</div>
              </div>
              <button class="mode-btn" style="background:${c.color}">Слушать →</button>
            </div>`).join(``)}
        </div>
      </div>
    </div>`}function _(){document.getElementById(`ls-back-list`)?.addEventListener(`click`,()=>{r(()=>import(`./index-MPk59e3e.js`).then(e=>e.t).then(e=>{p().innerHTML=e.renderExercisesPage(s,[],[]),e.bindExercisesPage()}),__vite__mapDeps([0,1]))}),document.querySelectorAll(`.ls-track-card`).forEach(e=>{e.addEventListener(`click`,()=>{u=+e.dataset.i,d=0,f=!1,t.listeningStart(s.id,l[u].id),v()})})}function v(){let e=l[u];y(e,0)}function y(e,t){let n=e.questions[t],r=t===e.questions.length-1,i=Math.round(t/e.questions.length*100);p().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="ls-back-track">← Аудирование</button>
        <span class="vocab-counter">${t+1} / ${e.questions.length} · ✓ ${d}</span>
      </header>
      <div class="ex-progress-bar">
        <div class="ex-progress-fill" style="width:${i}%;background:${c.color}"></div>
      </div>
      <div class="ex-container">
        <div class="ex-card">
          <div class="ex-type-badge" style="background:${c.bg};color:${c.color}">
            🎧 ${e.title} ${o(e.register)}
          </div>

          <!-- Audio player -->
          <div class="ls-player">
            <audio id="ls-audio" src="${e.src}" preload="auto"></audio>
            <button class="ls-play-btn" id="ls-play" style="background:${c.color}">▶ Слушать</button>
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
          <button class="mg-check-btn" id="ls-check" style="background:${c.color}">Проверить</button>
        </div>
      </div>
    </div>`,document.getElementById(`ls-back-track`)?.addEventListener(`click`,()=>{p().innerHTML=g(),_()});let a=document.getElementById(`ls-audio`),s=document.getElementById(`ls-play`);s?.addEventListener(`click`,()=>{a.paused?(a.play(),s.textContent=`⏸ Пауза`):(a.pause(),s.textContent=`▶ Слушать`)}),a?.addEventListener(`ended`,()=>{s.textContent=`▶ Слушать ещё раз`});let l=document.getElementById(`ls-check`),u=document.getElementById(`ls-feedback`);function m(i){if(f)return;f=!0;let a=n.answer.toLowerCase(),o=i.toLowerCase()===a;o&&d++,u.innerHTML=o?`<span class="mg-correct">✓ Правильно!</span>`:`<span class="mg-wrong">✗ Правильно: <em>${n.answer}</em></span>`,l.textContent=r?`Завершить →`:`Дальше →`,l.onclick=()=>{f=!1,r?b(e):y(e,t+1)}}if(n.type===`mc`)document.querySelectorAll(`.ls-opt-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.ls-opt-btn`).forEach(e=>e.disabled=!0);let t=e.dataset.opt===n.answer;e.style.background=t?`#dcfce7`:`#fee2e2`,t||document.querySelectorAll(`.ls-opt-btn`).forEach(e=>{e.dataset.opt===n.answer&&(e.style.background=`#dcfce7`)}),m(e.dataset.opt)})}),l.style.display=`none`;else{let e=document.getElementById(`ls-input`);e?.focus(),e?.addEventListener(`keydown`,t=>{t.key===`Enter`&&m(e.value.trim())}),l?.addEventListener(`click`,()=>m(e?.value.trim()||``))}}function b(e){let r=e.questions.length,i=Math.round(d/r*100);t.listeningComplete(s.id,e.id,d,r),n(a().activeProfile,s.id,`listening_done`,null);let o=i>=80?`🎉`:i>=50?`👍`:`💪`;p().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="ls-back-done">← Аудирование</button>
      </header>
      <div class="ex-container" style="text-align:center;padding-top:40px">
        <div style="font-size:48px">${o}</div>
        <h2 style="color:${c.color};margin:12px 0 8px">Готово!</h2>
        <p style="color:#6B7280">Результат: <strong style="color:${c.color}">${d} / ${r}</strong> (${i}%)</p>
        <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px;max-width:300px;margin-inline:auto">
          <button class="mode-btn" id="ls-retry" style="background:${c.color}">Повторить →</button>
          <button class="mode-btn" id="ls-all" style="background:white;color:${c.color};border:2px solid ${c.color}">← Все треки</button>
        </div>
      </div>
    </div>`,document.getElementById(`ls-back-done`)?.addEventListener(`click`,()=>{p().innerHTML=g(),_()}),document.getElementById(`ls-all`)?.addEventListener(`click`,()=>{p().innerHTML=g(),_()}),document.getElementById(`ls-retry`)?.addEventListener(`click`,()=>{d=0,f=!1,y(t,0)})}export{h as bindListeningPage,m as renderListeningPage};