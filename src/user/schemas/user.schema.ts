import {Prop , Schema , SchemaFactory} from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"
import { Role } from "./user.types";

export type UserDocument = HydratedDocument<user>


@Schema()
export class user{
    @Prop()
    fname : string;

    @Prop()
    lname : string;

    @Prop({unique : true})
    email: string;

    @Prop()
    password:string;

    @Prop()
    role:{type:string , enum:Role , default: Role.Student}
}

export const userschema= SchemaFactory.createForClass(user);

//there are different ways used in creating the schema andu can use these 
//schema creating method all are best practices (can be said) 