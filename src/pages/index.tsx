import type { NextPage } from 'next'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <motion.button
        whileTap={{ scale: 1.5 }}
        className="rounded-lg w-[100px] h-[30px] bg-white text-black"
      >
        ★
      </motion.button>
    </div>
  )
}

export default Home
