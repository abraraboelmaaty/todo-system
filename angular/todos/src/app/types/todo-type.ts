export type TODO_TYPE ={
    userId:number,
    id:number,
    title:string,
    completed:boolean
}

export interface TODOS_TYPE{
    _id:string,
    user:{
        id:string,
        name:string
    },
    title:string,
    completed:boolean,
}

export const defultTodo={
    _id:'',
    user:{
        id:'',
        name:''
    },
    title:'',
    completed:false
}