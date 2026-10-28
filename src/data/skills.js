// level: "used"      -> used regularly in completed projects
//        "growing"   -> used in projects, still being deepened (not claimed as advanced)
export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive, accessible interfaces.',
    skills: [
      { name: 'HTML5', level: 'used' },
      { name: 'CSS3', level: 'used' },
      { name: 'JavaScript (ES6+)', level: 'used' },
      { name: 'React.js', level: 'used' },
      { name: 'JSX', level: 'used' },
      { name: 'Tailwind CSS', level: 'used' },
      { name: 'Next.js', level: 'growing' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Server-side fundamentals and APIs.',
    skills: [
      { name: 'Node.js', level: 'growing' },
      { name: 'Express.js', level: 'growing' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Data modeling and persistence.',
    skills: [{ name: 'MongoDB', level: 'growing' }],
  },
  {
    id: 'auth',
    title: 'Authentication',
    description: 'Signup, signin, signout and protected access.',
    skills: [
      { name: 'Better Auth', level: 'growing' },
      { name: 'Signup & Signin flows', level: 'growing' },
      { name: 'Protected routes', level: 'growing' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    description: 'Version control, tooling and hosting.',
    skills: [
      { name: 'Git', level: 'used' },
      { name: 'GitHub', level: 'used' },
      { name: 'npm', level: 'used' },
      { name: 'Vite', level: 'used' },
      { name: 'Vercel', level: 'used' },
      { name: 'Netlify', level: 'used' },
    ],
  },
]

export const levelLabels = {
  used: 'Used in projects',
  growing: 'Used in projects, still growing',
}
