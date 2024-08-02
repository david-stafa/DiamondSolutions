import {defineField, defineType} from 'sanity'

export const bannerImage = defineType({
  name: 'bannerImage',
  title: 'Banner Image',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required().error(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'shortDescription',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
