"use client";
import { persistor, store } from "@redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
        {/* <SessionProvider>{children}</SessionProvider> */}
      </PersistGate>
    </Provider>
  );
}
