const env = process.env.NODE_ENV || 'development';

const config = {
  'development': {
    apiUrl: 'https://listing.tekoapis.com/api',
    pageSize: 20,
  },
  'production': {
    apiUrl: 'https://listing.tekoapis.com/api',
    pageSize: 20,
  }
}

export default config[env];
