module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: [
      'default',
      [
        'jest-html-reporters',
        {
          pageTitle: "Supertest API Tests",
          publicPath: './test-reports',
          filename: 'report.html',
          expand: true,
          includeConsoleLog: true,
        },
      ],
    ],
  };