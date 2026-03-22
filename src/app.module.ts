import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

//Learning 1 -->
//to add process.env we to add { pnpm install @nestjs/config }
//in imports add { configModule.forRoot() } this will add config module in complete
//project so now u can use process.env anywhere in the project

//learning 2 -->
//to add mongodb first install mongoose as { pnpm install @types/mongoose mongoose }
// now the second thing in imports add { MongooseModule.forRoot(process.env.DATABASE_URL as string)], } 


@Module({
  imports:[AuthModule, UserModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL as string)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
