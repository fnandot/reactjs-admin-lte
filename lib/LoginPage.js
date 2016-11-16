'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoginLogo = require('./LoginLogo');

var _LoginLogo2 = _interopRequireDefault(_LoginLogo);

var _LoginBody = require('./LoginBody');

var _LoginBody2 = _interopRequireDefault(_LoginBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _react2.default.PropTypes.node
};

var LoginPage = function LoginPage(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'hold-transition login-page', style: { minHeight: '100vh' } },
    _react2.default.createElement(
      'div',
      { className: 'login-box', style: { marginTop: '0', marginBottom: '0', paddingTop: '7vh' } },
      children
    )
  );
};

LoginPage.propTypes = propTypes;

LoginPage.Logo = _LoginLogo2.default;
LoginPage.Body = _LoginBody2.default;

exports.default = LoginPage;