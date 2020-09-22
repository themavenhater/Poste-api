module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('LOCAL_DATABASE_URI'),
      },
      options: {
        ssl: false,
      },
    },
  },
});