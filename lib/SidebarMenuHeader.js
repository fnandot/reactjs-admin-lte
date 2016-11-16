"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  title: _react2.default.PropTypes.string
};

var SidebarMenuHeader = function SidebarMenuHeader(_ref) {
  var title = _ref.title;
  return _react2.default.createElement(
    "li",
    { className: "header" },
    title
  );
};

SidebarMenuHeader.propTypes = propTypes;

exports.default = SidebarMenuHeader;