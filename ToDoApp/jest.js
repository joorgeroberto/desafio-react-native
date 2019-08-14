jest.mock('Linking', () => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn().mockImplementation(() => new Promise((resolve) => resolve()))
}));

jest.mock('mobx-react/native', () => require('mobx-react/custom'));
jest.mock('react-native-mixpanel', () => ({
    sharedInstanceWithToken: jest.fn(),
    trackWithProperties: jest.fn()
}));
jest.mock('bugsnag-react-native', () => ({
    Client: jest.fn(),
    Configuration: jest.fn()
}));