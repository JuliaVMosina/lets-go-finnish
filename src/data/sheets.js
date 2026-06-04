import Papa from 'papaparse'

const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID'

const GIDS = {
  chapters:   '0',
  vocabulary: '0',   // заменить на реальный gid после публикации
  exercises:  '0'    // заменить на реальный gid после публикации
}

function csvUrl(gid) {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`
}

async function loadSheet(gid) {
  const res = await fetch(csvUrl(gid))
  const text = await res.text()
  return Papa.parse(text, { header: true, skipEmptyLines: true }).data
}

export async function loadSheetData() {
  const [chapters, vocabulary, exercises] = await Promise.all([
    loadSheet(GIDS.chapters),
    loadSheet(GIDS.vocabulary),
    loadSheet(GIDS.exercises)
  ])
  return { chapters, vocabulary, exercises }
}
