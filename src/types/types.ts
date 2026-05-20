export const role = ["user", "admin", "superAdmin"] as const;

type TRole = typeof role[number];


export type TUser = {
    id: number;
    name: string;
    email: string;
    password_hash: string;
    age: number;
    role: TRole;
    created_at: Date;
    update_at: Date;
}

export type RUser = Omit<TUser, "id"  |"password_hash"| "created_at" | "update_at">;

type TOrder = {
    id: number;
    customer_id: number;
    quentity: number;
    food: string;
    price:number;
    created_at: Date;
    update_at: Date;
}