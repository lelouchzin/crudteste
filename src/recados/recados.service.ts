import { Injectable } from '@nestjs/common';
import { Recado } from './entities/recado.entity';

@Injectable()
export class RecadosService {
  private lastId = 2;
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Recado teste',
      de: 'Joana',
      para: 'João',
      lido: false,
      data: new Date(),
    },
    {
      id: 2,
      texto: 'Recado teste parte 2',
      de: 'João',
      para: 'Joana',
      lido: false,
      data: new Date(),
    },
  ];

  getFindAll(paginacao: { limit: number; offset: number }) {
    return this.recados;
  }

  getFindOne(id: string) {
    return this.recados.find(item => item.id == +id);
  }

  create(body: any) {
    this.lastId++;
    const id = this.lastId;
    const newRecado = {
      ...body,
      id,
      data: new Date(),
    };
    this.recados.push(newRecado);

    return newRecado;
  }

  update(id: string, body: string) {
    body = `This action updates a #${id} recado`;
    return body;
  }

  remove(id: any) {
    return `This action removes a #${id} recado`;
  }
}
