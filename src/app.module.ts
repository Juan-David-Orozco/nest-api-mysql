import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { db } from './config'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: db.DB_HOST,
      port: Number(db.DB_PORT),
      username: db.DB_USERNAME,
      password: db.DB_PASSWORD,
      database: db.DB_NAME,
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      ssl: false
    }),
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
