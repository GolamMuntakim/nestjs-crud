import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateTodo{
    @IsNotEmpty({message:"name is needed"})
    title:string

    @IsNotEmpty({message:"description de sala"})
    description:string
}









export class UpdateDto{
    @IsNotEmpty({message:"name is needed"})
    title:string
}