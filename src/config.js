"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const { NETWORK } = require(path.join(basePath, "constants/network.js"));

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Forgboiz Collection";
const description = "Forgboiz NFT price is 0.55 sols";
const baseUri = "";
// const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  name: "FROGBOIZ NFT 1",
  symbol: "NOC",
  image: "0.png",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://frogboiz.com",
  description: "FROGBOIZ NFT price: 0.55 sol",
  account : "GaF8ExVMoG5Yd7onxFZe9JpKAL7S24msVD8VXTdw9FN7",
  properties: {
    "files": [
      {
        "uri": "0.png",
        "type": "image/png"
      }
    ],
    "category": "image",
    "creators": [
        {
            "address": "GaF8ExVMoG5Yd7onxFZe9JpKAL7S24msVD8VXTdw9FN7",
            "share": 100
        }
    ]
  },
};

let png_metadata = { 
  "name": "FROGBOIZ NFT 1",
  "image": "0.png",
  "symbol": "",
  "properties": {
    "files": [
      {
        "uri": "0.png",
        "type": "image/png"
      }
    ],
    "category": "image",
    "creators": [
        {
            "address": "GaF8ExVMoG5Yd7onxFZe9JpKAL7S24msVD8VXTdw9FN7",
            "share": 100
        }
    ]
  },
  "description": "FROGBOIZ NFT price: 0.55 sol",
  "seller_fee_basis_points": 5,
  "external_url": "google.com",
  "collection": {
    "name": "Dreamland Test",
    "family": "Dreamland"
  }
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "Base" },
      { name: "Body" },
      { name: "Eyes" }
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
};
