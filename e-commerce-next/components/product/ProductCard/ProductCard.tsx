import { FunctionComponent } from 'react'
import { Product } from "@common/types/product"

import Link from 'next/link'
import Image from 'next/image'

interface Props {
    product: Product,
    variant?: "simple" | "slim"
}

import styles from './ProductCard.module.css'

const placeholderImage = '/product-image-placeholder.svg'

const ProductCard: FunctionComponent<Props> = ({ product, variant = "simple" }) => {
    return (
        <Link href={`products/${product.slug}`}>
            <a className={styles.root}>
                {variant === "slim" ?
                    <>
                        <div className='inset-0 absolute z-20 flex justify-center items-center'>
                            <span className='bg-black text-white p-3 font-bold text-xl'>
                                {product.name}
                            </span>
                        </div>
                        {product.images &&
                            <Image
                                className={styles.productImage}
                                alt={product.name ?? 'Product image'}
                                src={product.images[0].url || placeholderImage}
                                width={320}
                                height={320}
                                quality="85"
                                layout="fixed"
                            />
                        }
                    </>
                    :
                    <>
                        <div className={styles.productBg} />
                        <div className={styles.productTag}>
                            <h3 className={styles.productTitle}><span>{product.name}</span></h3>
                            <span className={styles.productPrice}>
                                {product.price.value} {product.price.currencyCode}
                            </span>
                        </div>
                        {product.images &&
                            <Image
                                className={styles.productImage}
                                alt={product.name ?? 'Product image'}
                                src={product.images[0].url || placeholderImage}
                                width={540}
                                height={540}
                                quality="85"
                                layout="responsive"
                            />
                        }
                    </>
                }

            </a>
        </Link>
    )
}

export default ProductCard

