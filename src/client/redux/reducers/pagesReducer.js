"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("../actions/actionTypes");
const INITIAL_STATE = {
    pages: {}
};
const DEFAULT_ACTION = {
    type: ''
};
function pagesReducer(state = INITIAL_STATE, action = DEFAULT_ACTION) {
    switch (action.type) {
        case types.PAGE_GET:
            return state;
        default:
            return state;
    }
}
exports.default = pagesReducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNSZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZXNSZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQStDO0FBVS9DLE1BQU0sYUFBYSxHQUFHO0lBQ3BCLEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQTtBQUVELE1BQU0sY0FBYyxHQUFHO0lBQ3JCLElBQUksRUFBRSxFQUFFO0NBQ1QsQ0FBQTtBQUVELHNCQUNFLFFBQWdCLGFBQWEsRUFDN0IsU0FBa0IsY0FBYztJQUM5QixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLEtBQUssQ0FBQyxRQUFRO1lBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDZDtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUE7SUFDaEIsQ0FBQztBQUNMLENBQUM7QUFURCwrQkFTQyJ9