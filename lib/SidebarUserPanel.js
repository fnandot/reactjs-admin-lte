"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  image: _react2.default.PropTypes.node,
  info: _react2.default.PropTypes.node
};

var SidebarUserPanel = function SidebarUserPanel(_ref) {
  var image = _ref.image,
      info = _ref.info;
  return _react2.default.createElement(
    "div",
    { className: "user-panel" },
    _react2.default.createElement(
      "div",
      { className: "pull-left image" },
      image
    ),
    _react2.default.createElement(
      "div",
      { className: "pull-left info" },
      info
    )
  );
};

SidebarUserPanel.propTypes = propTypes;

exports.default = SidebarUserPanel;