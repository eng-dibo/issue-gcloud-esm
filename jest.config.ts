import type { Config } from "@jest/types";

let config: Config.InitialOptions = {
  rootDir: __dirname,
  preset: "ts-jest/presets/default-esm",
  transform: {
    "\\.ts$": ["ts-jest", { useESM: true }],
  },
  extensionsToTreatAsEsm: [".ts"],
  testEnvironment: "node",
  injectGlobals: false,
  onlyChanged: false,
  collectCoverage: false,
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["ts", "js"],
};

export default config;
