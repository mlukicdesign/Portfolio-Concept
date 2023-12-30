import styles from './styles.module.scss';
import { useInView, motion } from 'framer-motion';
import { slideUp, opacity } from './animation';
// import framer motion when ready
import { useRef } from 'react';


export default function Description() {

    const phrase = 'Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.';

    const description = useRef(null);
    const isInView = useInView(description)

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
            <p>
             {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
            </p>
            <motion.p variants={opacity} animate={isInView ? "open" : "closed"} className={styles.mask}>Let's work together</motion.p>
                <div data-scroll data-scroll-speed={0.1}>

                </div>
            </div>
        </div>
    )
}