import { Props } from "./types"

export const Table: React.FC<Props> = ({ columns, data, onSort }: Props) => {

    const sort = (attr: string) =>{
        onSort && onSort(attr);
    }
    return <table>
        <thead>
            {
                columns.map((el, index) => {
                    return <th onClick={() => sort(el.attr)} key={index}>
                        {el.name}
                        <span onClick={() => sort(el.attr)}>{el.sort? '*': ''}</span>
                    </th>
                })
            }
        </thead>

        <tbody>

            {
                data.map((el, index) => {
                    return <tr key={index}>

                        {
                            columns.map((col) => {
                               return <td>
                                    {
                                    el[col.attr]
                                    
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