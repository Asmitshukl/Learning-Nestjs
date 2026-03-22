import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registeruser.dto';
import bcrypt from "bcrypt"

@Injectable()
export class AuthService {
    userservice:UserService

    constructor(userservice:UserService){
        this.userservice=userservice
    }

    async registerUser(registeruserDto: RegisterDto){

        const hashpassword=await bcrypt.hash(registeruserDto.password,5);

        const user= await this.userservice.createUser({...registeruserDto , password:hashpassword});

        return { user};
    }
}
