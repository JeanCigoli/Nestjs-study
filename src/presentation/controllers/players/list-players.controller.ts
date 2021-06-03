import { Controller, Get } from '@nestjs/common';
import { ListPlayersService } from 'src/data/usecases/players';

@Controller('api/v1/players')
export class ListPlayersController {
  constructor(private readonly listPlayersService: ListPlayersService) {}

  @Get()
  async listAll() {
    return await this.listPlayersService.listAll();
  }
}
