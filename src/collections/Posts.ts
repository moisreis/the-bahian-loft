import type {CollectionConfig} from 'payload'

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'postTitle',
    },
    fields: [

        // Featured Image
        {
            name: 'postCoverImage',
            label: 'Cover Image',
            type: 'upload',
            relationTo: 'media',
            required: false,
        },

        // Author of the post
        {
            name: 'postAuthor',
            label: 'Author',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            admin: {
                position: 'sidebar',
            }
        },

        // Post Title
        {
            name: 'postTitle',
            label: 'Title',
            type: 'text',
            required: true,
        },

        // Content
        {
            name: 'postContent',
            label: 'Content',
            type: 'richText',
            required: true,
        },

        // Categories
        {
            name: 'postCategory',
            label: 'Category',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
            admin: {
                position: 'sidebar',
            }
        }
    ]
}