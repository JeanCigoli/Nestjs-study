import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Players } from 'src/domain/entity';
import { CreatedPlayersDto } from '../domain/entity/players/dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async created(@Body() body: CreatedPlayersDto) {
    const player = await this.playersService.created(body);

    return player;
  }

  @Get()
  async listAll(): Promise<Players[]> {
    return await this.playersService.listAll();
  }

  @Get('email/:email')
  async listByEmail(@Param('email') email: string): Promise<Players> {
    return await this.playersService.listByEmail(email);
  }
}
