import { extendType } from "nexus"
export const AuthQuery = extendType({
    type: "Query",
    definition(m) {
        m.nonNull.list.nonNull.field("allUsers", {
            type: "User",
            resolve: async (parent, args, context, info) => {
                const userId = context.userId;
                if (!userId) {
                    throw new Error("Not Authorized");
                }
                return context.prisma.user.findMany({})
            }
        })
    }
})