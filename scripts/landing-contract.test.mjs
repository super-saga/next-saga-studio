import { readFile } from 'node:fs/promises'

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')

const requiredCopy = [
  'AI &amp; Product Engineering Studio',
  'Studio',
  'AI Systems',
  'Ventures',
  'Method',
  'Build the product system your market is waiting for.',
  'Studio Capabilities',
  'AI Capabilities',
  'Method: How We Build',
  'Let\'s make it real',
]

const requiredClasses = [
  'mega-nav-panel',
  'hero-media-shell',
  'capability-map',
  'content-index-card',
]

const failures = []

for (const text of requiredCopy) {
  if (!html.includes(text)) {
    failures.push(`Missing copy: ${text}`)
  }
}

for (const className of requiredClasses) {
  if (!html.includes(className)) {
    failures.push(`Missing class: ${className}`)
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log('Landing contract matched Sprout-aligned information architecture.')
