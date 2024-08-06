import {defineField, defineType} from 'sanity'

export const subcategory = defineType({
  name: 'subcategory',
  title: 'Podkategorie',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({name: 'slug', type: 'slug', options: {source: 'name'}}),
    defineField({name: 'category', type: 'reference', to: [{type: 'category'}]}),
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
