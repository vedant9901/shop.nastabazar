import sanityClient  from '@sanity/client'
import imageUrlBuilder from  '@sanity/image-url'

export const client = sanityClient({
  projectId: 'kqw3bgrd',
  dataset: 'development',
  apiVersion: '2022-01-21',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

// export const fetchDocumentByType = (type) => {
//   return client.fetch(`*[_type == '${type}']`).then((data) => data[0])
// }

export const fetchDocumentByType = async () => {
  try {
    // Fetch the JSON file from the public directory
    const response = await fetch('/layoutData.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('asdasd', data)
    return data;
  } catch (error) {
    console.error('Failed to fetch layout data:', error);
    return null;
  }
};
export const urlFor = (source) => builder.image(source)

// apiVersion: '2022-11-29',
