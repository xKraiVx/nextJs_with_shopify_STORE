import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react"
import cn from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode | ReactNode[],
}

import styles from './Button.module.css'
const Button: FunctionComponent<Props> = ({ children, className, ...rest }) => {
    return (
        <button className={cn(styles.root, className)} {...rest}>
            {children}
        </button>
    )
}

export default Button