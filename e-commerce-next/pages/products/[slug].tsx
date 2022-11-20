import { Layout } from "@components/common"
import { ProductView } from "@components/product"
import { getConfig } from "@framework/api/config"
import { getAllProductsPaths, getProduct } from "@framework/product"
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next"

export const getStaticPaths: GetStaticPaths = async () => {
    const config = getConfig()
    const { products } = await getAllProductsPaths(config)
    return {
        paths: products.map(product => ({ params: { slug: product.slug } })),
        fallback: false
    }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string, name: string }>) => {

    const config = getConfig()
    const { product } = await getProduct({
        config,
        variables: { slug: params?.slug }
    })

    return {
        props: {
            product
        }
    }
}

export default function ProductSlug({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
    
    return (
        <>
            {product && <ProductView product={product}/>}
        </>
    )
}

ProductSlug.Layout = Layout

