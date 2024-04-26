import React, { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '../Carousel/LatestArrows'
import '../Carousel/latestBase.css'
import '../Carousel/emblaLatest.css'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from '../../Firebase/Firebase'
import LoadingCube from '../loader/LoadingCube'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const TWEEN_FACTOR_BASE = 0.2

const LatestProyect = (props) => {
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const tweenFactor = useRef(0)
    const tweenNodes = useRef([])
    const [work, setWork] = useState([])
    const [loading, setLoading] = useState(true)

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

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const setTweenNodes = useCallback((emblaApi) => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla__parallax__layer')
        })
    }, [])

    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenParallax = useCallback((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slidesInView = emblaApi.slidesInView()
        const isScrollEvent = eventName === 'scroll'

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target()

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target)

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress)
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress)
                            }
                        }
                    })
                }

                const translate = diffToTarget * (-1 * tweenFactor.current) * 100
                const tweenNode = tweenNodes.current[slideIndex]
                tweenNode.style.transform = `translateX(${translate}%)`
            })
        })
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenParallax(emblaApi)

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenParallax)
            .on('scroll', tweenParallax)
    }, [emblaApi, tweenParallax])

    const onLoading = () => {
        if (loading) {
            return (
                <div style={{ display: 'flex', justifyContent: "center" }}>
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
            <div style={{ display: 'flex', alignItems: "center" }}>
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <div className="embla">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {work.length > 0 && work[0].work.map((photo, index) => (
                                <div className="embla__slide" key={index}>
                                    <div className="embla__parallax">
                                        <div className="embla__parallax__layer">
                                            <img
                                                className="embla__slide__img embla__parallax__img"
                                                src={photo}
                                                alt="Your alt text"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
        </div>
    )
}

export default LatestProyect