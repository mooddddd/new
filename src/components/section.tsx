import { MovedItem } from './moved_item';
import { StickyItem } from './sticky_item';

export const Section = async ({}) => {
  return (
    <section>
      <div className='flex justify-between bg-orange-400 max-lg:flex-col'>
        <StickyItem />
        <MovedItem />
      </div>
    </section>
  );
};
