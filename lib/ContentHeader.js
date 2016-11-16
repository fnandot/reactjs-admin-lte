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
  title: _react2.default.PropTypes.string.isRequired,
  description: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node
};

var ContentHeader = function ContentHeader(_ref) {
  var className = _ref.className,
      title = _ref.title,
      description = _ref.description,
      children = _ref.children;

  var classes = {
    'content-header': true
  };

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(className, classes) },
    _react2.default.createElement(
      'h1',
      null,
      title
    ),
    description ? _react2.default.createElement(
      'small',
      null,
      description
    ) : null,
    children
  );
};

ContentHeader.propTypes = propTypes;

exports.default = ContentHeader;