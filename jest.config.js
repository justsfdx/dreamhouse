const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');

const setupFilesAfterEnv = jestConfig.setupFilesAfterEnv || [];
setupFilesAfterEnv.push('<rootDir>/jest-sa11y-setup.js');

module.exports = {
    ...jestConfig,
    moduleNameMapper: {
        '^@salesforce/client/formFactor$':
            '<rootDir>/force-app/test/jest-mocks/@salesforce/client/formFactor',
        '^lightning/navigation$':
            '<rootDir>/force-app/test/jest-mocks/lightning/navigation',
        '^lightning/platformShowToastEvent$':
            '<rootDir>/force-app/test/jest-mocks/lightning/platformShowToastEvent',
        '^lightning/messageService$':
            '<rootDir>/force-app/test/jest-mocks/lightning/messageService',
        '^lightning/mobileCapabilities$':
            '<rootDir>/force-app/test/jest-mocks/lightning/mobileCapabilities'
    },
    setupFilesAfterEnv
};
