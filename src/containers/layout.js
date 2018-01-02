import React from 'react';
import styles from './layout.scss';

type Props = {
  children: any
}

const Layout = (props: Props) =>
  <div>{props.children}</div>;

export default Layout;
