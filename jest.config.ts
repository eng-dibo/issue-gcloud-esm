import type { Config } from "@jest/types";

let config: Config.InitialOptions = {
  rootDir: __dirname,
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  injectGlobals: false,
  onlyChanged: false,
  collectCoverage: false,
  moduleDirectories: ["node_modules", "types"],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "mts",
    "cts",
    "mjs",
    "cjs",
    "js",
    "jsx",
    "json",
    "html",
    "scss",
    "css",
    "node",
  ],
  transform: {
    "^.+\\.m?[tj]sx?$": ["ts-jest", { useESM: true }],
  },
  moduleNameMapper: {},
  modulePathIgnorePatterns: ["dist"],
  extensionsToTreatAsEsm: [".ts"],
};

export default config;
