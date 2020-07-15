import * as React from 'react';
import { StackActions, CommonActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export const isMountedRef = React.createRef();


function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

const navigate = (name, params) => {
  navigationRef.current?.dispatch(
    CommonActions.navigate(
      name,
      params,
    )
  );
};

const navigateAndReset = (name, params) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name,
          params,
        }
      ],
    })
  );
};

const push = (...args) => {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

const setParams = (name, params) => {
  navigationRef.current?.dispatch({
    ...CommonActions.setParams(...params),
    source: name,
  });
}

const goBack = () => {
  navigationRef.current?.dispatch(CommonActions.goBack());
}

export default {
  navigate,
  navigateAndReset,
  setTopLevelNavigator,
  push,
  setParams,
  goBack,
};
