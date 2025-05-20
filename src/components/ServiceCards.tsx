import { Briefcase, FileText, LineChart } from 'lucide-react';
import { ServiceCard } from '../types';

const services: ServiceCard[] = [
  {
    title: "Business Loans",
    description: "Access flexible financing options tailored to your business needs, with competitive rates and personalized support.",
    icon: "Briefcase",
    link: "/start-business"
  },
  {
    title: "Business Counselling",
    description: "Get expert guidance from our experienced advisors to help your business grow and overcome challenges.",
    icon: "FileText",
    link: "/counselling"
  },
  {
    title: "Economic Development",
    description: "Partner with us to strengthen the local economy through innovative programs and community initiatives.",
    icon: "LineChart",
    link: "/about/who-we-are"
  }
];

export default function ServiceCards() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="h-6 w-6" />;
      case 'FileText':
        return <FileText className="h-6 w-6" />;
      case 'LineChart':
        return <LineChart className="h-6 w-6" />;
      default:
        return <Briefcase className="h-6 w-6" />;
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Comprehensive support for your business journey
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <div>
                <span className="inline-flex rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 p-3 text-blue-800 ring-4 ring-white/50">
                  {getIcon(service.icon)}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  <a href={service.link} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}