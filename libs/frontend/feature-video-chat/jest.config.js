module.exports = {
  name: 'frontend-feature-video-chat',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/frontend/feature-video-chat',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
