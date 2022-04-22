import * as fs from "fs";
import { request } from "@esri/arcgis-rest-request";
import { parse as jsonToCSV } from "json2csv";
import { layers } from "./layers.js";
const RESULT_RECORD_COUNT = 2000;
const MAX_LAYER_QUERY_COUNT = 100;
for (const layer of layers) {
    const layerData = [];
    let currentOffset = 0;
    console.log("Processing " + layer.layerName + "...");
    while (currentOffset <= RESULT_RECORD_COUNT * MAX_LAYER_QUERY_COUNT) {
        const data = await request(layer.layerURL + "/query", {
            params: {
                f: "json",
                where: "1=1",
                resultRecordCount: RESULT_RECORD_COUNT,
                resultOffset: currentOffset,
                outFields: layer.fields.join(",")
            }
        });
        const features = data.features;
        for (const feature of features) {
            layerData.push(feature.attributes);
        }
        if (data.features.length < RESULT_RECORD_COUNT) {
            break;
        }
        currentOffset += RESULT_RECORD_COUNT;
    }
    try {
        fs.writeFileSync("./" + layer.layerName + ".json", JSON.stringify(layerData));
    }
    catch (error) {
        console.error(error);
    }
    const csvData = jsonToCSV(layerData);
    try {
        fs.writeFileSync("./" + layer.layerName + ".csv", csvData);
    }
    catch (error) {
        console.error(error);
    }
}
