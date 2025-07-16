import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Me</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A passionate developer who loves to create innovative solutions and push boundaries.
            </p>
          </div>
          
          <div className="prose prose-invert max-w-none animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="bg-black/80 p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">My Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Started coding in 2022, fell in love with the process of turning ideas into reality. 
                From building simple websites to complex machine learning models, I've been on a 
                continuous learning journey.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I believe in learning by doing, breaking things, and finding creative solutions. 
                When I'm not coding, you'll find me exploring new technologies, recently started contributing to 
                open source, or diving deep into computer science fundamentals.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My passion lies in creating user-centric applications that solve real-world problems.
                I'm particularly interested in web development, machine learning, deep learning, and building
                scalable systems that can make a difference.
              </p>
            </div>

            <div className="bg-black/80 p-8 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">What Drives Me</h2>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Building products that users love and find valuable</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Continuous learning and staying updated with latest technologies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Contributing to open source and helping the developer community</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Creating efficient, scalable, and maintainable code</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Link 
              to="/journey"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Read My Full Journey →
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default About;
