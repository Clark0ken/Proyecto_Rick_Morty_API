export class Character{
    constructor(
        private id:number,
        private name:string,
        private status:string,
        private species:String,
        private type:String,
        private gender:String,
        private origin:String/*LOCATION*/,
        private location:String/*LOCATION*/,
        private image:String,
        private episodes: Array<string>,
        //private 

    ){

    };

 
}