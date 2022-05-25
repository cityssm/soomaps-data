# SooMaps Data

Easy to use extracts of Sault Ste. Marie GIS data
from [SooMaps.com](https://www.soomaps.com/).

Made possible with Esri's JavaScript APIs.

**Refreshed daily.**

## Disclaimer (from SooMaps.com)

These web pages are provided as a public resource of general information by
"The Corporation of the City of Sault Ste. Marie (the "City")".
The City makes no warranties, representations or guarantees
either express or implied, including but not limited to
the accuracy or completeness of any of the information provided.

For official mapping see the Engineering and Planning Department.

**The data served through this interface is not for commercial use,
this includes mapservices that the interface consumes.**

## Raw Downloads

| Layer                                                                                                                                       | CSV                                                     | JSON                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------- |
| [Addresses](https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/0)                                    | [addresses.csv](data/addresses.csv)                     | [addresses.json](data/addresses.json)                     |
| [Bus Stops](https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/3)                                    | [busStops.csv](data/busStops.csv)                       | [busStops.json](data/busStops.json)                       |
| [Heritage Sites](https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/9)                               | [heritageSites.csv](data/heritageSites.csv)             | [heritageSites.json](data/heritageSites.json)             |
| [Municipal Wards](https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/17)                             | [municipalWards.csv](data/municipalWards.csv)           | [municipalWards.json](data/municipalWards.json)           |
| [Parcels](https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/19)                                     | [parcels.csv](data/parcels.csv)                         | [parcels.json](data/parcels.json)                         |
| [Streets](https://enterprise.ssmic.com/server/rest/services/SooMaps/SooMaps_GeneralLayers/MapServer/1)                                      | [streets.csv](data/streets.csv)                         | [streets.json](data/streets.json)                         |

## Calculated Data

Using the
[ArcGIS API for JavaScript](https://www.npmjs.com/package/@arcgis/core).

### Addresses by Ward

Check out the
[Sault Ste. Marie Ward Finder](https://cityssm.github.io/ward-finder/),
powered by the address data below.

| Ward       | CSV                                             | JSON                                              |
| ---------- | ----------------------------------------------- | ------------------------------------------------- |
| **Ward 1** | [addresses-ward1.csv](data/addresses-ward1.csv) | [addresses-ward1.json](data/addresses-ward1.json) |
| **Ward 2** | [addresses-ward2.csv](data/addresses-ward2.csv) | [addresses-ward2.json](data/addresses-ward2.json) |
| **Ward 3** | [addresses-ward3.csv](data/addresses-ward3.csv) | [addresses-ward3.json](data/addresses-ward3.json) |
| **Ward 4** | [addresses-ward4.csv](data/addresses-ward4.csv) | [addresses-ward4.json](data/addresses-ward4.json) |
| **Ward 5** | [addresses-ward5.csv](data/addresses-ward5.csv) | [addresses-ward5.json](data/addresses-ward5.json) |
