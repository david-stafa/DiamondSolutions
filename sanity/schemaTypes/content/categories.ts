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
      name: 'image',
      type: 'image',
    }),
  ],
})
