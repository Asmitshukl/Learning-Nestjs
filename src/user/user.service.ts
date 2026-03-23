import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/registeruser.dto';
import { user } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


//important to understand --->
//Do we need to add DTO folders in imports or exports of a NestJS module?
// so the ans is No. DTOs are just TypeScript classes used for data validation and typing
// They are not part of NestJS’s module system, so they are never added to imports or exports


//learning 2-->
//to use the userschema u neeed to create a constructor and 
//and inject the model as done below to use the schema to create an entry into the database
@Injectable()
export class UserService {
    constructor(@InjectModel(user.name) private usermodel:Model<user>){}

    async createUser(registeruserDto : RegisterDto){
        
        return await this.usermodel.create({
            fname:registeruserDto.fname,
            lname:registeruserDto.lname,
            email:registeruserDto.email,
            password:registeruserDto.password

        });
    }

    async getuserById(id:string){
        return await this.usermodel.findOne({_id : id});
    }
}
