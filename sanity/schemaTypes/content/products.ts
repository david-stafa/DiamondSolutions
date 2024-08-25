import {defineField, defineType, ValidationContext} from 'sanity'

interface ProductDocument {
  name: string
  slug: {current: string}
  price: number
  shortDescription?: string
  longDescription?: string
  category?: {_ref: string}
  subcategory?: {_ref: string}
  image?: {asset: {_ref: string}}
  productImages?: {asset: {_ref: string}}[]
}

const validateSubcategory = (value: any, context: ValidationContext) => {
  const parent = context.parent as ProductDocument
  // Ensure `parent` and `parent.category` are defined
  if (parent?.category?._ref === '56679be4-42b1-49c2-84d3-dd84d398d2a7') {
    // Perform validation when the category matches the specific ID
    if (!value) {
      return 'Subcategory is required when category is Sperky.'
    }
  }
  return true // Return true if validation passes or if no validation needed
}

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
      hidden: ({parent}) => parent?.category?._ref !== '56679be4-42b1-49c2-84d3-dd84d398d2a7',
      validation: (Rule) => Rule.custom((value, context) => validateSubcategory(value, context)),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Main Image',
    }),
    defineField({
      name: 'productImages',
      type: 'array',
      title: 'Product Images',
      of: [
        {
          type: 'image',
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],
})
