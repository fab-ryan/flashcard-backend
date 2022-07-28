import { ApolloServer } from "apollo-server";
import * as schema from "./schema/index";
import { context } from "./schema/context"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';

export const server = new ApolloServer({
    schema: schema.schema,
    context,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],

    cache: new InMemoryLRUCache({
        // ~100MiB
        maxSize: Math.pow(2, 20) * 100,
        // 5 minutes (in milliseconds)
        ttl: 300_000,
    }),

});
