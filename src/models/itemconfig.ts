export class Itemconfig {
    id: number;
    name: string;
    description: string;
    type: string;
    price: Number;
    discount: Number;
    img: string;
    createdby : string;
    updateby : string;
    isdeleted : boolean;
    updatedon : Date;
    createdon : Date;

    constructor(json?: any) {
        if (json) {
            this.description = json.description;
            this.name = json.name;
            this.id = json.id;
            this.img = json.img;
            this.price = json.price;
            this.type = json.type;
            this.discount = json.discount;
            this.createdby = json.createdby;
            this.updateby = json.updateby;
            this.updatedon = json.updatedon;
            this.createdon = json.createdon;
            this.isdeleted = json.isdeleted;
        }

    }

    static toArray(jsons : any[]) : Itemconfig[] {
        let items : Itemconfig[] = [];
        if(jsons != null) {
            for(let json of jsons) {
                items.push(new Itemconfig(json));
            }
        }
        return items;
    }
}