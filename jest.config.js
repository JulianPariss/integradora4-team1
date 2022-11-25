module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'tsx', 'ts'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
  testEnvironment: 'jsdom'
};
