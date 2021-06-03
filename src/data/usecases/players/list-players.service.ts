import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Players } from 'src/domain/entity';

@Injectable()
export class ListPlayersService {
  private players: Players[] = [];
  private readonly logger = new Logger(`LOG - ${ListPlayersService.name}`);

  async listAll(): Promise<Players[]> {
    const player: Players = {
      id: uuidv4(),
      urlImage: 'http://google/img',
      positionRanking: 1,
      ranking: 'A',
      email: 'jean.cigoli@gmail.com',
      name: 'Jean Cigoli',
      phoneNumber: '5511920066677',
    };

    this.players.push(player);

    this.logger.log(`list player: ${JSON.stringify(player)}`);

    return this.players;
  }
}
