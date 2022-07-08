export const layers = [
    {
        layerName: "municipalWards",
        layerURL: "https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/17",
        fields: ["WARDNUMBER", "SHAPE_Area"]
    },
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
        layerName: "buildingFootprints",
        layerURL: "https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/18",
        fields: ["BUILDINGNAME", "BUILDINGTYPE", "SHAPE_Length", "SHAPE_Area", "OBC_BUILD_CLASS", "SUB_BUILDING_NAME", "COMMENTS"]
    },
    {
        layerName: "streets",
        layerURL: "https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/1",
        fields: ["FULLNAME", "STREETPREFIX", "STREETNAME", "STREETTYPE", "STREETSUFFIX", "LEFTFROMADDRESS", "LEFTTOADDRESS", "RIGHTFROMADDRESS", "RIGHTTOADDRESS", "MUNICIPALITY", "TRAFFIC_FLOW"]
    },
    {
        layerName: "collectionAddresses",
        layerURL: "https://services1.arcgis.com/nlLTq2Zj0Jwv1qft/ArcGIS/rest/services/Collection_Addresses_Feb_18_2022/FeatureServer/0",
        fields: ["CIVICNUMBER", "UNIT", "STREETNAME", "POSTALCODE", "MUNICIPALITY", "COLLECTIONDAY", "OPERATOR", "ROUTENUMBER", "LEAF_YARD_WASTE_COLLECTION", "REFUSE_DAY", "RECYCLING_DAY", "LATITUDE", "LONGITUDE"]
    }
];
