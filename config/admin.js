module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '902fd299aac6e04560d9c4861de4d1e2'),
  },
});
