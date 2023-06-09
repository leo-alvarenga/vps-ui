import React, { createContext, useCallback, useContext, useState } from 'react';
import { defaultValue } from './util';
import { NotificationDataType, PageInfo, i18n } from '../../types';
import { I18nextProvider, useTranslation } from 'react-i18next';
import Router, { RouterProps } from './Router';

export interface AppContextProps extends RouterProps {
  name: string;
  i18n: i18n
}

export * from './util';

export const AppContext = createContext(defaultValue);

export function useApp() {
  return useContext(AppContext);
}

function AppProvider({ i18n, name, routes }: AppContextProps) {
  const { t } = useTranslation();
  const [value, setValue] = useState(defaultValue);

  const setCurrentPage = useCallback(
    (currentPage: PageInfo) => {
      if (currentPage.title.length > 1) {
        document.title = `${name} - ${t(currentPage.title)}`;
      }

      setValue({
        ...value,
        data: {
          ...value.data,
          currentPage,
        },
      });
    },
    [name, t, value],
  );

  const setNotifications = useCallback(
    (notifications: NotificationDataType[]) => {
      setValue({
        ...value,
        data: {
          ...value.data,
          notifications,
        },
      });
    },
    [value],
  );

  return (
    <AppContext.Provider
      value={{
        data: value.data,
        setCurrentPage,
        setNotifications,
      }}
    >
      <I18nextProvider i18n={i18n}>
        <Router routes={routes} />
      </I18nextProvider>
    </AppContext.Provider>
  );
}

export default AppProvider;
