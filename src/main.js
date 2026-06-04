import './style.css'
import { getState, switchProfile, getActiveProfile } from './storage/progress.js'

// Demo chapters data (later replaced by Google Sheets)
const DEMO_CHAPTERS = [
  { id: 'ch1', title_fi: 'Hei ja tervetuloa', title_ru: 'Привет и добро пожаловать', color: '#7C3AED', bg: '#EDE7FB', img: 'ch1.png' },
  { id: 'ch2', title_fi: 'Minkämaalainen sinä olet?', title_ru: 'Ты откуда?', color: '#EC4899', bg: '#FAE9F2', img: 'ch2.png' },
  { id: 'ch3', title_fi: 'Pedro soittaa Mikkolle', title_ru: 'Педро звонит Микко', color: '#F59E0B', bg: '#FEEEDB', img: 'ch3.png' },
  { id: 'ch4', title_fi: 'Minä', title_ru: 'Я', color: '#10B981', bg: '#E8F7EE', img: 'ch4.png' },
  { id: 'ch5', title_fi: 'Meidän tavallinen päivä', title_ru: 'Наш обычный день', color: '#3B82F6', bg: '#E9EEFB', img: 'ch5.png' },
]

function getGreeting(name) {
  const h = new Date().getHours()
  if (h >= 6 && h < 12) return `Hyvää huomenta, ${name}! ☀️ Готова к финскому?`
  if (h >= 12 && h < 18) return `Hei hei, ${name}! Продолжим?`
  return `Hyvää iltaa, ${name}! Один урок перед сном?`
}

function getChapterProgress(profile, chapterId, total = 20) {
  const ex = profile.exercises[chapterId] || {}
  const voc = profile.vocabulary[chapterId] || {}
  const done = Object.values(ex).filter(e => e.completed).length +
               Object.values(voc).filter(w => w.seen).length
  return Math.min(100, Math.round((done / total) * 100))
}

function renderHeader(state) {
  const profiles = state.profiles
  return `
    <header class="header">
      <div class="logo">
        <img src="/lets-go-finnish/logo.png" alt="Let's Go Learn Finnish!" class="logo-img">
      </div>
      <div class="header-right">
        <div class="profile-switcher">
          ${Object.entries(profiles).map(([id, p]) => `
            <button class="profile-btn ${state.activeProfile === id ? 'active' : ''}"
                    data-profile="${id}">
              <img class="avatar" src="/lets-go-finnish/${id}.png" alt="${p.name}">
              <span class="pname">${p.name}</span>
            </button>
          `).join('')}
        </div>
        <button class="btn-cta">Начать учить</button>
      </div>
    </header>
  `
}

function renderDashboard(state, chapters) {
  const profile = getActiveProfile()
  return `
    ${renderHeader(state)}
    <div class="hero">
      <div class="hero-text">
        <h1><span class="hero-accent">Suomi on vaikea.</span><br>Mutta me справимся 💪</h1>
        <p class="greeting">${getGreeting(profile.name)}</p>
      </div>
      <div class="hero-deco">
        <div class="deco-card deco-1"><span class="deco-dot"></span>Moikka! — Привет!</div>
        <div class="deco-card deco-2"><span class="deco-dot"></span>Kiitos — Спасибо</div>
        <div class="deco-card deco-3"><span class="deco-dot"></span>Hyvää! — Отлично!</div>
      </div>
    </div>
    <p class="section-title">Главы учебника</p>
    <div class="chapters-grid">
      ${chapters.map((ch, i) => renderChapterCard(ch, i + 1, profile)).join('')}
    </div>
  `
}

function renderChapterCard(ch, num, profile) {
  const pct = getChapterProgress(profile, ch.id)
  const done = pct === 100
  const btnLabel = pct === 0 ? 'Начать' : done ? 'Повторить' : 'Продолжить →'
  return `
    <div class="chapter-card ${done ? 'done' : ''} ${pct > 0 ? 'in-progress' : ''}"
         data-chapter="${ch.id}"
         style="--card-color: ${ch.color}">
      <div class="card-img-wrap" style="background: ${ch.bg}">
        <img src="/lets-go-finnish/${ch.img}" alt="${ch.title_fi}" class="card-img">
      </div>
      <div class="card-body">
        <div class="card-top">
          <span class="card-label">Глава ${num}</span>
          ${done ? '<span class="done-badge">✓</span>' : ''}
        </div>
        <div class="card-title">${ch.title_fi}</div>
        <div class="card-subtitle">${ch.title_ru}</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${pct}%; background: ${ch.color}"></div>
        </div>
        <div class="card-footer">
          <span class="progress-label">${pct}%</span>
          <button class="btn-card" style="color: ${ch.color}; border-color: ${ch.color}">${btnLabel}</button>
        </div>
      </div>
    </div>
  `
}

function mount(html) {
  document.querySelector('#app').innerHTML = html
}

function bindEvents() {
  // Profile switching
  document.querySelectorAll('.profile-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchProfile(btn.dataset.profile)
      render()
    })
  })

  // Chapter card click
  document.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      alert(`Глава ${card.dataset.chapter} — скоро откроем!`)
    })
  })
}

function render() {
  const state = getState()
  mount(renderDashboard(state, DEMO_CHAPTERS))
  bindEvents()
}

render()
