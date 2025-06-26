
import { useEffect, useState } from 'react';

const GitHubContributions = () => {
  const [contributions, setContributions] = useState<number[][]>([]);

  useEffect(() => {
    // Generate mock contribution data (in a real app, you'd fetch from GitHub API)
    const generateMockData = () => {
      const weeks = 52;
      const daysPerWeek = 7;
      const data: number[][] = [];
      
      for (let week = 0; week < weeks; week++) {
        const weekData: number[] = [];
        for (let day = 0; day < daysPerWeek; day++) {
          // Random contribution count (0-4 for different intensity levels)
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
      'bg-gray-800', // 0 contributions
      'bg-green-900', // 1-2 contributions
      'bg-green-700', // 3-4 contributions
      'bg-green-500', // 5-6 contributions
      'bg-green-400'  // 7+ contributions
    ];
    return colors[Math.min(count, colors.length - 1)];
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Proof of Work</h2>
          <p className="text-gray-400">My GitHub contribution graph shows consistent dedication to coding</p>
        </div>
        
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">GitHub Contributions</h3>
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
          
          <div className="overflow-x-auto">
            <div className="flex space-x-1" style={{ minWidth: '800px' }}>
              {contributions.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col space-y-1">
                  {week.map((dayCount, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(dayCount)} hover:ring-2 hover:ring-gray-600 transition-all cursor-pointer`}
                      title={`${dayCount} contributions`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              <span className="text-white font-semibold">1,247</span> contributions in the last year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
