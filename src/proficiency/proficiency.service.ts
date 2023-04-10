import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ProficiencyService {
  constructor(private prismaService: PrismaService) {}

  async proficiencies() {
    return this.prismaService.proficiency.findMany()
  }
}
