const sanityClient = require("@sanity/client");
export const client = sanityClient({
  projectId: "okqfq309",
  dataset: "production",
  //   token: 'sanity-auth-token', // or leave commented out to be anonymous user
  useCdn: true, // `false` if you want to ensure fresh data
});
