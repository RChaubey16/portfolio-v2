interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Name My Variable',
    description: `This is a Visual Studio Code extension that helps developers write clearer code. It suggests meaningful names for variables and functions as you type. This makes your code easier to read and understand.`,
    imgSrc: '/static/images/name-my-variable.png',
    href: 'https://marketplace.visualstudio.com/items?itemName=RuturajChaubey.name-my-variable',
  },
  {
    title: 'Roast My Drupal',
    description: `Roast My Drupal Profile is a fun and engaging web application designed for Drupal developers to get constructive (and sometimes brutally honest) feedback on their Drupal.org profiles.`,
    imgSrc: '/static/images/roast-my-drupal.png',
    href: 'https://roast-my-drupal.vercel.app/',
  },
  {
    title: 'AI Website Summarization Tool',
    description: `This tool uses AI to quickly create research reports from web content. The report includes a summary, key points, detailed analysis, data, and conclusions. It helps you get useful insights without spending hours researching.`,
    imgSrc: '/static/images/web-summary.png',
    href: 'https://huggingface.co/spaces/RChaubey16/website-summarization-agent',
  },
  {
    title: 'Netflix Clone',
    description: ` I’ve recreated the Netflix website using ReactJS. It includes a feature where selecting a movie plays its official trailer. The project is deployed on Firebase—check out the link below to see it in action!`,
    imgSrc: '/static/images/netflix-clone.png',
    href: 'https://netflix-clone-ff76e.web.app/',
  },
]

export default projectsData
