import { useEffect, useState } from 'react';
import { Github } from 'lucide-react';

const GitHubContributions = () => {
  const [contributions, setContributions] = useState<number[][]>([]);

  useEffect(() => {
    const generateMockData = () => {
      const weeks = 52;
      const daysPerWeek = 7;
      const data: number[][] = [];
      
      for (let week = 0; week < weeks; week++) {
        const weekData: number[] = [];
        for (let day = 0; day < daysPerWeek; day++) {
          weekData.push(Math.floor(Math.random() * 5));
        }
        data.push(weekData);
      }
      return data;
    };

    setContributions(generateMockData());
  }, []);

  const getContributionColor = (count: number) => {
    const colors = [
      'bg-gray-800',
      'bg-green-900',
      'bg-green-700',
      'bg-green-500',
      'bg-green-400'
    ];
    return colors[Math.min(count, colors.length - 1)];
  };

  return (
    <section className="py-20 bg-black" id="github-contributions">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">GitHub Contributions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My coding activity and contribution patterns over the past year.
          </p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/80">
                <Github size={40} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white leading-tight">Contribution Graph</div>
                <div className="text-lg text-gray-300 leading-tight">Yearly activity overview</div>
                <div className="flex items-center space-x-2 text-sm text-gray-400 mt-2">
                  <span>Less</span>
                  <div className="flex space-x-1">
                    {[0, 1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                      ></div>
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
            <div className="text-right text-lg text-white font-normal min-w-[160px]">
              {/* You can add a summary or leave blank */}
            </div>
          </div>
          <div className="overflow-x-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="flex space-x-1" style={{ minWidth: '800px' }}>
              {contributions.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col space-y-1">
                  {week.map((dayCount, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(dayCount)} hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer hover:scale-110`}
                      title={`${dayCount} contributions`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/80">
                <Github size={32} />
              </div>
              <div>
                <div className="text-xl font-bold text-white leading-tight">1,247</div>
                <div className="text-lg text-gray-300 leading-tight">Total Contributions</div>
              </div>
            </div>
            <div className="text-right text-lg text-white font-normal min-w-[160px]">
              156 days active
            </div>
            <div className="text-right text-lg text-white font-normal min-w-[160px]">
              23 repositories
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
