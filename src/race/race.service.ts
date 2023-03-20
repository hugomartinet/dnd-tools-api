import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class RaceService {
  constructor(private prisma: PrismaService) {}

  async races() {
    return this.prisma.race.findMany()
  }
}
