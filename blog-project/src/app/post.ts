export class Post {
    constructor(
        public id: string= "" ,
        public title: string="",
        public author: string="",
        public content: string="",
        public comment: any=[]      
    ){}
    }