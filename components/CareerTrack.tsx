export default function CareerTrack() {
  const cards = [
    {
      id: 1,
      title: 'Full Stack Engineer',
      company: 'QED42 Engineering',
      period: '2023 - Present',
      description: [
        'Led the development of an EdTech platform from the ground up for a renowned non-profit, delivering a scalable architecture that integrated Next.js with Drupal CMS and drove significant user growth',
        'Improved application performance by 20% through efficient use of React, Drupal, and supporting technologies',
        'Enhanced user experience with responsive design strategies and critical bug fixes',
        'Mentored interns in full-stack development as part of a structured internship program',
        'Expanded expertise in AI-powered RAG applications and agentic frameworks',
      ],
    },
    {
      id: 2,
      title: 'Associate Engineer - Full Stack',
      company: 'QED42 Engineering',
      period: '2022 - 2023',
      description: [
        'Optimized performance of Gatsby and Drupal Commerce, reducing page load times by 25% and improving overall site responsiveness',
        'Engineered efficient data synchronization between Gatsby and Drupal Commerce, enabling seamless integration for 90% of product listings',
        'Led training sessions on React and Headless Drupal architecture to upskill team members and promote best practices',
      ],
    },
    {
      id: 3,
      title: 'Intern',
      company: 'QED42 Engineering',
      period: '2021 - 2022',
      description: [
        'Developed deep expertise in Drupal CMS, Headless Drupal, and REST/JSON APIs through hands-on development and collaboration',
        'Integrated React with Drupal CMS to enhance content workflows and site interactivity, improving overall user engagement',
        'Contributed patches to the Drupal Open Source Community and supported key strategic initiatives',
      ],
    },
  ]

  return (
    <div className="my-20 rounded-lg bg-gray-50 p-4 shadow-md lg:p-6 dark:bg-gray-900 dark:shadow-gray-800">
      <div className="relative">
        {cards.map((card, index) => (
          <div key={card.id} className="relative mb-12">
            {index < cards.length - 1 && (
              <div className="bg-primary-500 dark:bg-primary-700 absolute top-9 left-2.5 h-full w-1"></div>
            )}

            <div className="flex">
              <div className="relative z-10">
                <div className="bg-primary-500 dark:bg-primary-500 flex h-6 w-6 items-center justify-center rounded-full font-bold text-white">
                  <div className="bg-primary-900 h-3 w-3 rounded-full" />
                </div>
              </div>

              <div className="ml-6 flex-1">
                <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800 dark:shadow-gray-700">
                  <div className="mb-6 flex flex-col items-start justify-between gap-2 lg:mb-2 lg:flex-row">
                    <h3 className="text-primary-600 dark:text-primary-400 text-xl font-bold">
                      {card.title}
                    </h3>
                    <span className="dark:bg-primary-900 dark:text-primary-200 bg-primary-100 text-primary-800 rounded-full px-2 py-1 text-sm">
                      {card.period}
                    </span>
                  </div>
                  <h4 className="mb-3 font-medium text-gray-700 dark:text-gray-300">
                    {card.company}
                  </h4>
                  <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
                    {card.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
