export function getStrapiURL(path = "") {
    return `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
  }
  
  // Helper to make GET requests to Strapi
  export async function fetchAPI(path) {
    const requestUrl = getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }


/*   // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  }
   */