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
  className: _react2.default.PropTypes.string
};

var BoxTools = function BoxTools(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = {
    'box-tools': true
  };

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(className, classes) },
    children
  );
};

BoxTools.propTypes = propTypes;

exports.default = BoxTools;