import { Navigation } from 'swiper';
import styles from './Swiper.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperMain() {
  return (
    <div className={styles.swiperWrapper}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" calculateHeight={true}>
        <SwiperSlide>
          <img className='swiperPic' src='https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/41375459_1037516449745641_7583935736676614144_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=19026a&_nc_ohc=SDTFcyoDXQAAX97PgRe&_nc_ht=scontent-atl3-1.xx&oh=00_AT-icyiA9eQC_FCRzXi_SFBsDmJvUKghJWFxdX8CYrkNaA&oe=62D12262' alt='img1' />
        </SwiperSlide>
        <SwiperSlide><img src="https://cdn.discordapp.com/attachments/940402118953668642/989613875836117032/IMG_4382.jpg" alt="x" /></SwiperSlide>
        <SwiperSlide><img src="https://media.discordapp.net/attachments/940402118953668642/989613875580272761/IMG_4383.jpg" alt="x" /></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};