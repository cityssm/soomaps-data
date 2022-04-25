interface Layer {
  layerName: string;
  layerURL: string;
  fields: string[];
}

export const layers: Layer[] = [
  {
    layerName: "addresses",
    layerURL: "https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/0",
    fields: ["CIVICNUMBER", "UNIT", "STREETNAME", "POSTALCODE", "MUNICIPALITY", "LATITUDE", "LONGITUDE"]
  },
  {
    layerName: "busStops",
    layerURL: "https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/3",
    fields: ["LABEL", "STOPNUMBER", "SHELTERTYPE", "SERVICEDAYS", "TRANSFERPOINT", "BENCH", "GARBAGECAN", "SHELTER", "LATITUDE", "LONGITUDE"]
  },
  {
    layerName: "heritageSites",
    layerURL: "https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/9",
    fields: ["COMMONNAME", "DESCRIPTIONOFPROPERTY", "TYPEHERITAGEFEATURE", "HERITAGECLASSIFICATION", "HERITAGEDISTRICT", "YROFCONSTRUCTION", "DESIGNATING_ACT"]
  },
  {
    layerName: "parcels",
    layerURL: "https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/19",
    fields: ["ROLLNUMBER", "MPACCIVIC", "MPACSTREETNAME", "SHAPE_Length", "SHAPE_Area"]
  },
  {
    layerName: "streets",
    layerURL: "https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/1",
    fields: ["FULLNAME", "STREETPREFIX", "STREETNAME", "STREETTYPE", "STREETSUFFIX", "LEFTFROMADDRESS", "LEFTTOADDRESS", "RIGHTFROMADDRESS", "RIGHTTOADDRESS"]
  }
];
