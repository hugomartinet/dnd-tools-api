import { flatten } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import * as backgroundsData from './backgrounds.json'
import * as classesData from './classes.json'
import * as racesData from './races.json'
import * as spellsData from './spells.json'

const prisma = new PrismaClient()

async function main() {
  await prisma.race.createMany({ data: racesData })
  await prisma.class.createMany({ data: classesData })
  await prisma.background.createMany({ data: backgroundsData })
  await prisma.spell.createMany({
    data: spellsData.map(({ classes, ...spell }) => spell),
  })

  const classes = await prisma.class.findMany()
  const classSpellsData = spellsData.map(spell =>
    spell.classes.map(_class => ({
      spellId: spell.id,
      classId: classes.find(({ name }) => name === _class).id,
    }))
  )
  await prisma.classSpells.createMany({ data: flatten(classSpellsData) })
}

main()
  .then(async () => {
    await prisma.$disconnect()
    process.exit(0)
  })
  .catch(async err => {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1)
  })
