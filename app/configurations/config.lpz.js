import ttConfig from './timetableConfigUtils';

const HSLTimetables = ttConfig.HSL;
const CONFIG = 'lpz';
const API_URL = process.env.API_URL || 'https://dev-api.digitransit.fi';
const OTP_URL = process.env.OTP_URL || `${API_URL}/routing/v2/hsl/`;
const MAP_URL = process.env.MAP_URL || 'https://dev-cdn.digitransit.fi';
const MAP_VERSION = process.env.MAP_VERSION || 'v3';
const POI_MAP_PREFIX = `${MAP_URL}/map/v3/hsl`;
const APP_DESCRIPTION = 'Trip Planner application for LPZ city';
const rootLink = process.env.ROOTLINK || 'https://test.hslfi.hsldev.com';
const BANNER_URL = process.env.CONTENT_DOMAIN
  ? `${process.env.CONTENT_DOMAIN}/api/v1/banners?site=JourneyPlanner`
  : process.env.BANNER_URL ||
    'https://cms-test.hslfi.hsldev.com/api/v1/banners?site=JourneyPlanner';
const SUGGESTION_URL = process.env.CONTENT_DOMAIN
  ? `${process.env.CONTENT_DOMAIN}/api/v1/search/suggestions`
  : 'https://content.hsl.fi/api/v1/search/suggestions'; // old url

const IS_DEV =
  process.env.RUN_ENV === 'development' ||
  process.env.NODE_ENV !== 'production';

const linkLabel = {
  en: 'More information',
  es: 'Mas informacion',
};

const {
  // AXE,
  NODE_ENV,
  RUN_ENV,
} = process.env;

const hasAPISubscriptionQueryParameter = true;
const PORT = process.env.PORT || 8080;
const OTP_TIMEOUT = process.env.OTP_TIMEOUT || 12000;

