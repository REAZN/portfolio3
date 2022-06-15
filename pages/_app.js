import 'styles/style.scss'
import "styles/overide.scss"
import { motion, AnimatePresence } from "framer-motion";

export default function MyApp({ Component, pageProps, router }) {

  return (
      // <AnimatePresence exitBeforeEnter initial={false}>
      //     <motion.div
      //         key={router.route}
      //         initial={{y: "-100%"}}
      //         animate={{y: "-0"}}
      //         transition={{ duration: 0.7, ease: "easeInOut" }}
      //     >
      //     </motion.div>
      // </AnimatePresence>
        <Component {...pageProps} />
  )
}

