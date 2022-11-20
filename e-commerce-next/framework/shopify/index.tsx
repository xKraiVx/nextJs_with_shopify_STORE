import { ReactNode } from "react";
import { shopifyHooks } from "./hooks";
import { getConfig } from "./api/config";
import { 
    ApiProvider as CoreApiProvider,
    useApiProvider as useApiProviderCore
 } from "@common"

interface ShopifyApiProviderProps {
    children: ReactNode[] | ReactNode
}

const config = getConfig()

export const ApiProvider = ({ children }: ShopifyApiProviderProps) => {

    return (
        <CoreApiProvider config={config} hooks={shopifyHooks}>
            {children}
        </CoreApiProvider>
    )
}

export const useApiProvider = () => useApiProviderCore()