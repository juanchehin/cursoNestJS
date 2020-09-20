import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Injectable()
export class MensajesService {

    constructor{
        @InjectRepository(Mensaje)
        private readonly mensajeRepository: Repository<Mensaje>,
    } ()

    async getAll() {
        return await this.mensajeRepository.find();
    }
    async createMensaje(mensajeNuevo: CreateMensajeDto) {
        const nuevo = new Mensaje();
        nuevo.mensaje = mensajeNuevo.nick;

        return this.mensajeRepository.save(nuevo);
    }

    async updateMensaje(mensajeActualizar: CreateMensajeDto) {
        const mensaeUpdate = await this.mensajeRepository.findOne(idMensaje);
        mensajeUpdate.nick = mensajeActualizar.nick;
        mensajeUpdate.mensaje = mensajeActualizar.mensaje;

        return this.mensajeRepository.save(mensaeUpdate);
    }

    async deleteMensaje(idMensaje: number) {

        return await this.mensajeRepository.delete(idMensaje);
    }
}
