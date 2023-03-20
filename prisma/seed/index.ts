import { PrismaClient } from '@prisma/client'
import { races } from './races'

const prisma = new PrismaClient()

async function main() {
  await prisma.race.createMany({
    data: races,
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
