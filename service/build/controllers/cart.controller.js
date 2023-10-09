"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartController = void 0;
const create_client_1 = require("../client/create.client");
const custom_error_1 = __importDefault(require("../errors/custom.error"));
/**
 * Handle the create action
 *
 * @param {Resource} resource The resource from the request body
 * @returns {object}
 */
const create = (resource) => __awaiter(void 0, void 0, void 0, function* () {
    let productId = undefined;
    try {
        const updateActions = [];
        // Deserialize the resource to a CartDraft
        const cartDraft = JSON.parse(JSON.stringify(resource));
        if (cartDraft.obj.lineItems.length !== 0) {
            productId = cartDraft.obj.lineItems[0].productId;
        }
        // Fetch the product with the ID
        if (productId) {
            yield (0, create_client_1.createApiRoot)()
                .products()
                .withId({ ID: productId })
                .get()
                .execute();
            // Work with the product
        }
        // Create the UpdateActions Object to return it to the client
        const updateAction = {
            action: 'recalculate',
            updateProductData: false,
        };
        updateActions.push(updateAction);
        return { statusCode: 200, actions: updateActions };
    }
    catch (error) {
        // Retry or handle the error
        // Create an error object
        if (error instanceof Error) {
            throw new custom_error_1.default(400, `Internal server error on CartController: ${error.stack}`);
        }
    }
});
// Controller for update actions
// const update = (resource: Resource) => {};
/**
 * Handle the cart controller according to the action
 *
 * @param {string} action The action that comes with the request. Could be `Create` or `Update`
 * @param {Resource} resource The resource from the request body
 * @returns {Promise<object>} The data from the method that handles the action
 */
const cartController = (action, resource) => __awaiter(void 0, void 0, void 0, function* () {
    switch (action) {
        case 'Create': {
            const data = create(resource);
            return data;
        }
        case 'Update':
            break;
        default:
            throw new custom_error_1.default(500, `Internal Server Error - Resource not recognized. Allowed values are 'Create' or 'Update'.`);
    }
});
exports.cartController = cartController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2NhcnQuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSwyREFBd0Q7QUFDeEQsMEVBQWlEO0FBR2pEOzs7OztHQUtHO0FBQ0gsTUFBTSxNQUFNLEdBQUcsQ0FBTyxRQUFrQixFQUFFLEVBQUU7SUFDMUMsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBRTFCLElBQUk7UUFDRixNQUFNLGFBQWEsR0FBd0IsRUFBRSxDQUFDO1FBRTlDLDBDQUEwQztRQUMxQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUV2RCxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDeEMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUNsRDtRQUVELGdDQUFnQztRQUNoQyxJQUFJLFNBQVMsRUFBRTtZQUNiLE1BQU0sSUFBQSw2QkFBYSxHQUFFO2lCQUNsQixRQUFRLEVBQUU7aUJBQ1YsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO2lCQUN6QixHQUFHLEVBQUU7aUJBQ0wsT0FBTyxFQUFFLENBQUM7WUFFYix3QkFBd0I7U0FDekI7UUFFRCw2REFBNkQ7UUFDN0QsTUFBTSxZQUFZLEdBQWlCO1lBQ2pDLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLGlCQUFpQixFQUFFLEtBQUs7U0FDekIsQ0FBQztRQUVGLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFakMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFDO0tBQ3BEO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCw0QkFBNEI7UUFDNUIseUJBQXlCO1FBQ3pCLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtZQUMxQixNQUFNLElBQUksc0JBQVcsQ0FDbkIsR0FBRyxFQUNILDRDQUE0QyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQzFELENBQUM7U0FDSDtLQUNGO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFFRixnQ0FBZ0M7QUFDaEMsNkNBQTZDO0FBRTdDOzs7Ozs7R0FNRztBQUNJLE1BQU0sY0FBYyxHQUFHLENBQU8sTUFBYyxFQUFFLFFBQWtCLEVBQUUsRUFBRTtJQUN6RSxRQUFRLE1BQU0sRUFBRTtRQUNkLEtBQUssUUFBUSxDQUFDLENBQUM7WUFDYixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELEtBQUssUUFBUTtZQUNYLE1BQU07UUFFUjtZQUNFLE1BQU0sSUFBSSxzQkFBVyxDQUNuQixHQUFHLEVBQ0gsMkZBQTJGLENBQzVGLENBQUM7S0FDTDtBQUNILENBQUMsQ0FBQSxDQUFDO0FBZlcsUUFBQSxjQUFjLGtCQWV6QiJ9