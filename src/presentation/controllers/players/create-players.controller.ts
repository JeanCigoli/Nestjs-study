import { Body, Controller, Post } from '@nestjs/common';
import { CreatedPlayersService } from 'src/data/usecases/players/create-players.service';
import { CreatedPlayersDto } from 'src/domain/entity/players/dto';

@Controller('api/v1/players')
export class CreatedPlayersController {
  constructor(private readonly createPlayersService: CreatedPlayersService) {}

  @Post()
  async created(@Body() body: CreatedPlayersDto) {
    const player = await this.createPlayersService.created(body);

    return player;
  }
}
