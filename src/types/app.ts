export interface PageInfo {
  title: string;
  path: string;
}

export interface NotificationDataType {
  title: string;
  icon?: string;
  body?: string;
  exclusiveTo?: string;
  recurseFrom?: string;
  alwaysShow?: boolean;
  redirect?: {
    to: string;
    label: string;
  };
}


export interface AppValues {
  currentPage: PageInfo;
  notifications: NotificationDataType[];
}

export interface AppContextPayload {
  data: AppValues;
  setCurrentPage: (current: PageInfo) => void;
  setNotifications: (notifications: NotificationDataType[]) => void;
}

export type { i18n } from 'i18next';
