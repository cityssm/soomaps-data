export const layers = [
    {
        layerName: "addresses",
        layerURL: "https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/0",
        fields: ["CIVICNUMBER", "STREETNAME", "POSTALCODE", "MUNICIPALITY", "LATITUDE", "LONGITUDE"]
    },
    {
        layerName: "streets",
        layerURL: "https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/1",
        fields: ["FULLNAME", "STREETPREFIX", "STREETNAME", "STREETTYPE", "STREETSUFFIX", "LEFTFROMADDRESS", "LEFTTOADDRESS", "RIGHTFROMADDRESS", "RIGHTTOADDRESS"]
    }
];
