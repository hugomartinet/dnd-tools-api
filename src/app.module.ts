import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BackgroundModule } from './background/background.module'
import { ClassModule } from './class/class.module'
import { ProficiencyModule } from './proficiency/proficiency.module'
import { RaceModule } from './race/race.module'

@Module({
  imports: [RaceModule, ClassModule, BackgroundModule, ProficiencyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
