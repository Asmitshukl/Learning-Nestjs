import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { user, userschema } from './schemas/user.schema';


// to use the schema u need to first import into  the module as such then only 
// u will be able to use it
@Module({
  imports : [MongooseModule.forFeature([{name:user.name,schema:userschema}])] , 
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
