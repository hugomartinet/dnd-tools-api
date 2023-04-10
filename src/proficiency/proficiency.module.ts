import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ProficiencyController } from './proficiency.controller'
import { ProficiencyService } from './proficiency.service'

@Module({
  imports: [],
  controllers: [ProficiencyController],
  providers: [ProficiencyService, PrismaService],
})
export class ProficiencyModule {}
