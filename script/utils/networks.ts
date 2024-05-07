
interface NetworkConfig {
    studioEndpoint: string,
    nextVersion: string
}
export interface NetworkConfigs {
    [networkId: string]: NetworkConfig;
}

/*
 * IMPORTANT: Increment all nextVersion after deployment please
 */
export const networks: NetworkConfigs = {
    "mainnet": {
        studioEndpoint: "ethereum-blocks",
        nextVersion: "v0.0.2"
    },
    "arbitrum-one": {
        studioEndpoint: "arbitrum-one-blocks",
        nextVersion: "v0.0.1"
    },
    "arbitrum-sepolia": {
        studioEndpoint: "arbitrum-sepolia-blocks",
        nextVersion: "v0.0.1"
    },
    "arweave-mainnet": {
        studioEndpoint: "arweave-mainnet-blocks",
        nextVersion: "v0.0.1"
    },
    "aurora": {
        studioEndpoint: "aurora-blocks",
        nextVersion: "v0.0.1"
    },
    "aurora-testnet": {
        studioEndpoint: "aurora-testnet-blocks",
        nextVersion: "v0.0.1"
    },
    "avalanche": {
        studioEndpoint: "avalanche-blocks",
        nextVersion: "v0.0.1"
    },
    "base-sepolia": {
        studioEndpoint: "base-sepolia-blocks",
        nextVersion: "v0.0.1"
    },
    "boba": {
        studioEndpoint: "boba-blocks",
        nextVersion: "v0.0.1"
    },
    "bsc": {
        studioEndpoint: "bsc-blocks",
        nextVersion: "v0.0.1"
    },
    "celo": {
        studioEndpoint: "celo-blocks",
        nextVersion: "v0.0.1"
    },
    "celo-alfajores": {
        studioEndpoint: "celo-alfajores-blocks",
        nextVersion: "v0.0.1"
    },
    "chapel": {
        studioEndpoint: "chapel-blocks",
        nextVersion: "v0.0.1"
    },
    "clover": {
        studioEndpoint: "clover-blocks",
        nextVersion: "v0.0.1"
    },
    "fantom": {
        studioEndpoint: "fantom-blocks",
        nextVersion: "v0.0.1"
    },
    "fantom-testnet": {
        studioEndpoint: "fantom-testnet-blocks",
        nextVersion: "v0.0.1"
    },
    "fuji": {
        studioEndpoint: "fuji-blocks",
        nextVersion: "v0.0.1"
    },
    "fuse": {
        studioEndpoint: "fuse-blocks",
        nextVersion: "v0.0.1"
    },
    "gnosis": {
        studioEndpoint: "gnosis-blocks",
        nextVersion: "v0.0.1"
    },
    "harmony": {
        studioEndpoint: "harmony-blocks",
        nextVersion: "v0.0.1"
    },
    "matic": {
        studioEndpoint: "matic-blocks",
        nextVersion: "v0.0.1"
    },
    "mbase": {
        studioEndpoint: "mbase-blocks",
        nextVersion: "v0.0.1"
    },
    "moonbeam": {
        studioEndpoint: "moonbeam-blocks",
        nextVersion: "v0.0.1"
    },
    "moonriver": {
        studioEndpoint: "moonriver-blocks",
        nextVersion: "v0.0.1"
    },
    "optimism": {
        studioEndpoint: "optimism-blocks",
        nextVersion: "v0.0.1"
    },
    "optimism-sepolia": {
        studioEndpoint: "optimism-sepolia-blocks",
        nextVersion: "v0.0.1"
    },
    "osmo-test-4": {
        studioEndpoint: "osmo-test-4-blocks",
        nextVersion: "v0.0.1"
    },
    "osmosis-1": {
        studioEndpoint: "osmosis-1-blocks",
        nextVersion: "v0.0.1"
    },
    "poa-core": {
        studioEndpoint: "poa-core-blocks",
        nextVersion: "v0.0.1"
    },
    "polygon-zkevm-testnet": {
        studioEndpoint: "polygon-zkevm-testnet-blocks",
        nextVersion: "v0.0.1"
    },
    "polygon-zkevm": {
        studioEndpoint: "polygon-zkevm-blocks",
        nextVersion: "v0.0.1"
    },
    "polygon-amoy": {
        studioEndpoint: "polygon-amoy-blocks",
        nextVersion: "v0.0.1"
    },
    "sepolia": {
        studioEndpoint: "sepolia-blocks",
        nextVersion: "v0.0.1"
    },
    "zksync-era-sepolia": {
        studioEndpoint: "zksync-era-sepolia-blocks",
        nextVersion: "v0.0.1"
    },
    "zksync-era-testnet": {
        studioEndpoint: "zksync-era-testnet-blocks",
        nextVersion: "v0.0.1"
    },
    "zksync-era": {
        studioEndpoint: "zksync-era-blocks",
        nextVersion: "v0.0.1"
    },
    "astar-zkevm-sepolia": {
        studioEndpoint: "astar-zkevm-sepolia-blocks",
        nextVersion: "v0.0.1"
    },
    "astar-zkevm-mainnet": {
        studioEndpoint: "astar-zkevm-mainnet-blocks",
        nextVersion: "v0.0.1"
    },
    "zkyoto-testnet": {
        studioEndpoint: "zkyoto-testnet-blocks",
        nextVersion: "v0.0.1"
    },
    "holesky": {
        studioEndpoint: "holesky-blocks",
        nextVersion: "v0.0.1"
    },
    "linea": {
        studioEndpoint: "linea-blocks",
        nextVersion: "v0.0.1"
    },
    "linea-goerli": {
        studioEndpoint: "linea-goerli-blocks",
        nextVersion: "v0.0.1"
    },
    "base": {
        studioEndpoint: "base-blocks",
        nextVersion: "v0.0.1"
    },
    "scroll": {
        studioEndpoint: "scroll-blocks",
        nextVersion: "v0.0.1"
    },
    "scroll-sepolia": {
        studioEndpoint: "scroll-sepolia-blocks",
        nextVersion: "v0.0.1"
    },
    "blast-mainnet": {
        studioEndpoint: "blast-mainnet-blocks",
        nextVersion: "v0.0.1"
    },
    "blast-testnet": {
        studioEndpoint: "blast-testnet-blocks",
        nextVersion: "v0.0.1"
    },
    "mumbai": {
        studioEndpoint: "mumbai-blocks",
        nextVersion: "v0.0.1"
    },
    "sei-testnet": {
        studioEndpoint: "sei-testnet-blocks",
        nextVersion: "v0.0.1"
    },
    "etherlink-testnet": {
        studioEndpoint: "etherlink-testnet-blocks",
        nextVersion: "v0.0.1"
    },
    "xlayer-mainnet": {
        studioEndpoint: "xlayer-mainnet-blocks",
        nextVersion: "v0.0.1"
    },
    "xlayer-sepolia": {
        studioEndpoint: "xlayer-sepolia-blocks",
        nextVersion: "v0.0.1"
    },
}

export default networks