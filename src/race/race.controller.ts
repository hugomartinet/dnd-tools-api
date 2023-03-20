import { Controller, Get } from '@nestjs/common'
import { RaceService } from './race.service'

@Controller('race')
export class RaceController {
  constructor(private readonly raceService: RaceService) {}

  @Get('all')
  async findAll() {
    return this.raceService.races()
  }
}
