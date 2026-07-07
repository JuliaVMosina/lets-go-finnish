const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-B_1lhdFN.js","assets/index-Cs5SYE4U.css"])))=>i.map(i=>d[i]);
import{a as e,o as t,s as n}from"./index-B_1lhdFN.js";var r=null,i=null,a=null,o=null,s=[],c=0,l=0;function u(){return document.querySelector(`#app`)}function d(n){return r=n,i=t[n.id]||{color:`#7C3AED`,bg:`#EDE7FB`},a=e(n.id),p()}function f(){m()}function p(){if(!a)return`<div class="ex-page"><p style="padding:24px">Мини-игры для этой главы скоро появятся.</p></div>`;let e=i;return`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="mg-back-hub">← Упражнения</button>
      </header>
      <div class="mode-select-screen">
        <h2 class="mode-title">Мини-игры</h2>
        <div class="mode-cards">
          ${[{id:`wordOrder`,icon:`🧩`,name:`Собери фразу`,desc:`${a.wordOrder.length} фраз · порядок слов`},{id:`registerPick`,icon:`🗣️`,name:`Разговорный или книжный?`,desc:`${a.registerPick.length} фраз · puhekieli vs kirjakieli`},{id:`suffixChoice`,icon:`🔤`,name:`Выбери окончание`,desc:`${a.suffixChoice.length} слов · вокальная гармония`},{id:`findError`,icon:`🔍`,name:`Найди ошибку`,desc:`${a.findError.length} предложений · грамматика`},{id:`dialogueGap`,icon:`💬`,name:`Диалог с пропуском`,desc:`${a.dialogueGap.length} реплик · контекст`},{id:`quickNumbers`,icon:`🔢`,name:`Быстрый счёт`,desc:`${a.quickNumbers.length} заданий · числа и время`}].map(t=>`
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
    </div>`}function m(){document.getElementById(`mg-back-hub`)?.addEventListener(`click`,()=>{n(()=>import(`./index-B_1lhdFN.js`).then(e=>e.t).then(e=>{u().innerHTML=e.renderExercisesPage(r,[],[]),e.bindExercisesPage()}),__vite__mapDeps([0,1]))}),document.querySelectorAll(`.mg-mode-card`).forEach(e=>{e.addEventListener(`click`,()=>h(e.dataset.game))})}function h(e){o=e,s=N([...a[e]]),c=0,l=0,v()}function g(){u().innerHTML=p(),m()}function _(){if(c++,c>=s.length){M();return}v()}function v(){let e=s[c],t=`${c+1} / ${s.length}`,n=Math.round(c/s.length*100),r=``;o===`wordOrder`&&(r=y(e)),o===`registerPick`&&(r=x(e)),o===`suffixChoice`&&(r=C(e)),o===`findError`&&(r=T(e)),o===`dialogueGap`&&(r=D(e)),o===`quickNumbers`&&(r=k(e)),u().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="mg-back-game">← Мини-игры</button>
        <span class="vocab-counter">${t} · ✓ ${l}</span>
      </header>
      <div class="ex-progress-bar">
        <div class="ex-progress-fill" style="width:${n}%;background:${i.color}"></div>
      </div>
      <div class="ex-container">
        ${r}
      </div>
    </div>`,document.getElementById(`mg-back-game`)?.addEventListener(`click`,g),j(e)}function y(e){let t=N([...e.words]);return`
    <div class="ex-card mg-card" data-correct="${e.words.join(`|`)}">
      <div class="ex-type-badge" style="background:${i.bg};color:${i.color}">🧩 Собери фразу</div>
      <div class="mg-translation">${e.translation}</div>
      <div class="mg-answer-slots" id="mg-slots"></div>
      <div class="mg-word-bank" id="mg-bank">
        ${t.map((e,t)=>`<button class="mg-word-chip" data-word="${e}" data-idx="${t}">${e}</button>`).join(``)}
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-check" style="background:${i.color}">Проверить</button>
    </div>`}function b(e){let t=document.getElementById(`mg-slots`),n=document.getElementById(`mg-bank`),r=[];function i(){t.innerHTML=r.length?r.map((e,t)=>`<span class="mg-slot-chip" data-sidx="${t}">${e}</span>`).join(``):`<span class="mg-slot-placeholder">нажми на слова ниже</span>`,t.querySelectorAll(`.mg-slot-chip`).forEach(e=>{e.addEventListener(`click`,()=>{let t=+e.dataset.sidx,a=r.splice(t,1)[0];i();let o=[...n.querySelectorAll(`.mg-word-chip`)].find(e=>e.dataset.word===a&&e.classList.contains(`mg-used`));o&&o.classList.remove(`mg-used`)})})}n.querySelectorAll(`.mg-word-chip`).forEach(e=>{e.addEventListener(`click`,()=>{e.classList.contains(`mg-used`)||(e.classList.add(`mg-used`),r.push(e.dataset.word),i())})}),document.getElementById(`mg-check`).addEventListener(`click`,()=>{let t=e.words,n=r.join(` `)===t.join(` `),i=document.getElementById(`mg-feedback`);n?(l++,i.innerHTML=`<span class="mg-correct">✓ Правильно!</span>`):i.innerHTML=`<span class="mg-wrong">✗ Правильно: <em>${t.join(` `)}</em></span>`,document.getElementById(`mg-check`).textContent=c===s.length-1?`Завершить →`:`Дальше →`,document.getElementById(`mg-check`).onclick=_}),i()}function x(e){return`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${i.bg};color:${i.color}">🗣️ Разговорный или книжный?</div>
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
      <button class="mg-check-btn" id="mg-next" style="background:${i.color};display:none">
        ${c===s.length-1?`Завершить →`:`Дальше →`}
      </button>
    </div>`}function S(e){document.querySelectorAll(`.mg-reg-btn`).forEach(t=>{t.addEventListener(`click`,()=>{document.querySelectorAll(`.mg-reg-btn`).forEach(e=>e.disabled=!0);let n=t.dataset.pick,r=e.answer,i=document.getElementById(`mg-feedback`),a=r===`puhekieli`?e.kirja:e.puhe;n===r?(l++,t.style.background=`#dcfce7`,i.innerHTML=`<span class="mg-correct">✓ Правильно! Книжный вариант: <em>${a}</em></span>`):(t.style.background=`#fee2e2`,i.innerHTML=`<span class="mg-wrong">✗ Это ${r===`puhekieli`?`разговорный`:`книжный`}. Пара: <em>${a}</em></span>`),document.getElementById(`mg-next`).style.display=`block`})}),document.getElementById(`mg-next`)?.addEventListener(`click`,_)}function C(e){return`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${i.bg};color:${i.color}">🔤 Выбери окончание</div>
      <div class="mg-translation">${e.hint}</div>
      <div class="mg-stem-row">
        <span class="mg-stem">${e.stem}</span><span class="mg-suffix-slot" id="mg-suffix-display">___</span>
      </div>
      <div class="mg-suffix-opts">
        ${e.options.map(e=>`<button class="mg-suffix-btn" data-opt="${e}">${e}</button>`).join(``)}
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-next" style="background:${i.color};display:none">
        ${c===s.length-1?`Завершить →`:`Дальше →`}
      </button>
    </div>`}function w(e){document.querySelectorAll(`.mg-suffix-btn`).forEach(t=>{t.addEventListener(`click`,()=>{document.querySelectorAll(`.mg-suffix-btn`).forEach(e=>e.disabled=!0);let n=t.dataset.opt;document.getElementById(`mg-suffix-display`).textContent=n;let r=document.getElementById(`mg-feedback`);n===e.answer?(l++,t.style.background=`#dcfce7`,r.innerHTML=`<span class="mg-correct">✓ ${e.stem}${n} — правильно! ${e.rule}</span>`):(t.style.background=`#fee2e2`,document.querySelectorAll(`.mg-suffix-btn`).forEach(t=>{t.dataset.opt===e.answer&&(t.style.background=`#dcfce7`)}),r.innerHTML=`<span class="mg-wrong">✗ Правильно: ${e.stem}${e.answer}. ${e.rule}</span>`),document.getElementById(`mg-next`).style.display=`block`})}),document.getElementById(`mg-next`)?.addEventListener(`click`,_)}function T(e){let t=e.sentence.split(` `);return`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${i.bg};color:${i.color}">🔍 Найди ошибку</div>
      <div class="mg-translation">Нажми на неправильное слово:</div>
      <div class="mg-error-sentence" id="mg-sentence">
        ${t.map((e,t)=>`<span class="mg-error-word" data-i="${t}" data-word="${e.replace(/[.,?!]/,``)}">${e}</span>`).join(` `)}
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-next" style="background:${i.color};display:none">
        ${c===s.length-1?`Завершить →`:`Дальше →`}
      </button>
    </div>`}function E(e){document.querySelectorAll(`.mg-error-word`).forEach(t=>{t.addEventListener(`click`,()=>{document.querySelectorAll(`.mg-error-word`).forEach(e=>e.style.pointerEvents=`none`);let n=t.dataset.word,r=document.getElementById(`mg-feedback`);n.toLowerCase()===e.errorWord.toLowerCase()?(l++,t.style.background=`#dcfce7`,t.style.borderRadius=`4px`,r.innerHTML=`<span class="mg-correct">✓ Правильно! Нужно: <em>${e.correct}</em><br><small>${e.hint}</small></span>`):(t.style.background=`#fee2e2`,t.style.borderRadius=`4px`,document.querySelectorAll(`.mg-error-word`).forEach(t=>{t.dataset.word.toLowerCase()===e.errorWord.toLowerCase()&&(t.style.background=`#dcfce7`,t.style.borderRadius=`4px`)}),r.innerHTML=`<span class="mg-wrong">✗ Ошибка была в «${e.errorWord}» → <em>${e.correct}</em><br><small>${e.hint}</small></span>`),document.getElementById(`mg-next`).style.display=`block`})}),document.getElementById(`mg-next`)?.addEventListener(`click`,_)}function D(e){let t=e.lines.map(e=>e.includes(`_____`)?`<div class="mg-dialogue-line mg-gap-line">${e.replace(`_____`,`<span class="mg-gap">_____</span>`)}</div>`:`<div class="mg-dialogue-line">${e}</div>`).join(``);return e.acceptVariants,`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${i.bg};color:${i.color}">💬 Диалог с пропуском</div>
      <div class="mg-dialogue">${t}</div>
      <div class="mg-hint-text">💡 ${e.hint}</div>
      <div class="grammar-input-row" style="margin-top:12px">
        <input class="grammar-input" id="mg-input" type="text" placeholder="Напиши ответ..." autocomplete="off" autocorrect="off" spellcheck="false">
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-check" style="background:${i.color}">Проверить</button>
    </div>`}function O(e){let t=document.getElementById(`mg-input`),n=document.getElementById(`mg-check`);t?.focus();function r(){let r=t.value.trim().toLowerCase(),i=document.getElementById(`mg-feedback`);e.acceptVariants===null?(l++,i.innerHTML=`<span class="mg-correct">✓ Отлично! Один из вариантов: <em>${e.answer}</em></span>`):e.acceptVariants.some(e=>r===e.toLowerCase())?(l++,i.innerHTML=`<span class="mg-correct">✓ Правильно!</span>`):i.innerHTML=`<span class="mg-wrong">✗ Правильно: <em>${e.answer}</em></span>`,t.disabled=!0,n.textContent=c===s.length-1?`Завершить →`:`Дальше →`,n.onclick=_}t?.addEventListener(`keydown`,e=>{e.key===`Enter`&&r()}),n?.addEventListener(`click`,r)}function k(e){let t=e.type===`num2word`?`Напиши словами:`:e.type===`time2clock`?`Запиши время цифрами:`:`Напиши цену словами:`;return`
    <div class="ex-card mg-card">
      <div class="ex-type-badge" style="background:${i.bg};color:${i.color}">🔢 Быстрый счёт</div>
      <div class="mg-translation">${t}</div>
      <div class="mg-big-number">${e.display}</div>
      <div class="grammar-input-row" style="margin-top:12px">
        <input class="grammar-input" id="mg-input" type="text" placeholder="Ответ..." autocomplete="off" autocorrect="off" spellcheck="false">
      </div>
      <div class="mg-feedback" id="mg-feedback"></div>
      <button class="mg-check-btn" id="mg-check" style="background:${i.color}">Проверить</button>
    </div>`}function A(e){let t=document.getElementById(`mg-input`),n=document.getElementById(`mg-check`);t?.focus();function r(){let r=t.value.trim().toLowerCase()===e.answer.toLowerCase(),i=document.getElementById(`mg-feedback`);r?(l++,i.innerHTML=`<span class="mg-correct">✓ Правильно!</span>`):i.innerHTML=`<span class="mg-wrong">✗ Правильно: <em>${e.answer}</em></span>`,t.disabled=!0,n.textContent=c===s.length-1?`Завершить →`:`Дальше →`,n.onclick=_}t?.addEventListener(`keydown`,e=>{e.key===`Enter`&&r()}),n?.addEventListener(`click`,r)}function j(e){o===`wordOrder`&&b(e),o===`registerPick`&&S(e),o===`suffixChoice`&&w(e),o===`findError`&&E(e),o===`dialogueGap`&&O(e),o===`quickNumbers`&&A(e)}function M(){let e=s.length,t=Math.round(l/e*100),n=t>=80?`🎉`:t>=50?`👍`:`💪`;u().innerHTML=`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="mg-back-done">← Мини-игры</button>
      </header>
      <div class="ex-container" style="text-align:center;padding-top:40px">
        <div style="font-size:48px;margin-bottom:16px">${n}</div>
        <h2 style="color:${i.color};margin-bottom:8px">Готово!</h2>
        <p style="color:#6B7280;margin-bottom:4px">Результат: <strong style="color:${i.color}">${l} / ${e}</strong> (${t}%)</p>
        <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px;max-width:300px;margin-inline:auto">
          <button class="mode-btn" id="mg-retry" style="background:${i.color}">Повторить →</button>
          <button class="mode-btn" id="mg-hub" style="background:white;color:${i.color};border:2px solid ${i.color}">← Все мини-игры</button>
        </div>
      </div>
    </div>`,document.getElementById(`mg-back-done`)?.addEventListener(`click`,g),document.getElementById(`mg-hub`)?.addEventListener(`click`,g),document.getElementById(`mg-retry`)?.addEventListener(`click`,()=>h(o))}function N(e){return e.map(e=>({v:e,s:Math.random()})).sort((e,t)=>e.s-t.s).map(e=>e.v)}export{f as bindMiniGamesPage,d as renderMiniGamesPage};