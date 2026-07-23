import{r as e}from"./index-aU0Gfq4Z.js";function t(t){let r=e(t.id);return r.length?`
    <div class="exercise-page">
      <header class="header">
        <button class="btn-back" id="btn-back-reallife">← Упражнения</button>
      </header>

      <div style="padding:20px 16px 40px;max-width:680px;margin:0 auto">
        <div style="margin-bottom:24px">
          <div style="font-size:13px;color:#888;margin-bottom:4px">Глава ${t.id.replace(`ch`,``)}</div>
          <h2 style="margin:0;font-size:22px">Живые диалоги 🗣️</h2>
          <p style="margin:8px 0 0;color:#555;font-size:14px">Реальные ситуации · Современная лексика · Финский как он есть</p>
        </div>

        ${r.map((e,t)=>n(e,t)).join(``)}
      </div>
    </div>
  `:`<p style="padding:24px">Скоро будет!</p>`}function n(e,t){return`
    <div style="background:#fff;border-radius:16px;box-shadow:0 2px 12px rgba(0,0,0,0.08);margin-bottom:28px;overflow:hidden">

      <!-- Header -->
      <div style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:20px;color:#fff">
        <div style="font-size:20px;font-weight:700">${e.situation}</div>
        <div style="font-size:13px;opacity:0.85;margin-top:2px">${e.situation_ru}</div>
      </div>

      <!-- Context tip -->
      <div style="padding:14px 16px;background:#f8f7ff;border-bottom:1px solid #ede9fe;font-size:14px;color:#555;line-height:1.6">
        💡 ${e.lena}
      </div>

      <!-- Dialogue -->
      <div style="padding:16px">
        <div style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:12px">Диалог</div>
        ${e.dialogue.map(e=>`
          <div style="margin-bottom:10px;${e.role===`sinä`?`text-align:right`:``}">
            <div style="display:inline-block;max-width:85%;text-align:left">
              <div style="font-size:11px;color:#aaa;margin-bottom:3px">${r(e.role)}</div>
              <div style="background:${e.role===`sinä`?`#6366f1`:`#f1f0f5`};color:${e.role===`sinä`?`#fff`:`#222`};padding:10px 14px;border-radius:${e.role===`sinä`?`16px 16px 4px 16px`:`16px 16px 16px 4px`};font-size:14px;line-height:1.5">
                ${e.text}
              </div>
              <div style="font-size:12px;color:#888;margin-top:3px;padding:0 4px">${e.ru}</div>
            </div>
          </div>
        `).join(``)}
      </div>

      <!-- Words -->
      <div style="padding:0 16px 16px">
        <div style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:10px">Слова и фразы</div>
        <div style="display:grid;gap:6px">
          ${e.words.map(e=>`
            <div style="display:flex;justify-content:space-between;align-items:baseline;padding:8px 12px;background:#f8f8f8;border-radius:8px;font-size:13px">
              <span style="font-weight:600;color:#333">${e.fi}</span>
              <span style="color:#666;margin-left:12px;text-align:right">${e.ru}</span>
            </div>
          `).join(``)}
        </div>
      </div>

      <!-- Register note -->
      ${e.register_note?`
      <div style="margin:0 16px 16px;padding:12px 14px;background:#fefce8;border-left:3px solid #eab308;border-radius:8px;font-size:13px;color:#555;line-height:1.6">
        📝 <b>Про регистр:</b> ${e.register_note}
      </div>`:``}

      <!-- Variants -->
      <div style="padding:0 16px 20px">
        <div style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:10px">Варианты фраз</div>
        ${e.variants.map(e=>`
          <div style="margin-bottom:12px">
            <div style="font-size:12px;color:#6366f1;font-weight:600;margin-bottom:6px">${e.label}</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px">
              ${e.examples.map(e=>`
                <div style="background:#ede9fe;color:#4f46e5;padding:6px 12px;border-radius:20px;font-size:13px">${e}</div>
              `).join(``)}
            </div>
          </div>
        `).join(``)}
      </div>

    </div>
  `}function r(e){return{sinä:`Ты`,barista:`Бариста`,kassahenkilö:`Кассир`,tarjoilija:`Официант`,naapuri:`Сосед`,ystävä:`Друг`,hän:`Собеседник`}[e]||e}function i(){document.getElementById(`btn-back-reallife`)?.addEventListener(`click`,()=>{window.history.back()})}export{i as bindRealLifePage,t as renderRealLifePage};