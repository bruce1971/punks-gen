const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Foreverpunk";
const description = "3D models of paying tribute to the 10,000 original Cryptopunks.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    // single: 5072,
    // single: {"0": {
    //   traits: [
    //     // 'Top Hat',
    //     'Earring',
    //     // 'Buck Teeth',
    //     // 'Classic Shades',
    //     // 'Mole',
    //     // 'Cigarette',
    //     // 'Big Beard',
    //   ],
    //   skin: 'Mid',
    //   gender: 'Male'
    // }},
    growEditionSizeTo: 300,
    layersOrder: [
      { name: "Skin Tone-Male" },
      { name: "Skin Tone-Female" },
      { name: "Neck-Male" },
      { name: "Neck-Female" },
      { name: "Blemish-Male" },
      { name: "Blemish-Female" },
      { name: "Ears-Male" },
      { name: "Ears-Female" },
      { name: "Mouth-Male" },
      { name: "Mouth-Female" },
      { name: "Eyes-Female" },
      { name: "Eyes-Male" },
      { name: "Hair-Male" },
      { name: "Hair-Female" },
      { name: "Hat-Male" },
      { name: "Hat-Female" },
      { name: "Beard-Male" },
      { name: "Glasses-Female" },
      { name: "Glasses-Male" },
      { name: "Mouth Prop-Male" },
      { name: "Mouth Prop-Female" },
      { name: "Nose-Male" },
      { name: "Nose-Female" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
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
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
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
  gif,
  preview_gif,
};
