import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function Items({
  itemsProps
}) {
  return /*#__PURE__*/React.createElement(Nav, null, itemsProps.map((v, i) => {
    return /*#__PURE__*/React.createElement(Nav.Link, {
      key: i,
      style: {
        padding: 5
      },
      href: v.href,
      onClick: v.onClick
    }, v.lable);
  }));
}

export { Items as default };
