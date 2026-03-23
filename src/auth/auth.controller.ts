import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registeruser.dto';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
    //method 1
    // authservice:AuthService
    // constructor(authservice:AuthService){
    //     this.authservice=authservice;
    // }
    
    //method 2 
    constructor(private readonly authservice :AuthService,
        private readonly userservice :UserService
    ){}
    //pick and choose from both the methods

    @Post('register')
    register(@Body() registeruserDto:RegisterDto){
        
        const result=this.authservice.registerUser(registeruserDto);
        return {message:result}
    }


    @UseGuards(AuthGuard)
    @Get('profile')
    async getprofile(@Request() req){

        const userId=req.user.sub;
        const user = await this.userservice.getuserById(userId);

        if(!user){
            return {message:"there is some error occured"}
        }

        return {message: user};
    }
}

//learning -1
// ham kya kar sakte hain ki ya toh saara business logic koh 
// controller mai hi daal de ya phir { nest g service [name] } kar ke auth service create kare 
// aur business logic koh service mai daal de 

// Too - create a controller ham { nest g controller [name] } karenge aur uss name se src
//folder ke aandar woh controller aur respectively for models { nest g module [name]} 
//for servic { nest g service [name] } karenge aur woh chizen jog bhi chaiye bana sakte hin aur
//joh [name] mai specify karenge woh create ho jaiga

