import { writeFileSync } from 'fs'
import puppeteer from 'puppeteer'

async function parseSpells() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://www.aidedd.org/dnd-filters/sorts.php')

  const cookiesButton = await page.waitForSelector('button[mode=primary]')
  await cookiesButton.click()

  const elements = await page.$$('table#liste tr > td.item > a')

  console.debug(`Found ${elements.length} elements`)

  const spells = []

  for (const element of elements) {
    const url = await element.evaluate(el => el.getAttribute('href'))
    const id = new URL(url).searchParams.get('vf')

    const spellPage = await browser.newPage()
    await spellPage.goto(url)

    try {
      const name = await (
        await spellPage.waitForSelector('h1')
      ).evaluate(el => el.textContent)

      const bloc = await spellPage.waitForSelector('div.bloc')
      const divs = await bloc.$$eval('div', el =>
        el.map(el => ({
          classes: Object.values(el.classList),
          html: el.innerHTML,
        }))
      )

      const [levelString, school] = divs
        .find(div => div.classes.includes('ecole'))
        .html.split(' - ')
      const level = Number(levelString.replace('niveau ', ''))

      function findDivAndReplaceLabel(label: string) {
        const diwWithLabel = divs.find(div =>
          div.html.includes(`<strong>${label}</strong>`)
        )
        return diwWithLabel.html.replace(`<strong>${label}</strong> : `, '')
      }

      const casting_time = findDivAndReplaceLabel(`Temps d'incantation`)
      const range = findDivAndReplaceLabel(`Portée`)
      const components = findDivAndReplaceLabel('Composantes')
      const duration = findDivAndReplaceLabel('Durée')

      const description = divs.find(div =>
        div.classes.includes('description')
      ).html

      const classes = divs
        .filter(div => div.classes.includes('classe'))
        .map(div => div.html)

      spells.push({
        id,
        name,
        level,
        school,
        casting_time,
        range,
        components: formatComponents(components),
        duration,
        description: formatDescription(description),
        classes,
      })
      console.log(`${id} done!`)
    } catch (error) {
      console.error(`Error on ${id}: ${error.message}`)
    }

    await spellPage.close()
  }

  writeFileSync('prisma/seed/spells.json', JSON.stringify(spells))
}

function formatDescription(description: string) {
  const blocs = description.split('<strong>')

  const formattedDescription = blocs.map(bloc => {
    const blocParts = bloc.split('</strong>')
    if (blocParts.length === 2)
      return { title: blocParts[0], text: blocParts[1] }
    return { text: bloc }
  })

  return formattedDescription
}

function formatComponents(components: string) {
  if (components[1] === ',') {
    return [components[0], ...formatComponents(components.slice(3))]
  }
  return [components]
}

parseSpells()
