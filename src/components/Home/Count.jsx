import React, { useEffect } from 'react';
import { motion , useMotionValue , useTransform , animate } from 'framer-motion';

const Count = ({value}) => {

    const count = useMotionValue(0);
    const rounded = useTransform(count , Math.round);

    useEffect(() => {
            const animation = animate(count ,value , {duration:15});
            return animation.stop;
    } , []);

  return (
    <div className='flex'>
        <motion.p>{rounded}</motion.p>
        <span>&#37;</span>
    </div>
  )
}

export default Count