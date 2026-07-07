const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CMip-AFb.js","assets/index-Ba0yKReP.css"])))=>i.map(i=>d[i]);
import{a as e,c as t,l as n,o as r,s as i,u as a}from"./index-CMip-AFb.js";var o=null,s=null,c=null,l=null,u=[],d=0,f=0;function p(){return document.querySelector(`#app`)}function m(t){return o=t,s=r[t.id]||{color:`#7C3AED`,bg:`#EDE7FB`},c=e(t.id),g()}function h(){_()}function g(){if(!c)return`<div class="ex-page"><p style="padding:24px">Мини-игры для этой главы скоро появятся.</p></div>`;let e=s;return`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="mg-back-hub">← Упражнения</button>
      </header>
      <div class="mode-select-screen">
        <h2 class="mode-title">Мини-игры</h2>
        <div class="mode-cards">
          ${[{id:`wordOrder`,icon:`🧩`,name:`Собери фразу`,desc:`${c.wordOrder.length} фраз · порядок слов`},{id:`registerPick`,icon:`🗣️`,name:`Разговорный или книжный?`,desc:`${c.registerPick.length} фраз · puhekieli vs kirjakieli`},{id:`suffixChoice`,icon:`🔤`,name:`Выбери окончание`,desc:`${c.suffixChoice.length} слов · вокальная гармония`},{id:`findError`,icon:`🔍`,name:`Найди ошибку`,desc:`${c.findError.length} предложений · грамматика`},{id:`dialogueGap`,icon:`💬`,name:`Диалог с пропуском`,desc:`${c.dialogueGap.length} реплик · контекст`},{id:`quickNumbers`,icon:`🔢`,name:`Быстрый счёт`,desc:`${c.quickNumbers.length} заданий · числа и время`}].map(t=>`
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
    </div>`}function _(){document.getElementById(`mg-back-hub`)?.addEventListener(`click`,()=>{t(()=>import(`./index-CMip-AFb.js`).then(e=>e.t).then(e=>{p().innerHTML=e.renderExercisesPage(o,[],[]),e.bindExercisesPage()}),__vite__mapDeps([0,1]))}),document.querySelectorAll(`.mg-mode-card`).forEach(e=>{e.addEventListener(`click`,()=>v(e.dataset.game))})}function v(e){l=e,u=I([...c[e]]),d=0,f=0,i.miniGameStart(o.id,e),x()}function y(){p().innerHTML=g(),_()}function b(){if(d++,d>=u.length){F();return}x()}function x(){let e=u[d],t=`${d+1} / ${u.length}`,n=Math.round(d/u.length*100),r=``;l===`wordOrder`&&(r=S(e)),l===`registerPick`&&(r=w(e)),l===`suffixChoice`&&(r=E(e)),l===`findError`&&(r=O(e)),l===`dialogueGap`&&(r=A(e)),l===`quickNumbers`&&(r=M(e)),p().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="mg-back-game">← Мини-игры</button>
        <span class="vocab-counter">${t} · ✓ ${f}</span>
      </header>
      <div class="ex-progress-bar">
        <div class="ex-progress-fill" style="width:${n}%;background:${s.color}"></div>
      </div>
      <div class="ex-container">
        ${r}
      </div>
    </div>`,document.getElementById(`mg-back-game`)?.addEventListener(`click`,y),P(e)}function S(e){let t=I([...e.words]);return`
    <div class="ex-card mg-card" data-correct="${e.words.join(`|`)}">
      <div class="ex-type-badge" style="background:${s.bg};color:${s.color}">🧩 Собери фразу</div>
      <div class="mg-translation">${e.translation}</div>
      <div class="mg-answer-slots" id="mg-slots"></div>
      <div class="mg-word-bank" id="mg-bank">
        ${t.map((e,t)=>`<button class="mg-word-chip" data-word="${e}" data-idx="${t}">${e}</button>`).join(``)}
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-check" style="background:${s.color}">Проверить</button>
    </div>`}function C(e){let t=document.getElementById(`mg-slots`),n=document.getElementById(`mg-bank`),r=[];function i(){t.innerHTML=r.length?r.map((e,t)=>`<span class="mg-slot-chip" data-sidx="${t}">${e}</span>`).join(``):`<span class="mg-slot-placeholder">нажми на слова ниже</span>`,t.querySelectorAll(`.mg-slot-chip`).forEach(e=>{e.addEventListener(`click`,()=>{let t=+e.dataset.sidx,a=r.splice(t,1)[0];i();let o=[...n.querySelectorAll(`.mg-word-chip`)].find(e=>e.dataset.word===a&&e.classList.contains(`mg-used`));o&&o.classList.remove(`mg-used`)})})}n.querySelectorAll(`.mg-word-chip`).forEach(e=>{e.addEventListener(`click`,()=>{e.classList.contains(`mg-used`)||(e.classList.add(`mg-used`),r.push(e.dataset.word),i())})}),document.getElementById(`mg-check`).addEventListener(`click`,()=>{let t=e.words,n=r.join(` `)===t.join(` `),i=document.getElementById(`mg-feedback`);n?(f++,i.innerHTML=`<span class="mg-correct">✓ Правильно!</span>`):i.innerHTML=`<span class="mg-wrong">✗ Правильно: <em>${t.join(` `)}</em></span>`,document.getElementById(`mg-check`).textContent=d===u.length-1?`Завершить →`:`Дальше →`,document.getElementById(`mg-check`).onclick=b}),i()}function w(e){return`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${s.bg};color:${s.color}">🗣️ Разговорный или книжный?</div>
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
      <button class="mg-check-btn" id="mg-next" style="background:${s.color};display:none">
        ${d===u.length-1?`Завершить →`:`Дальше →`}
      </button>
    </div>`}function T(e){document.querySelectorAll(`.mg-reg-btn`).forEach(t=>{t.addEventListener(`click`,()=>{document.querySelectorAll(`.mg-reg-btn`).forEach(e=>e.disabled=!0);let n=t.dataset.pick,r=e.answer,i=document.getElementById(`mg-feedback`),a=r===`puhekieli`?e.kirja:e.puhe;n===r?(f++,t.style.background=`#dcfce7`,i.innerHTML=`<span class="mg-correct">✓ Правильно! Книжный вариант: <em>${a}</em></span>`):(t.style.background=`#fee2e2`,i.innerHTML=`<span class="mg-wrong">✗ Это ${r===`puhekieli`?`разговорный`:`книжный`}. Пара: <em>${a}</em></span>`),document.getElementById(`mg-next`).style.display=`block`})}),document.getElementById(`mg-next`)?.addEventListener(`click`,b)}function E(e){return`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${s.bg};color:${s.color}">🔤 Выбери окончание</div>
      <div class="mg-translation">${e.hint}</div>
      <div class="mg-stem-row">
        <span class="mg-stem">${e.stem}</span><span class="mg-suffix-slot" id="mg-suffix-display">___</span>
      </div>
      <div class="mg-suffix-opts">
        ${e.options.map(e=>`<button class="mg-suffix-btn" data-opt="${e}">${e}</button>`).join(``)}
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-next" style="background:${s.color};display:none">
        ${d===u.length-1?`Завершить →`:`Дальше →`}
      </button>
    </div>`}function D(e){document.querySelectorAll(`.mg-suffix-btn`).forEach(t=>{t.addEventListener(`click`,()=>{document.querySelectorAll(`.mg-suffix-btn`).forEach(e=>e.disabled=!0);let n=t.dataset.opt;document.getElementById(`mg-suffix-display`).textContent=n;let r=document.getElementById(`mg-feedback`);n===e.answer?(f++,t.style.background=`#dcfce7`,r.innerHTML=`<span class="mg-correct">✓ ${e.stem}${n} — правильно! ${e.rule}</span>`):(t.style.background=`#fee2e2`,document.querySelectorAll(`.mg-suffix-btn`).forEach(t=>{t.dataset.opt===e.answer&&(t.style.background=`#dcfce7`)}),r.innerHTML=`<span class="mg-wrong">✗ Правильно: ${e.stem}${e.answer}. ${e.rule}</span>`),document.getElementById(`mg-next`).style.display=`block`})}),document.getElementById(`mg-next`)?.addEventListener(`click`,b)}function O(e){let t=e.sentence.split(` `);return`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${s.bg};color:${s.color}">🔍 Найди ошибку</div>
      <div class="mg-translation">Нажми на неправильное слово:</div>
      <div class="mg-error-sentence" id="mg-sentence">
        ${t.map((e,t)=>`<span class="mg-error-word" data-i="${t}" data-word="${e.replace(/[.,?!]/,``)}">${e}</span>`).join(` `)}
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-next" style="background:${s.color};display:none">
        ${d===u.length-1?`Завершить →`:`Дальше →`}
      </button>
    </div>`}function k(e){document.querySelectorAll(`.mg-error-word`).forEach(t=>{t.addEventListener(`click`,()=>{document.querySelectorAll(`.mg-error-word`).forEach(e=>e.style.pointerEvents=`none`);let n=t.dataset.word,r=document.getElementById(`mg-feedback`);n.toLowerCase()===e.errorWord.toLowerCase()?(f++,t.style.background=`#dcfce7`,t.style.borderRadius=`4px`,r.innerHTML=`<span class="mg-correct">✓ Правильно! Нужно: <em>${e.correct}</em><br><small>${e.hint}</small></span>`):(t.style.background=`#fee2e2`,t.style.borderRadius=`4px`,document.querySelectorAll(`.mg-error-word`).forEach(t=>{t.dataset.word.toLowerCase()===e.errorWord.toLowerCase()&&(t.style.background=`#dcfce7`,t.style.borderRadius=`4px`)}),r.innerHTML=`<span class="mg-wrong">✗ Ошибка была в «${e.errorWord}» → <em>${e.correct}</em><br><small>${e.hint}</small></span>`),document.getElementById(`mg-next`).style.display=`block`})}),document.getElementById(`mg-next`)?.addEventListener(`click`,b)}function A(e){let t=e.lines.map(e=>e.includes(`_____`)?`<div class="mg-dialogue-line mg-gap-line">${e.replace(`_____`,`<span class="mg-gap">_____</span>`)}</div>`:`<div class="mg-dialogue-line">${e}</div>`).join(``);return e.acceptVariants,`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${s.bg};color:${s.color}">💬 Диалог с пропуском</div>
      <div class="mg-dialogue">${t}</div>
      <div class="mg-hint-text">💡 ${e.hint}</div>
      <div class="grammar-input-row" style="margin-top:12px">
        <input class="grammar-input" id="mg-input" type="text" placeholder="Напиши ответ..." autocomplete="off" autocorrect="off" spellcheck="false">
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-check" style="background:${s.color}">Проверить</button>
    </div>`}function j(e){let t=document.getElementById(`mg-input`),n=document.getElementById(`mg-check`);t?.focus();function r(){let r=t.value.trim().toLowerCase(),i=document.getElementById(`mg-feedback`);e.acceptVariants===null?(f++,i.innerHTML=`<span class="mg-correct">✓ Отлично! Один из вариантов: <em>${e.answer}</em></span>`):e.acceptVariants.some(e=>r===e.toLowerCase())?(f++,i.innerHTML=`<span class="mg-correct">✓ Правильно!</span>`):i.innerHTML=`<span class="mg-wrong">✗ Правильно: <em>${e.answer}</em></span>`,t.disabled=!0,n.textContent=d===u.length-1?`Завершить →`:`Дальше →`,n.onclick=b}t?.addEventListener(`keydown`,e=>{e.key===`Enter`&&r()}),n?.addEventListener(`click`,r)}function M(e){let t=e.type===`num2word`?`Напиши словами:`:e.type===`time2clock`?`Запиши время цифрами:`:`Напиши цену словами:`;return`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${s.bg};color:${s.color}">🔢 Быстрый счёт</div>
      <div class="mg-translation">${t}</div>
      <div class="mg-big-number">${e.display}</div>
      <div class="grammar-input-row" style="margin-top:12px">
        <input class="grammar-input" id="mg-input" type="text" placeholder="Ответ..." autocomplete="off" autocorrect="off" spellcheck="false">
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-check" style="background:${s.color}">Проверить</button>
    </div>`}function N(e){let t=document.getElementById(`mg-input`),n=document.getElementById(`mg-check`);t?.focus();function r(){let r=t.value.trim().toLowerCase(),i=(e.acceptVariants?e.acceptVariants.map(e=>e.toLowerCase()):[e.answer.toLowerCase()]).includes(r),a=document.getElementById(`mg-feedback`);i?(f++,a.innerHTML=`<span class="mg-correct">✓ Правильно!</span>`):a.innerHTML=`<span class="mg-wrong">✗ Правильно: <em>${e.answer}</em></span>`,t.disabled=!0,n.textContent=d===u.length-1?`Завершить →`:`Дальше →`,n.onclick=b}t?.addEventListener(`keydown`,e=>{e.key===`Enter`&&r()}),n?.addEventListener(`click`,r)}function P(e){l===`wordOrder`&&C(e),l===`registerPick`&&T(e),l===`suffixChoice`&&D(e),l===`findError`&&k(e),l===`dialogueGap`&&j(e),l===`quickNumbers`&&N(e)}function F(){let e=u.length,t=Math.round(f/e*100),r=t>=80?`🎉`:t>=50?`👍`:`💪`;i.miniGameComplete(o.id,l,f,e),a(n().activeProfile,o.id,`mini_games_done`,null),p().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="mg-back-done">← Мини-игры</button>
      </header>
      <div class="ex-container" style="text-align:center;padding-top:40px">
        <div style="font-size:48px;margin-bottom:16px">${r}</div>
        <h2 style="color:${s.color};margin-bottom:8px">Готово!</h2>
        <p style="color:#6B7280;margin-bottom:4px">Результат: <strong style="color:${s.color}">${f} / ${e}</strong> (${t}%)</p>
        <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px;max-width:300px;margin-inline:auto">
          <button class="mode-btn" id="mg-retry" style="background:${s.color}">Повторить →</button>
          <button class="mode-btn" id="mg-hub" style="background:white;color:${s.color};border:2px solid ${s.color}">← Все мини-игры</button>
        </div>
      </div>
    </div>`,document.getElementById(`mg-back-done`)?.addEventListener(`click`,y),document.getElementById(`mg-hub`)?.addEventListener(`click`,y),document.getElementById(`mg-retry`)?.addEventListener(`click`,()=>v(l))}function I(e){return e.map(e=>({v:e,s:Math.random()})).sort((e,t)=>e.s-t.s).map(e=>e.v)}export{h as bindMiniGamesPage,m as renderMiniGamesPage};