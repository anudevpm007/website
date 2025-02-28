// import { MetadataRoute } from 'next'

export default function robots(){
    return {
      rules: {
        userAgent: '*',
        allow: ['/','/WhoWeAre','/Blog','/Careers'],
        disallow: [],
      },
      sitemap: 'https://www.astraliva.com/sitemap.xml',
    }
  }