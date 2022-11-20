import { Product } from "@common/types/product";

type AvailableChoices = "color" | "size" | string

export type Choices = {
    [P in AvailableChoices]: string
}

export const getVariant = (product: Product, choices: Choices) =>
    product.variants.find((v) => {
        return v.options.every(variantOption => {
            const optionName = variantOption.displayName.toLowerCase()
            return optionName in choices &&
                choices[optionName] === variantOption.values[0].label
        })
    })