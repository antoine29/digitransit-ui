# TP UI

it uses digitransit FE repo, through my forked repo (this fork is not part of the parent lpz-tp-26 repo)

- pull the repo within this folder

otp reverse geocoding request:
curl 'http://localhost:3100/v1/search?digitransit-subscription-key=c65af0cd2d0a401a9599894970a2b29c&text=calle%20murillo&boundary.polygon=-68.14771%20-16.41733%2C-68.17053%20-16.41877%2C-68.17744%20-16.44441%2C-68.19906%20-16.44757%2C-68.20536%20-16.43289%2C-68.2402%20-16.44383%2C-68.2486%20-16.43922%2C-68.25641%20-16.44642%2C-68.28073%20-16.43778%2C-68.29274%20-16.4516%2C-68.33598%20-16.41071%2C-68.3531%20-16.42482%2C-68.32247%20-16.46284%2C-68.33448%20-16.47464%2C-68.31556%20-16.49048%2C-68.29875%20-16.50919%2C-68.30686%20-16.51437%2C-68.27683%20-16.55813%2C-68.27102%20-16.56988%2C-68.2613%20-16.58694%2C-68.33792%20-16.65235%2C-68.29638%20-16.68362%2C-68.24512%20-16.63374%2C-68.1979%20-16.6539%2C-68.20087%20-16.68155%2C-68.20276%20-16.69396%2C-68.16904%20-16.69473%2C-68.16256%20-16.6769%2C-68.14421%20-16.66088%2C-68.1256%20-16.62857%2C-68.12776%20-16.59754%2C-68.1086%20-16.5797%2C-68.09322%20-16.58306%2C-68.01903%20-16.71256%2C-67.98477%20-16.69318%2C-68.07623%20-16.56419%2C-68.00986%20-16.55617%2C-68.02821%20-16.49824%2C-68.0568%20-16.48116%2C-68.10213%20-16.44675%2C-68.14771%20-16.41733&lang=en&sources=oa%2Cosm%2Cnlsfi&layers=venue%2Caddress%2Cstreet%2Cstation' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'Referer: http://localhost:8082/' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36' \
  -H 'Accept: application/json' \
  -H 'sec-ch-ua: "Brave";v="147", "Not.A/Brand";v="8", "Chromium";v="147"' \
  -H 'sec-ch-ua-mobile: ?0'


curl 'https://api.digitransit.fi/geocoding/v1/search?digitransit-subscription-key=954b08e64f1f465ba4c03d0d88cf69e2&text=airport&boundary.polygon=25.5345%2060.2592%2C25.3881%2060.1693%2C25.3559%2060.103%2C25.3293%2059.9371%2C24.2831%2059.78402%2C24.2721%2059.95501%2C24.2899%2060.00895%2C24.3087%2060.01947%2C24.1994%2060.12753%2C24.1362%2060.1114%2C24.1305%2060.12847%2C24.099%2060.1405%2C24.0179%2060.1512%2C24.0049%2060.1901%2C24.0445%2060.1918%2C24.0373%2060.2036%2C24.0796%2060.2298%2C24.1652%2060.2428%2C24.3095%2060.2965%2C24.3455%2060.2488%2C24.428%2060.3002%2C24.5015%2060.2872%2C24.4888%2060.3306%2C24.5625%2060.3142%2C24.5957%2060.3242%2C24.6264%2060.3597%2C24.666%2060.3638%2C24.7436%2060.3441%2C24.9291%2060.4523%2C24.974%2060.5253%2C24.9355%2060.5131%2C24.8971%2060.562%2C25.0388%2060.5806%2C25.1508%2060.5167%2C25.2242%2060.5016%2C25.3661%2060.4118%2C25.3652%2060.3756&lang=en&sources=oa%2Cosm%2Cnlsfi%2CgtfsHSL%2CgtfsHSLlautta&layers=station%2Cvenue%2Caddress%2Cstreet' \
  -H 'accept: application/json' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.hsl.fi' \
  -H 'pragma: no-cache' \
  -H 'priority: u=1, i' \
  -H 'referer: https://www.hsl.fi/' \
  -H 'sec-ch-ua: "Brave";v="147", "Not.A/Brand";v="8", "Chromium";v="147"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'sec-gpc: 1' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36'

