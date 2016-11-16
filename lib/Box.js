'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _BoxHeader = require('./BoxHeader');

var _BoxHeader2 = _interopRequireDefault(_BoxHeader);

var _BoxBody = require('./BoxBody');

var _BoxBody2 = _interopRequireDefault(_BoxBody);

var _BoxFooter = require('./BoxFooter');

var _BoxFooter2 = _interopRequireDefault(_BoxFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  style: _react2.default.PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
  type: _react2.default.PropTypes.oneOf(['widget', 'solid']),
  loading: _react2.default.PropTypes.bool,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node
};

var defaultProps = {
  style: 'default',
  loading: false
};

var Box = function Box(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      type = _ref.type,
      loading = _ref.loading;

  var classes = {
    box: true
  };

  classes['box-' + style] = true;

  if (type) {
    classes['box-' + type] = true;
  }

  var spinner = loading ? _react2.default.createElement(
    'div',
    { className: 'overlay' },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'refresh', spin: true })
  ) : null;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(className, classes) },
    children,
    spinner
  );
};

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

Box.Header = _BoxHeader2.default;
Box.Body = _BoxBody2.default;
Box.Footer = _BoxFooter2.default;

exports.default = Box;