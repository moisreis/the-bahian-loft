import type {CollectionConfig} from 'payload'

export const Users: CollectionConfig = {
    slug: 'users',
    admin: {
        useAsTitle: 'firstName',
    },
    auth: true,
    fields: [

        // Profile Picture
        {
            name: 'profilePicture',
            label: 'Profile Picture',
            type: 'upload',
            relationTo: 'media',
            required: false,
        },

        // First Name
        {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            required: true,
        },

        // Last Name
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            required: true,
        },
    ],
}
