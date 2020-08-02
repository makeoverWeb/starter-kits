import { bindActionCreators } from 'redux';
import actions from './actions';

export const mapStateToProps = (store: {}) => {
  return {
    ...store
  };
};

export const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch)
});
