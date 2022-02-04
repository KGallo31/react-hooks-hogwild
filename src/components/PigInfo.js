import React, {useState} from 'react';


function PigInfo({hogs, handleClick, imageOn}) {
    console.log(hogs)
    const infoTile = hogs.map(hog => {
        console.log(hog)
    return(
        <li onClick={handleClick} key={hog.name} className='pigTile'> 
            <h3>{hog.name}</h3>
            <p> Specicalty: {hog.specicalty}  </p>
            <p> Weight: {hog.weight} </p>
            <p> Greased: {hog.greased ? 'Yes' : "No"} </p>
            <p> Highest Medal: {hog['highest medal achieved']}</p>
        </li>)
    })

  return <ul>{infoTile}</ul>
}

export default PigInfo;
