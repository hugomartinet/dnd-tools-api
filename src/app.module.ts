import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { RaceModule } from './race/race.module'

@Module({
  imports: [RaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
