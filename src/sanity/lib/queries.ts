import { groq } from "next-sanity";

export const settingsQuery = groq`*[_type == "siteSettings"][0]`;

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(order asc) [0...6] {
    _id, title, titleEn, slug, status, mainImage, location, priceRange, shortDescription, highlights
  }
`;

export const allProjectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id, title, titleEn, slug, status, mainImage, location, priceRange, shortDescription, highlights, featured
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id, title, titleEn, slug, status, mainImage, gallery, location, priceRange, 
    completionYear, shortDescription, description, highlights
  }
`;

export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0...6] {
    _id, title, slug, category, mainImage, excerpt, publishedAt
  }
`;

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, category, mainImage, excerpt, publishedAt
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, category, mainImage, excerpt, body, publishedAt, seoTitle, seoDescription
  }
`;
