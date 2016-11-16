'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ContentHeader = require('./ContentHeader');

var _ContentHeader2 = _interopRequireDefault(_ContentHeader);

var _ContentBody = require('./ContentBody');

var _ContentBody2 = _interopRequireDefault(_ContentBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = {
    'content-wrapper': true
  };

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(className, classes) },
    children
  );
};

Content.Header = _ContentHeader2.default;
Content.Body = _ContentBody2.default;

exports.default = Content;