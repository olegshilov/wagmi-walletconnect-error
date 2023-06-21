import { WagmiProvider } from "./wagmi-provider";
import { WalletConnectTest } from "./wallet-connect-test";

export function App() {
  return (
    <div className="container" style={{ margin: "5rem auto" }}>
      <h1 className="is-center">Wagmi WalletConnect Error</h1>

      <WagmiProvider>
        <WalletConnectTest />
      </WagmiProvider>
    </div>
  );
}
