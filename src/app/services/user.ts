export interface Users{
    id: number;
    name: string;
    gender: string;
    date: string;
    country: string;
    phone: string;
    email: string;
    password: string;
}


export interface userLogin{
    email: string;
    password: string;
}


export interface list{
    ListName: string;
}


export interface task{
    ListName:String;
    TaskName: string;
    Priority: string;
    Date: string;
    year: string;
}

