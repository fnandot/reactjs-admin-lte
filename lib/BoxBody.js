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
  padding: _react2.default.PropTypes.bool,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node
};

var defaultProps = {
  padding: true
};

var BoxBody = function BoxBody(_ref) {
  var className = _ref.className,
      children = _ref.children,
      padding = _ref.padding;

  var classes = {
    'box-body': true,
    'no-padding': !padding
  };

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(className, classes) },
    children
  );
};

BoxBody.propTypes = propTypes;
BoxBody.defaultProps = defaultProps;

exports.default = BoxBody;