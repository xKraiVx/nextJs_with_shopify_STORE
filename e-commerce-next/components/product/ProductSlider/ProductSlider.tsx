

import React, { FunctionComponent, ReactNode, Children, isValidElement, useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import cn from 'classnames'
import styles from './ProductSlider.module.css'

type Props = {
    children: ReactNode | ReactNode[]
}

const ProductSlider: FunctionComponent<Props> = ({ children }) => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <div className={styles.root}>
            <div ref={sliderRef} className='relative h-full transition-opacity keen-slider'>
                <button onClick={slider.current?.prev} className={cn(styles.leftControl, styles.control)} />
                <button onClick={slider.current?.next} className={cn(styles.rightControl, styles.control)} />
                {Children.map(children, child => {
                    if (isValidElement(child)) {
                        /* return {
                            ...child,
                            props: {
                                ...child.props,
                                className: `${child.props.className ? child.props.className : ""} keen-slider__slide`
                            }
                        } */
                        return React.cloneElement(child,
                            {
                                className: `${child.props.className ? child.props.className : ""} keen-slider__slide`
                            }
                        )

                    }

                    return child
                })}
            </div>
        </div>
    )
}

export default ProductSlider