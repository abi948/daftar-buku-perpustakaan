import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FilmsService {
  constructor(private readonly prisma: PrismaService) {}

  // Mengambil semua data film
  async findAll() {
    return this.prisma.film.findMany({
      orderBy: { id: 'asc' },
    });
  }

  // Mengambil film berdasarkan ID
  async findOne(id: number) {
    const film = await this.prisma.film.findUnique({
      where: { id },
    });

    if (!film) {
      throw new NotFoundException('Film tidak ditemukan');
    }

    return film;
  }

  // Menambahkan film
  async create(data: {
    judul: string;
    genre: string;
    tahun: number;
  }) {
    return this.prisma.film.create({
      data,
    });
  }

  // Mengubah film
  async update(
    id: number,
    data: {
      judul?: string;
      genre?: string;
      tahun?: number;
    },
  ) {
    await this.findOne(id);

    return this.prisma.film.update({
      where: { id },
      data,
    });
  }

  // Menghapus film
  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.film.delete({
      where: { id },
    });
  }
}
