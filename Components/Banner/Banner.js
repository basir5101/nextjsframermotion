import Styles from '../../styles/Home.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link'
import { Facebook } from 'react-feather';

export default function Banner() {
    return (
        <section>
           <div className= {Styles.banner }>
               <h4> Tasnia <span className="text-danger">Tamanna</span> </h4>
               <h3>Motion 3D <span className="text-warning">Animation</span> Maker</h3>
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
                                delay: 0
                            }
                            }
                        }
                        } className = 'btn text-success border-success'> Eevee Render</motion.button>
                        </a>
                    </Link>
                    <Link href='/projects'>
                        <a><motion.button initial = 'hidden' animate = 'visible' variants = {
                            {
                                hidden: {
                                scale: .8,
                                opacity: 0,
                                },
                                visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: .4
                                }
                                }
                            }
                            } className= 'btn text-white border'> Cycle Render</motion.button></a>
                    </Link>
               </div>
               <div className={Styles.contact}>
                    <Link href="https://facebook.com/asfia.mim.94">
                        <a><Facebook size ={25} /> </a>
                    </Link>
               </div>
           </div>
        </section>
    )
}
