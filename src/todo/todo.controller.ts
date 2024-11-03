import { AppService } from './../app.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes } from '@nestjs/common';
import { CreateTodo, UpdateDto } from './todo.dto';
import { TodoPipe } from './todo.pipe';

@Controller()
export class TodoController {
    constructor(private appservice:AppService){}
    private todos = []

    @Get("user/:id/:slug")
    // @UsePipes(TodoPipe)
    getUserById(@Param() data, @Query('search') sea:string){
        return {data:JSON.stringify(data), sea}
    }

// post method
    @Post("/create")
    createTodo(@Body() data:CreateTodo){
        const item ={
            id: new Date().getTime(),
            ...data,
            createAt:new Date().toLocaleString(),
            isComplete:false
        }
        this.todos.push(item)
        return {
            msg:"todo is created"
        }
    }

// get method
    @Get("/get-todos")
    getAllTodos(){
        return {
            todos:this.todos,
            total:this.todos.length,
            msg:"todo fetched"
        }
    }

// update
    @Put("/update/:id")
    updateTodoById(@Param('id') id:number, @Body() data:UpdateDto){
        const new_Todo = this.todos.map((cur,i)=>{
            if(cur.id == id){
                return {
                    ...cur,
                    ['title']:data.title,
                    isComplete:true
                }
            }
            return cur
        })
        this.todos = new_Todo
        return {
            msg:"todo is updated"
        }
    }

    // delete
    @Delete("/delete/:id")
    deleteTodoById(@Param('id') id:number){
       const new_todo = this.todos.filter((c)=>c.id != id)
        this.todos = new_todo
        return {
            msg:"todo is deleted"
        }
    }
}
