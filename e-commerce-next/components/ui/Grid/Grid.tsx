import { FunctionComponent, ReactNode } from "react";
import cn from 'classnames'

interface Props {
    children: ReactNode[],
    layout?: 'A' | 'B',
    bgMode?: 'light' | 'dark'
}

import styles from './Grid.module.css'

const Grid: FunctionComponent<Props> = ({ children, layout = 'A', bgMode = 'dark' }) => {
    const rootClassName = cn(
        styles.root,
        {
            [styles.layoutA]: layout === 'A',
            [styles.layoutB]: layout === 'B'
        }
    )

    const bgModeClassName = cn(
        styles.bg,
        {
            [styles.light]: bgMode === 'light'
        }
    )
    return (
        <div className={`${rootClassName} ${bgModeClassName}`}>{children}</div>
    )
}

export default Grid;