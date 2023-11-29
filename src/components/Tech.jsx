import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies, languages } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionSubTextLight}>My skills</h2>
        <p className={styles.sectionHeadTextLight}> Languages: </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {languages.map((language) => (
          <div className="w-28 h-28" key={language.name}>
            <BallCanvas icon={language.icon} />
          </div>
        ))}
      </div>

      <br></br>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadTextLight}> Technologies: </h2>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Tech, '');
