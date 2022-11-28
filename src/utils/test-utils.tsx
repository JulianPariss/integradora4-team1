import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { store } from "store/store";
import { Provider } from "react-redux";
import { TrackingProvider } from "features/tracking/tracking.context";
import { LanguageProvider } from "features/language";

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Provider store={store}>
    <TrackingProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </TrackingProvider>
  </Provider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender };
