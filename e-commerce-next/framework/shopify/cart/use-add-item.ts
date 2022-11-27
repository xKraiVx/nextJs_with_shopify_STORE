import useAddItem from "@common/cart/use-add-item";
import { MutationHook } from "@common/types/hooks";
import { getCheckoutId } from "@framework/utils";
import { checkoutLineItemsAddMutation } from "@framework/utils/mutations";

export default useAddItem;

export const handler: MutationHook = {
  fetcherOptions: {
    query: checkoutLineItemsAddMutation,
  },
  fetcher: async ({ fetch, options, input }) => {
    const variables = {
      checkoutId: getCheckoutId(),
      lineItems: [
        {
          variantId: input.variantId,
          quantity: 1,
        },
      ],
    };

    const responce = await fetch({
      ...options,
      variables,
    });

    return responce;
  },
  useHook: ({ fetch }) => {
    return async (input: any) => {
      const responce = await fetch(input);
      return {
        output: responce,
      };
    };
  },
};
