"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _react2.default.PropTypes.node
};

var MailboxReadInfo = function MailboxReadInfo(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    { className: "mailbox-read-info" },
    children
  );
};

MailboxReadInfo.propTypes = propTypes;

exports.default = MailboxReadInfo;