import Styles from '../../styles/Home.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link'

export default function Banner() {
    return (
        <section>
           <div className= {Styles.banner }>
               <h4> Tasnia <span className="text-danger">Tamanna</span> </h4>
               <div className="buttons">
                    <Link href = '/projects'>
                        <a>
                        <motion.button initial = 'hidden' animate = 'visible' variants = {
                        {
                            hidden: {
                            scale: .8,
                            opacity: 0,
                            marginLeft: 600
                            },
                            visible: {
                            scale: 1,
                            opacity: 1,
                            marginLeft: 0,
                            transition: {
                                delay: 1
                            }
                            }
                        }
                        } className = 'btn text-success border-success'> Eevee Render</motion.button>
                        </a>
                    </Link>
                    <Link href='/projects'>
                        <a><motion.button onClick = {() => alert('কোনো লাভ নাই')}  initial = 'hidden' animate = 'visible' variants = {
                            {
                                hidden: {
                                scale: .8,
                                opacity: 0,
                                marginLeft: 600
                                },
                                visible: {
                                scale: 1,
                                opacity: 1,
                                marginLeft: 0,
                                transition: {
                                    delay: 1.3
                                }
                                }
                            }
                            } className= 'btn text-white border'> Cycle Render</motion.button></a>
                    </Link>
               </div>
           </div>
        </section>
    )
}
