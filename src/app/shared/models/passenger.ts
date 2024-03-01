export interface Ipassenger {
    id : number;
    fullname : string;
    checkedIn : boolean;
    checkInDate : number | null;
    children : null | Array<IpassChild>;
}

export interface IpassChild{
    name : string;
    age : number;
}