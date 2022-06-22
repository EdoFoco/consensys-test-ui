import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  coveragePathIgnorePatterns: [
    "index.ts",
    ".type.ts",
    ".mock.ts",
    ".query.ts",
    ".mutation.ts",
  ],
  coverageReporters: ["html", "text", "text-summary", "cobertura"],
};

export default config;
