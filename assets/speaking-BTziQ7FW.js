const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index--uAWUvOp.js","assets/index-B9U8tG5e.css"])))=>i.map(i=>d[i]);
import{f as e,l as t,m as n,o as r,p as i,u as a}from"./index--uAWUvOp.js";var o=null,s=null,c=[],l=[],u=0,d=0;function f(){return document.querySelector(`#app`)}function p(e){return o=e,s=t[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`},c=r(e.id),g()}function m(){_()}function h(){let e={};return c.forEach(t=>{e[t.topic]||(e[t.topic]=[]),e[t.topic].push(t)}),e}function g(){let e=h();return`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="sp-back-hub">← Упражнения</button>
      </header>
      <div class="mode-select-screen">
        <h2 class="mode-title">🎤 Говорение</h2>
        <p style="color:#6B7280;font-size:14px;text-align:center;margin-top:-8px">YKI-темы · повтори фразу вслух</p>
        <div class="mode-cards" style="margin-top:16px">
          <div class="mode-card sp-topic-card" data-topic="all">
            <div class="mode-icon" style="background:${s.bg}">🎯</div>
            <div class="mode-info">
              <div class="mode-name">Все темы вперемешку</div>
              <div class="mode-desc">${c.length} фраз · YKI A1</div>
            </div>
            <button class="mode-btn" style="background:${s.color}">Начать →</button>
          </div>
          ${Object.entries(e).map(([e,t])=>`
            <div class="mode-card sp-topic-card" data-topic="${e}">
              <div class="mode-icon" style="background:${s.bg}">💬</div>
              <div class="mode-info">
                <div class="mode-name">${e}</div>
                <div class="mode-desc">${t.length} фраз</div>
              </div>
              <button class="mode-btn" style="background:${s.color}">Начать →</button>
            </div>`).join(``)}
        </div>
      </div>
    </div>`}function _(){document.getElementById(`sp-back-hub`)?.addEventListener(`click`,()=>{e(()=>import(`./index--uAWUvOp.js`).then(e=>e.t).then(e=>{f().innerHTML=e.renderExercisesPage(o,[],[]),e.bindExercisesPage()}),__vite__mapDeps([0,1]))}),document.querySelectorAll(`.sp-topic-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.topic;l=b(t===`all`?[...c]:c.filter(e=>e.topic===t)),u=0,d=0,a.speakingStart(o.id,t),v()})})}function v(){let e=l[u],t=Math.round(u/l.length*100),n=u===l.length-1;f().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="sp-back-phrase">← Говорение</button>
        <span class="vocab-counter">${u+1} / ${l.length} · ✓ ${d}</span>
      </header>
      <div class="ex-progress-bar">
        <div class="ex-progress-fill" style="width:${t}%;background:${s.color}"></div>
      </div>
      <div class="ex-container">
        <div class="ex-card">
          <div class="ex-type-badge" style="background:${s.bg};color:${s.color}">
            🎤 ${e.topic}
          </div>

          <div class="sp-translation">${e.ru}</div>
          <div class="sp-phrase" id="sp-phrase">${e.fi}</div>

          <!-- TTS preview -->
          <button class="sp-listen-btn" id="sp-listen" style="border-color:${s.color};color:${s.color}">
            🔊 Послушать
          </button>

          <!-- Mic button -->
          <button class="sp-mic-btn" id="sp-mic" style="background:${s.color}">
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

          <button class="mg-check-btn" id="sp-next" style="background:${s.color};display:none">
            ${n?`Завершить →`:`Дальше →`}
          </button>
        </div>
      </div>
    </div>`,document.getElementById(`sp-back-phrase`)?.addEventListener(`click`,()=>{f().innerHTML=g(),_()}),document.getElementById(`sp-listen`)?.addEventListener(`click`,()=>{let t=new SpeechSynthesisUtterance(e.fi);t.lang=`fi-FI`,t.rate=.85,speechSynthesis.cancel(),speechSynthesis.speak(t)});let r=document.getElementById(`sp-mic`),i=document.getElementById(`sp-recognised`),a=document.getElementById(`sp-feedback`),o=document.getElementById(`sp-eval`),c=document.getElementById(`sp-next`);r?.addEventListener(`click`,()=>{if(!(`SpeechRecognition`in window||`webkitSpeechRecognition`in window)){a.innerHTML=`<span class="mg-wrong">Браузер не поддерживает распознавание речи. Попробуй Chrome.</span>`,o.style.display=`block`,c.style.display=`block`;return}let t=new(window.SpeechRecognition||window.webkitSpeechRecognition);t.lang=`fi-FI`,t.interimResults=!1,t.maxAlternatives=3,r.textContent=`🔴 Слушаю...`,r.disabled=!0,t.onresult=t=>{i.innerHTML=`<span class="sp-heard">Распознано: <em>${Array.from(t.results[0]).map(e=>e.transcript).join(` / `)}</em></span>`;let n=t.results[0][0].transcript.toLowerCase(),s=e.fi.toLowerCase().split(` `),l=s.filter(e=>n.includes(e.replace(/[.,!?]/g,``))),u=Math.round(l.length/s.length*100);u>=70?(d++,a.innerHTML=`<span class="mg-correct">✓ Отлично! ${u}% слов распознано</span>`):a.innerHTML=`<span style="color:#ca8a04;font-weight:600">⚠️ ${u}% слов распознано. Попробуй ещё раз?</span>`,o.style.display=`block`,c.style.display=`block`,r.textContent=`🎤 Попробовать ещё раз`,r.disabled=!1},t.onerror=()=>{a.innerHTML=`<span class="mg-wrong">Не удалось распознать. Попробуй ещё раз.</span>`,r.textContent=`🎤 Говорить`,r.disabled=!1,o.style.display=`block`,c.style.display=`block`},t.start()}),document.querySelectorAll(`.sp-eval-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.sp-eval-btn`).forEach(e=>e.style.opacity=`0.4`),e.style.opacity=`1`,e.style.fontWeight=`700`,c.style.display=`block`})}),c?.addEventListener(`click`,()=>{u++,u>=l.length?y():v()})}function y(){let e=l.length,t=Math.round(d/e*100),r=t>=80?`🎉`:t>=50?`👍`:`💪`;a.speakingComplete(o.id,d,e),n(i().activeProfile,o.id,`speaking_done`,null),f().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="sp-done-back">← Говорение</button>
      </header>
      <div class="ex-container" style="text-align:center;padding-top:40px">
        <div style="font-size:48px">${r}</div>
        <h2 style="color:${s.color};margin:12px 0 8px">Готово!</h2>
        <p style="color:#6B7280">Распознано верно: <strong style="color:${s.color}">${d} / ${e}</strong> (${t}%)</p>
        <p style="color:#9CA3AF;font-size:13px">Помни: оценка по распознаванию приблизительная</p>
        <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px;max-width:300px;margin-inline:auto">
          <button class="mode-btn" id="sp-retry" style="background:${s.color}">Повторить →</button>
          <button class="mode-btn" id="sp-hub" style="background:white;color:${s.color};border:2px solid ${s.color}">← Темы</button>
        </div>
      </div>
    </div>`,document.getElementById(`sp-done-back`)?.addEventListener(`click`,()=>{f().innerHTML=g(),_()}),document.getElementById(`sp-hub`)?.addEventListener(`click`,()=>{f().innerHTML=g(),_()}),document.getElementById(`sp-retry`)?.addEventListener(`click`,()=>{u=0,d=0,v()})}function b(e){return e.map(e=>({v:e,s:Math.random()})).sort((e,t)=>e.s-t.s).map(e=>e.v)}export{m as bindSpeakingPage,p as renderSpeakingPage};