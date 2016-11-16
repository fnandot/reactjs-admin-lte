'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MailboxControls = require('./MailboxControls');

var _MailboxControls2 = _interopRequireDefault(_MailboxControls);

var _MailboxMessages = require('./MailboxMessages');

var _MailboxMessages2 = _interopRequireDefault(_MailboxMessages);

var _MailboxAttachments = require('./MailboxAttachments');

var _MailboxAttachments2 = _interopRequireDefault(_MailboxAttachments);

var _MailboxReadMessage = require('./MailboxReadMessage');

var _MailboxReadMessage2 = _interopRequireDefault(_MailboxReadMessage);

var _MailboxReadInfo = require('./MailboxReadInfo');

var _MailboxReadInfo2 = _interopRequireDefault(_MailboxReadInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Controls: _MailboxControls2.default,
  Messages: _MailboxMessages2.default,
  Attachments: _MailboxAttachments2.default,
  ReadMessage: _MailboxReadMessage2.default,
  ReadInfo: _MailboxReadInfo2.default
};