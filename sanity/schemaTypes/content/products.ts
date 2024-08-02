import {defineField, defineType} from 'sanity'

export const products = defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({name: 'slug', type: 'slug', options: {source: 'name'}}),

    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'shortDescription',
      type: 'string',
    }),
    defineField({
      name: 'longDescription',
      type: 'string',
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'subcategory',
      type: 'reference',
      to: [{type: 'subcategory'}],
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
