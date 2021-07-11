import Styles from '../../styles/Home.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Project() {
    const data = [
        {
            name: '3D Gorgeous Design With Blender',
            photo: '/images/1.jpg'
        },
        {
            name: '3D Gorgeous Design With Blender',
            photo: '/images/1.jpg'
        },
        {
            name: '3D Gorgeous Design With Blender',
            photo: '/images/1.jpg'
        },
        {
            name: '3D Gorgeous Design With Blender',
            photo: '/images/1.jpg'
        },
        {
            name: '3D Gorgeous Design With Blender',
            photo: '/images/1.jpg'
        },
        {
            name: '3D Gorgeous Design With Blender',
            photo: '/images/1.jpg'
        },{
            name: '3D Gorgeous Design With Blender',
            photo: '/images/1.jpg'
        },

        {
            name: '3D Gorgeous Design With Blender',
            photo: '/images/1.jpg'
        },
        {
            name: '3D Gorgeous Design With Blender',
            photo: '/images/1.jpg'
        },

    ]
    return (
        <div className = {Styles.projects}>
            <motion.h4 initial = 'hidden' animate = 'visible' variants = {
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
                        }  className="text-center">Some Of My Project</motion.h4>


                        <div className="row container m-auto">
                            {
                                data.map((info, index) => (
                                    <motion.div initial = 'hidden' animate = 'visible' variants = {
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
                                                delay: `${(index+1)/(index+2)}`
                                            }
                                            }
                                        }
                                        } 
                                     key = {index} className="col-md-4 my-5 ">
                                        <div className="m-2 border text-center pb-2">
                                        <Image  src = {info.photo} height = {400} width = {400} alt = 'images' />
                                        <p> <strong>{info.name}</strong> </p>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </div>

                        
        </div>
    )
}
