import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registeruser.dto';
import bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    userservice:UserService

    constructor(userservice:UserService ,private jwtService: JwtService){
        this.userservice=userservice
    }

    async registerUser(registeruserDto: RegisterDto){

        const hashpassword=await bcrypt.hash(registeruserDto.password,5);

        const user= await this.userservice.createUser({...registeruserDto , password:hashpassword});

        const payload = {sub : user._id};
        const token =await this.jwtService.signAsync(payload);

        return { user};
    }

    
}