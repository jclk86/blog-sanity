// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
          name: 'avatar',
          title: 'Avatar',
          type: 'image' 
        }
      ]
    },
    {
      name: 'blog', // accesses data type
      type: 'document',
      title: 'Blog',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: Rule => Rule.required().min(5).max(15)
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'subtitle'
        },
        {
          name: 'coverImage',
          type: 'image',
          title: 'Cover Image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alt'
            }
          ]
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            {
              type: 'block'
            },
            {
              type: 'image',
              fields: [
                {
                  type: 'text',
                  name: 'alt',
                  title: 'Alt',
                  options: {
                    isHighlighted: true
                  }
                }
              ],
              options: {
                hotspot: true
              }
            },
            {
              type: 'code',
              options: {
                withFilename: true
              }
            }
          ]
        },
        {
          name: 'date',
          title: 'date',
          type: 'datetime',
          validation: Rule => Rule.required()
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{type: 'author'}],
          validation: Rule => Rule.required()
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'slug',
          validation: Rule => Rule.required()
        }
      ]
    }
  ])
})
