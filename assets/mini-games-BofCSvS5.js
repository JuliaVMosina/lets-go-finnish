const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DZoUCo_D.js","assets/index-Cs5SYE4U.css"])))=>i.map(i=>d[i]);
import{a as e,c as t,o as n,s as r}from"./index-DZoUCo_D.js";var i=null,a=null,o=null,s=null,c=[],l=0,u=0;function d(){return document.querySelector(`#app`)}function f(t){return i=t,a=n[t.id]||{color:`#7C3AED`,bg:`#EDE7FB`},o=e(t.id),m()}function p(){h()}function m(){if(!o)return`<div class="ex-page"><p style="padding:24px">Мини-игры для этой главы скоро появятся.</p></div>`;let e=a;return`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="mg-back-hub">← Упражнения</button>
      </header>
      <div class="mode-select-screen">
        <h2 class="mode-title">Мини-игры</h2>
        <div class="mode-cards">
          ${[{id:`wordOrder`,icon:`🧩`,name:`Собери фразу`,desc:`${o.wordOrder.length} фраз · порядок слов`},{id:`registerPick`,icon:`🗣️`,name:`Разговорный или книжный?`,desc:`${o.registerPick.length} фраз · puhekieli vs kirjakieli`},{id:`suffixChoice`,icon:`🔤`,name:`Выбери окончание`,desc:`${o.suffixChoice.length} слов · вокальная гармония`},{id:`findError`,icon:`🔍`,name:`Найди ошибку`,desc:`${o.findError.length} предложений · грамматика`},{id:`dialogueGap`,icon:`💬`,name:`Диалог с пропуском`,desc:`${o.dialogueGap.length} реплик · контекст`},{id:`quickNumbers`,icon:`🔢`,name:`Быстрый счёт`,desc:`${o.quickNumbers.length} заданий · числа и время`}].map(t=>`
            <div class="mode-card mg-mode-card" data-game="${t.id}">
              <div class="mode-icon" style="background:${e.bg}">${t.icon}</div>
              <div class="mode-info">
                <div class="mode-name">${t.name}</div>
                <div class="mode-desc">${t.desc}</div>
              </div>
              <button class="mode-btn" style="background:${e.color}">Начать →</button>
            </div>`).join(``)}
        </div>
      </div>
    </div>`}function h(){document.getElementById(`mg-back-hub`)?.addEventListener(`click`,()=>{t(()=>import(`./index-DZoUCo_D.js`).then(e=>e.t).then(e=>{d().innerHTML=e.renderExercisesPage(i,[],[]),e.bindExercisesPage()}),__vite__mapDeps([0,1]))}),document.querySelectorAll(`.mg-mode-card`).forEach(e=>{e.addEventListener(`click`,()=>g(e.dataset.game))})}function g(e){s=e,c=P([...o[e]]),l=0,u=0,r.miniGameStart(i.id,e),y()}function _(){d().innerHTML=m(),h()}function v(){if(l++,l>=c.length){N();return}y()}function y(){let e=c[l],t=`${l+1} / ${c.length}`,n=Math.round(l/c.length*100),r=``;s===`wordOrder`&&(r=b(e)),s===`registerPick`&&(r=S(e)),s===`suffixChoice`&&(r=w(e)),s===`findError`&&(r=E(e)),s===`dialogueGap`&&(r=O(e)),s===`quickNumbers`&&(r=A(e)),d().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="mg-back-game">← Мини-игры</button>
        <span class="vocab-counter">${t} · ✓ ${u}</span>
      </header>
      <div class="ex-progress-bar">
        <div class="ex-progress-fill" style="width:${n}%;background:${a.color}"></div>
      </div>
      <div class="ex-container">
        ${r}
      </div>
    </div>`,document.getElementById(`mg-back-game`)?.addEventListener(`click`,_),M(e)}function b(e){let t=P([...e.words]);return`
    <div class="ex-card mg-card" data-correct="${e.words.join(`|`)}">
      <div class="ex-type-badge" style="background:${a.bg};color:${a.color}">🧩 Собери фразу</div>
      <div class="mg-translation">${e.translation}</div>
      <div class="mg-answer-slots" id="mg-slots"></div>
      <div class="mg-word-bank" id="mg-bank">
        ${t.map((e,t)=>`<button class="mg-word-chip" data-word="${e}" data-idx="${t}">${e}</button>`).join(``)}
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-check" style="background:${a.color}">Проверить</button>
    </div>`}function x(e){let t=document.getElementById(`mg-slots`),n=document.getElementById(`mg-bank`),r=[];function i(){t.innerHTML=r.length?r.map((e,t)=>`<span class="mg-slot-chip" data-sidx="${t}">${e}</span>`).join(``):`<span class="mg-slot-placeholder">нажми на слова ниже</span>`,t.querySelectorAll(`.mg-slot-chip`).forEach(e=>{e.addEventListener(`click`,()=>{let t=+e.dataset.sidx,a=r.splice(t,1)[0];i();let o=[...n.querySelectorAll(`.mg-word-chip`)].find(e=>e.dataset.word===a&&e.classList.contains(`mg-used`));o&&o.classList.remove(`mg-used`)})})}n.querySelectorAll(`.mg-word-chip`).forEach(e=>{e.addEventListener(`click`,()=>{e.classList.contains(`mg-used`)||(e.classList.add(`mg-used`),r.push(e.dataset.word),i())})}),document.getElementById(`mg-check`).addEventListener(`click`,()=>{let t=e.words,n=r.join(` `)===t.join(` `),i=document.getElementById(`mg-feedback`);n?(u++,i.innerHTML=`<span class="mg-correct">✓ Правильно!</span>`):i.innerHTML=`<span class="mg-wrong">✗ Правильно: <em>${t.join(` `)}</em></span>`,document.getElementById(`mg-check`).textContent=l===c.length-1?`Завершить →`:`Дальше →`,document.getElementById(`mg-check`).onclick=v}),i()}function S(e){return`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${a.bg};color:${a.color}">🗣️ Разговорный или книжный?</div>
      <div class="mg-big-sentence">${e.sentence}</div>
      <div class="mg-reg-btns">
        <button class="mg-reg-btn" data-pick="puhekieli" style="border-color:#FB92BE;color:#c0336a">
          💬 Разговорный<br><small>puhekieli</small>
        </button>
        <button class="mg-reg-btn" data-pick="kirjakieli" style="border-color:#93C5FD;color:#1d4ed8">
          📖 Книжный<br><small>kirjakieli</small>
        </button>
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-next" style="background:${a.color};display:none">
        ${l===c.length-1?`Завершить →`:`Дальше →`}
      </button>
    </div>`}function C(e){document.querySelectorAll(`.mg-reg-btn`).forEach(t=>{t.addEventListener(`click`,()=>{document.querySelectorAll(`.mg-reg-btn`).forEach(e=>e.disabled=!0);let n=t.dataset.pick,r=e.answer,i=document.getElementById(`mg-feedback`),a=r===`puhekieli`?e.kirja:e.puhe;n===r?(u++,t.style.background=`#dcfce7`,i.innerHTML=`<span class="mg-correct">✓ Правильно! Книжный вариант: <em>${a}</em></span>`):(t.style.background=`#fee2e2`,i.innerHTML=`<span class="mg-wrong">✗ Это ${r===`puhekieli`?`разговорный`:`книжный`}. Пара: <em>${a}</em></span>`),document.getElementById(`mg-next`).style.display=`block`})}),document.getElementById(`mg-next`)?.addEventListener(`click`,v)}function w(e){return`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${a.bg};color:${a.color}">🔤 Выбери окончание</div>
      <div class="mg-translation">${e.hint}</div>
      <div class="mg-stem-row">
        <span class="mg-stem">${e.stem}</span><span class="mg-suffix-slot" id="mg-suffix-display">___</span>
      </div>
      <div class="mg-suffix-opts">
        ${e.options.map(e=>`<button class="mg-suffix-btn" data-opt="${e}">${e}</button>`).join(``)}
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-next" style="background:${a.color};display:none">
        ${l===c.length-1?`Завершить →`:`Дальше →`}
      </button>
    </div>`}function T(e){document.querySelectorAll(`.mg-suffix-btn`).forEach(t=>{t.addEventListener(`click`,()=>{document.querySelectorAll(`.mg-suffix-btn`).forEach(e=>e.disabled=!0);let n=t.dataset.opt;document.getElementById(`mg-suffix-display`).textContent=n;let r=document.getElementById(`mg-feedback`);n===e.answer?(u++,t.style.background=`#dcfce7`,r.innerHTML=`<span class="mg-correct">✓ ${e.stem}${n} — правильно! ${e.rule}</span>`):(t.style.background=`#fee2e2`,document.querySelectorAll(`.mg-suffix-btn`).forEach(t=>{t.dataset.opt===e.answer&&(t.style.background=`#dcfce7`)}),r.innerHTML=`<span class="mg-wrong">✗ Правильно: ${e.stem}${e.answer}. ${e.rule}</span>`),document.getElementById(`mg-next`).style.display=`block`})}),document.getElementById(`mg-next`)?.addEventListener(`click`,v)}function E(e){let t=e.sentence.split(` `);return`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${a.bg};color:${a.color}">🔍 Найди ошибку</div>
      <div class="mg-translation">Нажми на неправильное слово:</div>
      <div class="mg-error-sentence" id="mg-sentence">
        ${t.map((e,t)=>`<span class="mg-error-word" data-i="${t}" data-word="${e.replace(/[.,?!]/,``)}">${e}</span>`).join(` `)}
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-next" style="background:${a.color};display:none">
        ${l===c.length-1?`Завершить →`:`Дальше →`}
      </button>
    </div>`}function D(e){document.querySelectorAll(`.mg-error-word`).forEach(t=>{t.addEventListener(`click`,()=>{document.querySelectorAll(`.mg-error-word`).forEach(e=>e.style.pointerEvents=`none`);let n=t.dataset.word,r=document.getElementById(`mg-feedback`);n.toLowerCase()===e.errorWord.toLowerCase()?(u++,t.style.background=`#dcfce7`,t.style.borderRadius=`4px`,r.innerHTML=`<span class="mg-correct">✓ Правильно! Нужно: <em>${e.correct}</em><br><small>${e.hint}</small></span>`):(t.style.background=`#fee2e2`,t.style.borderRadius=`4px`,document.querySelectorAll(`.mg-error-word`).forEach(t=>{t.dataset.word.toLowerCase()===e.errorWord.toLowerCase()&&(t.style.background=`#dcfce7`,t.style.borderRadius=`4px`)}),r.innerHTML=`<span class="mg-wrong">✗ Ошибка была в «${e.errorWord}» → <em>${e.correct}</em><br><small>${e.hint}</small></span>`),document.getElementById(`mg-next`).style.display=`block`})}),document.getElementById(`mg-next`)?.addEventListener(`click`,v)}function O(e){let t=e.lines.map(e=>e.includes(`_____`)?`<div class="mg-dialogue-line mg-gap-line">${e.replace(`_____`,`<span class="mg-gap">_____</span>`)}</div>`:`<div class="mg-dialogue-line">${e}</div>`).join(``);return e.acceptVariants,`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${a.bg};color:${a.color}">💬 Диалог с пропуском</div>
      <div class="mg-dialogue">${t}</div>
      <div class="mg-hint-text">💡 ${e.hint}</div>
      <div class="grammar-input-row" style="margin-top:12px">
        <input class="grammar-input" id="mg-input" type="text" placeholder="Напиши ответ..." autocomplete="off" autocorrect="off" spellcheck="false">
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-check" style="background:${a.color}">Проверить</button>
    </div>`}function k(e){let t=document.getElementById(`mg-input`),n=document.getElementById(`mg-check`);t?.focus();function r(){let r=t.value.trim().toLowerCase(),i=document.getElementById(`mg-feedback`);e.acceptVariants===null?(u++,i.innerHTML=`<span class="mg-correct">✓ Отлично! Один из вариантов: <em>${e.answer}</em></span>`):e.acceptVariants.some(e=>r===e.toLowerCase())?(u++,i.innerHTML=`<span class="mg-correct">✓ Правильно!</span>`):i.innerHTML=`<span class="mg-wrong">✗ Правильно: <em>${e.answer}</em></span>`,t.disabled=!0,n.textContent=l===c.length-1?`Завершить →`:`Дальше →`,n.onclick=v}t?.addEventListener(`keydown`,e=>{e.key===`Enter`&&r()}),n?.addEventListener(`click`,r)}function A(e){let t=e.type===`num2word`?`Напиши словами:`:e.type===`time2clock`?`Запиши время цифрами:`:`Напиши цену словами:`;return`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${a.bg};color:${a.color}">🔢 Быстрый счёт</div>
      <div class="mg-translation">${t}</div>
      <div class="mg-big-number">${e.display}</div>
      <div class="grammar-input-row" style="margin-top:12px">
        <input class="grammar-input" id="mg-input" type="text" placeholder="Ответ..." autocomplete="off" autocorrect="off" spellcheck="false">
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-check" style="background:${a.color}">Проверить</button>
    </div>`}function j(e){let t=document.getElementById(`mg-input`),n=document.getElementById(`mg-check`);t?.focus();function r(){let r=t.value.trim().toLowerCase()===e.answer.toLowerCase(),i=document.getElementById(`mg-feedback`);r?(u++,i.innerHTML=`<span class="mg-correct">✓ Правильно!</span>`):i.innerHTML=`<span class="mg-wrong">✗ Правильно: <em>${e.answer}</em></span>`,t.disabled=!0,n.textContent=l===c.length-1?`Завершить →`:`Дальше →`,n.onclick=v}t?.addEventListener(`keydown`,e=>{e.key===`Enter`&&r()}),n?.addEventListener(`click`,r)}function M(e){s===`wordOrder`&&x(e),s===`registerPick`&&C(e),s===`suffixChoice`&&T(e),s===`findError`&&D(e),s===`dialogueGap`&&k(e),s===`quickNumbers`&&j(e)}function N(){let e=c.length,t=Math.round(u/e*100),n=t>=80?`🎉`:t>=50?`👍`:`💪`;r.miniGameComplete(i.id,s,u,e),d().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="mg-back-done">← Мини-игры</button>
      </header>
      <div class="ex-container" style="text-align:center;padding-top:40px">
        <div style="font-size:48px;margin-bottom:16px">${n}</div>
        <h2 style="color:${a.color};margin-bottom:8px">Готово!</h2>
        <p style="color:#6B7280;margin-bottom:4px">Результат: <strong style="color:${a.color}">${u} / ${e}</strong> (${t}%)</p>
        <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px;max-width:300px;margin-inline:auto">
          <button class="mode-btn" id="mg-retry" style="background:${a.color}">Повторить →</button>
          <button class="mode-btn" id="mg-hub" style="background:white;color:${a.color};border:2px solid ${a.color}">← Все мини-игры</button>
        </div>
      </div>
    </div>`,document.getElementById(`mg-back-done`)?.addEventListener(`click`,_),document.getElementById(`mg-hub`)?.addEventListener(`click`,_),document.getElementById(`mg-retry`)?.addEventListener(`click`,()=>g(s))}function P(e){return e.map(e=>({v:e,s:Math.random()})).sort((e,t)=>e.s-t.s).map(e=>e.v)}export{p as bindMiniGamesPage,f as renderMiniGamesPage};