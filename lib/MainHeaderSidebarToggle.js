"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarToggle = function SidebarToggle() {
  return _react2.default.createElement(
    "a",
    { href: "#", className: "sidebar-toggle" },
    _react2.default.createElement(
      "span",
      { className: "sr-only" },
      "Toggle navigation"
    )
  );
};

exports.default = SidebarToggle;