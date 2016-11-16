"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  href: _react2.default.PropTypes.string,
  mini: _react2.default.PropTypes.node,
  large: _react2.default.PropTypes.node
};

var MainHeaderLogo = function MainHeaderLogo(_ref) {
  var large = _ref.large,
      mini = _ref.mini,
      href = _ref.href;
  return _react2.default.createElement(
    "a",
    { href: href, className: "logo" },
    _react2.default.createElement(
      "span",
      { className: "logo-mini" },
      mini
    ),
    _react2.default.createElement(
      "span",
      { className: "logo-lg" },
      large
    )
  );
};

MainHeaderLogo.propTypes = propTypes;

exports.default = MainHeaderLogo;