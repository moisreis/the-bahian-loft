import {GlobalConfig} from 'payload'

const Header: GlobalConfig = {
    slug: 'header',
    fields: [
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },

        {
            name: 'links',
            label: 'Links',
            type: 'array',
            required: true,
            maxRows: 8,
            fields: [
                {
                    name: 'page',
                    label: 'Pages',
                    type: 'relationship',
                    relationTo: 'categories',
                    required: true,
                },
            ],
        },

        {
            name: 'socialMedia',
            label: 'Social Media',
            type: 'array',
            required: true,
            maxRows: 8,
            fields: [
                {
                    name: 'socialMediaLink',
                    label: 'Social Media Link',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
}

export default Header