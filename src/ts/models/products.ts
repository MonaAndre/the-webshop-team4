export class Products {
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    color: string;

    constructor(title:string, price: number, image:string, description:string, category:string, color:string) {
        this.title = title;
        this.price = price;
        this.image = image;
        this.description = description;
        this.category = category;
        this.color = color;
    }
}