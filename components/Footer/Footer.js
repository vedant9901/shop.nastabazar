import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const FooterElement = dynamic(() => import('./FooterElement'))

import { aboutLinks, helpLinks, socialLinks } from '../../lib/data/footerLinks'

import classes from './Footer.module.css'
import Logo from '../../public/assets/NastaBazarLogo05.webp'


const Footer = () => {

  const { locale } = useRouter()

  return (
    <div className={classes.main}>
      <div className={classes.logo_container}>
        <Link href={'/'}>
          <Image src={Logo} alt='logo' priority />
        </Link>
      </div>
      <div className={classes.links_columns}>
        <FooterElement 
          title= 'About Us'
          links={aboutLinks}
          locale={locale}
        />
        {/* <FooterElement 
          title={locale == 'fr-FR' ? 'Aider' : locale == 'ar-DZ' ? 'مساعدة' : 'Help'} 
          links={helpLinks}
          locale={locale}
        /> */}
        {/* <FooterElement 
          title={locale == 'fr-FR' ? 'Social' : locale == 'ar-DZ' ? 'وسائل التواصل' : 'Social'}
          links={socialLinks}
          locale={locale}
        /> */}
         <FooterElement 
          title='Address'
          links={[]}
          locale={locale}
          addressLine1="506, Akshar Square, Near Page One Restaurant,Sandesh Press Road, " // Replace with your actual address
          addressLine2="Vastrapur,Ahmedabad, Gujarat 380054"
          addressContact="+91 99786 09107"/>
      </div>
    </div>
  )
}

export default Footer