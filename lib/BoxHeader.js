'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BoxTools = require('./BoxTools');

var _BoxTools2 = _interopRequireDefault(_BoxTools);

var _BoxTitle = require('./BoxTitle');

var _BoxTitle2 = _interopRequireDefault(_BoxTitle);

var _BoxUserBlock = require('./BoxUserBlock');

var _BoxUserBlock2 = _interopRequireDefault(_BoxUserBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  border: _react2.default.PropTypes.bool,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node
};

var defaultProps = {
  border: false
};

var BoxHeader = function BoxHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      border = _ref.border;

  var classes = {
    'box-header': true,
    'with-border': border
  };

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(className, classes) },
    children
  );
};

BoxHeader.propTypes = propTypes;
BoxHeader.defaultProps = defaultProps;

BoxHeader.Tools = _BoxTools2.default;
BoxHeader.Title = _BoxTitle2.default;
BoxHeader.UserBlock = _BoxUserBlock2.default;

exports.default = BoxHeader;