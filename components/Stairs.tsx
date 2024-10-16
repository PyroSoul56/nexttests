import {animate, motion, MotionConfig} from 'framer-motion'
import { existsSync } from 'fs'

const stairAnimation = {
  initial: {
    right: "0%"
  },
  animate: {
    right: "100%",
  },
  exit: {
    right: ["100%", "0%"],
  }

}

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
      {/* 
        render 6 diagonal motion divs, each representing a step of the stairs
        each div will have the same animation defined by the stairAnimation object
        the delay for each div will be calculated sinomically based on its reverse index,
        creating a staggered effect with decreasing delay for each step.
      */}
        {[...Array(6)].map((_, index) => (
          <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1
          }} 
          className='h-full w-full bg-accent relative z-50'
        />
      ))}
    </>
  );
}

export default Stairs