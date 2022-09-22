import { card } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/></h2>
      <p className={`${styles.paragraph} max-w-470px mt-5`}>
        Legend says that reynolds is still talking to himself, monologueing still until this very moment.
      </p>
      <Button styles='mt-10' />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
    </div>

  </section>
)

export default CardDeal