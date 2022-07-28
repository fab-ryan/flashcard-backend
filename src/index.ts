import { ApolloServer } from "apollo-server";
import * as schema from "./schema/index";
import { context } from "./schema/context"
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";


export const server = new ApolloServer({
    schema: schema.schema,
    context,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
});
