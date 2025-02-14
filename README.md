# EVM Chain Block Subgraph

This subgraph tracks the available block data of all EVM chains supported by The Graph.

## Deploying the Subgraph

The npm scripts can be found in the package.json file. 

### Prepare and build configurations
```
npm run prepare-build {network}
```

### Deploying to all available networks
```
npm run deploy-all-studio
```

### Deploying to a single network
```
npm run deploy-single-studio {network}
```
Post deploying, update `networks.{network}.nextVersion` in scripts/utils/networks.ts file.
