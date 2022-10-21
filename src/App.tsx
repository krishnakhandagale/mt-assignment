import { useEffect, useState } from 'react';
import './App.css';
import { Table } from './components/table/Table';
import { Column } from './components/table/types';
import { fetchFromApi } from './utils/fetch';
import { translate } from './utils/translators/countryTranslator';

function App() {

  const columns: Column[] = [{name: 'name', sort: true, attr: 'name'}, {name: 'flag', sort: false, attr: 'flag'},
  { name: 'area', sort: false, attr: 'area'},
  {name: 'population', sort: true, attr: 'population'},{ name: 'capital', sort: false, attr: 'capital'}];

  const onSort = (attr: string) =>{
    const sortedData = data.sort((a, b) =>{
      return a[attr] - b[attr] > 0 ? 1 : -1;
    });
    setData([...sortedData]);
  }
  const [data, setData] = useState([]);

  useEffect(()=>{
    const dataPromise = fetchFromApi('europe');
    dataPromise.then((res)=>{
      if(res && res.length){
        const countries = translate(res);
        setData(countries as any);
      }
    }).catch((e)=>{
      console.log(e);
    })
  }, []);
  
  return (
    <div className="App">
      <Table columns={columns} data={data} onSort={onSort}/>
    </div>
  );
}

export default App;
