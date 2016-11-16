'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MainHeaderLogo = require('./MainHeaderLogo');

var _MainHeaderLogo2 = _interopRequireDefault(_MainHeaderLogo);

var _MainHeaderSidebarToggle = require('./MainHeaderSidebarToggle');

var _MainHeaderSidebarToggle2 = _interopRequireDefault(_MainHeaderSidebarToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _react2.default.PropTypes.node,
  logo: _react2.default.PropTypes.node
};

var MainHeader = function MainHeader(_ref) {
  var logo = _ref.logo,
      children = _ref.children;
  return _react2.default.createElement(
    'header',
    { className: 'main-header' },
    logo,
    _react2.default.createElement(
      'nav',
      { className: 'navbar navbar-static-top' },
      children
    )
  );
};

MainHeader.propTypes = propTypes;

MainHeader.Logo = _MainHeaderLogo2.default;
MainHeader.SidebarToggle = _MainHeaderSidebarToggle2.default;

exports.default = MainHeader;