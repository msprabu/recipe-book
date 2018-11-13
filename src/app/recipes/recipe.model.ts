export class Recipe{
    public name: string;
    public desc: string;
    public imagePath: string;
    public ingredients: string[];
    
    constructor(name: string, desc: string, imagePath: string, ingredients:string[]){
            this.name=name;
            this.desc=desc;
            this.imagePath=imagePath;
            this.ingredients= ingredients;
    }
}