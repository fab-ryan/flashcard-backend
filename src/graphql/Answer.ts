import { objectType } from "nexus"
export const Answer = objectType({
    name: "Answer",
    definition(t) {
        t.nonNull.id("id");
        t.nonNull.string("answer");
        t.nonNull.field("question", {
            type: "Question",

            async resolve(parent, args, context, info) {
                return context.prisma.answer.findUnique({
                    where: { id!: parent.id }
                }).questionBy();
            }
        })
    }

})