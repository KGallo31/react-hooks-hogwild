import React,{useState} from 'react';
import PigPhoto from './PigPhoto';
import PigInfo from './PigInfo';
function HogContainer({hogs}) {
    const [imageOn,setImage] = useState(false)
    function handleClick(){
        setImage(!imageOn)
    }

  return (
    <div className='pigContainer'>
        <ul onClick={handleClick} className='pigTile'>
            {imageOn ? <PigPhoto hogs={hogs}/> : <PigInfo hogs={hogs} />}
        </ul>
    </div>);
}

export default HogContainer;
