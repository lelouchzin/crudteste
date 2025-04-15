import { Injectable } from '@nestjs/common';

@Injectable()
export class RecadosService {
  getFindAll() {
    return 'This action returns all recados';
  }

  getFindOne(id: string) {
    return `This action returns a #${id} recado`;
  }
}