{
  "geocoding": {
    "version": "0.2",
    "attribution": "http://pelias-api:8080/attribution",
    "query": {
      "text": "airport",
      "size": 10,
      "lang": "sv",
      "layers": [
        "station",
        "venue",
        "address",
        "street"
      ],
      "sources": [
        "openaddresses",
        "openstreetmap",
        "nlsfi",
        "gtfshsl",
        "gtfshsllautta"
      ],
      "private": false,
      "boundary.polygon": [
        {
          "lon": 25.5345,
          "lat": 60.2592
        },
        {
          "lon": 25.3881,
          "lat": 60.1693
        },
        {
          "lon": 25.3559,
          "lat": 60.103
        },
        {
          "lon": 25.3293,
          "lat": 59.9371
        },
        {
          "lon": 24.2831,
          "lat": 59.78402
        },
        {
          "lon": 24.2721,
          "lat": 59.95501
        },
        {
          "lon": 24.2899,
          "lat": 60.00895
        },
        {
          "lon": 24.3087,
          "lat": 60.01947
        },
        {
          "lon": 24.1994,
          "lat": 60.12753
        },
        {
          "lon": 24.1362,
          "lat": 60.1114
        },
        {
          "lon": 24.1305,
          "lat": 60.12847
        },
        {
          "lon": 24.099,
          "lat": 60.1405
        },
        {
          "lon": 24.0179,
          "lat": 60.1512
        },
        {
          "lon": 24.0049,
          "lat": 60.1901
        },
        {
          "lon": 24.0445,
          "lat": 60.1918
        },
        {
          "lon": 24.0373,
          "lat": 60.2036
        },
        {
          "lon": 24.0796,
          "lat": 60.2298
        },
        {
          "lon": 24.1652,
          "lat": 60.2428
        },
        {
          "lon": 24.3095,
          "lat": 60.2965
        },
        {
          "lon": 24.3455,
          "lat": 60.2488
        },
        {
          "lon": 24.428,
          "lat": 60.3002
        },
        {
          "lon": 24.5015,
          "lat": 60.2872
        },
        {
          "lon": 24.4888,
          "lat": 60.3306
        },
        {
          "lon": 24.5625,
          "lat": 60.3142
        },
        {
          "lon": 24.5957,
          "lat": 60.3242
        },
        {
          "lon": 24.6264,
          "lat": 60.3597
        },
        {
          "lon": 24.666,
          "lat": 60.3638
        },
        {
          "lon": 24.7436,
          "lat": 60.3441
        },
        {
          "lon": 24.9291,
          "lat": 60.4523
        },
        {
          "lon": 24.974,
          "lat": 60.5253
        },
        {
          "lon": 24.9355,
          "lat": 60.5131
        },
        {
          "lon": 24.8971,
          "lat": 60.562
        },
        {
          "lon": 25.0388,
          "lat": 60.5806
        },
        {
          "lon": 25.1508,
          "lat": 60.5167
        },
        {
          "lon": 25.2242,
          "lat": 60.5016
        },
        {
          "lon": 25.3661,
          "lat": 60.4118
        },
        {
          "lon": 25.3652,
          "lat": 60.3756
        }
      ],
      "boundary.country": [
        "FIN"
      ],
      "querySize": 100,
      "parsed_text": {
        "neighbourhood": "airport",
        "name": "airport"
      }
    },
    "warnings": [
      "Invalid Parameter: digitransit-subscription-key"
    ],
    "engine": {
      "name": "Pelias",
      "author": "Mapzen",
      "version": "1.0"
    },
    "timestamp": 1777988168749
  },
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          24.966793,
          60.316841
        ]
      },
      "properties": {
        "id": "GTFS:HSL:4000215",
        "gid": "gtfshsl:station:GTFS:HSL:4000215",
        "layer": "station",
        "source": "gtfshsl",
        "source_id": "GTFS:HSL:4000215",
        "name": "Airport",
        "postalcode": "01530",
        "postalcode_gid": "whosonfirst:postalcode:421473205",
        "confidence": 1,
        "accuracy": "centroid",
        "region": "Nyland",
        "region_gid": "whosonfirst:region:85683067",
        "localadmin": "Vanda",
        "localadmin_gid": "whosonfirst:localadmin:907199651",
        "locality": "Vantaa",
        "locality_gid": "whosonfirst:locality:101748419",
        "neighbourhood": "Lentokenttä",
        "neighbourhood_gid": "whosonfirst:neighbourhood:1108729559",
        "label": "Airport, Lentokenttä, Vanda",
        "addendum": {
          "GTFS": {
            "modes": [
              "BUS",
              "BUS-EXPRESS"
            ]
          }
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          24.968296,
          60.318933
        ]
      },
      "properties": {
        "id": "node:26608365",
        "gid": "openstreetmap:venue:node:26608365",
        "layer": "venue",
        "source": "openstreetmap",
        "source_id": "node:26608365",
        "name": "Helsingfors-Vanda flygplats",
        "housenumber": "1",
        "street": "Flygstationsvägen",
        "postalcode": "01530",
        "postalcode_gid": "whosonfirst:postalcode:421473205",
        "confidence": 1,
        "accuracy": "point",
        "region": "Nyland",
        "region_gid": "whosonfirst:region:85683067",
        "localadmin": "Vanda",
        "localadmin_gid": "whosonfirst:localadmin:907199651",
        "locality": "Vantaa",
        "locality_gid": "whosonfirst:locality:101748419",
        "neighbourhood": "Lentokenttä",
        "neighbourhood_gid": "whosonfirst:neighbourhood:1108729559",
        "label": "Helsingfors-Vanda flygplats (Airport), Flygstationsvägen 1, Vanda"
      }
    }
  ],
  "bbox": [
    24.949513,
    60.252111,
    25.043731,
    60.318933
  ]
}

curl 'https://api.digitransit.fi/geocoding/v1/search?digitransit-subscription-key=954b08e64f1f465ba4c03d0d88cf69e2&text=airport&dedupestops=1&lang=en&sources=gtfsHSL%2CgtfsHSLlautta&layers=stop%2Cstation' \
  -H 'accept: application/json' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.hsl.fi' \
  -H 'pragma: no-cache' \
  -H 'priority: u=1, i' \
  -H 'referer: https://www.hsl.fi/' \
  -H 'sec-ch-ua: "Brave";v="147", "Not.A/Brand";v="8", "Chromium";v="147"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'sec-gpc: 1' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36'


