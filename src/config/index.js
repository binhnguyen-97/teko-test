const env = process.env.NODE_ENV || 'development';

const config = {
  'development': {
    apiUrl: 'https://listing.tekoapis.com/api'
  },
  'production': {
    apiUrl: 'https://listing.tekoapis.com/api'
  }
}

export default config[env];
