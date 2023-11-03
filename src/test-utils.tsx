import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { AppProviders } from './providers/mui-mode';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProviders>
        {children}
    </AppProviders>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };
