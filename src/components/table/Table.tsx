import { Country } from "../../utils/translators/types";
import { Column, Props } from "./types"
import './table.css';
export const Table: React.FC<Props> = ({ columns, data, onSort }: Props) => {

    const sort = (el: Column, sortType: null | 'asc' | 'desc', index: number) => {
        onSort && onSort(el.attr, sortType, index);
    }
    return <table>
        <thead>
            {
                columns.map((el, index) => {
                    const sortType = !el.currentSort ? 'asc' : (el.currentSort === 'asc' ? 'desc' : 'asc');
                    const color = el.currentSort === 'asc' ? 'green' : (el.currentSort === 'desc' ? 'red' : 'black');
                    return <th onClick={() => el.sort && sort(el, sortType, index)} key={index} style={{ 'cursor': 'pointer' }}>
                        {el.name}
                        <span style={{ color }}>{el.sort ? '*' : ''}</span>
                    </th>
                })
            }
        </thead>

        <tbody>

            {
                data.map((el: Country, index) => {
                    return <tr key={index}>

                        {
                            columns.map((col) => {
                                const prop = col.attr as string;

                                return <td>
                                    {
                                        (el as any)[prop]
                                    }
                                </td>
                            })
                        }


                    </tr>
                })
            }
        </tbody>
    </table>
}