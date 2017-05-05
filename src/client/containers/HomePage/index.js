"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const components_1 = require("../../components");
require("./styles.css");
class HomePage extends React.Component {
    render() {
        return (React.createElement("div", { className: "home-page" },
            React.createElement(components_1.Logo, null),
            React.createElement("h1", null, "WeNoTyRe"),
            React.createElement("p", null, "Just another optionated seed project"),
            React.createElement("h3", null, "The stack"),
            React.createElement("strong", null, "Server"),
            React.createElement("ul", null,
                React.createElement("li", null, "Typescript"),
                React.createElement("li", null, "NodeJS")),
            React.createElement("strong", null, "Client"),
            React.createElement("ul", null,
                React.createElement("li", null, "Webpack"),
                React.createElement("li", null, "Typescript"),
                React.createElement("li", null, "React"),
                React.createElement("li", null, "Redux"),
                React.createElement("li", null, "StyleLint"),
                React.createElement("li", null, "TypescriptLint")),
            React.createElement("h3", null, "Environments"),
            React.createElement("p", null, "Both server and client have `development` and `production` environments."),
            React.createElement("h3", null, "Installation"),
            React.createElement("code", null, "npm install"),
            React.createElement("h3", null, "Development"),
            React.createElement("code", null, "npm run dev"),
            React.createElement("p", null, "Starts both server and client in development mode."),
            React.createElement("h3", null, "Build"),
            React.createElement("code", null, "npm run build"),
            React.createElement("p", null, "Builds both apps for production to the /build folder")));
    }
}
function mapStateToProps(state) {
    return {
        pageContent: state.pagesReducer.home || {}
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(HomePage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsNkNBQXFDO0FBQ3JDLGlEQUF1QztBQUV2Qyx3QkFBcUI7QUFNckIsY0FBZSxTQUFRLEtBQUssQ0FBQyxTQUErQjtJQUNuRCxNQUFNO1FBQ1gsTUFBTSxDQUFDLENBQ0wsNkJBQUssU0FBUyxFQUFDLFdBQVc7WUFDeEIsb0JBQUMsaUJBQUksT0FBRztZQUNSLDJDQUFpQjtZQUNqQixzRUFBMkM7WUFFM0MsNENBQWtCO1lBQ2xCLDZDQUF1QjtZQUN2QjtnQkFDRSw2Q0FBbUI7Z0JBQ25CLHlDQUFlLENBQ1o7WUFFTCw2Q0FBdUI7WUFDdkI7Z0JBQ0UsMENBQWdCO2dCQUNoQiw2Q0FBbUI7Z0JBQ25CLHdDQUFjO2dCQUNkLHdDQUFjO2dCQUNkLDRDQUFrQjtnQkFDbEIsaURBQXVCLENBQ3BCO1lBRUwsK0NBQXFCO1lBQ3JCLDBHQUM4QjtZQUU5QiwrQ0FBcUI7WUFDckIsZ0RBQXdCO1lBRXhCLDhDQUFvQjtZQUNwQixnREFBd0I7WUFDeEIsb0ZBQXlEO1lBRXpELHdDQUFjO1lBQ2Qsa0RBQTBCO1lBQzFCLHNGQUEyRCxDQUN2RCxDQUNQLENBQUE7SUFDSCxDQUFDO0NBQ0Y7QUFFRCx5QkFBeUIsS0FBSztJQUM1QixNQUFNLENBQUM7UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksRUFBRTtLQUMzQyxDQUFBO0FBQ0gsQ0FBQztBQUVELDRCQUE0QixRQUFRO0lBQ2xDLE1BQU0sQ0FBQyxFQUFFLENBQUE7QUFDWCxDQUFDO0FBRUQsa0JBQWUscUJBQU8sQ0FDcEIsZUFBZSxFQUNmLGtCQUFrQixDQUNuQixDQUFDLFFBQVEsQ0FBQyxDQUFBIn0=