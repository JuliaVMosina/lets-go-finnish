const KEY = 'finnish_app'

function defaultState() {
  return {
    activeProfile: 'julia',
    profiles: {
      julia: {
        name: 'Julia',
        avatar: '🦊',
        chapters: {},
        vocabulary: {},
        exercises: {}
      },
      paul: {
        name: 'Paul',
        avatar: '🐱',
        chapters: {},
        vocabulary: {},
        exercises: {}
      }
    }
  }
}

export function getState() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || defaultState()
  } catch {
    return defaultState()
  }
}

export function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export function getActiveProfile() {
  const state = getState()
  return state.profiles[state.activeProfile]
}

export function switchProfile(profileId) {
  const state = getState()
  state.activeProfile = profileId
  saveState(state)
}

export function getChapterProgress(profileId, chapterId) {
  const state = getState()
  return state.profiles[profileId]?.chapters[chapterId] || { status: 'not_started' }
}

export function markExerciseDone(profileId, chapterId, exerciseIndex, selfChecked = null) {
  const state = getState()
  const profile = state.profiles[profileId]
  if (!profile.exercises[chapterId]) profile.exercises[chapterId] = {}
  const prev = profile.exercises[chapterId][`ex_${exerciseIndex}`] || { attempts: 0 }
  profile.exercises[chapterId][`ex_${exerciseIndex}`] = {
    completed: true,
    selfChecked,
    attempts: prev.attempts + 1,
    lastAttempt: new Date().toISOString()
  }
  saveState(state)
}

export function markVocabSeen(profileId, chapterId, wordIndex, correct) {
  const state = getState()
  const profile = state.profiles[profileId]
  if (!profile.vocabulary[chapterId]) profile.vocabulary[chapterId] = {}
  const prev = profile.vocabulary[chapterId][`w_${wordIndex}`] || { correct: 0, wrong: 0 }
  profile.vocabulary[chapterId][`w_${wordIndex}`] = {
    seen: true,
    correct: prev.correct + (correct ? 1 : 0),
    wrong: prev.wrong + (correct ? 0 : 1),
    lastSeen: new Date().toISOString()
  }
  saveState(state)
}

export function getChapterStats(profileId, chapterId, totalExercises, totalWords) {
  const state = getState()
  const profile = state.profiles[profileId]
  const exercises = profile.exercises[chapterId] || {}
  const vocabulary = profile.vocabulary[chapterId] || {}
  const doneExercises = Object.values(exercises).filter(e => e.completed).length
  const seenWords = Object.values(vocabulary).filter(w => w.seen).length
  const total = totalExercises + totalWords
  const done = doneExercises + seenWords
  return {
    doneExercises,
    seenWords,
    percent: total > 0 ? Math.round((done / total) * 100) : 0
  }
}
