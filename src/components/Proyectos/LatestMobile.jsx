import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from '../Carousel/LatestArrows'
import '../Carousel/latestBase.css'
import '../Carousel/emblaLatest.css'
import useEmblaCarousel from 'embla-carousel-react'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from '../../Firebase/Firebase'
import LoadingCube from '../loader/LoadingCube'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const LatestMobile = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [work, setWork] = useState([])
  const [loading, setLoading] = useState(true)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)



  useEffect(() => {
    const obtener = async () => {
      const q = query(collection(db, "latest"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data() });
        });
        setWork(docs);
        setLoading(false)
      });

    }
    obtener()
  }, [])



  const onLoading = () => {
    if (loading) {
      return (
        <div style={{ display: 'flex', justifyContent: "center", margin:"50px 0px" }}>
          <LoadingCube />
        </div>
      )
    }
  }

  if (loading) {
    return (
      onLoading()
    )
  }

  return (
    <div data-aos="zoom-in">
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {work.length > 0 && work[0].work.map((photo, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <img
                    className="embla__slide__img"
                    src={photo}
                    alt="Your alt text"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

        </div>
      </section>
    </div>
  )
}

export default LatestMobile
