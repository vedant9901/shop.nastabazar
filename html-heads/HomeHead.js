import Head from "next/head";

const HomeHead = ({ locale }) => {
  return (
    <Head>
      {locale === "ar-DZ" ? (
        <>
          <title>اربين هوم - متجر الكتروني مختص ببيع افرشة غرف النوم في الجزائر</title>
          <meta
            name="description"
            content="تصفحوا منتجاتنا لتجدوا مختلف الافرشة العصرية ذات الجودة العالية"
          />
          <meta
            name="keywords"
            content="تسوق عن بعد, افرشة غرف النوم, قماش السرير, غلاف لحاف, طقم سرير, غرفة نوم, تسوق الكتروني في الجزائر, دفع عند الاستلام"
          />
        </>
      ) : locale === "fr-FR" ? (
        <>
          <title>NastaBazar - Achat en ligne de linge de lit en Algérie</title>
          <meta
            name="description"
            content="Parcourez notre large sélection de linge de chambre pour trouver une large sélection de produits de haute qualité"
          />
          <meta
            name="keywords"
            content="shopping en ligne, draps de lit, linge de chambre, housse de couette, ensembles de lit, chambre à coucher"
          />
        </>
      ) : (
        <>
          <title>Nasta Bazar - Online shopping for popular packaged nasta in Ahmedabad</title>
          <meta
            name="description"
            content="Discover the ultimate online shopping destination for popular packaged nasta in Ahmedabad at Nasta Bazar. We offer a wide range of delicious and authentic snacks that cater to your taste buds. Whether you're craving spicy, sweet, or savory treats, our curated selection ensures you'll find your favorite nasta conveniently delivered to your doorstep. Shop with us and experience the best of Ahmedabad's snack culture from the comfort of your home."
          />
          <meta
            name="keywords"
            content="online shopping, Nasta Bazar,online shopping Ahmedabad,packaged snacks,Indian snacks,buy nasta online,spicy snacks,sweet snacks
,savory treats,snack culture,authentic snacks"
          />
        </>
      )}
      <meta httpEquiv="Content-Language" content="en, ar, fr" />
      <meta charSet="UTF-8" />
    </Head>
  );
};

export default HomeHead;
