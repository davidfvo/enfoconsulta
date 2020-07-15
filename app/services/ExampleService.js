import {BaseApi} from './BaseApi';

const getHistoryUrl = 'DoSomething';



/**
 * @param request 
 * @returns {Promise<ApiResponse<any> | never>}
 */
const getHistory = request =>
  BaseApi.post (getHistoryUrl, request).then (response => response.data);

export default {
  getHistory,
};