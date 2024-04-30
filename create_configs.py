import json
import os

# List of networks
networks = [
    "mainnet", "arbitrum-one", "arbitrum-sepolia", "arweave-mainnet",
    "aurora", "aurora-testnet", "avalanche", "base-sepolia",
    "boba", "bsc", "celo", "celo-alfajores",
    "chapel", "clover", "cosmoshub-4", "fantom",
    "fantom-testnet", "fuji", "fuse", "gnosis",
    "harmony", "matic", "mbase", "moonbeam",
    "moonriver", "near-mainnet", "near-testnet", "optimism",
    "optimism-sepolia", "osmo-test-4", "osmosis-1", "poa-core",
    "polygon-zkevm-testnet", "sepolia", "theta-testnet-001", 
    "zksync-era-sepolia", "zksync-era-testnet"
]

# Directory to store the JSON files
directory = 'networks'
os.makedirs(directory, exist_ok=True)

# Generate a JSON file for each network
for network in networks:
    file_path = os.path.join(directory, f"{network}.json")
    with open(file_path, 'w') as file:
        json.dump({
            "network": network,
            "contract_address": "0x0ddff327ddf7fe838e3e63d02001ef23ad1ede8e"
        }, file, indent=4)
    print(f"Created {file_path}")
