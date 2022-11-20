import "@assets/main.css"
import 'keen-slider/keen-slider.min.css'
import { FunctionComponent, ReactNode } from 'react'
import { AppProps } from 'next/app'
import { UIProvider } from "@components/ui/context"

type Layout = FunctionComponent<{ children: ReactNode | ReactNode[] }>

const Noop: Layout = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps & { Component: { Layout: Layout } }) {

    const Layout = Component.Layout ?? Noop

    return (
        <UIProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </UIProvider>
    )
}

export default MyApp