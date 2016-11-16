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
  className: _react2.default.PropTypes.node
};

var LoginBody = function LoginBody(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var classes = {
    "login-box-body": true
  };

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(className, classes) },
    children
  );
};

LoginBody.propTypes = propTypes;

exports.default = LoginBody;