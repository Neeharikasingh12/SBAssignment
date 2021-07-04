export class Userinfo {
    id:number;
    firstname : string;
    username : string;
    lastactive : string;
    role : string;

    constructor(json?: any) {
        if (json) {
            this.firstname = json.firstname;
            this.username = json.username;
            this.id = json.id;
            this.lastactive = json.lastactive;
            this.role = json.role;
        }

    }

    static toArray(jsons : any[]) : Userinfo[] {
        let users : Userinfo[] = [];
        if(jsons != null) {
            for(let json of jsons) {
                users.push(new Userinfo(json));
            }
        }
        return users;
    }
}