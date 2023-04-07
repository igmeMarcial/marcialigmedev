import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: "upshe0eo",
    dataset: 'production',
    apiVersion: '2023-02-01',
    useCdn: true,
    token:"skAMNCUQjNPT9tJnI8NSDZTZWwKUiW03I0nr9W21i2a3x7khl46lDddxZ8Ga2ZflqDZM8GDvao46KE7zxa1z6ofIeQPWA5GbXFOnkLGcf4FFzhVeWtpr9RAF9HouyAuKKorjR0yCkAzTHpTC3y2BIJDDtdeUwZx1zIMN7HCkFi7cFrBI1AOo"
})

const builder = imageUrlBuilder(client);

export const urlFor=(source) =>builder.image(source) 