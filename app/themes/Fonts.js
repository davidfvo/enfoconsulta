const size = {
  //Icons
  mediumIcon: 30,
  bigIcon: 40,
  iconResult: 50,
  alertIcon: 70,

  //Fonts
  small: 12,
  medium: 14,
  regular: 16,
  input: 18,
  xLarge: 26,
  large: 20,
  h3: 30,
  h2: 34,
  h1: 38,
};

const weight = {
  bold: 'bold',
  regular: 'regular',
};

const style = {
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  xLarge: {
    fontSize: size.xLarge,
  },
  large: {
    fontSize: size.large,
  },
  regular: {
    fontSize: size.regular,
  },
  small: {
    fontSize: size.small,
  },
  regularBold: {
    fontSize: size.regular,
    fontWeight: weight.bold,
  },
  medium: {
    fontSize: size.medium,
  },
  bold: {
    fontWeight: weight.bold,
  },
};

export default {
  size,
  style,
  weight,
};
