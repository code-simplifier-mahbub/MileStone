import React, { useEffect, useState } from 'react';

const Watch = () => {

    const[step, setStep] = useState(0)

    const increaseStep = ()=> {
        const  newstep = step + 1;
        setStep(newstep)
        
    }

    useEffect(()=>{
        console.log(step)
    },[step])

    return (
        <div>
            <h1>My total steps today: {step} </h1>
            <button onClick={increaseStep}>increse step....</button>
        </div>
    );
};

export default Watch;