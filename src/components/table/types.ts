import { Country } from "../../utils/translators/types";

export interface Props {
    columns: Column[];
    data: Country[];
    onSort: (attr: string, sortType: null | 'asc' | 'desc', index: number) => void;
}

export interface Column {
    name: string;
    sort?: boolean;
    attr: string;
    curerntSort?: null | 'asc' | 'desc';
}