import { FunctionComponent } from 'react'
import styles from './Swatch.module.css'
import { Check } from '@components/icons'
import { isDark } from '@lib/color'
import cn from 'classnames'

interface Props {
    color?: string,
    label?: string,
    variant?: "size" | "color" | string,
    active: boolean,
    onClick: () => void
}

const Swatch: FunctionComponent<Props> = ({ color, label, variant, active, ...rest }) => {


    label = label?.toLowerCase()
    variant = variant?.toLowerCase()

    const rootClassName = cn(
        styles.root,
        {
            [styles.active]: active,
            [styles.color]: color,
            [styles.size]: variant === 'size',
            [styles.dark]: color && isDark(color)
        }
    )

    return (
        <button
            style={color ? { backgroundColor: color } : {}}
            className={rootClassName}
            {...rest}
        >
            {variant === 'color' && active && <span><Check /></span>}
            {variant === "size" ? label : ""}
        </button>
    )
}

export default Swatch