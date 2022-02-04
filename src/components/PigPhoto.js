import React, {useState} from 'react';

function PigPhoto({hogs, handleClick, imageOn}) {
    console.log(hogs)

    const pigTile = hogs.map((hog) => {
    return(
        <li  key={hog.name} className='pigTile'> 
            <img onClick={handleClick} src={hog.image} alt={hog.name}/>
            <h3> {hog.name} </h3>
        </li>
    )
    })
    console.log(pigTile)
  return (
      <ul>{pigTile}</ul>
  )
}

export default PigPhoto;
