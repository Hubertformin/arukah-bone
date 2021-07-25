module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: "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",
      },
      settings: {
        defaultFrom: 'support@arukahglobalfoundation.org',
        defaultReplyTo: 'support@arukahglobalfoundation.org',
        // testAddress: 'juliasedefdjian@strapi.io',
      },
    },
    // ...
  });