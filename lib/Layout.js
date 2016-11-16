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
  skin: _react2.default.PropTypes.oneOf(['blue', 'black', 'purple', 'green', 'red', 'yellow', 'blue-light', 'black-light', 'purple-light', 'green-light', 'red-light', 'yellow-light']).isRequired,
  type: _react2.default.PropTypes.oneOf(['boxed', 'sidebar-collapsed', 'top-nav', 'fixed'])
};

var defaultProps = {
  type: 'fixed'
};

var Layout = function Layout(_ref) {
  var skin = _ref.skin,
      type = _ref.type,
      children = _ref.children;

  var classes = {
    'sidebar-mini': true
  };

  classes['skin-' + skin] = true;

  if (type === 'sidebar-collapsed' || type === 'fixed') {
    classes[type] = true;
  } else {
    classes['layout-' + type] = true;
  }

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(classes) },
    _react2.default.createElement(
      'div',
      { className: 'wrapper' },
      children
    )
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

exports.default = Layout;