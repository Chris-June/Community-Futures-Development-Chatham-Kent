import { ArrowRight, Briefcase, LineChart, Users } from 'lucide-react';
import { Statistic } from '../types';

const stats: Statistic[] = [
  {
    value: "1000+",
    label: "Businesses Served",
    description: "Supporting local entrepreneurs"
  },
  {
    value: "2500+",
    label: "Jobs Created",
    description: "Growing our community"
  },
  {
    value: "$25M+",
    label: "In Loans Provided",
    description: "Investing in success"
  }
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Empowering Business</span>{' '}
                <span className="block text-blue-600">Growth in Chatham-Kent</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Supporting local entrepreneurs with business loans, expert counselling, and resources
                to help your business thrive in our community.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/start-business"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:px-10 md:py-4 md:text-lg"
                  >
                    Get Financing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/about/contact"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-8 py-3 text-base font-medium text-blue-700 hover:bg-blue-200 md:px-10 md:py-4 md:text-lg"
                  >
                    Book a Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 lg:mt-0">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg bg-white px-6 py-5 shadow-sm ring-1 ring-gray-900/5 hover:bg-gray-50 transition-colors"
              >
                <dt>
                  <div className="absolute rounded-md bg-blue-500 p-3">
                    {index === 0 ? (
                      <Briefcase className="h-6 w-6 text-white" />
                    ) : index === 1 ? (
                      <Users className="h-6 w-6 text-white" />
                    ) : (
                      <LineChart className="h-6 w-6 text-white" />
                    )}
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">
                    {stat.label}
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </dd>
                <dd className="ml-16 text-sm text-gray-500">
                  {stat.description}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}