import { Controller, Get, Param } from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosservice: RecadosService) {}

  @Get()
  findAll() {
    return this.recadosservice.getFindAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.recadosservice.getFindOne(id);
  }
}
