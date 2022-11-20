import { FunctionComponent, ReactNode, ComponentType, HtmlHTMLAttributes } from "react";

interface Props {
    children: ReactNode | ReactNode[],
    el?: ComponentType<HtmlHTMLAttributes<HTMLElement>>
}

import styles from './Container.module.css'

const Container: FunctionComponent<Props> = ({ children, el: Component = 'div' }) => {
    return (
        <Component className={styles.root}>
            {children}
        </Component>
    )
}

export default Container;