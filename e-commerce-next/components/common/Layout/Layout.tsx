import { FunctionComponent, ReactNode } from "react";
import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from '@components/ui/context'
import { ApiProvider } from "@framework";
import styles from './Layout.module.css'

interface Props {
    children: ReactNode[]
}

const Layout: FunctionComponent<Props> = ({ children }) => {
    const { isSidebarOpen, closeSidebar } = useUI()

    return (
        <ApiProvider>
            <div className={styles.root}>
                <Navbar />
                <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
                    <CartSidebar />
                </Sidebar>
                <main className="fit">
                    {children}
                </main>
                <Footer />
            </div>
        </ApiProvider>
    )
}

export default Layout