import React from 'react';
import Header from './components/Header/Header';
import { request } from './requests';
import styles from './assets/css/style.module.scss';
import { connect } from 'react-redux';
import { mapStateToProps } from './exports';

class App extends React.Component<{}, {}> {
  public state = {};

  // public componentDidMount() {
  //   /**
  //    * Получение данных по организации
  //    */
  //   request('organization', 'GET')
  //     .then(res => {
  //       this.setState({});
  //     })
  //     .catch(err => console.log(err));
  //   /**
  //    * Получение данных по модулю Unoto
  //    */
  //   request('модульUnoto/1.0', 'GET')
  //     .then(res => {
  //       this.setState({});
  //     })
  //     .catch(err => console.log(err));
  // }

  public render() {
    return (
      <div className={styles.App}>
        <Header />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
