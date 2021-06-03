import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreatedPlayersDto } from 'src/domain/entity/players/dto';
import { Players } from 'src/domain/entity';

@Injectable()
export class CreatedPlayersService {
  private players: Players[] = [];
  private readonly logger = new Logger(`LOG - ${CreatedPlayersService.name}`);

  async created(params: CreatedPlayersDto): Promise<Players> {
    const player: Players = {
      id: uuidv4(),
      urlImage: 'http://google/img',
      positionRanking: 1,
      ranking: 'A',
      ...params,
    };

    this.players.push(player);

    this.logger.log(`created player: ${JSON.stringify(player)}`);

    return player;
  }
}
