"use client";
import { persistor, store } from "@redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import NextAuthSessionProvider from "@providers/sessionProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthSessionProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
    </NextAuthSessionProvider>
  );
}
