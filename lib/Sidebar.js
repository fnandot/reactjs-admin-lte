'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SidebarUserPanel = require('./SidebarUserPanel');

var _SidebarUserPanel2 = _interopRequireDefault(_SidebarUserPanel);

var _SidebarMenu = require('./SidebarMenu');

var _SidebarMenu2 = _interopRequireDefault(_SidebarMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _react2.default.PropTypes.node
};

var Sidebar = function Sidebar(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'aside',
    { className: 'main-sidebar' },
    _react2.default.createElement(
      'section',
      { className: 'sidebar' },
      children
    )
  );
};

Sidebar.UserPanel = _SidebarUserPanel2.default;
Sidebar.Menu = _SidebarMenu2.default;

Sidebar.propTypes = propTypes;

exports.default = Sidebar;