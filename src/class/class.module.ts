import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ClassController } from './class.controller'
import { ClassService } from './class.service'

@Module({
  imports: [],
  controllers: [ClassController],
  providers: [ClassService, PrismaService],
})
export class ClassModule {}
