import Link from 'next/link'

const FooterElement = ({ title, links, locale, addressLine1, addressLine2, addressContact }) => {
  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-col mb-4">
        {links.map((link, index) => (
          <Link href={link.to} key={index} className="text-gray-600 hover:text-blue-600 mb-2">
              {locale === 'fr-FR' ? link.name.fr : locale === 'ar-DZ' ? link.name.ar : link.name.en}
          </Link>
        ))}
      </div>
      <div className="text-gray-700">
        <p className="mb-1">{addressLine1}</p>
        <p className="mb-1">{addressLine2}</p>
        <p>{addressContact}</p>
      </div>
    </div>
  )
}

export default FooterElement
