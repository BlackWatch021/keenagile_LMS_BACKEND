module.exports = [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            // "https://s3.amazonaws.com/your-bucket-name/",
            // "https://your-region.amazonaws.com/your-bucket-name/",
            // "yourBucketName.s3.yourRegion.amazonaws.com",
            `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            // "https://s3.amazonaws.com/your-bucket-name/",
            // "yourBucketName.s3.yourRegion.amazonaws.com",
            `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
          ],
          "frame-src": [
            "'self'",
            "https://www.youtube.com/",
            "https://player.vimeo.com/", // Add Vimeo or other platforms as needed
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];

// yarn add @strapi/provider-upload-aws-s3
// yarn add strapi-provider-upload-aws-s3
