import { PropsWithChildren, useMemo } from "react";
import { Connector, WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { WalletConnectConnector } from "@wagmi/connectors/walletConnect";
import { haqqTestedge2, Chain } from "@wagmi/chains";

const walletConnectProjectId = "61ca1b756844d9e5cf618bb10a07c30e";

export function WagmiProvider({ children }: PropsWithChildren) {
  const configuredChains: Chain[] = [haqqTestedge2];

  const { publicClient, webSocketPublicClient, chains } = useMemo(() => {
    return configureChains(configuredChains, [publicProvider()]);
  }, []);

  const connectors = useMemo<Connector[]>(() => {
    return [
      new WalletConnectConnector({
        chains,
        options: {
          projectId: walletConnectProjectId,
          showQrModal: true,
        },
      }),
    ];
  }, []);

  const config = useMemo(() => {
    return createConfig({
      publicClient,
      webSocketPublicClient,
      connectors,
      autoConnect: true,
    });
  }, [publicClient, webSocketPublicClient, connectors]);

  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}
