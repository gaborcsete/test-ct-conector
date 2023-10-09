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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomCartDiscountType = exports.deleteCartUpdateExtension = exports.createCartUpdateExtension = void 0;
const CART_UPDATE_EXTENSION_KEY = 'myconnector-cartUpdateExtension';
const CART_DISCOUNT_TYPE_KEY = 'myconnector-cartDiscountType';
function createCartUpdateExtension(apiRoot, applicationUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body: { results: extensions }, } = yield apiRoot
            .extensions()
            .get({
            queryArgs: {
                where: `key = "${CART_UPDATE_EXTENSION_KEY}"`,
            },
        })
            .execute();
        if (extensions.length > 0) {
            const extension = extensions[0];
            yield apiRoot
                .extensions()
                .withKey({ key: CART_UPDATE_EXTENSION_KEY })
                .delete({
                queryArgs: {
                    version: extension.version,
                },
            })
                .execute();
        }
        yield apiRoot
            .extensions()
            .post({
            body: {
                key: CART_UPDATE_EXTENSION_KEY,
                destination: {
                    type: 'HTTP',
                    url: applicationUrl,
                },
                triggers: [
                    {
                        resourceTypeId: 'cart',
                        actions: ['Update'],
                    },
                ],
            },
        })
            .execute();
    });
}
exports.createCartUpdateExtension = createCartUpdateExtension;
function deleteCartUpdateExtension(apiRoot) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body: { results: extensions }, } = yield apiRoot
            .extensions()
            .get({
            queryArgs: {
                where: `key = "${CART_UPDATE_EXTENSION_KEY}"`,
            },
        })
            .execute();
        if (extensions.length > 0) {
            const extension = extensions[0];
            yield apiRoot
                .extensions()
                .withKey({ key: CART_UPDATE_EXTENSION_KEY })
                .delete({
                queryArgs: {
                    version: extension.version,
                },
            })
                .execute();
        }
    });
}
exports.deleteCartUpdateExtension = deleteCartUpdateExtension;
function createCustomCartDiscountType(apiRoot) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body: { results: types }, } = yield apiRoot
            .types()
            .get({
            queryArgs: {
                where: `key = "${CART_DISCOUNT_TYPE_KEY}"`,
            },
        })
            .execute();
        if (types.length > 0) {
            const type = types[0];
            yield apiRoot
                .types()
                .withKey({ key: CART_DISCOUNT_TYPE_KEY })
                .delete({
                queryArgs: {
                    version: type.version,
                },
            })
                .execute();
        }
        yield apiRoot
            .types()
            .post({
            body: {
                key: CART_DISCOUNT_TYPE_KEY,
                name: {
                    en: 'Custom type to store a string',
                },
                resourceTypeIds: ['cart-discount'],
                fieldDefinitions: [
                    {
                        type: {
                            name: 'String',
                        },
                        name: 'customCartField',
                        label: {
                            en: 'Custom cart field',
                        },
                        required: false,
                    },
                ],
            },
        })
            .execute();
    });
}
exports.createCustomCartDiscountType = createCustomCartDiscountType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25uZWN0b3IvYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxNQUFNLHlCQUF5QixHQUFHLGlDQUFpQyxDQUFDO0FBQ3BFLE1BQU0sc0JBQXNCLEdBQUcsOEJBQThCLENBQUM7QUFFOUQsU0FBc0IseUJBQXlCLENBQzdDLE9BQW1DLEVBQ25DLGNBQXNCOztRQUV0QixNQUFNLEVBQ0osSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUM5QixHQUFHLE1BQU0sT0FBTzthQUNkLFVBQVUsRUFBRTthQUNaLEdBQUcsQ0FBQztZQUNILFNBQVMsRUFBRTtnQkFDVCxLQUFLLEVBQUUsVUFBVSx5QkFBeUIsR0FBRzthQUM5QztTQUNGLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztRQUViLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekIsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWhDLE1BQU0sT0FBTztpQkFDVixVQUFVLEVBQUU7aUJBQ1osT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLHlCQUF5QixFQUFFLENBQUM7aUJBQzNDLE1BQU0sQ0FBQztnQkFDTixTQUFTLEVBQUU7b0JBQ1QsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPO2lCQUMzQjthQUNGLENBQUM7aUJBQ0QsT0FBTyxFQUFFLENBQUM7U0FDZDtRQUVELE1BQU0sT0FBTzthQUNWLFVBQVUsRUFBRTthQUNaLElBQUksQ0FBQztZQUNKLElBQUksRUFBRTtnQkFDSixHQUFHLEVBQUUseUJBQXlCO2dCQUM5QixXQUFXLEVBQUU7b0JBQ1gsSUFBSSxFQUFFLE1BQU07b0JBQ1osR0FBRyxFQUFFLGNBQWM7aUJBQ3BCO2dCQUNELFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxjQUFjLEVBQUUsTUFBTTt3QkFDdEIs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