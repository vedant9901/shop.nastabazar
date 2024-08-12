import { FaTruck } from 'react-icons/fa';
import { GiCash } from 'react-icons/gi';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';

import classes from './Intro.module.css';

const Intro = ({ data }) => {
  console.log(data, 'data');
  const iconsArray = [
    <FaTruck className={classes.icon} key={0} />,
    <MdOutlinePublishedWithChanges className={classes.icon} key={1} />,
    <GiCash className={classes.icon} key={2} />
  ];

  return (
    <section className={classes.main}>
      {data.length === 3 && data.map((cardInfo, index) => {
        const { _key, introMainText, introSecondaryText } = cardInfo;
        return (
          <div className={classes.card} key={_key}>
            {iconsArray[index]}
            <div className={classes.text}>
              <h3>
                {introMainText.en} {/* Use English text directly */}
              </h3>
              <h4>
                {introSecondaryText.en} {/* Use English text directly */}
              </h4>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Intro;
