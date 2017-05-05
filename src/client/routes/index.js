"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const containers_1 = require("../containers");
const components_1 = require("../components");
exports.default = (React.createElement("div", null,
    React.createElement(components_1.MainMenu, null),
    React.createElement(react_router_dom_1.Switch, null,
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: containers_1.HomePage }),
        React.createElement(react_router_dom_1.Route, { path: "/about", component: containers_1.AboutPage }),
        React.createElement(react_router_dom_1.Route, { component: containers_1.NotFoundPage }))));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsdURBR3lCO0FBRXpCLDhDQUlzQjtBQUV0Qiw4Q0FBd0M7QUFFeEMsa0JBQWUsQ0FDYjtJQUNFLG9CQUFDLHFCQUFRLE9BQUc7SUFDWixvQkFBQyx5QkFBTTtRQUNMLG9CQUFDLHdCQUFLLElBQUMsS0FBSyxRQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFHLHFCQUFRLEdBQUk7UUFDOUMsb0JBQUMsd0JBQUssSUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBRyxzQkFBUyxHQUFJO1FBQzlDLG9CQUFDLHdCQUFLLElBQUMsU0FBUyxFQUFHLHlCQUFZLEdBQUksQ0FDNUIsQ0FDTCxDQUNQLENBQUEifQ==