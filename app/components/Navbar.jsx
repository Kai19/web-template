import React, { PropTypes } from 'react';

import MenuIcon from '../icons/Menu';
import styles from '../styles/navbar.scss';

export default function Navbar({
  title = 'Alex Frazer',
  toggleSidebar,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.control}>
        <MenuIcon
          onClick={toggleSidebar}
          className={styles.menu}
        />
      </div>
      <div className={styles.content}>{title}</div>
      <div className={styles.control} />
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  toggleSidebar: PropTypes.func.isRequired,
};
