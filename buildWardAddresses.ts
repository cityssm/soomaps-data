import * as fs from "fs";

import Point from "@arcgis/core/geometry/Point.js";
import Polygon from "@arcgis/core/geometry/Polygon.js";

import { parse as jsonToCSV } from "json2csv";


interface MunicipalWard {
  WARDNUMBER: number;
  "geometry.rings": number[][][];
  polygon?: Polygon;
}

interface Address {
  CIVICNUMBER: number;
  STREETNAME: string;
  "geometry.x": number;
  "geometry.y": number;
  point?: Point;
}


// load wards

console.log("Loading municipalWards.json");

const municipalWards: MunicipalWard[] = JSON.parse(fs.readFileSync("data/municipalWards.json"));
const wardAddresses: { [wardNumber: string]: Address[] } = {};

for (const municipalWard of municipalWards) {
  municipalWard.polygon = new Polygon(municipalWard["geometry.rings"]);
  wardAddresses[municipalWard.WARDNUMBER.toString()] = [];
}

// load addresses

console.log("Loading addresses.json");

const addresses: Address[] = JSON.parse(fs.readFileSync("data/addresses.json"));

// loop through addresses

for (const address of addresses) {

  address.point = new Point(address["geometry.x"], address["geometry.y"]);

  let wardFound = false;

  for (const municipalWard of municipalWards) {

    if (municipalWard.polygon.contains(address.point)) {
      delete address.point;
      wardAddresses[municipalWard.WARDNUMBER.toString()].push(address);
      wardFound = true;
      break;
    }
  }

  if (!wardFound) {
    console.warn("No ward found: " + address.CIVICNUMBER + " " + address.STREETNAME);
  }
}

// write records

for (const [wardNumber, wardNumberAddresses] of Object.entries(wardAddresses)) {

  wardNumberAddresses.sort((addressA, addressB) => {

    if (addressA.STREETNAME === addressB.STREETNAME) {
       return addressA.CIVICNUMBER - addressB.CIVICNUMBER;
    }

    if (addressA.STREETNAME > addressB.STREETNAME) {
       return 1;
    }

    return -1;
  });

  try {
    fs.writeFileSync("./data/addresses-ward" + wardNumber + ".json", JSON.stringify(wardNumberAddresses, null, "  "));
  } catch (error) {
    console.error(error);
  }

  const csvData = jsonToCSV(wardNumberAddresses);

  try {
    fs.writeFileSync("./data/addresses-ward" + wardNumber + ".csv", csvData);
  } catch (error) {
    console.error(error);
  }
}
