import { FunctionComponent, useState } from 'react'
import Image from "next/image"
import useAddItem from '@framework/cart/use-add-item'
import { useUI } from '@components/ui/context'
import { Button, Container } from '@components/ui'
import { Product } from '@common/types/product'
import ProductSlider from '@components/product/ProductSlider'
import Swatch from '@components/product/Swatch'
import { Choices, getVariant } from '@components/product/helper'

import s from './ProductView.module.css'

import cn from 'classnames'


interface Props {
    product: Product
}

const ProductView: FunctionComponent<Props> = ({ product }) => {
    const [choices, setChoices] = useState<Choices>({})

    const { openSidebar } = useUI()
    const addItem = useAddItem()

    const variant = getVariant(product, choices)

    const addToCart = async () => {
        try {
            const item = {
                productId: String(product.id),
                variantId: variant?.id,
                variantOptions: variant?.options
            }
            const output = await addItem(item)
            console.log(JSON.stringify(output));

            openSidebar()
        } catch {

        }
    }

    return (
        <Container>
            <div className={cn(s.root, 'fit', 'mb-5')}>
                <div className={cn(s.productDisplay, 'fit')}>
                    <div className={s.nameBox}>
                        <h1 className={s.name}>{product.name}</h1>
                        <div className={s.price}>
                            {product.price.value}
                            {` `}
                            {product.price.currencyCode}
                        </div>
                    </div>
                    <ProductSlider>
                        {product.images.map(image => <div key={image.url} className={s.imageContainer}>
                            <Image
                                className={s.img}
                                src={image.url}
                                alt={image.alt}
                                width={1050}
                                height={1050}
                                quality="85"
                            />
                        </div>)}
                    </ProductSlider>

                </div>
                <div className={s.sidebar}>
                    <section>
                        {product.options.map(option =>
                            <div key={option.id} className="pb-4">
                                <h2 className="uppercase font-medium">{option.displayName}</h2>
                                <div className="flex flex-row py-4">
                                    {option.values.map(value => {
                                        const activeChoice = choices[option.displayName.toLowerCase()]
                                        return (
                                            <Swatch
                                                active={value.label === activeChoice}
                                                key={`${option.id}-${value.label}`}
                                                label={value.label}
                                                color={value.hexColor}
                                                variant={option.displayName}
                                                onClick={() => setChoices({
                                                    ...choices,
                                                    [option.displayName.toLocaleLowerCase()]: value.label
                                                })}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        <div className="pb-14 break-words w-full max-w-xl text-lg">
                            {product.description}
                        </div>
                    </section>
                    <div>
                        <Button onClick={addToCart} className={s.button}>
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ProductView