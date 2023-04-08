import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { BackgroundController } from './background.controller'
import { BackgroundService } from './background.service'

@Module({
  imports: [],
  controllers: [BackgroundController],
  providers: [BackgroundService, PrismaService],
})
export class BackgroundModule {}
