import { Controller, Get } from '@nestjs/common'
import { ProficiencyService } from './proficiency.service'

@Controller('proficiency')
export class ProficiencyController {
  constructor(private readonly proficiencyService: ProficiencyService) {}

  @Get('all')
  async findAll() {
    return this.proficiencyService.proficiencies()
  }
}
