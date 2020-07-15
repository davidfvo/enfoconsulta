import {create} from 'apisauce';
import Config from 'react-native-config';
import ResponseCode from './ResponseCode';

/**
 * This is a service that connects to a API.
 */
const BaseApi = create ({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_BUS_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    apikey: Config.API_KEY_VALUE,
  },
  timeout: parseInt (Config.TIMEOUT, 10),
});

/**
 * Transformando el response para poner los errores generales
 *
 * @param response
 */
function transformResponse (response) {
  console.log (response);
  if (response.ok) {
    return;
  }
  if (ResponseCode[response.problem]) {
    response.data = {
      problem: ResponseCode[response.problem],
    };
    return;
  }
  response.data = {
    problem: ResponseCode.CONNECTION_ERROR,
  };
}

// Para probar, impirmir todos los request y response que se llamen
BaseApi.addRequestTransform (request => console.log (request));

// Transformando el response para poner los errores generales
BaseApi.addResponseTransform (response => transformResponse (response));

export {BaseApi};
