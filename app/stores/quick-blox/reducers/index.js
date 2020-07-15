import { combineReducers } from 'redux'

import app from './app'
import auth from './auth'
import chat from './chat'
import info from './info'
import users from './users'
import webrtc from './webrtc'
import content from './content'
import dialogs from './dialogs'
import messages from './messages'
import device from './device'

export default combineReducers({
  app,
  auth,
  chat,
  info,
  users,
  webrtc,
  content,
  dialogs,
  messages,
  device,
})