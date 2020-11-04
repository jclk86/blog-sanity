// Now, get back to resolveProductionUrl.js and add a function that will receive the full document that was selected for previewing. The function must return a URL to your front end that is adapted to your front-ends URL structure.
// slug is important
const projectUrl = process.env.SANITY_STUDIO_PROJECT_URL;
const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET;

// send user to api/preview. But need a secret to do so. 
// then make the api/preview route in client end:  pages/api/preview
export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
