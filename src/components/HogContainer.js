import React,{useState} from 'react';
import PigCard from './PigCard';

function HogContainer({hogs}) {

  return (
    <div>
        <PigCard hogs={hogs} />
    </div>);
}

export default HogContainer;
