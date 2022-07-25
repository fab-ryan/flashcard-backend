import { extendType, intArg } from "nexus"
export const AnswerQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("allAnswer", {
            type: "Answer",
            args: {
                skip: intArg({ default: 0 }),
                take: intArg({ default: 10 })
            },
            resolve(parent, args, context, info) {
                return context.prisma.answer.findMany({

                    skip: args?.skip as number | undefined,
                    take: args?.take as number | undefined
                })
            }
        })
    }
})