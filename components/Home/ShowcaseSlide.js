import { useRouter } from 'next/router';
import Image from 'next/image';
import classes from './ShowcaseSlide.module.css';

const ShowcaseSlide = ({ image, titleText, subtitleText, isButton, buttonText }) => {
  const router = useRouter();

  return (
    <section className={classes.main}>
      <Image 
        src={image}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
        alt='Magson Nastabazar'
        sizes='100vw'
        layout='fill'
        priority
      />
      <div className={classes.content}>
        <h1 className={classes.title}>{titleText}</h1>
        <h2 className={classes.subtitle}>{subtitleText}</h2>
        {isButton && (
          <button className={classes.button} onClick={() => router.push('/products')}>
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default ShowcaseSlide;
