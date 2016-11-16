'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MailboxAttachment = require('./MailboxAttachment');

var _MailboxAttachment2 = _interopRequireDefault(_MailboxAttachment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _react2.default.PropTypes.node
};

var MailboxAttachments = function MailboxAttachments(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'ul',
    { className: 'mailbox-attachments clearfix' },
    children
  );
};

MailboxAttachments.propTypes = propTypes;

MailboxAttachments.Item = _MailboxAttachment2.default;

exports.default = MailboxAttachments;