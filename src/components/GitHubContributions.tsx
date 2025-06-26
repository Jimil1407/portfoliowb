
import { useEffect, useState } from 'react';

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
    <section className="py-20 bg-gray-900" id="github-contributions">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">GitHub Contributions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My coding activity and contribution patterns over the past year.
          </p>
        </div>
        
        <div className="bg-black/50 p-8 rounded-2xl border border-gray-800 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Contribution Graph</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
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
          
          <div className="overflow-x-auto mb-8">
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
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">1,247</div>
              <div className="text-gray-400">Total Contributions</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">156</div>
              <div className="text-gray-400">Days Active</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">23</div>
              <div className="text-gray-400">Repositories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
