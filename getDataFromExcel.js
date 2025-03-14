const xlsx = require("xlsx");

const getData = (workbook, sheetName) => {
  const worksheet = workbook.Sheets[sheetName];
  const json = xlsx.utils.sheet_to_json(worksheet);
  return json;
};

const getDataFromExcel = (filePath) => {
  const workbook = xlsx.readFile(filePath);

  let entries = [];
  workbook.SheetNames.forEach((sheetName) => {
    const tabData = getData(workbook, sheetName);
    entries = entries.concat(tabData);
  });
  return entries;
};

module.exports = getDataFromExcel;
