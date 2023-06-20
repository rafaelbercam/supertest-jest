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
          inlineSource: true,
          collectCoverage: true,
          coverageReporters: ["html", "json"],
          customInfos: [
            {title: 'App Test', value: `<a href="https://serverest.dev">Serverest</a>`},
            {title: 'Ambiente', value: `${process.env.ENVIRONMENT}`},
            {title: 'Criado por:', value: `Rafael Berçam`},
          ]
        },
      ],
    ],
  };