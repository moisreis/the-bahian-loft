import type {CollectionConfig} from 'payload'

export const Categories: CollectionConfig = {
    slug: 'categories',
    admin: {
        useAsTitle: 'categoryTitle',
    },
    fields: [

        // Category Title
        {
            name: 'categoryTitle',
            label: 'Title',
            type: 'text',
            required: true,
        },
    ],
}