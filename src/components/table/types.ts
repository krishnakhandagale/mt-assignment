export interface Props{
    columns: Column [];
    data: any[];
    onSort: any;
}

export interface Column{
    name: string;
    sort?: boolean;
    attr: string;
}