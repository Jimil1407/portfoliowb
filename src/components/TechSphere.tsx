import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import ReactDOMServer from 'react-dom/server';
import { FaReact, FaNodeJs, FaDocker, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiMysql, SiRedux, SiExpress, SiNestjs, SiTailwindcss, SiHtml5, SiCss3 } from 'react-icons/si';

const techIcons = [
  <FaReact title="React" color="#61DAFB" size="3rem" />, <SiTypescript title="TypeScript" color="#3178C6" size="3rem" />, <SiJavascript title="JavaScript" color="#F7DF1E" size="3rem" />,
  <FaNodeJs title="Node.js" color="#339933" size="3rem" />, <SiExpress title="Express" color="#000000" size="3rem" />, <SiNestjs title="NestJS" color="#E0234E" size="3rem" />,
  <SiRedux title="Redux" color="#764ABC" size="3rem" />, <SiMongodb title="MongoDB" color="#47A248" size="3rem" />, <SiMysql title="MySQL" color="#4479A1" size="3rem" />,
  <FaDocker title="Docker" color="#2496ED" size="3rem" />, <FaGithub title="GitHub" color="#181717" size="3rem" />, <SiTailwindcss title="TailwindCSS" color="#06B6D4" size="3rem" />,
  <SiHtml5 title="HTML5" color="#E34F26" size="3rem" />, <SiCss3 title="CSS3" color="#1572B6" size="3rem" />
];

export default function TechSphere() {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sphereRef.current) return;
    // Convert icons to HTML strings using ReactDOMServer
    const iconHTMLs = techIcons.map((icon) => ReactDOMServer.renderToString(icon));
    // Initialize TagCloud using the DOM element, cast to any to satisfy TS
    const tagCloud = TagCloud(sphereRef.current as any, iconHTMLs, {
      radius: 240,
      maxSpeed: 'fast',
      initSpeed: 'normal',
      keep: true,
      useHTML: true,
    });
    return () => tagCloud.destroy();
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-[500px]">
      <div ref={sphereRef} className="tech-sphere-cloud w-[500px] h-[500px]" />
    </div>
  );
} 