import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class BackgroundService {
  constructor(private prisma: PrismaService) {}

  async backgrounds() {
    return this.prisma.background.findMany()
  }
}
