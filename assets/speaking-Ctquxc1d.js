const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-B_1lhdFN.js","assets/index-Cs5SYE4U.css"])))=>i.map(i=>d[i]);
import{o as e,r as t,s as n}from"./index-B_1lhdFN.js";var r=null,i=null,a=[],o=[],s=0,c=0;function l(){return document.querySelector(`#app`)}function u(n){return r=n,i=e[n.id]||{color:`#7C3AED`,bg:`#EDE7FB`},a=t(n.id),p()}function d(){m()}function f(){let e={};return a.forEach(t=>{e[t.topic]||(e[t.topic]=[]),e[t.topic].push(t)}),e}function p(){let e=f();return`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="sp-back-hub">← Упражнения</button>
      </header>
      <div class="mode-select-screen">
        <h2 class="mode-title">🎤 Говорение</h2>
        <p style="color:#6B7280;font-size:14px;text-align:center;margin-top:-8px">YKI-темы · повтори фразу вслух</p>
        <div class="mode-cards" style="margin-top:16px">
          <div class="mode-card sp-topic-card" data-topic="all">
            <div class="mode-icon" style="background:${i.bg}">🎯</div>
            <div class="mode-info">
              <div class="mode-name">Все темы вперемешку</div>
              <div class="mode-desc">${a.length} фраз · YKI A1</div>
            </div>
            <button class="mode-btn" style="background:${i.color}">Начать →</button>
          </div>
          ${Object.entries(e).map(([e,t])=>`
            <div class="mode-card sp-topic-card" data-topic="${e}">
              <div class="mode-icon" style="background:${i.bg}">💬</div>
              <div class="mode-info">
                <div class="mode-name">${e}</div>
                <div class="mode-desc">${t.length} фраз</div>
              </div>
              <button class="mode-btn" style="background:${i.color}">Начать →</button>
            </div>`).join(``)}
        </div>
      </div>
    </div>`}function m(){document.getElementById(`sp-back-hub`)?.addEventListener(`click`,()=>{n(()=>import(`./index-B_1lhdFN.js`).then(e=>e.t).then(e=>{l().innerHTML=e.renderExercisesPage(r,[],[]),e.bindExercisesPage()}),__vite__mapDeps([0,1]))}),document.querySelectorAll(`.sp-topic-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.topic;o=_(t===`all`?[...a]:a.filter(e=>e.topic===t)),s=0,c=0,h()})})}function h(){let e=o[s],t=Math.round(s/o.length*100),n=s===o.length-1;l().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="sp-back-phrase">← Говорение</button>
        <span class="vocab-counter">${s+1} / ${o.length} · ✓ ${c}</span>
      </header>
      <div class="ex-progress-bar">
        <div class="ex-progress-fill" style="width:${t}%;background:${i.color}"></div>
      </div>
      <div class="ex-container">
        <div class="ex-card">
          <div class="ex-type-badge" style="background:${i.bg};color:${i.color}">
            🎤 ${e.topic}
          </div>

          <div class="sp-translation">${e.ru}</div>
          <div class="sp-phrase" id="sp-phrase">${e.fi}</div>

          <!-- TTS preview -->
          <button class="sp-listen-btn" id="sp-listen" style="border-color:${i.color};color:${i.color}">
            🔊 Послушать
          </button>

          <!-- Mic button -->
          <button class="sp-mic-btn" id="sp-mic" style="background:${i.color}">
            🎤 Говорить
          </button>

          <!-- Recognised text -->
          <div class="sp-recognised" id="sp-recognised"></div>

          <div class="mg-feedback" id="sp-feedback"></div>

          <!-- Self-evaluate -->
          <div class="sp-self-eval" id="sp-eval" style="display:none">
            <p style="font-size:14px;color:#6B7280;text-align:center">Как ты произнёс(ла)?</p>
            <div style="display:flex;gap:10px;justify-content:center">
              <button class="sp-eval-btn" data-score="1" style="background:#fee2e2;color:#dc2626">😕 Плохо</button>
              <button class="sp-eval-btn" data-score="2" style="background:#FEF9C3;color:#ca8a04">🙂 Нормально</button>
              <button class="sp-eval-btn" data-score="3" style="background:#dcfce7;color:#16a34a">😄 Отлично</button>
            </div>
          </div>

          <button class="mg-check-btn" id="sp-next" style="background:${i.color};display:none">
            ${n?`Завершить →`:`Дальше →`}
          </button>
        </div>
      </div>
    </div>`,document.getElementById(`sp-back-phrase`)?.addEventListener(`click`,()=>{l().innerHTML=p(),m()}),document.getElementById(`sp-listen`)?.addEventListener(`click`,()=>{let t=new SpeechSynthesisUtterance(e.fi);t.lang=`fi-FI`,t.rate=.85,speechSynthesis.cancel(),speechSynthesis.speak(t)});let r=document.getElementById(`sp-mic`),a=document.getElementById(`sp-recognised`),u=document.getElementById(`sp-feedback`),d=document.getElementById(`sp-eval`),f=document.getElementById(`sp-next`);r?.addEventListener(`click`,()=>{if(!(`SpeechRecognition`in window||`webkitSpeechRecognition`in window)){u.innerHTML=`<span class="mg-wrong">Браузер не поддерживает распознавание речи. Попробуй Chrome.</span>`,d.style.display=`block`,f.style.display=`block`;return}let t=new(window.SpeechRecognition||window.webkitSpeechRecognition);t.lang=`fi-FI`,t.interimResults=!1,t.maxAlternatives=3,r.textContent=`🔴 Слушаю...`,r.disabled=!0,t.onresult=t=>{a.innerHTML=`<span class="sp-heard">Распознано: <em>${Array.from(t.results[0]).map(e=>e.transcript).join(` / `)}</em></span>`;let n=t.results[0][0].transcript.toLowerCase(),i=e.fi.toLowerCase().split(` `),o=i.filter(e=>n.includes(e.replace(/[.,!?]/g,``))),s=Math.round(o.length/i.length*100);s>=70?(c++,u.innerHTML=`<span class="mg-correct">✓ Отлично! ${s}% слов распознано</span>`):u.innerHTML=`<span style="color:#ca8a04;font-weight:600">⚠️ ${s}% слов распознано. Попробуй ещё раз?</span>`,d.style.display=`block`,f.style.display=`block`,r.textContent=`🎤 Попробовать ещё раз`,r.disabled=!1},t.onerror=()=>{u.innerHTML=`<span class="mg-wrong">Не удалось распознать. Попробуй ещё раз.</span>`,r.textContent=`🎤 Говорить`,r.disabled=!1,d.style.display=`block`,f.style.display=`block`},t.start()}),document.querySelectorAll(`.sp-eval-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.sp-eval-btn`).forEach(e=>e.style.opacity=`0.4`),e.style.opacity=`1`,e.style.fontWeight=`700`,f.style.display=`block`})}),f?.addEventListener(`click`,()=>{s++,s>=o.length?g():h()})}function g(){let e=o.length,t=Math.round(c/e*100),n=t>=80?`🎉`:t>=50?`👍`:`💪`;l().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="sp-done-back">← Говорение</button>
      </header>
      <div class="ex-container" style="text-align:center;padding-top:40px">
        <div style="font-size:48px">${n}</div>
        <h2 style="color:${i.color};margin:12px 0 8px">Готово!</h2>
        <p style="color:#6B7280">Распознано верно: <strong style="color:${i.color}">${c} / ${e}</strong> (${t}%)</p>
        <p style="color:#9CA3AF;font-size:13px">Помни: оценка по распознаванию приблизительная</p>
        <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px;max-width:300px;margin-inline:auto">
          <button class="mode-btn" id="sp-retry" style="background:${i.color}">Повторить →</button>
          <button class="mode-btn" id="sp-hub" style="background:white;color:${i.color};border:2px solid ${i.color}">← Темы</button>
        </div>
      </div>
    </div>`,document.getElementById(`sp-done-back`)?.addEventListener(`click`,()=>{l().innerHTML=p(),m()}),document.getElementById(`sp-hub`)?.addEventListener(`click`,()=>{l().innerHTML=p(),m()}),document.getElementById(`sp-retry`)?.addEventListener(`click`,()=>{s=0,c=0,h()})}function _(e){return e.map(e=>({v:e,s:Math.random()})).sort((e,t)=>e.s-t.s).map(e=>e.v)}export{d as bindSpeakingPage,u as renderSpeakingPage};