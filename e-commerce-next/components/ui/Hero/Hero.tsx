import Link from 'next/link';
import { FunctionComponent } from 'react';

import { Container } from '@components/ui'

interface Props {
    headline: string,
    description: string
}

import styles from './Hero.module.css'


const Hero: FunctionComponent<Props> = ({ headline, description }) => {
    return (
        <section className='bg-black'>
            <Container>
                <div className={styles.root}>
                    <h2 className={styles.headline}>
                        {headline}
                    </h2>
                    <div className={styles.content}>
                        <p className={styles.description}>{description}</p>
                        <Link href="#">
                            <a className={styles.link}>
                                Read it here
                            </a>
                        </Link>
                    </div>
                </div>
            </Container>
        </section   >
    )
}

export default Hero