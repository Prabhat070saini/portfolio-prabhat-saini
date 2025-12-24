
import * as SVGL from '@ridemountainpig/svgl-react';
const keys = Object.keys(SVGL);
const targets = [
    'Type', 'Java', 'Go', 'Python', 'HTML', 'CSS', 'SQL', 'Mongo', 'Redis', 'React', 
    'Next', 'Node', 'Nest', 'Express', 'Tailwind', 'Prisma', 'Docker', 'Amazon', 'Git', 
    'Linked', 'Twitter', 'Gmail', 'Rabbit', 'C'
];

targets.forEach(t => {
    console.log(`--- ${t} ---`);
    console.log(keys.filter(k => k.toLowerCase().includes(t.toLowerCase())));
});
