import { useEffect, useState } from 'react';
import './App.css';
import { Table } from './components/table/Table';
import { Column } from './components/table/types';
import { fetchFromApi } from './utils/fetch';
import { translate } from './utils/translators/countryTranslator';
import { Country } from './utils/translators/types';

function App() {


  const [columns, setColums] = useState<Column[]>([
    { name: 'name', sort: true, attr: 'name', curerntSort: null },
    { name: 'flag', sort: false, attr: 'flag', curerntSort: null },
    { name: 'area', sort: false, attr: 'area', curerntSort: null },
    { name: 'population', sort: true, attr: 'population', curerntSort: null },
    { name: 'capital', sort: false, attr: 'capital', curerntSort: null }
  ])

  const onSort = (attr: string, sortType: null | 'asc' | 'desc', index: number) => {
  
    setColums(columns.map((el, i)=>{
      if(i === index){
        el.curerntSort = sortType
      }
      return el;
    }));

    let sortedData: Country[] = [];

    sortedData = data.sort((a, b) => {
      const val1 = (a as any)[attr];
      const val2 = (b as any)[attr];
      if (val1 < val2) {
        return sortType === 'asc' ? -1 : 1;
      } else if (val1 > val2) {
        return sortType === 'asc'?  1: -1;
      } else {
        return 0
      }
    });

    setData([...sortedData]);
  }
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    const dataPromise = fetchFromApi('europe');
    dataPromise.then((res) => {
      if (res && res.length) {
        const countries = translate(res);
        setData(countries as any);
      }
    }).catch((e) => {
      console.log(e);
    })
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} onSort={(attr, sortType, i) => onSort(attr, sortType, i)} />
    </div>
  );
}

export default App;
