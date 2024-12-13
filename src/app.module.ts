import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ContentModule } from './content/content.module';
import { DocumentDbService } from './db/document-db/document-db.service';

@Module({
  imports: [ContentModule],
  controllers: [AppController],
  providers: [DocumentDbService],
})
export class AppModule {}
