module.exports = {
  name: 'frontend-feature-authentication',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/frontend/feature-authentication',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
