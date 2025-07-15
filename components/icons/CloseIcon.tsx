import { motion } from "motion/react"

export default function CloseIcon({ ...props }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M10.9248 12L5 6.0752L6.0752 5L12 10.9248L17.9248 5L19 6.0752L13.0752 12L19 17.9247L17.9248 19L12 13.0752L6.0752 19L5 17.9247L10.9248 12Z"
        fill="currentColor"
      />
    </motion.svg>
  )
}
