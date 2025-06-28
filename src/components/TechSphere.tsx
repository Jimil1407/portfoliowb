import React, { useEffect, useRef, useState } from 'react';
import TagCloud from 'TagCloud';
import ReactDOMServer from 'react-dom/server';
import { FaReact, FaNodeJs, FaDocker, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiMysql, SiRedux, SiExpress, SiNestjs, SiTailwindcss, SiHtml5, SiCss3 } from 'react-icons/si';

function getSizes(width: number) {
  if (width < 640) {
    return { radius: 110, iconSize: '1.5rem', box: 220 };
  } else if (width < 1024) {
    return { radius: 175, iconSize: '2.2rem', box: 350 };
  } else {
    return { radius: 240, iconSize: '3rem', box: 500 };
  }
}

export default function TechSphere() {
  const sphereRef = useRef<HTMLDivElement>(null);
  const [sizes, setSizes] = useState(() => getSizes(typeof window !== 'undefined' ? window.innerWidth : 1024));

  useEffect(() => {
    function handleResize() {
      setSizes(getSizes(window.innerWidth));
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!sphereRef.current) return;
    const techIcons = [
      <FaReact title="React" color="#61DAFB" size={sizes.iconSize} />,
      <SiTypescript title="TypeScript" color="#3178C6" size={sizes.iconSize} />,
      <SiJavascript title="JavaScript" color="#F7DF1E" size={sizes.iconSize} />,
      <FaNodeJs title="Node.js" color="#339933" size={sizes.iconSize} />,
      <SiExpress title="Express" color="#000000" size={sizes.iconSize} />,
      <SiNestjs title="NestJS" color="#E0234E" size={sizes.iconSize} />,
      <SiRedux title="Redux" color="#764ABC" size={sizes.iconSize} />,
      <SiMongodb title="MongoDB" color="#47A248" size={sizes.iconSize} />,
      <SiMysql title="MySQL" color="#4479A1" size={sizes.iconSize} />,
      <FaDocker title="Docker" color="#2496ED" size={sizes.iconSize} />,
      <FaGithub title="GitHub" color="#181717" size={sizes.iconSize} />,
      <SiTailwindcss title="TailwindCSS" color="#06B6D4" size={sizes.iconSize} />,
      <SiHtml5 title="HTML5" color="#E34F26" size={sizes.iconSize} />,
      <SiCss3 title="CSS3" color="#1572B6" size={sizes.iconSize} />
    ];
    const iconHTMLs = techIcons.map((icon) => ReactDOMServer.renderToString(icon));
    const tagCloud = TagCloud(sphereRef.current as any, iconHTMLs, {
      radius: sizes.radius,
      maxSpeed: 'fast',
      initSpeed: 'normal',
      keep: true,
      useHTML: true,
    });
    return () => tagCloud.destroy();
  }, [sizes]);

  return (
    <div className="flex justify-center items-center w-full" style={{ height: sizes.box }}>
      <div ref={sphereRef} className="tech-sphere-cloud" style={{ width: sizes.box, height: sizes.box }} />
    </div>
  );
} 