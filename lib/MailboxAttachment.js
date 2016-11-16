'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  name: _react2.default.PropTypes.node,
  size: _react2.default.PropTypes.string,
  img: _react2.default.PropTypes.node,
  icon: _react2.default.PropTypes.string, // font awesome icon name
  onNameClick: _react2.default.PropTypes.func,
  onDownloadClick: _react2.default.PropTypes.func
};

var MailboxAttachment = function MailboxAttachment(_ref) {
  var name = _ref.name,
      size = _ref.size,
      img = _ref.img,
      icon = _ref.icon,
      onNameClick = _ref.onNameClick,
      onDownloadClick = _ref.onDownloadClick;

  var span = void 0;
  var preview = void 0;
  if (img) {
    span = "mailbox-attachment-icon has-img";
    preview = img;
  } else if (icon) {
    span = "mailbox-attachment-icon";
    preview = _react2.default.createElement(_reactFontawesome2.default, { name: icon });
  } else {
    span = "mailbox-attachment-icon";
    preview = _react2.default.createElement(_reactFontawesome2.default, { name: 'file-o' });
  }

  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'span',
      { className: span },
      preview
    ),
    _react2.default.createElement(
      'div',
      { className: 'mailbox-attachment-info' },
      _react2.default.createElement(
        'a',
        { onClick: onNameClick, className: 'mailbox-attachment-name' },
        name
      ),
      _react2.default.createElement(
        'span',
        { className: 'mailbox-attachment-size' },
        size,
        _react2.default.createElement(
          _reactBootstrap.Button,
          { onClick: onDownloadClick, className: 'btn-xs pull-right' },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'cloud-download' })
        )
      )
    )
  );
};

MailboxAttachment.propTypes = propTypes;

exports.default = MailboxAttachment;