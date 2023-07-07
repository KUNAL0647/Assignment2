import React, { useState } from 'react';
import jQuery from 'jquery';
import $ from 'jquery'; 
import Clock from './Task2';
import './Task1.css';

const List=()=> {
  const [listA, setListA] = useState("");
  const [listB, setListB] = useState("");
  
  const [diffA, setDiffA] = useState([]);
  const [diffB, setDiffB] = useState([]);
  const [common, setCommon] = useState([]);
  const [unique, setUnique] = useState([]);

  const computeDifferences = () => {
    const a = listA.split("\n").map(item => item.trim()).filter(item => item !== "");
    const b = listB.split("\n").map(item => item.trim()).filter(item => item !== "");

    const diffA = a.filter(item => !b.includes(item));
    const diffB = b.filter(item => !a.includes(item));
    const common = a.filter(item => b.includes(item));
    const unique = [...diffA, ...diffB];

    setDiffA(diffA);
    setDiffB(diffB);
    setCommon(common);
    setUnique(unique);
  };
  $(document).ready(function () {

    $("#btn1").click(function () {
        $("#task2").slideUp("slow");
      $("#task").slideDown("slow");

      });    });
    
  
  return (
    <>
    
      
    <div className='hide' id="task">
    <font color="white"></font>
    
          <div>
              <h1>    <font color="white">List Differences</font></h1>
              <div>
                  <label><font color="white">List A:</font></label>
                  <textarea value={listA} onChange={e => setListA(e.target.value)} />
              </div>
              <div>
                  <label><font color="white">List B:</font></label>
                  <textarea value={listB} onChange={e => setListB(e.target.value)} />
              </div>
              
              <button className='but' type="button" onClick={computeDifferences}>Compute</button>

              
              <div>
                  <h2><font color="white"> Present only in A:</font></h2>
                  
                    <font color="white">
                    
                      {diffA.map(item => <li key={item}>{item}</li>)}
                      
                      </font>
                  
              </div>
              <div>
                  <h2> <font color="white"> Present only in B:</font></h2>
                  
                  <font color="white">
                    
                      {diffB.map(item => <li key={item}>{item}</li>)}

                  
                  </font>
              </div>
              <div>
                  <h2> <font color="white"> Present in both A and B:</font></h2>
                  <font color="white">
                      {common.map(item => <li key={item}>{item}</li>)}
                  </font>
              </div>
              <div>
                  <h2> <font color="white">Combining both A and B (unique):</font></h2>
                  <font color="white">
                  {unique.map(item => <li key={item}>{item}</li>)}
                  </font>
              </div>
              </div>
              </div>
              <div className='button'>
              <button class="glow-on-hover" id="btn1"> Task1</button></div>
              
        </>
  );
};
export default List;
        
        
        
        