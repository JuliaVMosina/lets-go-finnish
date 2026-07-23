const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-aU0Gfq4Z.js","assets/index-XL1p1dX4.css"])))=>i.map(i=>d[i]);
import{f as e,i as t,l as n,m as r,p as i,u as a}from"./index-aU0Gfq4Z.js";var o=null,s=null,c=null,l=0,u=0;function d(){return document.querySelector(`#app`)}function f(e){return o=e,s=n[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`},c=t(),a.exerciseStart?.(e.id,`alphabet`),m()}function p(){h()}function m(){let{color:e,bg:t}=s,n=new Set(c.special),r=c.letters.map(e=>`
      <div class="ab-letter-card${n.has(e.letter)?` ab-special`:``}" title="${e.name} — ${e.sound}">
        <div class="ab-letter">${e.letter}</div>
        <div class="ab-name">${e.name}</div>
        <div class="ab-sound">${e.sound}</div>
        <div class="ab-example">${e.example} <span class="ab-example-ru">${e.example_ru}</span></div>
      </div>`).join(``);return`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="ab-back">← Упражнения</button>
      </header>
      <div class="ex-container" style="max-width:700px;margin-inline:auto">

        <!-- Audio block -->
        <div class="ex-card" style="margin-bottom:16px">
          <div class="ex-type-badge" style="background:${t};color:${e}">🔤 Aakkoset · Алфавит</div>
          <p style="color:#6B7280;font-size:14px;margin:8px 0 14px">
            В финском 29 букв — 3 уникальные: <strong style="color:${e}">Å Ä Ö</strong>.
            Нажми и слушай как они произносятся.
          </p>
          <div class="ls-player" style="margin-bottom:0">
            <audio id="ab-audio" src="${c.audioSrc}" preload="auto"></audio>
            <button class="ls-play-btn" id="ab-play" style="background:${e}">▶ Слушать алфавит</button>
            <div class="ls-hint">Запись из Suomen Mestari — 004 Aakkoset</div>
          </div>
        </div>

        <!-- Letter grid -->
        <div class="ex-card" style="margin-bottom:16px">
          <div class="ex-type-badge" style="background:${t};color:${e}">📋 Все буквы</div>
          <div style="display:flex;align-items:center;gap:8px;margin:8px 0 12px;flex-wrap:wrap">
            <span class="reg-badge" style="background:${t};color:${e}">⭐ особые финские буквы</span>
          </div>
          <div class="ab-grid">${r}</div>
        </div>

        <!-- Vowel harmony note -->
        <div class="ex-card ab-harmony-card" style="margin-bottom:16px;border-left:4px solid ${e}">
          <div class="ex-type-badge" style="background:${t};color:${e}">🎵 Гармония гласных</div>
          <p style="color:#374151;font-size:14px;margin:10px 0 8px">
            Финский язык делит гласные на два лагеря — суффиксы согласуются с корнем:
          </p>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:10px">
            <div class="ab-harmony-box" style="border-color:#F59E0B;background:#fffbeb">
              <div class="ab-harmony-title" style="color:#B45309">⬅ Задние (takavokaali)</div>
              <div class="ab-harmony-letters">A · O · U</div>
              <div class="ab-harmony-ex">talo<strong>ssa</strong> · kaupungi<strong>lla</strong></div>
            </div>
            <div class="ab-harmony-box" style="border-color:#8B5CF6;background:#f5f3ff">
              <div class="ab-harmony-title" style="color:#7C3AED">➡ Передние (etuvokaali)</div>
              <div class="ab-harmony-letters">Ä · Ö · Y</div>
              <div class="ab-harmony-ex">pöydä<strong>ssä</strong> · kaupungi<strong>lla</strong></div>
            </div>
            <div class="ab-harmony-box" style="border-color:#10B981;background:#f0fdf4">
              <div class="ab-harmony-title" style="color:#15803d">↔ Нейтральные</div>
              <div class="ab-harmony-letters">E · I</div>
              <div class="ab-harmony-ex">идут с любыми суффиксами</div>
            </div>
          </div>
        </div>

        <!-- Start quiz button -->
        <div style="text-align:center;padding:8px 0 24px">
          <button class="ex-next-btn" id="ab-start-quiz" style="background:${e};max-width:280px;margin:0 auto">
            Проверить знание букв →
          </button>
        </div>
      </div>
    </div>`}function h(){document.getElementById(`ab-back`)?.addEventListener(`click`,()=>{e(()=>import(`./index-aU0Gfq4Z.js`).then(e=>e.t).then(e=>{d().innerHTML=e.renderExercisesPage(o,[],[]),e.bindExercisesPage()}),__vite__mapDeps([0,1]))});let t=document.getElementById(`ab-audio`),n=document.getElementById(`ab-play`),r=!1;n?.addEventListener(`click`,()=>{t&&(r?(t.pause(),t.currentTime=0,n.textContent=`▶ Слушать алфавит`,r=!1):(t.play().catch(()=>{}),n.textContent=`⏹ Остановить`,r=!0))}),t?.addEventListener(`ended`,()=>{n.textContent=`▶ Слушать алфавит`,r=!1}),document.getElementById(`ab-start-quiz`)?.addEventListener(`click`,()=>{l=0,u=0,g()})}function g(){let e=c.quiz;if(l>=e.length){_();return}let t=e[l],{color:n,bg:r}=s,i=[...t.options].sort(()=>Math.random()-.5);d().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="ab-quiz-back">← Алфавит</button>
        <span class="vocab-counter">${l+1} / ${e.length} · ✓ ${u}</span>
      </header>
      <div class="ex-progress-bar">
        <div class="ex-progress-fill" style="width:${l/e.length*100}%;background:${n}"></div>
      </div>
      <div class="ex-container">
        <div class="ex-card">
          <div class="ex-type-badge" style="background:${r};color:${n}">🔤 Алфавит-квиз</div>
          <div class="ex-question" style="margin:20px 0">${t.q}</div>
          <div class="ex-options" id="ab-options">
            ${i.map((e,n)=>`
              <button class="ex-option" data-value="${e}" data-correct="${e===t.answer}">
                <span class="ex-option-letter">${`ABCD`[n]}</span>
                <span>${e}</span>
              </button>`).join(``)}
          </div>
          <div id="ab-feedback" style="display:none;margin-top:14px;text-align:center"></div>
        </div>
      </div>
    </div>`,document.getElementById(`ab-quiz-back`)?.addEventListener(`click`,()=>{d().innerHTML=m(),h()}),document.querySelectorAll(`#ab-options .ex-option`).forEach(r=>{r.addEventListener(`click`,()=>{document.querySelectorAll(`#ab-options .ex-option`).forEach(e=>{e.disabled=!0});let i=r.dataset.correct===`true`;i&&u++,r.style.borderColor=i?`#10B981`:`#EF4444`,document.querySelectorAll(`#ab-options .ex-option`).forEach(e=>{e.dataset.correct===`true`&&(e.style.borderColor=`#10B981`)});let a=document.getElementById(`ab-feedback`);a.style.display=`block`,a.innerHTML=(i?`<span style="color:var(--success);font-weight:700">✅ Верно!</span>`:`<span style="color:var(--error)">❌ Правильно: <strong>${t.answer}</strong></span>`)+`<br><button class="ex-next-btn" style="background:${n};margin-top:12px;width:100%"
              id="ab-next">${l===e.length-1?`Завершить →`:`Дальше →`}</button>`,document.getElementById(`ab-next`)?.addEventListener(`click`,()=>{l++,g()})},{once:!0})})}function _(){let t=c.quiz.length,n=Math.round(u/t*100),f=n>=80?`🎉`:n>=50?`👍`:`💪`,{color:p}=s;r(i().activeProfile,o.id,`alphabet_done`,null),a.exerciseComplete?.(o.id,`alphabet`,u,t),d().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="ab-done-back">← Алфавит</button>
      </header>
      <div class="complete-screen">
        <div class="complete-emoji">${f}</div>
        <h2>Алфавит пройден!</h2>
        <p style="color:#6B7280;margin-top:8px">Результат: <strong style="color:${p}">${u} / ${t}</strong> (${n}%)</p>
        <div style="display:flex;gap:12px;margin-top:24px;justify-content:center;flex-wrap:wrap">
          <button class="btn-complete" style="background:${p}" id="ab-retry">Ещё раз</button>
          <button class="btn-complete" style="background:white;color:${p};border:2px solid ${p}" id="ab-to-hub">К упражнениям</button>
        </div>
      </div>
    </div>`,document.getElementById(`ab-done-back`)?.addEventListener(`click`,()=>{d().innerHTML=m(),h()}),document.getElementById(`ab-retry`)?.addEventListener(`click`,()=>{l=0,u=0,g()}),document.getElementById(`ab-to-hub`)?.addEventListener(`click`,()=>{e(()=>import(`./index-aU0Gfq4Z.js`).then(e=>e.t).then(e=>{d().innerHTML=e.renderExercisesPage(o,[],[]),e.bindExercisesPage()}),__vite__mapDeps([0,1]))})}export{p as bindAlphabetPage,f as renderAlphabetPage};