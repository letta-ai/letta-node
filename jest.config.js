/** @type {import('jest').Config} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
        "^environments$": "<rootDir>/src/environments.ts",
        "^api$": "<rootDir>/src/api/index.ts",
        "^api/(.*)$": "<rootDir>/src/api/$1"
    },
    modulePaths: [
        "<rootDir>/src"
    ]
};
