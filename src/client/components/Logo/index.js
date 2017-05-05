"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classNames = require("classnames");
// tslint:disable-next-line:no-var-requires
const logoSvg = require('assets/logo/logo.svg');
const svgHtml = {
    __html: logoSvg
};
const logo = ({ className }) => (React.createElement("div", { className: classNames('logo', className), dangerouslySetInnerHTML: svgHtml }));
exports.default = logo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIseUNBQXdDO0FBRXhDLDJDQUEyQztBQUMzQyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtBQUUvQyxNQUFNLE9BQU8sR0FBRztJQUNkLE1BQU0sRUFBRSxPQUFPO0NBQ2hCLENBQUE7QUFNRCxNQUFNLElBQUksR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFjLEtBQUssQ0FDMUMsNkJBQ0UsU0FBUyxFQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQ3pDLHVCQUF1QixFQUFHLE9BQU8sR0FDakMsQ0FDSCxDQUFBO0FBRUQsa0JBQWUsSUFBSSxDQUFBIn0=