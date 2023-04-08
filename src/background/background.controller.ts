import { Controller, Get } from '@nestjs/common'
import { BackgroundService } from './background.service'

@Controller('background')
export class BackgroundController {
  constructor(private readonly backgroundService: BackgroundService) {}

  @Get('all')
  async findAll() {
    return this.backgroundService.backgrounds()
  }
}
