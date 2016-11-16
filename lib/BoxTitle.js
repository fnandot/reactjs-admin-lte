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
  text: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string
};

var BoxTitle = function BoxTitle(_ref) {
  var text = _ref.text,
      className = _ref.className;

  var classes = {
    "box-title": true
  };

  return _react2.default.createElement(
    'h3',
    { className: (0, _classnames2.default)(className, classes) },
    text
  );
};

BoxTitle.propTypes = propTypes;

exports.default = BoxTitle;