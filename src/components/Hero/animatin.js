import { motion } from 'framer-motion'

const letterVariants = {
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.02,
      times: [0, 0.1, 0.9, 1],
    },
  }),
  hidden: {
    opacity: 0,
    x: 100,
  },
}

export const titleAnimation = (text) => {
  const letter = text.split('').map((el, i) => (
    <motion.span
      key={i}
      variants={letterVariants}
      initial="hidden"
      animate="visible"
      custom={i}
    >
      {el}
    </motion.span>
  ))

  return letter
}
