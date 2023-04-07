import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ClassService {
  constructor(private prisma: PrismaService) {}

  async classes() {
    return this.prisma.class.findMany()
  }
}
