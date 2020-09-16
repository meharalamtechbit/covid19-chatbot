import { complianceService } from '../../services';
import actionType from './actionType';

const setDataIsLoading = () => (dispatch) => {
  dispatch({ type: actionType.IS_LOADING, data: true });
};

export default {
  setDataIsLoading,
};
