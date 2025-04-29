import { Injectable } from '@nestjs/common';

@Injectable()
export class RecadosService {
  getFindAll(paginacao: { limit: number; offset: number }) {
    return `This action returns all recados, limit=#${paginacao.limit}, offset=#${paginacao.offset}`;
  }

  getFindOne(id: string) {
    return `This action returns a #${id} recado`;
  }

  create(body: string) {
    body = 'This action create a recado';
    return body;
  }

  update(id: string, body: string) {
    body = `This action updates a #${id} recado`;
    return body;
  }

  remove(id: any) {
    return `This action removes a #${id} recado`;
  }
}
