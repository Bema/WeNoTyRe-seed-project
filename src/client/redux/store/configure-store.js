"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const redux_immutable_state_invariant_1 = require("redux-immutable-state-invariant");
const reducers_1 = require("../reducers");
const reduxDevTools = getDevToolsExtension();
const isDev = process.env.NODE_ENV === 'development';
const composeEnhancers = isDev && reduxDevTools ? reduxDevTools : redux_1.compose;
function configureStore(initialState = {}) {
    return redux_1.createStore(reducers_1.default, initialState, composeEnhancers(redux_1.applyMiddleware(redux_thunk_1.default, redux_immutable_state_invariant_1.default())));
}
exports.default = configureStore;
function getDevToolsExtension() {
    if (typeof window === 'object') {
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJlLXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlndXJlLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBSWM7QUFDZCw2Q0FBK0I7QUFDL0IscUZBQTBFO0FBQzFFLDBDQUFxQztBQUVyQyxNQUFNLGFBQWEsR0FBRyxvQkFBb0IsRUFBRSxDQUFBO0FBQzVDLE1BQU0sS0FBSyxHQUFJLE9BQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLGFBQWEsQ0FBQTtBQUM3RCxNQUFNLGdCQUFnQixHQUFHLEtBQUssSUFBSSxhQUFhLEdBQUcsYUFBYSxHQUFHLGVBQU8sQ0FBQTtBQUV6RSx3QkFBdUMsWUFBWSxHQUFHLEVBQUU7SUFDdEQsTUFBTSxDQUFDLG1CQUFXLENBQ2hCLGtCQUFXLEVBQ1gsWUFBWSxFQUNaLGdCQUFnQixDQUFDLHVCQUFlLENBQUMscUJBQUssRUFBRSx5Q0FBNEIsRUFBRSxDQUFDLENBQUMsQ0FDekUsQ0FBQTtBQUNILENBQUM7QUFORCxpQ0FNQztBQUVEO0lBQ0UsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUUsTUFBYyxDQUFDLG9DQUFvQyxDQUFBO0lBQzdELENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFBO0FBQ2QsQ0FBQyJ9