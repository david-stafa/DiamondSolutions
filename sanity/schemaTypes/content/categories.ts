import {defineField, defineType} from 'sanity'

export const categories = defineType({
  name: 'category',
  title: 'Kategorie',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({name: 'slug', type: 'slug', options: {source: 'name'}}),
    defineField({
      name: 'bannerImage',
      type: 'image',
      title: 'Banner image',
    }),
    defineField({
      name: 'menuImage',
      type: 'image',
      title: 'Menu image',
    }),
  ],
})
