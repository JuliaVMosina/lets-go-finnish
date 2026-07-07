const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DZoUCo_D.js","assets/index-Cs5SYE4U.css"])))=>i.map(i=>d[i]);
import{c as e,o as t,r as n,s as r}from"./index-DZoUCo_D.js";var i=null,a=null,o=[],s=[],c=0,l=0;function u(){return document.querySelector(`#app`)}function d(e){return i=e,a=t[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`},o=n(e.id),m()}function f(){h()}function p(){let e={};return o.forEach(t=>{e[t.topic]||(e[t.topic]=[]),e[t.topic].push(t)}),e}function m(){let e=p();return`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="sp-back-hub">← Упражнения</button>
      </header>
      <div class="mode-select-screen">
        <h2 class="mode-title">🎤 Говорение</h2>
        <p style="color:#6B7280;font-size:14px;text-align:center;margin-top:-8px">YKI-темы · повтори фразу вслух</p>
        <div class="mode-cards" style="margin-top:16px">
          <div class="mode-card sp-topic-card" data-topic="all">
            <div class="mode-icon" style="background:${a.bg}">🎯</div>
            <div class="mode-info">
              <div class="mode-name">Все темы вперемешку</div>
              <div class="mode-desc">${o.length} фраз · YKI A1</div>
            </div>
            <button class="mode-btn" style="background:${a.color}">Начать →</button>
          </div>
          ${Object.entries(e).map(([e,t])=>`
            <div class="mode-card sp-topic-card" data-topic="${e}">
              <div class="mode-icon" style="background:${a.bg}">💬</div>
              <div class="mode-info">
                <div class="mode-name">${e}</div>
                <div class="mode-desc">${t.length} фраз</div>
              </div>
              <button class="mode-btn" style="background:${a.color}">Начать →</button>
            </div>`).join(``)}
        </div>
      </div>
    </div>`}function h(){document.getElementById(`sp-back-hub`)?.addEventListener(`click`,()=>{e(()=>import(`./index-DZoUCo_D.js`).then(e=>e.t).then(e=>{u().innerHTML=e.renderExercisesPage(i,[],[]),e.bindExercisesPage()}),__vite__mapDeps([0,1]))}),document.querySelectorAll(`.sp-topic-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.topic;s=v(t===`all`?[...o]:o.filter(e=>e.topic===t)),c=0,l=0,r.speakingStart(i.id,t),g()})})}function g(){let e=s[c],t=Math.round(c/s.length*100),n=c===s.length-1;u().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="sp-back-phrase">← Говорение</button>
        <span class="vocab-counter">${c+1} / ${s.length} · ✓ ${l}</span>
      </header>
      <div class="ex-progress-bar">
        <div class="ex-progress-fill" style="width:${t}%;background:${a.color}"></div>
      </div>
      <div class="ex-container">
        <div class="ex-card">
          <div class="ex-type-badge" style="background:${a.bg};color:${a.color}">
            🎤 ${e.topic}
          </div>

          <div class="sp-translation">${e.ru}</div>
          <div class="sp-phrase" id="sp-phrase">${e.fi}</div>

          <!-- TTS preview -->
          <button class="sp-listen-btn" id="sp-listen" style="border-color:${a.color};color:${a.color}">
            🔊 Послушать
          </button>

          <!-- Mic button -->
          <button class="sp-mic-btn" id="sp-mic" style="background:${a.color}">
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

          <button class="mg-check-btn" id="sp-next" style="background:${a.color};display:none">
            ${n?`Завершить →`:`Дальше →`}
          </button>
        </div>
      </div>
    </div>`,document.getElementById(`sp-back-phrase`)?.addEventListener(`click`,()=>{u().innerHTML=m(),h()}),document.getElementById(`sp-listen`)?.addEventListener(`click`,()=>{let t=new SpeechSynthesisUtterance(e.fi);t.lang=`fi-FI`,t.rate=.85,speechSynthesis.cancel(),speechSynthesis.speak(t)});let r=document.getElementById(`sp-mic`),i=document.getElementById(`sp-recognised`),o=document.getElementById(`sp-feedback`),d=document.getElementById(`sp-eval`),f=document.getElementById(`sp-next`);r?.addEventListener(`click`,()=>{if(!(`SpeechRecognition`in window||`webkitSpeechRecognition`in window)){o.innerHTML=`<span class="mg-wrong">Браузер не поддерживает распознавание речи. Попробуй Chrome.</span>`,d.style.display=`block`,f.style.display=`block`;return}let t=new(window.SpeechRecognition||window.webkitSpeechRecognition);t.lang=`fi-FI`,t.interimResults=!1,t.maxAlternatives=3,r.textContent=`🔴 Слушаю...`,r.disabled=!0,t.onresult=t=>{i.innerHTML=`<span class="sp-heard">Распознано: <em>${Array.from(t.results[0]).map(e=>e.transcript).join(` / `)}</em></span>`;let n=t.results[0][0].transcript.toLowerCase(),a=e.fi.toLowerCase().split(` `),s=a.filter(e=>n.includes(e.replace(/[.,!?]/g,``))),c=Math.round(s.length/a.length*100);c>=70?(l++,o.innerHTML=`<span class="mg-correct">✓ Отлично! ${c}% слов распознано</span>`):o.innerHTML=`<span style="color:#ca8a04;font-weight:600">⚠️ ${c}% слов распознано. Попробуй ещё раз?</span>`,d.style.display=`block`,f.style.display=`block`,r.textContent=`🎤 Попробовать ещё раз`,r.disabled=!1},t.onerror=()=>{o.innerHTML=`<span class="mg-wrong">Не удалось распознать. Попробуй ещё раз.</span>`,r.textContent=`🎤 Говорить`,r.disabled=!1,d.style.display=`block`,f.style.display=`block`},t.start()}),document.querySelectorAll(`.sp-eval-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.sp-eval-btn`).forEach(e=>e.style.opacity=`0.4`),e.style.opacity=`1`,e.style.fontWeight=`700`,f.style.display=`block`})}),f?.addEventListener(`click`,()=>{c++,c>=s.length?_():g()})}function _(){let e=s.length,t=Math.round(l/e*100),n=t>=80?`🎉`:t>=50?`👍`:`💪`;r.speakingComplete(i.id,l,e),u().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="sp-done-back">← Говорение</button>
      </header>
      <div class="ex-container" style="text-align:center;padding-top:40px">
        <div style="font-size:48px">${n}</div>
        <h2 style="color:${a.color};margin:12px 0 8px">Готово!</h2>
        <p style="color:#6B7280">Распознано верно: <strong style="color:${a.color}">${l} / ${e}</strong> (${t}%)</p>
        <p style="color:#9CA3AF;font-size:13px">Помни: оценка по распознаванию приблизительная</p>
        <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px;max-width:300px;margin-inline:auto">
          <button class="mode-btn" id="sp-retry" style="background:${a.color}">Повторить →</button>
          <button class="mode-btn" id="sp-hub" style="background:white;color:${a.color};border:2px solid ${a.color}">← Темы</button>
        </div>
      </div>
    </div>`,document.getElementById(`sp-done-back`)?.addEventListener(`click`,()=>{u().innerHTML=m(),h()}),document.getElementById(`sp-hub`)?.addEventListener(`click`,()=>{u().innerHTML=m(),h()}),document.getElementById(`sp-retry`)?.addEventListener(`click`,()=>{c=0,l=0,g()})}function v(e){return e.map(e=>({v:e,s:Math.random()})).sort((e,t)=>e.s-t.s).map(e=>e.v)}export{f as bindSpeakingPage,d as renderSpeakingPage};