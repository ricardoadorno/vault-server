import { Controller, Get } from '@nestjs/common';
import { DocumentDbService } from './db/document-db/document-db.service';

@Controller()
export class AppController {
  constructor(private readonly documentDBService: DocumentDbService) {}

  @Get()
  async getHello() {
    return await this.documentDBService.content.findMany();
  }
}
