import { FunctionComponent, ReactNode } from "react"
import MarqueeReact from "react-fast-marquee";
import cn from "classnames"

interface Props {
    children: ReactNode | ReactNode[],
    variant?: 'primary' | 'secondary'
}

import styles from './Marquee.module.css'

const Marquee: FunctionComponent<Props> = ({ children, variant = 'primary' }) => {
    const rootClassName = cn(
        styles.root,
        {
            [styles.secondary]: variant === 'secondary'
        }
    )
    return (
        <div className={rootClassName}>
            <MarqueeReact gradient={false}>
                <div className={styles.container}>
                    {children}
                </div>
            </MarqueeReact>
        </div>
    )
}

export default Marquee