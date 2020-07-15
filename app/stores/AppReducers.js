import { combineReducers } from "redux";
import { Types as AuthTypes } from './auth/Actions';
import { AuthReducer } from './auth/Reducers';
import { ExampleReducer } from './example/Reducers';
import QBapp from './quick-blox/reducers/app';
import QBauth from './quick-blox/reducers/auth';
import QBchat from './quick-blox/reducers/chat';
import QBcontent from './quick-blox/reducers/content';
import QBdevice from './quick-blox/reducers/device';
import QBdialogs from './quick-blox/reducers/dialogs';
import QBinfo from './quick-blox/reducers/info';
import QBmessages from './quick-blox/reducers/messages';
import QBusers from './quick-blox/reducers/users';
import QBwebrtc from './quick-blox/reducers/webrtc';

/**
 * Combianando todos los reducer de la aplicación
 */
const appReducer = combineReducers({
  /**
   * Register your reducers here.
   * @see https://redux.js.org/api-reference/combinereducers
   */

  //auth && miscellanic
  auth: AuthReducer,
  example: ExampleReducer,

  // QUICKBLOX
  QBapp,
  QBauth,
  QBchat,
  QBdialogs,
  QBmessages,
  QBcontent,
  QBinfo,
  QBusers,
  QBwebrtc,
  QBdevice,
});

const rootReducer = (state, action) => {
  if(action.type === AuthTypes.LOGOUT_DESTROY_DATA){
    state = undefined
  }
  return(appReducer(state,action))
}

export default rootReducer;
