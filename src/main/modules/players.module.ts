import { Module } from '@nestjs/common';
import {
  CreatedPlayersController,
  ListPlayersController,
} from '../../presentation/controllers/players';
import {
  CreatedPlayersService,
  ListPlayersService,
} from '../../data/usecases/players';

@Module({
  controllers: [CreatedPlayersController, ListPlayersController],
  providers: [CreatedPlayersService, ListPlayersService],
})
export class PlayersModule {}
