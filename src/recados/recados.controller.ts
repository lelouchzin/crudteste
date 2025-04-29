import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosservice: RecadosService) {}

  // @HttpStatus(HttpStatus.OK)
  @Get()
  findAll(@Query() paginacao: { limit: number; offset: number }) {
    paginacao.limit = 10;
    paginacao.offset = 0;
    return this.recadosservice.getFindAll(paginacao);
  }

  // @HttpStatus(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.recadosservice.getFindOne(id);
  }

  // @HttpStatus(HttpStatus.CREATED)
  @Post()
  create(@Body() body: string) {
    console.log(body);
    return this.recadosservice.create(body);
  }

  // @HttpStatus(HttpStatus.OK)
  @Put(':id')
  update(@Param('id') id: string, @Body() body: string) {
    return this.recadosservice.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recadosservice.remove(id);
  }
}
