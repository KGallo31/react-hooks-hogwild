import React,{useState} from 'react';
import PigInfo from './PigInfo';
import PigPhoto from './PigPhoto';

function HogContainer({hogs}) {
    const [imageOn, setImage] = useState(true)
    function handleClick(){
        setImage(!imageOn)
    }
    return (
        <ul>
        {imageOn ? <PigPhoto hogs={hogs} handleClick={handleClick} imageOn={imageOn}/> : <PigInfo handleClick={handleClick} hogs={hogs} imageOn={imageOn}/>}
        </ul>)
}

export default HogContainer;
