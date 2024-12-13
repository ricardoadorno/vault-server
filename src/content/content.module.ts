import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { DocumentDbService } from 'src/db/document-db/document-db.service';

@Module({
  controllers: [ContentController],
  providers: [ContentService, DocumentDbService],
})
export class ContentModule {}
