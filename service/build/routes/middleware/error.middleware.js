"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const custom_error_1 = __importDefault(require("../../errors/custom.error"));
/**
 * Middleware for error handling
 * @param error The error object
 * @param req The express request
 * @param res The Express response
 * @param next
 * @returns
 */
const errorMiddleware = (error, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => {
    if (error instanceof custom_error_1.default) {
        if (typeof error.statusCode === 'number') {
            res.status(error.statusCode).json({
                message: error.message,
                errors: error.errors,
            });
            return;
        }
    }
    res.status(500).send('Internal server error');
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbWlkZGxld2FyZS9lcnJvci5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLDZFQUFvRDtBQUVwRDs7Ozs7OztHQU9HO0FBQ0ksTUFBTSxlQUFlLEdBQUcsQ0FDN0IsS0FBMEIsRUFDMUIsR0FBWSxFQUNaLEdBQWE7QUFDYiw2REFBNkQ7QUFDN0QsSUFBa0IsRUFDbEIsRUFBRTtJQUNGLElBQUksS0FBSyxZQUFZLHNCQUFXLEVBQUU7UUFDaEMsSUFBSSxPQUFPLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO1lBQ3hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDaEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUN0QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07YUFDckIsQ0FBQyxDQUFDO1lBRUgsT0FBTztTQUNSO0tBQ0Y7SUFFRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQztBQW5CVyxRQUFBLGVBQWUsbUJBbUIxQiJ9