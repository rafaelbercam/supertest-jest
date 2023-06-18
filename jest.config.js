module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: [
      'default',
      [
        'jest-html-reporters',
        {
          publicPath: './test-reports',
          filename: 'report.html',
          expand: true,
        },
      ],
    ],
  };