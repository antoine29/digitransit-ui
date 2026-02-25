import ttConfig from './timetableConfigUtils';

const HSLTimetables = ttConfig.HSL;
const CONFIG = 'lpz';
const API_URL = process.env.API_URL || 'https://dev-api.digitransit.fi';
const OTP_URL = process.env.OTP_URL || `${API_URL}/routing/v2/hsl/`;
const MAP_URL = process.env.MAP_URL || 'https://dev-cdn.digitransit.fi';
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

export default {
  CONFIG,

  URL: {
    OTP: OTP_URL,
    STOP_MAP: {
      default: `${POI_MAP_PREFIX}/fi/stops,stations/`,
      sv: `${POI_MAP_PREFIX}/sv/stops,stations/`,
    },
    FONT: 'https://www.hsl.fi/fonts/784131/6C5FB8083F348CFBB.css',
    FONTCOUNTER: 'https://cloud.typography.com/6364294/7432412/css/fonts.css',
    ROOTLINK: rootLink,
    BANNERS: BANNER_URL,
    HSL_FI_SUGGESTIONS: SUGGESTION_URL,
    EMBEDDED_SEARCH_GENERATION: '/reittiopas-elementti',
    EMISSIONS_INFO: {
      en: 'https://www.hsl.fi/en/journey_planner_co2',
    },
  },

  indexPath: 'etusivu',

  title: 'lpz-tp',

  availableLanguages: ['es', 'en'],
  availableTickets: {
  },
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
    [25.5345, 60.2592],
    [25.3881, 60.1693],
    [25.3559, 60.103],
    [25.3293, 59.9371],
    [24.2831, 59.78402],
    [24.2721, 59.95501],
    [24.2899, 60.00895],
    [24.3087, 60.01947],
    [24.1994, 60.12753],
    [24.1362, 60.1114],
    [24.1305, 60.12847],
    [24.099, 60.1405],
    [24.0179, 60.1512],
    [24.0049, 60.1901],
    [24.0445, 60.1918],
    [24.0373, 60.2036],
    [24.0796, 60.2298],
    [24.1652, 60.2428],
    [24.3095, 60.2965],
    [24.3455, 60.2488],
    [24.428, 60.3002],
    [24.5015, 60.2872],
    [24.4888, 60.3306],
    [24.5625, 60.3142],
    [24.5957, 60.3242],
    [24.6264, 60.3597],
    [24.666, 60.3638],
    [24.7436, 60.3441],
    [24.9291, 60.4523],
    [24.974, 60.5253],
    [24.9355, 60.5131],
    [24.8971, 60.562],
    [25.0388, 60.5806],
    [25.1508, 60.5167],
    [25.2242, 60.5016],
    [25.3661, 60.4118],
    [25.3652, 60.3756],
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

  staticMessages: [
  ],
  geoJson: {
    layers: [
    ],
  },

  map: {
    showZoomControl: true,
    showLayerSelector: false,
    showStopMarkerPopupOnMobile: false,
    showScaleBar: true,
    // areBounds is for keeping map and user inside given area
    // HSL region + Lahti
    areaBounds: {
      // corner1: [62, 27],
      // corner2: [59, 22],
      corner1: [-16, -68],
      corner2: [-17, -69]
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
  nearYouModes: [
    'favorite',
    'bus',
  ],
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

  routeNotifications: [
  ],

  replacementBusNotification: {
  },

  embeddedSearch: {
  },

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

