import { gql } from 'apollo-server-express';

const resolvers = {
    Query: {
        feeds: async () => {
            try {
                const feeds = await db('social_feeds').select('*');
                return feeds;
            } catch (err) {
                throw new Error(err.message);
            }
        }
    }
};

export { resolvers };
