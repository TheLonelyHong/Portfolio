import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = ({one , two , three}) => {
  return (
    <>
        <Typewriter
                options={{
                    autoStart:true,
                    loop:true,
                    deleteSpeed:75,
                    delay:100
                }}
                onInit={(typewriter) => {
                        typewriter.typeString(`${one}`)
                        .pauseFor(1000)
                        .typeString(`${two}`)
                        .pauseFor(1000)
                        .typeString(`${three}`)
                        .pauseFor(1000)
                        .deleteAll()
                        .start()
                }}
        />
    </>
  )
}

export default Type