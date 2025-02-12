
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
    // "mainnet": {
    //     studioEndpoint: "ethereum-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },
    // "arbitrum-one": {
    //     studioEndpoint: "arbitrum-blocks", //No match arbitrum-one-blocks
    //     nextVersion: "v0.1.0"
    // },
    // "avalanche": {
    //     studioEndpoint: "avalanche-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },
    // "boba": {
    //     studioEndpoint: "boba-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },
    // "bsc": {
    //     studioEndpoint: "bsc-blocks", //No match bnb-smart-chain-blocks
    //     nextVersion: "v0.1.0"
    // },
    // "celo": {
    //     studioEndpoint: "celo-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },
    // "fantom": {
    //     studioEndpoint: "fantom-blocks", //No Match fantom-opera-blocks 
    //     nextVersion: "v0.1.0"
    // },
    // "fuse": {
    //     studioEndpoint: "fuse-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },
    // "gnosis": {
    //     studioEndpoint: "gnosis-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },
    // "harmony": {
    //     studioEndpoint: "harmony-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },
    // "matic": {
    //     studioEndpoint: "polygon-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },
    // "moonbeam": {
    //     studioEndpoint: "moonbeam-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },
    // "moonriver": {
    //     studioEndpoint: "moonriver-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },
    // "optimism": {
    //     studioEndpoint: "optimism-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },
    // "linea": {
    //     studioEndpoint: "linea-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },
    // "polygon-zkevm": {
    //     studioEndpoint: "polygon-zkevm-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },
    // "base": {
    //     studioEndpoint: "base-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },
    // "scroll": {
    //     studioEndpoint: "scroll-blocks", //Match
    //     nextVersion: "v0.1.0"
    // },

    //DEPRECATE ALL ABOVE
    "base-sepolia": {
        studioEndpoint: "base-sepolia-blocks",
        nextVersion: "v0.1.0"
    },
    "arbitrum-sepolia": {
        studioEndpoint: "arbitrum-sepolia-blocks",
        nextVersion: "v0.1.0"
    },
    // "arweave-mainnet": {
    //     studioEndpoint: "arweave-mainnet-blocks",
    //     nextVersion: "v0.1.0"
    // },
    "aurora": {
        studioEndpoint: "aurora-blocks",
        nextVersion: "v0.1.0"
    },
    "aurora-testnet": {
        studioEndpoint: "aurora-testnet-blocks",
        nextVersion: "v0.1.0"
    },
   
    "celo-alfajores": {
        studioEndpoint: "celo-alfajores-blocks",
        nextVersion: "v0.1.0"
    },
    "chapel": {
        studioEndpoint: "bnb-bruno-blocks",
        nextVersion: "v0.1.0"
    },
    // "clover": {
    //     studioEndpoint: "clover-blocks",
    //     nextVersion: "v0.1.0"
    // },
   
    "fantom-testnet": {
        studioEndpoint: "fantom-testnet-blocks",
        nextVersion: "v0.1.0"
    },
    "fuji": {
        studioEndpoint: "avalanche-fuji-blocks",
        nextVersion: "v0.1.0"
    },
   
    "mbase": {
        studioEndpoint: "moonbase-alpha-blocks",
        nextVersion: "v0.1.0"
    },

    "optimism-sepolia": {
        studioEndpoint: "optimism-sepolia-blocks",
        nextVersion: "v0.1.0"
    },
    "osmo-test-4": {
        studioEndpoint: "osmo-test-4-blocks",
        nextVersion: "v0.1.0"
    },
    "osmosis-1": {
        studioEndpoint: "osmosis-1-blocks",
        nextVersion: "v0.1.0"
    },
    "poa-core": {
        studioEndpoint: "poa-core-blocks",
        nextVersion: "v0.1.0"
    },
    "polygon-zkevm-testnet": {
        studioEndpoint: "polygon-zkevm-testnet-blocks",
        nextVersion: "v0.1.0"
    },
  
    "polygon-amoy": {
        studioEndpoint: "polygon-amoy-blocks",
        nextVersion: "v0.1.0"
    },
    "sepolia": {
        studioEndpoint: "sepolia-blocks",
        nextVersion: "v0.1.0"
    },
    "zksync-era-sepolia": {
        studioEndpoint: "zksync-era-sepolia-blocks",
        nextVersion: "v0.1.0"
    },
    "zksync-era-testnet": {
        studioEndpoint: "zksync-era-testnet-blocks",
        nextVersion: "v0.1.0"
    },
    "zksync-era": {
        studioEndpoint: "zksync-era-blocks",
        nextVersion: "v0.1.0"
    },
    "astar-zkevm-sepolia": {
        studioEndpoint: "astar-zkevm-sepolia-blocks",
        nextVersion: "v0.1.0"
    },
    "astar-zkevm-mainnet": {
        studioEndpoint: "astar-zkevm-blocks",
        nextVersion: "v0.1.0"
    },
    "zkyoto-testnet": {
        studioEndpoint: "zkyoto-testnet-blocks",
        nextVersion: "v0.1.0"
    },
    "holesky": {
        studioEndpoint: "holesky-blocks",
        nextVersion: "v0.1.0"
    },
 
    "linea-goerli": {
        studioEndpoint: "linea-goerli-blocks",
        nextVersion: "v0.1.0"
    },
 
    "scroll-sepolia": {
        studioEndpoint: "scroll-sepolia-blocks",
        nextVersion: "v0.1.0"
    },
    "blast-mainnet": {
        studioEndpoint: "blast-blocks",
        nextVersion: "v0.1.0"
    },
    "blast-testnet": {
        studioEndpoint: "blast-testnet-blocks",
        nextVersion: "v0.1.0"
    },
    // "mumbai": {
    //     studioEndpoint: "mumbai-blocks",
    //     nextVersion: "v0.1.0"
    // },
    "sei-testnet": {
        studioEndpoint: "sei-testnet-blocks",
        nextVersion: "v0.1.0"
    },
    "etherlink-testnet": {
        studioEndpoint: "etherlink-testnet-blocks",
        nextVersion: "v0.1.0"
    },
    "xlayer-mainnet": {
        studioEndpoint: "xlayer-blocks",
        nextVersion: "v0.1.0"
    },
    "xlayer-sepolia": {
        studioEndpoint: "xlayer-sepolia-blocks",
        nextVersion: "v0.1.0"
    },
    "rootstock": {
        studioEndpoint: "rootstock-blocks",
        nextVersion: "v0.1.0"
    },
    "abstract": {
        studioEndpoint: "blocks-abstract",
        nextVersion: "v0.1.0"
    },
    "abstract-testnet": {
        studioEndpoint: "blocks-abstract-testnet",
        nextVersion: "v0.2.0"
    },
    "sonic": {
        studioEndpoint: "blocks-sonic",
        nextVersion: "v0.2.0"
    },
    "lumia": {
        studioEndpoint: "lumia-blocks",
        nextVersion: "v0.2.0"
    },
    "corn": {
        studioEndpoint: "corn-blocks",
        nextVersion: "v0.2.0"
    },
    "berachain": {
        studioEndpoint: "berachain-blocks",
        nextVersion: "v0.2.0"
    },
    "unichain": {
        studioEndpoint: "unichain-blocks",
        nextVersion: "v0.2.0"
    }
}

export default networks