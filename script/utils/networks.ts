
interface NetworkConfig {
    studioEndpoint: string,
    nextVersion:string
}
export interface NetworkConfigs {
[networkId: string]: NetworkConfig;
}

/*
 * IMPORTANT: Increment all nextVersion after deployment please
 */
export const networks : NetworkConfigs=  {
    "arbitrum-one": {
        studioEndpoint: "univ3-arbitrum",
        nextVersion:"v0.0.1"
    },
    "mainnet": {
        studioEndpoint: "ethereum-blocks",
        nextVersion:"v0.0.1"
    },
    "avalanche": {
        studioEndpoint: "univ3-avax",
        nextVersion:"v0.0.1"
    },
    "base": {
        studioEndpoint: "univ3-base",
        nextVersion:"v0.0.1"
    },
    "celo": {
        studioEndpoint: "univ3-celo",
        nextVersion:"v0.0.1"
    },
    "matic": {
        studioEndpoint: "univ3-polygon",
        nextVersion:"v0.0.1"
    },
    "optimism": {
        studioEndpoint: "univ3-optimism",
        nextVersion:"v0.0.1"
    },
    "bsc": {
        studioEndpoint: "univ3-bsc",
        nextVersion:"v0.0.1"
    },
} 
    
export default networks