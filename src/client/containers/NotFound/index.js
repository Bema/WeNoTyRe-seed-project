"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
class NotFoundPage extends React.Component {
    render() {
        const { pathname } = this.props.location;
        return (React.createElement("div", { className: "error-page" },
            React.createElement("h1", null,
                "Page '",
                pathname,
                "' Not Found")));
    }
}
exports.default = react_redux_1.connect()(NotFoundPage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsNkNBQXFDO0FBRXJDLGtCQUFtQixTQUFRLEtBQUssQ0FBQyxTQUFvQjtJQUM1QyxNQUFNO1FBQ1gsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFBO1FBRXhDLE1BQU0sQ0FBQyxDQUNMLDZCQUFLLFNBQVMsRUFBQyxZQUFZO1lBQ3pCOztnQkFBWSxRQUFROzhCQUFrQixDQUNsQyxDQUNQLENBQUE7SUFDSCxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxxQkFBTyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUEifQ==