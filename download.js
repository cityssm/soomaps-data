import * as fs from "fs";
import { request } from "@esri/arcgis-rest-request";
import { parse as jsonToCSV } from "json2csv";
import { layers } from "./layers.js";
const RESULT_RECORD_COUNT = 1000;
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
            const geometry = feature.geometry;
            const attributes = feature.attributes;
            for (const key of Object.keys(geometry)) {
                attributes["geometry." + key] = geometry[key];
            }
            layerData.push(attributes);
        }
        if (data.features.length < RESULT_RECORD_COUNT) {
            break;
        }
        currentOffset += RESULT_RECORD_COUNT;
    }
    if (layerData.length > 0) {
        try {
            fs.writeFileSync("./data/" + layer.layerName + ".json", JSON.stringify(layerData, null, "  "));
        }
        catch (error) {
            console.error(error);
        }
        const csvData = jsonToCSV(layerData);
        try {
            fs.writeFileSync("./data/" + layer.layerName + ".csv", csvData);
        }
        catch (error) {
            console.error(error);
        }
    }
}
try {
    fs.writeFileSync("./lastUpdated.json", JSON.stringify({ lastUpdated: Date.now() }));
}
catch (error) {
    console.error(error);
}
