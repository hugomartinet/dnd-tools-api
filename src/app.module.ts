import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BackgroundModule } from './background/background.module'
import { ClassModule } from './class/class.module'
import { RaceModule } from './race/race.module'

@Module({
  imports: [RaceModule, ClassModule, BackgroundModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
