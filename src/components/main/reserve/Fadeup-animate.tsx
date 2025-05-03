"use client"

import { FC, PropsWithChildren } from "react";
import {motion} from "framer-motion"


const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible:{
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

const FadeUp: FC<PropsWithChildren> = ({children}) => {
    return ( 
        <motion.div variants={fadeUp} initial='hidden' whileInView="visible" viewport={{once: true, amount: 0.7}}  className="max-w-full">
            {children}
        </motion.div>
     );
}
 
export default FadeUp;