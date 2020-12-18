import React, { useEffect, useState } from 'react';
import './App.css';
import { getList } from './list';
import Details from "./Details";

function App() {

  const [list, setList] = useState([]);
  const [filterlist, setFilterList] = useState([]);
  const [detail, setDetail] = useState('');
  const [subtype, setSubtype] = useState('');

  const details = (detail)=> {
    console.log('Hi there', detail);
    setDetail(detail)
  }

  const filter = (event) =>{
    setSubtype(event.target.value)
    var filter = [];
    console.log('Hi event.target.value', event.target.value);
    filter = event.target.value === "All Job Types" ? list : list.filter(item => item.type === event.target.value);
    setFilterList(filter)

  }

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
          setFilterList(items)
          console.log(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <>
    <div>
    <select value={subtype} 
                        onChange={(event) => 
                          filter(event)} >
      <option value="All Job Types">All Job Types</option>
      <option value="Full Time">Full Time</option>
      <option value="Contract">Contract</option>

    </select>
    </div>
    <div class="container">
    <div className="App">
        {filterlist.map(item => 
        <div className="box">
          <p className="jobposting-title-container" onClick={() => details(item)}>{item.title}</p>
          <span>{item.company}</span> - <span>{item.location}</span>
          <p  key={item.id}>{item.type}</p>
          <p>{item.url}</p>
          <p>{item.created_at}</p>
        </div>
        )}
        
    </div>
    <Details detail={detail} />
    </div>
    </>
  );
}


export default App;
