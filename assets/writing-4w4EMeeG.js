const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BiXm4Eu6.js","assets/index-Cs5SYE4U.css"])))=>i.map(i=>d[i]);
import{c as e,n as t,o as n,s as r}from"./index-BiXm4Eu6.js";var i=null,a=null,o=[];function s(){return document.querySelector(`#app`)}function c(e){return i=e,a=n[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`},o=t(e.id),u()}function l(){d()}function u(){return`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="wr-back-hub">← Упражнения</button>
      </header>
      <div class="mode-select-screen">
        <h2 class="mode-title">✍️ Письмо</h2>
        <p style="color:#6B7280;font-size:14px;text-align:center;margin-top:-8px">Реальные ситуации · заполни по-фински</p>
        <div class="mode-cards" style="margin-top:16px">
          ${o.map((e,t)=>`
            <div class="mode-card wr-task-card" data-i="${t}">
              <div class="mode-icon" style="background:${a.bg}">${e.type===`form`?`📋`:`💬`}</div>
              <div class="mode-info">
                <div class="mode-name">${e.title}</div>
                <div class="mode-desc">${e.title_ru} · ${e.type===`form`?`анкета`:`сообщение`}</div>
              </div>
              <button class="mode-btn" style="background:${a.color}">Начать →</button>
            </div>`).join(``)}
        </div>
      </div>
    </div>`}function d(){document.getElementById(`wr-back-hub`)?.addEventListener(`click`,()=>{e(()=>import(`./index-BiXm4Eu6.js`).then(e=>e.t).then(e=>{s().innerHTML=e.renderExercisesPage(i,[],[]),e.bindExercisesPage()}),__vite__mapDeps([0,1]))}),document.querySelectorAll(`.wr-task-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=o[+e.dataset.i];r.writingStart(i.id,t.id),t.type===`form`?f(t):m(t)})})}function f(e){s().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="wr-back-form">← Письмо</button>
      </header>
      <div class="ex-container" style="max-width:480px;margin-inline:auto">
        <div class="ex-card">
          <div class="ex-type-badge" style="background:${a.bg};color:${a.color}">📋 ${e.title}</div>
          <p style="color:#6B7280;font-size:14px;margin:0 0 16px">${e.description}</p>

          <div class="wr-form">
            ${e.fields.map(e=>`
              <div class="wr-field">
                <label class="wr-label">${e.label}</label>
                <span class="wr-field-hint">${e.hint}</span>
                <input class="wr-input" id="wr-${e.id}" type="text" placeholder="${e.placeholder}" autocomplete="off" autocorrect="off" spellcheck="false">
              </div>`).join(``)}
          </div>

          <div class="mg-feedback" id="wr-feedback"></div>
          <button class="mg-check-btn" id="wr-submit" style="background:${a.color};margin-top:16px">
            Отправить форму ✓
          </button>
        </div>
      </div>
    </div>`,document.getElementById(`wr-back-form`)?.addEventListener(`click`,()=>{s().innerHTML=u(),d()}),document.getElementById(`wr-submit`)?.addEventListener(`click`,()=>{let t=e.fields.filter(e=>!document.getElementById(`wr-${e.id}`)?.value.trim()),n=document.getElementById(`wr-feedback`);if(t.length){n.innerHTML=`<span class="mg-wrong">Заполни все поля: ${t.map(e=>e.label).join(`, `)}</span>`;return}p(e)})}function p(e){r.writingComplete(i.id,e.id);let t={};e.fields.forEach(e=>{t[e.id]=document.getElementById(`wr-${e.id}`)?.value.trim()||``}),s().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="wr-result-back">← Письмо</button>
      </header>
      <div class="ex-container" style="max-width:480px;margin-inline:auto">
        <div class="ex-card">
          <div class="ex-type-badge" style="background:#dcfce7;color:#16a34a">✓ ${e.title}</div>
          <p style="color:#16a34a;font-weight:600;font-size:16px;margin:8px 0 16px">${e.successMsg_ru}</p>

          <div class="wr-result-card">
            ${e.fields.map(e=>`
              <div class="wr-result-row">
                <span class="wr-result-label">${e.label}:</span>
                <span class="wr-result-value">${t[e.id]}</span>
              </div>`).join(``)}
          </div>

          <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px">
            <button class="mode-btn" id="wr-redo" style="background:${a.color}">Заполнить ещё раз</button>
            <button class="mode-btn" id="wr-hub2" style="background:white;color:${a.color};border:2px solid ${a.color}">← Все задания</button>
          </div>
        </div>
      </div>
    </div>`,document.getElementById(`wr-result-back`)?.addEventListener(`click`,()=>{s().innerHTML=u(),d()}),document.getElementById(`wr-hub2`)?.addEventListener(`click`,()=>{s().innerHTML=u(),d()}),document.getElementById(`wr-redo`)?.addEventListener(`click`,()=>f(e))}function m(e){let t=e.template.filter(e=>e.fieldId).map(t=>`
      <div class="wr-field">
        <label class="wr-label">${t.fieldId}</label>
        <span class="wr-field-hint">${e.hints[t.fieldId]||``}</span>
        <input class="wr-input" id="wr-msg-${t.fieldId}" type="text" placeholder="${t.placeholder||``}" autocomplete="off" autocorrect="off" spellcheck="false">
      </div>`).join(``);s().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="wr-back-msg">← Письмо</button>
      </header>
      <div class="ex-container" style="max-width:480px;margin-inline:auto">
        <div class="ex-card">
          <div class="ex-type-badge" style="background:${a.bg};color:${a.color}">💬 ${e.title}</div>
          <p style="color:#6B7280;font-size:14px;margin:0 0 16px">${e.description}</p>
          <div class="wr-form">${t}</div>
          <div class="mg-feedback" id="wr-feedback"></div>
          <button class="mg-check-btn" id="wr-msg-submit" style="background:${a.color};margin-top:16px">
            Составить сообщение →
          </button>
        </div>
      </div>
    </div>`,document.getElementById(`wr-back-msg`)?.addEventListener(`click`,()=>{s().innerHTML=u(),d()}),document.getElementById(`wr-msg-submit`)?.addEventListener(`click`,()=>{let t={};e.template.filter(e=>e.fieldId).forEach(e=>{t[e.fieldId]=document.getElementById(`wr-msg-${e.fieldId}`)?.value.trim()||`___`});let n=e.template.filter(e=>e.fieldId&&t[e.fieldId]===`___`),r=document.getElementById(`wr-feedback`);if(n.length){r.innerHTML=`<span class="mg-wrong">Заполни все поля!</span>`;return}h(e,t)})}function h(e,t){r.writingComplete(i.id,e.id);let n=e.template.map(e=>e.text?`<div class="wr-msg-line">${e.text}</div>`:`<div class="wr-msg-line">${e.prefix}<strong>${t[e.fieldId]}</strong>${e.suffix}</div>`).join(``);s().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="wr-msg-result-back">← Письмо</button>
      </header>
      <div class="ex-container" style="max-width:480px;margin-inline:auto">
        <div class="ex-card">
          <div class="ex-type-badge" style="background:#dcfce7;color:#16a34a">✓ ${e.title}</div>
          <p style="color:#16a34a;font-weight:600;font-size:15px;margin:8px 0 16px">${e.successMsg_ru}</p>
          <div class="wr-message-preview">${n}</div>
          <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px">
            <button class="mode-btn" id="wr-msg-redo" style="background:${a.color}">Написать ещё раз</button>
            <button class="mode-btn" id="wr-msg-hub" style="background:white;color:${a.color};border:2px solid ${a.color}">← Все задания</button>
          </div>
        </div>
      </div>
    </div>`,document.getElementById(`wr-msg-result-back`)?.addEventListener(`click`,()=>{s().innerHTML=u(),d()}),document.getElementById(`wr-msg-hub`)?.addEventListener(`click`,()=>{s().innerHTML=u(),d()}),document.getElementById(`wr-msg-redo`)?.addEventListener(`click`,()=>m(e))}export{l as bindWritingPage,c as renderWritingPage};