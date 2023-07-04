import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiProvider } from "./wagmi-provider";
import { WalletConnectTest } from "./wallet-connect-test";

window.global ||= window;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiProvider>
      <WalletConnectTest />
    </WagmiProvider>
  </React.StrictMode>
);
