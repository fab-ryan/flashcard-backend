import { objectType } from "nexus"

export const Category = objectType({
    name: "Category",
    definition(t) {
        t.nonNull.id("id")
        t.nonNull.string("categoryName")
        t.nonNull.string("categoryDescription")
        t.nonNull.field("user", {
            type: "User",
            resolve: async (parent, args, context, info) => {
                return context.prisma.category.findUnique(
                    { where: { id: parent.id } }
                )
                    .createdBy();
            }
        })
    }
})