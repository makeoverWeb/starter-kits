import React from 'react';
import styles from './style.module.scss';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../exports';

function Header(props: any) {
  return (
    <input
      className={styles.main}
      value={props.yourReducer.name}
      onChange={e => props.actions.changeName(e.target.value)}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
