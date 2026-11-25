import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  async findAll() {
    return {
      message: 'Berhasil mengambil data film',
      data: await this.filmsService.findAll(),
    };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return {
      message: 'Berhasil mengambil detail film',
      data: await this.filmsService.findOne(id),
    };
  }

  @Post()
  async create(
    @Body()
    data: {
      judul: string;
      genre: string;
      tahun: number;
    },
  ) {
    return {
      message: 'Berhasil menambahkan film',
      data: await this.filmsService.create(data),
    };
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    data: {
      judul?: string;
      genre?: string;
      tahun?: number;
    },
  ) {
    return {
      message: 'Berhasil mengubah film',
      data: await this.filmsService.update(id, data),
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return {
      message: 'Berhasil menghapus film',
      data: await this.filmsService.remove(id),
    };
  }
}
