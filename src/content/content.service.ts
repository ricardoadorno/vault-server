import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { DocumentDbService } from '../db/document-db/document-db.service';

@Injectable()
export class ContentService {
  constructor(private readonly documentDBService: DocumentDbService) {}

  async create(createContentDto: CreateContentDto) {
    return await this.documentDBService.content.create({
      data: createContentDto,
    });
  }

  async findAll() {
    return await this.documentDBService.content.findMany();
  }

  async findOne(id: string) {
    return await this.documentDBService.content.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateContentDto: UpdateContentDto) {
    return await this.documentDBService.content.update({
      where: { id },
      data: updateContentDto,
    });
  }

  async remove(id: string) {
    return await this.documentDBService.content.delete({
      where: { id },
    });
  }
}
