import {BaseApi} from './BaseApi';

const loginUrl = 'SecurityService/Security';
const getUserUrl = 'AuditoriaMedicaService/API/v1/ObtenerAuditor';

/**
 * login request
 *
 * @param request = {
            "username" : "guty56",
            "password" : "Humano100",
            "target" : "EXTERNAL"
        };
 * @returns {Promise<ApiResponse<any> | never>} {
 *
 * }
 */
const loginService = request =>
  BaseApi.post (loginUrl, request).then (response => response.data);

const getUserService = request =>
  BaseApi.get (getUserUrl, request).then (response => response.data);

export default {
  loginService,
  getUserService,
};
