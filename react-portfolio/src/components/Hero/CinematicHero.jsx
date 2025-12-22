import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CinematicHero.css";
import heroImage from "../../assets/hero/hero-1.jpg";

gsap.registerPlugin(ScrollTrigger);

const CinematicHero = () => {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=260%",
          scrub: true,
          pin: true,
        },
      });

      /* PHASE 1 – HOLD */
      tl.to({}, { duration: 0.3 });

      /* PHASE 2 – IMAGE CINEMATIC MOTION */
      tl.fromTo(
        imageWrapRef.current,
        { y: 120 },
        { y: -120, ease: "none", duration: 1.2 },
        0.2
      );

      tl.fromTo(
        imageRef.current,
        { scale: 1.25 },
        { scale: 0.9, ease: "none", duration: 1.2 },
        0.2
      );

      /* PHASE 3 – TEXT REVEAL (DELAYED) */
      tl.fromTo(
        textRef.current.children,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.25,
          ease: "power3.out",
          duration: 0.8,
        },
        0.9
      );

      /* PHASE 4 – EXIT */
      tl.to(
        sectionRef.current,
        { opacity: 0.85, duration: 0.4 },
        1.8
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="cinematic-hero">
      {/* BACKGROUND AMBIENCE */}
      <div className="cinematic-bg" />

      <div className="cinematic-inner">
        {/* IMAGE */}
        <div ref={imageWrapRef} className="cinematic-image-wrap">
          <div ref={imageRef} className="cinematic-image">
            <img src={heroImage} alt="Pranav Hydrabade" />
          </div>
        </div>

        {/* TEXT */}
        <div ref={textRef} className="cinematic-text">
          <h1>
            Hi, I’m <span>Pranav</span>
          </h1>
          <h2>Software Developer • AI & Frontend Developer</h2>
          <p>
            I craft intelligent, scalable applications with a focus on clean
            interfaces, AI-driven systems, and real-world problem solving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
