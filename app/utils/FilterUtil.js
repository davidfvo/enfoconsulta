import {containString} from './StringUtil';

const filterList = (queryParam, records, properties) => {
  let query = queryParam;
  if (query === '') {
    return records;
  }
  query = `${query}`;
  const filteredRecords = [];
  if (records && records.length > 0) {
    for (let c = 0; c < records.length; c++) {
      const record = records[c];
      const words = query.toUpperCase ().split (' ');
      for (let c1 = 0; c1 < words.length; c1++) {
        const word = words[c1];
        if (word !== '') {
          let found = false;
          for (let c3 = 0; c3 < properties.length; c3++) {
            const property = properties[c3];
            const value = `${record[property]}`;
            if (containString (value, word)) {
              found = true;
              break;
            }
          }
          if (found) {
            filteredRecords.push (record);
            break;
          }
        }
      }
    }
  }
  return filteredRecords;
};

export default {
  filterList,
};
