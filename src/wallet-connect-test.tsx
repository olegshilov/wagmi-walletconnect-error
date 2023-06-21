import { useConnect, useDisconnect, useAccount, useNetwork } from "wagmi";

export function WalletConnectTest() {
  const { disconnectAsync } = useDisconnect();
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { connectAsync, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { chain } = useNetwork();

  return (
    <div>
      <div className="card" style={{ padding: "2rem" }}>
        {isConnected ? (
          <div>
            <button
              className="button"
              onClick={async () => {
                await disconnectAsync();
              }}
            >
              Disconnect
            </button>

            {activeConnector && <div>Connected to {activeConnector.name}</div>}
          </div>
        ) : (
          <div>
            {connectors.map((connector) => {
              return (
                <button
                  className="button"
                  disabled={!connector.ready}
                  key={connector.id}
                  onClick={async () => {
                    await connectAsync({ connector });
                  }}
                >
                  {connector.name}
                  {isLoading &&
                    pendingConnector?.id === connector.id &&
                    " (connecting)"}
                </button>
              );
            })}
          </div>
        )}

        {error && (
          <div
            style={{
              margin: "2rem 0",
              padding: "0.5rem",
              color: "red",
              border: "1px solid red",
            }}
          >
            <b>Error:</b> {error.message}
          </div>
        )}

        <hr />
        <div>
          <b>isConnected:</b> {String(isConnected)}
        </div>
        <div>
          <b>Address:</b> {address}
        </div>
        <div>
          <b>Chain:</b> {chain?.name}
        </div>
      </div>
    </div>
  );
}
