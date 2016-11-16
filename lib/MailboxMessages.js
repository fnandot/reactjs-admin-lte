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

var MailboxMessages = function MailboxMessages(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    { className: "table-responsive mailbox-messages" },
    children
  );
};

MailboxMessages.propTypes = propTypes;

exports.default = MailboxMessages;