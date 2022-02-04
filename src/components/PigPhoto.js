import React from 'react';

function PigPhoto({hogs}) {
    console.log(hogs)

    const pigTile = hogs.map(hog => {
        return(
    <li key={hog.name} className='pigTile'> 
        <img src={hog.image} alt={hog.name}/>
        <h3> {hog.name} </h3>
    </li>)
    })
    
  return (
      {pigTile}
  )
}

export default PigPhoto;
