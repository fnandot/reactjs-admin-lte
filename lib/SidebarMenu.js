'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SidebarMenuHeader = require('./SidebarMenuHeader');

var _SidebarMenuHeader2 = _interopRequireDefault(_SidebarMenuHeader);

var _SidebarMenuItem = require('./SidebarMenuItem');

var _SidebarMenuItem2 = _interopRequireDefault(_SidebarMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _react2.default.PropTypes.node
};

var SidebarMenu = function SidebarMenu(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'ul',
    { className: 'sidebar-menu' },
    children
  );
};

SidebarMenu.propTypes = propTypes;

SidebarMenu.Header = _SidebarMenuHeader2.default;
SidebarMenu.Item = _SidebarMenuItem2.default;

exports.default = SidebarMenu;