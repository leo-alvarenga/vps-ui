import { AppContextPayload } from '../../types';

export const defaultValue: AppContextPayload = {
  data: {
    currentPage: {
      title: '',
      path: '',
    },
    notifications: [],
  },
  setCurrentPage: () => null,
  setNotifications: () => null,
};
