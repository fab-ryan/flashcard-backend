import { objectType } from "nexus"
export const Answer = objectType({
    name: "Answer",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.string("answer");
        t.nonNull.field("question", {
            type: "Question",

            async resolve(parent, args, context, info): Promise<any> {
                return context.prisma.answer.findUnique({
                    where: { id: parent.id }
                });
            }
        })
    }

})