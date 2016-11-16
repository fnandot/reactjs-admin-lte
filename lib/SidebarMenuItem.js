'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _react2.default.PropTypes.node,
  active: _react2.default.PropTypes.bool
};

var SidebarMenuItem = function SidebarMenuItem(_ref) {
  var children = _ref.children,
      active = _ref.active;

  var classes = {
    active: active
  };

  return _react2.default.createElement(
    'li',
    { className: (0, _classnames2.default)(classes) },
    children
  );
};

SidebarMenuItem.propTypes = propTypes;

exports.default = SidebarMenuItem;