
import type { InferGetStaticPropsType } from "next"

import { getAllProducts } from "@framework/product"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"
import { ProductCard } from "@components/product"
import { Grid, Hero, Marquee } from "@components/ui"



export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }

}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Grid layout="A">
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Cookies ice cream and muffin"
        description="Marzipan oat cake caramels biscuit carrot cake lollipop gingerbread. Cheesecake sesame snaps chocolate cake tiramisu chupa chups marshmallow gummi bears. Caramels danish oat cake gummi bears shortbread icing tart lollipop cheesecake. Bear claw jujubes sesame snaps bonbon chupa chups soufflé. Croissant pie halvah jujubes bonbon cupcake. Wafer pie cotton candy cake toffee marshmallow. Brownie sweet roll tart tiramisu caramels chocolate cake gummies shortbread pie."
      />
      <Marquee>
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      <Grid layout="B" bgMode="light">
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
    </>
  )
}

Home.Layout = Layout
