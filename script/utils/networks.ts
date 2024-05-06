
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
    "cosmoshub-4": {
        studioEndpoint: "cosmoshub-4-blocks",
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
    "near-mainnet": {
        studioEndpoint: "near-mainnet-blocks",
        nextVersion: "v0.0.1"
    },
    "near-testnet": {
        studioEndpoint: "near-testnet-blocks",
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
    "sepolia": {
        studioEndpoint: "sepolia-blocks",
        nextVersion: "v0.0.1"
    },
    "theta-testnet-001": {
        studioEndpoint: "theta-testnet-001-blocks",
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
}

export default networks