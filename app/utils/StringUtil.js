export function toCamelCase (s) {
  return s.replace (
    /\w\S*/g,
    txt => txt.charAt (0).toUpperCase () + txt.substr (1).toLowerCase ()
  );
}

export function capitalizeFirstLetter (s) {
  return s.charAt (0).toUpperCase () + s.slice (1).toLowerCase ();
}

export function formatNamePicture (f) {
  return f.split ('\\').pop ().split ('/').pop ();
}

export function parseToMoney (number, prefix = 'RD$') {
  const val = Math.round (parseFloat (number) * 100) / 100;
  const parts = val.toString ().split ('.');
  return `${prefix}${parts[0].replace (/\B(?=(\d{3})+(?!\d))/g, ',')}${parts[1] ? `.${parts[1].padEnd (2, '0')}` : '.00'}`;
}

export function parseNumber (number) {
  const val = Math.round (parseFloat (number) * 100) / 100;
  const parts = val.toString ().split ('.');
  return `${parts[0].replace (/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function isEqualString (v1, v2, caseSensitive = false) {
  if (!v1 || !v2) {
    return false;
  }
  let s1 = v1;
  let s2 = v2;
  if (!caseSensitive) {
    s1 = s1.toUpperCase ();
    s2 = s2.toUpperCase ();
  }
  return s1 === s2;
}

export function containString (v1, v2, caseSensitive = false) {
  let s1 = v1;
  let s2 = v2;
  if (!caseSensitive) {
    s1 = s1.toUpperCase ();
    s2 = s2.toUpperCase ();
  }
  return s1.indexOf (s2) !== -1;
}

export function toNumber (s) {
  return parseFloat (s.replace (/,/g, ''));
}

export function formatPhoneNumber (phoneNumberString) {
  const cleanNumber = `${phoneNumberString}`.replace (/\D/g, '');

  const len = cleanNumber.length;
  let result = `(${cleanNumber}`;

  if (len < 3) {
    return result;
  }
  result = `${result.substr (0, 4)}) ${result.substr (4)}`;

  if (len < 6) {
    return result;
  }
  result = `${result.substr (0, 9)}-${result.substr (9)}`;

  return result;
}

export function formatCedula (cedulaString) {
  const cleanNumber = `${cedulaString}`.replace (/\D/g, '');

  const len = cleanNumber.length;
  let result = `${cleanNumber}`;

  if (len < 3) {
    return result;
  }
  result = `${result.substr (0, 3)}-${result.substr (3)}`;

  if (len < 11) {
    return result;
  }
  result = `${result.substr (0, 11)}-${result.substr (11)}`;

  return result;
}

export function nameAndLastName (nameString) {
  const nameArray = nameString.split (' ');
  const nameLength = nameArray.length;

  if (nameLength <= 2) {
    return nameString;
  } else if (nameLength == 3) {
    return `${nameArray[0]} ${nameArray[1]}`;
  } else {
    return `${nameArray[0]} ${nameArray[2]}`;
  }
}

export function isDateFormat (date, dateFormat, symbol) {
  const splitDate = date.split (symbol).length;
  const splitDateFormat = dateFormat.split (symbol).length;

  return splitDate == splitDateFormat;
}

export function firstLastName (names) {
  function isSingle (name) {
    if (name.search (' ') != -1) {
      return name.slice (0, name.search (' '));
    } else {
      return name;
    }
  }
  let firstNames = isSingle (toCamelCase (names.nombre));
  let lastNames = isSingle (toCamelCase (names.apellido));
  return `${firstNames} ${lastNames}`;
}
