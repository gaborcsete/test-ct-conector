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
exports.post = void 0;
const success_api_1 = require("../api/success.api");
const custom_error_1 = __importDefault(require("../errors/custom.error"));
const cart_controller_1 = require("./cart.controller");
const loggers_1 = require("@commercetools-backend/loggers");
/**
 * Exposed service endpoint.
 * - Receives a POST request, parses the action and the controller
 * and returns it to the correct controller. We should be use 3. `Cart`, `Order` and `Payments`
 *
 * @param {Request} request The express request
 * @param {Response} response The express response
 * @returns
 */
const post = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    // Deserialize the action and resource from the body
    const { action, resource } = request.body;
    const app = (0, loggers_1.createApplicationLogger)();
    app.info('Hey there', action);
    if (!action || !resource) {
        throw new custom_error_1.default(400, 'Bad request - Missing body parameters.');
    }
    // Identify the type of resource in order to redirect
    // to the correct controller
    switch (resource.typeId) {
        case 'cart':
            try {
                const data = yield (0, cart_controller_1.cartController)(action, resource);
                if (data && data.statusCode === 200) {
                    (0, success_api_1.apiSuccess)(200, data.actions, response);
                    return;
                }
                throw new custom_error_1.default(data ? data.statusCode : 400, JSON.stringify(data));
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new custom_error_1.default(500, error.message);
                }
            }
            break;
        case 'payment':
            break;
        case 'order':
            break;
        default:
            throw new custom_error_1.default(500, `Internal Server Error - Resource not recognized. Allowed values are 'cart', 'payments' or 'orders'.`);
    }
});
exports.post = post;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3NlcnZpY2UuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvREFBZ0Q7QUFDaEQsMEVBQWlEO0FBQ2pELHVEQUFtRDtBQUNuRCw0REFBeUU7QUFFekU7Ozs7Ozs7O0dBUUc7QUFDSSxNQUFNLElBQUksR0FBRyxDQUFPLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxFQUFFO0lBQ2pFLG9EQUFvRDtJQUNwRCxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFFMUMsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQ0FBdUIsR0FBRSxDQUFDO0lBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRTlCLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDeEIsTUFBTSxJQUFJLHNCQUFXLENBQUMsR0FBRyxFQUFFLHdDQUF3QyxDQUFDLENBQUM7S0FDdEU7SUFFRCxxREFBcUQ7SUFDckQsNEJBQTRCO0lBQzVCLFFBQVEsUUFBUSxDQUFDLE1BQU0sRUFBRTtRQUN2QixLQUFLLE1BQU07WUFDVCxJQUFJO2dCQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxnQ0FBYyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFcEQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxHQUFHLEVBQUU7b0JBQ25DLElBQUEsd0JBQVUsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDeEMsT0FBTztpQkFDUjtnQkFFRCxNQUFNLElBQUksc0JBQVcsQ0FDbkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQ3JCLENBQUM7YUFDSDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtvQkFDMUIsTUFBTSxJQUFJLHNCQUFXLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDM0M7YUFDRjtZQUVELE1BQU07UUFDUixLQUFLLFNBQVM7WUFDWixNQUFNO1FBRVIsS0FBSyxPQUFPO1lBQ1YsTUFBTTtRQUVSO1lBQ0UsTUFBTSxJQUFJLHNCQUFXLENBQ25CLEdBQUcsRUFDSCxxR0FBcUcsQ0FDdEcsQ0FBQztLQUNMO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUE5Q1csUUFBQSxJQUFJLFFBOENmIn0=