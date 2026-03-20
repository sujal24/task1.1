import React, { useState } from "react";
import showcase from "../assets/showcase.png";
import Clarity from "../assets/clarity.png";
import Clarity2_1 from "../assets/clarity2.1.png"; 
import learning from "../assets/learning.png";
import learning2 from "../assets/learning2.png"; 
import mentor from "../assets/mentor.png";

const JourneyCard = ({ 
  title, subtitle, body, bg, image, imageLeft, 
  isHovered, slide2Image, slide2Heading, onMouseEnter, onMouseLeave,
  slide2ImageSize = "100%" // Default size if not specified
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        backgroundColor: bg,
        borderRadius: "20px",
        padding: "25px",
        position: "relative",
        minHeight: "220px",
        transition: "transform 0.3s ease",
        cursor: "pointer",
        zIndex: isHovered ? 10 : 1 
      }}
      className="journey-card"
    >
      {/* --- SLIDE 2 (Hover State) --- */}
      <div style={{ 
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%", 
        height: "100%", 
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.3s ease",
        zIndex: 5,
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bg // Keeps background color visible if image is smaller
      }}>
        <img 
          src={slide2Image} 
          alt="" 
          style={{ 
            width: slide2ImageSize, 
            height: slide2ImageSize, 
            // Use 'cover' for 100% images, 'contain' for smaller images
            objectFit: slide2ImageSize === "100%" ? "cover" : "contain", 
            display: "block"
          }} 
        />
        <h2 style={{ 
          position: "absolute", 
          top: "25px", 
          left: imageLeft ? "auto" : "25px",
          right: imageLeft ? "25px" : "auto", 
          fontSize: "24px", 
          fontWeight: 800, 
          color: "#fff", 
          maxWidth: "260px",
          lineHeight: "1.2",
          zIndex: 6,
          textShadow: "0px 2px 8px rgba(0,0,0,0.4)" 
        }}>
          {slide2Heading}
        </h2>
      </div>

      {/* --- SLIDE 1 (Default State) --- */}
      <div style={{ 
        opacity: isHovered ? 0 : 1, 
        transition: "opacity 0.3s ease" 
      }}>
        <div style={{
          position: "absolute",
          top: "55%",
          transform: "translateY(-50%)",
          [imageLeft ? "left" : "right"]: "-12%",
          width: "45%",
          zIndex: 1,
        }}>
          <img 
            src={image} 
            alt="" 
            style={{ 
              width: "100%", 
              height: "auto", 
              borderRadius: "16px",
              animation: "float 3s ease-in-out infinite" 
            }} 
          />
        </div>

        <div style={{
          position: "relative",
          zIndex: 2,
          paddingLeft: imageLeft ? "calc(40% + 20px)" : "16px",
          paddingRight: !imageLeft ? "calc(40% + 20px)" : "16px",
        }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "6px", color: "#fff" }}>
            {title}
          </h2>
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "10px", color: "#fff" }}>
            {subtitle}
          </h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#fff", margin: 0 }}>
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function JourneySection() {
  const [c1Hover, setC1Hover] = useState(false);
  const [c2Hover, setC2Hover] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#efefef", padding: "32px 16px", fontFamily: "Arial, sans-serif" }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        .journey-card:hover { transform: scale(1.02); }
      `}</style>

      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        
        <JourneyCard 
          isHovered={c1Hover}
          onMouseEnter={() => setC1Hover(true)}
          onMouseLeave={() => setC1Hover(false)}
          bg="#F45B5B"
          image={Clarity}
          imageLeft={true}
          title="Start with Clarity"
          subtitle="Step into a better learning path."
          body="Overwhelmed by too many learning options? SkillShikshya provides a curated roadmap."
          slide2Image={Clarity2_1}
          slide2Heading=""
          slide2ImageSize="100%" // Full size
        />

        <JourneyCard 
          isHovered={c2Hover}
          onMouseEnter={() => setC2Hover(true)}
          onMouseLeave={() => setC2Hover(false)}
          bg="#5d98a6"
          image={learning}
          imageLeft={false}
          title="Learn by Doing"
          subtitle="Practical skills, real projects."
          body="Theory is great, but action is better. Hands-on projects help you build mastery."
          slide2Image={learning2}
          slide2ImageSize="80%" // This makes the image smaller and centered
          slide2Heading="Focused faces—learning mode: ON!"
        />

        <JourneyCard title="Get Mentored" subtitle="You're not learning alone." body="Stuck or need feedback? SkillShikshya’s community has your back." bg="#7268b5" image={mentor} imageLeft={true} />
        <JourneyCard title="Achieve & Showcase" subtitle="Build your portfolio." body="Each project builds job readiness." bg="#b28e60" image={showcase} imageLeft={false} />
      </div>
    </div>
  );
}