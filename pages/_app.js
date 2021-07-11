import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <motion.div  initial = 'hidden' animate = 'visible' variants = {
      {
        hidden: {
          scale: .2,
          opacity: 0,
          marginLeft: 600
        },
        visible: {
          scale: 1,
          opacity: 1,
          marginLeft: 0,
          transition: {
            delay: .3
          }
        }
      }
    }>
      <Component {...pageProps} />
    </motion.div>
  )
}

export default MyApp
