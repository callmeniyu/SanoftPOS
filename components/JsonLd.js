// Create a component called JsonLd.js
export const ProductJsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Billo POS System",
    "description": "Budget-friendly POS system for small food & beverage businesses in Malaysia",
    "operatingSystem": "Web, iOS, Android",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "RM60",
      "priceCurrency": "MYR",
      "priceValidUntil": "2025-12-31"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}