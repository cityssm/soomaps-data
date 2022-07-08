import * as fs from "fs";

import { parse as jsonToCSV } from "json2csv";


interface Street {
  FULLNAME: string;
  STREETPREFIX: string;
  STREETNAME: string;
  STREETTYPE: string;
  STREETSUFFIX: string;
  LEFTFROMADDRESS: number;
  LEFTTOADDRESS: number;
  RIGHTFROMADDRESS: number;
  RIGHTTOADDRESS: number;
  MUNICIPALITY: string;
};


// load streets

console.log("Loading streets.json");

const streets: Street[] = JSON.parse(fs.readFileSync("data/streets.json"));

const distinctStreetsMap = new Map<string, Street>();

for (const street of streets) {

  if (street.MUNICIPALITY !== "Sault Ste. Marie") {
    continue;
  }

  const mapKey = street.MUNICIPALITY + "::" + street.FULLNAME;

  if (distinctStreetsMap.has(mapKey)) {

    const distinctStreet = distinctStreetsMap.get(mapKey);

    distinctStreet.LEFTFROMADDRESS = Math.min(distinctStreet.LEFTFROMADDRESS, street.LEFTFROMADDRESS);
    distinctStreet.LEFTTOADDRESS = Math.max(distinctStreet.LEFTTOADDRESS, street.LEFTTOADDRESS);

    distinctStreet.RIGHTFROMADDRESS = Math.min(distinctStreet.RIGHTFROMADDRESS, street.RIGHTFROMADDRESS);
    distinctStreet.RIGHTTOADDRESS = Math.max(distinctStreet.RIGHTTOADDRESS, street.RIGHTTOADDRESS);

  } else {
    distinctStreetsMap.set(mapKey, {
      FULLNAME: street.FULLNAME,
      STREETPREFIX: street.STREETPREFIX,
      STREETNAME: street.STREETNAME,
      STREETTYPE: street.STREETTYPE,
      STREETSUFFIX: street.STREETSUFFIX,
      LEFTFROMADDRESS: street.LEFTFROMADDRESS,
      LEFTTOADDRESS: street.LEFTTOADDRESS,
      RIGHTFROMADDRESS: street.RIGHTFROMADDRESS,
      RIGHTTOADDRESS: street.RIGHTTOADDRESS,
      MUNICIPALITY: street.MUNICIPALITY
    });
  }
}

// write records

const distinctStreets: Street[] = Array.from(distinctStreetsMap.values());

distinctStreets.sort((streetA, streetB) => {

  if (streetA.FULLNAME > streetB.FULLNAME) {
     return 1;
  }

  return -1;
});

try {
  fs.writeFileSync("./data/streets-distinct.json", JSON.stringify(distinctStreets, null, "  "));
} catch (error) {
  console.error(error);
}

  const csvData = jsonToCSV(distinctStreets);

  try {
    fs.writeFileSync("./data/streets-distinct.csv", csvData);
  } catch (error) {
    console.error(error);
  }
