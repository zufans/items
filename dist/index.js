'use strict';

var React = require('react');
var Nav = require('react-bootstrap/Nav');
require('bootstrap/dist/css/bootstrap.min.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Nav__default = /*#__PURE__*/_interopDefaultLegacy(Nav);

function Items({
  itemsProps
}) {
  return /*#__PURE__*/React__default["default"].createElement(Nav__default["default"], null, itemsProps.map((v, i) => {
    return /*#__PURE__*/React__default["default"].createElement(Nav__default["default"].Link, {
      key: i,
      style: {
        padding: 5
      },
      href: v.href,
      onClick: v.onClick
    }, v.lable);
  }));
}

module.exports = Items;