export default {
  PORT,
  // AXE,
  CONFIG,
  NODE_ENV,
  OTPTimeout: OTP_TIMEOUT,

  URL: {
    API_URL,
    ASSET_URL: process.env.ASSET_URL,
    MAP_URL,
    OTP: OTP_URL,
    MAP: {
      default: `${MAP_URL}/map/${MAP_VERSION}/hsl-map/`,
      en: `${MAP_URL}/map/${MAP_VERSION}/hsl-map-en/`,
    },

    STOP_MAP: {
      default: `${POI_MAP_PREFIX}/fi/stops,stations/`,
    },
    // REALTIME_STOP_MAP: {
    //   default: `${POI_MAP_PREFIX}/fi/realtimeStops,stations/`,
    // },
    FONT: 'https://www.hsl.fi/fonts/784131/6C5FB8083F348CFBB.css',
    FONTCOUNTER: 'https://cloud.typography.com/6364294/7432412/css/fonts.css',
    ROOTLINK: rootLink,
    BANNERS: BANNER_URL,
    HSL_FI_SUGGESTIONS: SUGGESTION_URL,
    EMBEDDED_SEARCH_GENERATION: '/reittiopas-elementti',
    // EMISSIONS_INFO: {
    //   en: 'https://www.hsl.fi/en/journey_planner_co2',
    // },
  },

  indexPath: 'etusivu',

  title: 'lpz-tp',

  availableLanguages: ['es', 'en'],
  availableTickets: {},
  defaultLanguage: 'en',
  passLanguageToRootLink: true,

  favicon: './app/configurations/images/hsl/hsl-favicon.png',

  // Navbar logo
  logo: 'hsl/reittiopas-logo.svg',

  useCookiesPrompt: true,
  copyrightText: '© Copyright HSL',

  useRoutingFeedbackPrompt: true,

  feedIds: ['HSL', 'HSLlautta', 'Sipoo'],
  externalFeedIds: ['HSLlautta', '02Taksi'],
  externalFerryByStopCode: true, // no stop code means external ferry

  allowLogin: true,
  allowFavouritesFromLocalstorage: !process.env.OIDC_CLIENT_ID,
  loginAnalyticsEventName: 'user-hsl-id',
  loginAnalyticsKey: 'hsl-id',

  defaultSettings: {
    walkSpeed: 1.28,
    transferPenalty: 180,
  },

  /**
   * These are used for dropdown selection of values to override the default
   * settings. This means that values ought to be relative to the current default.
   * If not, the selection may not make any sense.
   */
  defaultOptions: {
    walkSpeed: [0.69, 0.97, 1.28, 1.67, 2.22],
  },

  suggestWalkMaxDistance: 12000,
  suggestBikeMaxDistance: 100000,

  omitNonPickups: true,

  showDisclaimer: true,

  stopsMinZoom: 14,
  mergeStopsByCode: true,
  useExtendedRouteTypes: true,
  colors: {
    primary: '#0074bf',
    accessiblePrimary: '#0074be',
    hover: '#0062a1',
    'bus-express': '#CA4000',
    'bus-local': '#007ac9',
    speedtram: '#007E79',
  },
  iconModeSet: 'hsl',
  fontWeights: {
    medium: 500,
  },

  sprites: 'assets/svg-sprite.hsl.svg',

  appBarStyle: 'lpz',

  agency: {
    show: false,
  },

  socialMedia: {
    title: 'Reittiopas',
    description: APP_DESCRIPTION,

    image: {
      url: 'img/hsl-social-share.png',
      width: 400,
      height: 400,
    },

    twitter: {
      card: 'summary',
      site: '@HSL_HRT',
    },
  },

  meta: {
    description: APP_DESCRIPTION,
  },

  search: {
    /* identify searches for route numbers/labels: bus | train | metro */
    lineRegexp: /(^[0-9]+[a-z]?$|^[yuleapinkrtdz]$|(^m[12]?b?$))/i,
  },

  useSearchPolygon: true,

  areaPolygon: [
    [-68.14771, -16.41733],
    [-68.17053, -16.41877],
    [-68.17744, -16.44441],
    [-68.19906, -16.44757],
    [-68.20536, -16.43289],
    [-68.2402, -16.44383],
    [-68.2486, -16.43922],
    [-68.25641, -16.44642],
    [-68.28073, -16.43778],
    [-68.29274, -16.4516],
    [-68.33598, -16.41071],
    [-68.3531, -16.42482],
    [-68.32247, -16.46284],
    [-68.33448, -16.47464],
    [-68.31556, -16.49048],
    [-68.29875, -16.50919],
    [-68.30686, -16.51437],
    [-68.27683, -16.55813],
    [-68.27102, -16.56988],
    [-68.2613, -16.58694],
    [-68.33792, -16.65235],
    [-68.29638, -16.68362],
    [-68.24512, -16.63374],
    [-68.1979, -16.6539],
    [-68.20087, -16.68155],
    [-68.20276, -16.69396],
    [-68.16904, -16.69473],
    [-68.16256, -16.6769],
    [-68.14421, -16.66088],
    [-68.1256, -16.62857],
    [-68.12776, -16.59754],
    [-68.1086, -16.5797],
    [-68.09322, -16.58306],
    [-68.01903, -16.71256],
    [-67.98477, -16.69318],
    [-68.07623, -16.56419],
    [-68.00986, -16.55617],
    [-68.02821, -16.49824],
    [-68.0568, -16.48116],
    [-68.10213, -16.44675],
    [-68.14771, -16.41733],
  ],

  menu: {},

  defaultEndpoint: {
    address: 'Rautatieasema, Helsinki',
    lat: 60.1710688,
    lon: 24.9414841,
  },

  redirectReittiopasParams: true,
  queryMaxAgeDays: 14, // to drop too old route request times from entry url

  timetables: {
    HSL: HSLTimetables,
  },

  aboutThisService: {
    en: [
      {
        header: 'About this service',
        paragraphs: [
          'Welcome to the Journey Planner! The Journey Planner shows you how to get to your destination fast and easy by public transport in Helsinki, Espoo, Vantaa, Kauniainen, Kerava, Kirkkonummi, Sipoo, Siuntio and Tuusula. You can also use the planner to find fast walking and cycling routes, and to an extent, for driving directions. The Journey Planner is provided by HSL Helsinki Region Transport and it is based on the Digitransit service platform.',
        ],
      },
    ],

    es: [
      {
        header: 'Sobre este servicio',
        paragraphs: [
          'Bienvenido a LPZ Trip planner! Este Trip planner te muestra como llegar a tu destino rapida, y facilmente usando transporte publico en La Paz (y proximamente en el Alto?). Tambien puedes usar el planner para encontrar rutas rapidas de caminata, ciclismo, e incluso de conduccion. Este Trip planner esta basado en los servicios de la plataforma Digitransit.',
        ],
      },
    ],
  },

  hideExternalOperator: agency => agency.name === 'Helsingin seudun liikenne',
  showTicketInformation: false,
  primaryAgencyName: {
    en: 'HSL',
    es: 'LPZ-TP',
  },

  showTicketSelector: false,

  staticMessages: [],
  geoJson: {
    layers: [],
  },

  map: {
    showZoomControl: true,
    showLayerSelector: false,
    showStopMarkerPopupOnMobile: false,
    showScaleBar: true,
    // areBounds is for keeping map and user inside given area
    areaBounds: {
      // corner1: [-16.42962, -68.29132],
      // corner2: [-16.61814, -68.03067],
      //
      corner1: [-16.586411,-68.238991],
      corner2: [-16.448154,-68.016018],
    },
  },

  showTicketPrice: false,
  useTicketIcons: true,
  showVehiclesOnItineraryPage: false,

  // Notice! Turning on this setting forces the search for car routes (for the CO2 comparison only).
  showCO2InItinerarySummary: false,

  includeCarSuggestions: false,
  includeParkAndRideSuggestions: false,

  showNearYouButtons: true,
  nearYouModes: ['favorite', 'bus'],
  narrowNearYouButtons: true,
  nearYouRoutes: {
    radius: 500,
    bucketSize: 100,
  },
  maxNearYouDistance: {
    favorite: 20000,
    bus: 20000,
    tram: 20000,
    subway: 20000,
    rail: 20000,
    ferry: 20000,
    citybike: 20000,
  },
  prioritizedStopsNearYou: {
    // ferry: ['HSL:1030701'],
  },

  hostnames: [
    // DEV hostnames
    'https://next-dev.digitransit.fi',
    'https://dev.reittiopas.fi',
    // PROD hostnames
    'https://reittiopas.hsl.fi',
  ],
  zones: {
    stops: true,
    itinerary: true,
  },

  showSimilarRoutesOnRouteDropDown: true,
  useRealtimeTravellerCapacities: false,

  stopCard: {
    header: {
      // virtualMonitorBaseUrl,
    },
  },

  routeNotifications: [],

  replacementBusNotification: {},

  embeddedSearch: {},

  startSearchFromUserLocation: true,

  navigationLogo: 'hsl/navigator-logo.svg',
  thumbsUpGraphic: 'hsl/thumbs-up.svg',
  trafficLightGraphic: 'hsl/traffic-light.svg',
  naviGeolocationGraphic: 'hsl/geolocation.svg',
  navigation: true,
  crazyEgg: true,
  // features that should not be deployed to production
  experimental: {
    allowFlexJourneys: false,
    allowDirectFlexJourneys: false,
  },

  showStopStatusMarkers: true,
};
