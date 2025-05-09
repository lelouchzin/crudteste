import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { stringify } from 'querystring';

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
    paginacao.limit = 10;
    paginacao.offset = 0;
    return this.recados;
  }

  getFindOne(id: string) {
    const recado = this.recados.find(item => item.id == +id);
    if (recado) {
      return recado;
    } else {
      this.lancarErroNotFound('Recado');
    }
  }

  create(body: Recado) {
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

  update(id: string, body: Recado) {
    const recadoExistenteIdex: number = this.recados.findIndex(
      item => item.id == +id,
    );

    if (recadoExistenteIdex >= 0) {
      const recadoExiste: Recado = this.recados[recadoExistenteIdex];

      this.recados[recadoExistenteIdex] = {
        ...recadoExiste,
        ...body,
      };
    } else {
      this.lancarErroNotFound('Recado');
    }

    return this.recados[recadoExistenteIdex];
  }

  remove(id: any) {
    const recadoExistenteIdex = this.recados.findIndex(item => item.id == +id);

    const recado: Recado = this.recados[recadoExistenteIdex];

    if (recadoExistenteIdex >= 0) {
      this.recados.splice(recadoExistenteIdex, 1);
    } else {
      this.lancarErroNotFound('Recado');
    }
    return recado;
  }

  lancarErroNotFound(messagem: string) {
    throw new NotFoundException(`${messagem} não encontrado`);
  }
}
