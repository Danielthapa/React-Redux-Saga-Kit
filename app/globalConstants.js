import config from './config';
import LocalDb from './localStorage';
import { CreateUUID } from './utils/helper';

const BASE_API = config.BASE_API;
const RESERVATION_API = `${BASE_API}/reservation`;
const AUTH_API = `${BASE_API}/auth`;
const CONTACT_API = `${BASE_API}/contact`;
const PMS_API = `${BASE_API}/pms`;

const APIEndPoints = {
  ALL_COUNTRIES: `https://restcountries.com/v3.1`,
  NEPAL_LOCATION: `https://nepallocation.com.np/api/v1`,
  //  uesr_account
  DUMMY_API: `${BASE_API}/dummy`,
  FETCH_EMPLOYEE: `${BASE_API}/employee`,

  auth: {
    USER_LOGIN: `${AUTH_API}/login`,
    USER_LOGOUT: `${AUTH_API}/sign_out`,
    REFRESH_TOKEN: `${AUTH_API}/refresh_token`,
  },

  reservation: {
    GET_AVAILABLE_ROOMS: `${RESERVATION_API}/rooms`,
    GET_RESERVATION_TYPE: `${RESERVATION_API}/types`,
    GET_RESERVATION_SOURCE: `${RESERVATION_API}/sources`,
    GET_RESERVATION_PLAN: `${RESERVATION_API}/plans`,
    GET_ALL_RESERVATION_STATUS: `${RESERVATION_API}/status`,
    CREATE_NEW_RESERVATION: `${RESERVATION_API}`,
    FETCH_ALL_RESERVATIONS: `${RESERVATION_API}`,
    FETCH_RESERVATION_DETAIL: `${RESERVATION_API}`,
    UPDATE_RESERVATION_DETAIL: `${RESERVATION_API}`,
    UPDATE_RESERVATION_STATUS: (reservationId) =>
      `${RESERVATION_API}/${reservationId}/status`,
    FETCH_ROOM_RACK: `${RESERVATION_API}/rooms/rack`,
    GET_ALL_ROOMS_FOR_RANGE: `${RESERVATION_API}/rooms`,
  },

  pms: {
    GET_ROOM_GROUP: `${PMS_API}/room/group`,
  },

  contact: {
    GET_CONTACT_TYPES: `${CONTACT_API}/type`,
    CREATE_NEW_CONTACT: `${CONTACT_API}`,
    FETCH_ALL_CONTACTS: `${CONTACT_API}`,
    UPDATE_CONTACT: `${CONTACT_API}`,
  },
};

export const APIHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Debug-Id': CreateUUID().replace(/-/g, ''),
};
export const APIHeadersForMultipartFormData = {
  Accept: 'application/json',
  'Debug-Id': CreateUUID().replace(/-/g, ''),
};
export const APIHeadersTypeJSON = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Debug-Id': CreateUUID().replace(/-/g, ''),
};
export const APIHeadersWithAuth = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Debug-Id': CreateUUID().replace(/-/g, ''),
  Authorization: `Bearer ${LocalDb.getAccessToken()}`,
});

export const ROOM_AVAILABILITY = {
  AVAILABLE: 'available',
  OCCUPIED: 'occupied',
  OUT_OF_ORDER: 'outOfOrder',
};

export const ROOM_STATE = {
  READY: 'ready',
  CLEAN: 'clean',
  DIRTY: 'dirty',
  CLEANING: 'cleaning',
  INSPECTING: 'inspecting',
  INSPECTION_REQUIRED: 'inspectionRequired',
  UNDER_MAINTENANCE: 'underMaintenance',
  MAINTENANCE_REQUIRED: 'maintenanceRequired',
};

export const RESERVATION_STATUS = {
  'IN HOUSE': 'IN HOUSE',
  CONFIRMED: 'CONFIRMED',
  'CHECKED OUT': 'CHECKED OUT',
  PENDING: 'PENDING',
  OVERSTAY: 'OVERSTAY',
  CANCELLED: 'CANCELLED',
  'COURTESY HOLD': 'COURTESY HOLD',
  'NO SHOW': 'NO SHOW',
  'CHECK OUT': 'CHECK OUT',
};

export const ROOM_TRAFFIC = {
  HOUSEKEEPING: {
    DIRTY: 1,
    CLEANING: 2,
    DONE: 3,
  },
  MAINTENANCE: {
    MAINTENANCE_REQUIRED: 1,
    UNDER_MAINTENANCE: 2,
    DONE: 3,
  },
  INSPECTION: {
    INSPECTION_REQUIRED: 1,
    UNDER_INSPECTION: 2,
    DONE: 3,
  },
};

export default APIEndPoints;
