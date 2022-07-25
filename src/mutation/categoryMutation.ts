import { nonNull, extendType, stringArg } from "nexus";
export const CategoryMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.field("createCategory", {
            type: "Category",
            args: {
                categoryName: nonNull(stringArg()),
                categoryDescription: nonNull(stringArg()),
            },
            async resolve(parent, args, context, info) {
                const { categoryName, categoryDescription } = args;
                const userId = context.userId;
                if (!userId) {
                    throw new Error("Not Authorized");
                }
                const newCategory = await context.prisma.category.create({
                    data: {
                        categoryName,
                        categoryDescription,
                        createdBy: { connect: { id: userId } }
                    },
                })
                return newCategory;
            }
        })
    }
})