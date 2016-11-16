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
  image: _react2.default.PropTypes.node,
  username: _react2.default.PropTypes.string,
  href: _react2.default.PropTypes.string,
  description: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string
};

var BoxUserBlock = function BoxUserBlock(_ref) {
  var image = _ref.image,
      username = _ref.username,
      href = _ref.href,
      description = _ref.description,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: 'user-block' },
    image,
    _react2.default.createElement(
      'span',
      { className: 'username' },
      _react2.default.createElement(
        'a',
        { href: href },
        username
      )
    ),
    _react2.default.createElement(
      'span',
      { className: 'description' },
      description
    )
  );
};

BoxUserBlock.propTypes = propTypes;

exports.default = BoxUserBlock;