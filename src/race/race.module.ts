import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { RaceController } from './race.controller'
import { RaceService } from './race.service'

@Module({
  imports: [],
  controllers: [RaceController],
  providers: [RaceService, PrismaService],
})
export class RaceModule {}
