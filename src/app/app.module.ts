import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecadosModule } from '../recados/recados.module';
import { RecadosController } from 'src/recados/recados.controller';
import { RecadosService } from 'src/recados/recados.service';

@Module({
  imports: [RecadosModule],
  controllers: [AppController, RecadosController],
  providers: [AppService, RecadosService],
})
export class AppModule {}
