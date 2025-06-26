import { Github } from 'lucide-react';
import { useEffect, useState } from 'react';
// @ts-ignore
const GITHUB_TOKEN = import.meta.env.VITE_TOKEN || import.meta.env.TOKEN || import.meta.env.REACT_APP_TOKEN;

const GitHubContributions = () => {
  const [contributionCount, setContributionCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
          },
          body: JSON.stringify({
            query: `{
              user(login: "Jimil1407") {
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                  }
                }
              }
            }`
          })
        });
        const data = await res.json();
        const count = data?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions;
        setContributionCount(typeof count === 'number' ? count : null);
      } catch (e) {
        setContributionCount(null);
      }
    }
    fetchContributions();
  }, []);

  return (
    <section className="py-20 bg-black" id="github-contributions">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">GitHub Contributions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My coding activity and contribution patterns over the past year.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="w-full max-w-4xl flex flex-col items-center">
            <div className="flex items-center gap-3 mb-4">
            </div>
            <img src="https://ghchart.rshah.org/39d353/Jimil1407?bg=181818" alt="Jimil1407's Github chart" className="w-full max-w-4xl rounded-lg border border-gray-700 shadow-lg" />
            <div className="mt-4 text-white text-lg font-medium text-center">
              {contributionCount !== null
                ? `${contributionCount} contributions in the last year`
                : 'GitHub contributions in the last year'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
