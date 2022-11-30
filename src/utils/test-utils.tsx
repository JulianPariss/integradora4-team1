import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { makeStore } from "store/store";
import { Provider } from "react-redux";
import { TrackingProvider } from "features/tracking/tracking.context";
import { LanguageProvider } from "features/language";
import { BrowserRouter } from "react-router-dom";

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  const store = makeStore();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <TrackingProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </TrackingProvider>
      </Provider>
    </BrowserRouter>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender };
