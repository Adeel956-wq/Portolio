"use client";

import { motion } from "framer-motion";
import Link from "next/link";


export default function Home(){


const skills=[
"Html",
"Css",
"Next.js",
"React",
"JavaScript",
"Tailwind CSS",
"PHP",
"node.js",
"MySQL",
"UI/UX",
"Git",
"GitHub",
];


const projects=[
{
title:"Academy Management System",
desc:"Complete management system with student login, admin panel and database.",
tech:"PHP • MySQL • JS"
},
{
title:"E-Commerce Website",
desc:"Modern shopping platform with products, accounts and orders.",
tech:"Next.js • Node.js • Database"
},
{
title:"Freelancing Platform",
desc:"A platform where users can post jobs and manage projects.",
tech:"React • PHP"
}
];



return (

<div className="min-h-screen bg-[#050816] text-white">


{/* NAVBAR */}

<nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">

<div className="max-w-6xl mx-auto flex justify-between p-5">


<h1 className="text-2xl font-bold">

<span className="text-cyan-400">
    M.Adeel
</span>


</h1>


<div className="space-x-6 hidden md:block text-gray-300">

<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>

</div>


</div>

</nav>





{/* HERO */}


<section className="min-h-screen flex items-center justify-center px-6">


<motion.div

initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}

className="text-center max-w-3xl"

>


<div className="inline-block px-5 py-2 rounded-full bg-cyan-400/10 text-cyan-400 mb-6">

Available for Freelance Work

</div>



<h1 className="text-5xl md:text-7xl font-bold">


Building 
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">

Modern Websites

</span>


</h1>



<p className="mt-6 text-gray-400 text-lg">

I am a Full Stack Developer creating fast,
beautiful and scalable web applications using
modern technologies.

</p>



<div className="mt-8 flex justify-center gap-4">


<Link href="mailto:adeelad342@gmail.com" className="px-7 py-3 rounded-xl bg-cyan-400 text-black font-semibold">

Hire Me

</Link>





</div>



<div className="flex justify-center gap-5 mt-10">





</div>


</motion.div>


</section>






{/* ABOUT */}


<section id="about" className="max-w-6xl mx-auto px-6 py-20">


<h2 className="text-4xl font-bold mb-6">
About Me
</h2>


<p className="text-gray-400 max-w-3xl">

I specialize in building dynamic websites,
dashboards and full stack applications.
My focus is clean code, responsive design
and great user experience.

</p>


</section>







{/* SKILLS */}



<section id="skills" className="max-w-6xl mx-auto px-6 py-20">


<h2 className="text-4xl font-bold mb-10">
Skills
</h2>



<div className="grid grid-cols-2 md:grid-cols-4 gap-5">


{
skills.map(skill=>(

<motion.div

whileHover={{scale:1.05}}

key={skill}

className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"

>

{skill}

</motion.div>


))
}



</div>


</section>







{/* PROJECTS */}


<section id="projects" className="max-w-6xl mx-auto px-6 py-20">


<h2 className="text-4xl font-bold mb-10">

Projects

</h2>



<div className="grid md:grid-cols-3 gap-6">


{

projects.map(project=>(


<div

key={project.title}

className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"

>


<h3 className="text-xl font-bold text-cyan-400">

{project.title}

</h3>


<p className="mt-4 text-gray-400">

{project.desc}

</p>


<p className="mt-4 text-sm text-gray-500">

{project.tech}

</p>


<button className="mt-5 flex gap-2 items-center">



</button>


</div>


))


}


</div>



</section>






{/* CONTACT */}


<section id="contact" className="text-center py-20">


<h2 className="text-4xl font-bold">

Let's Work Together

</h2>


<p className="text-gray-400 mt-4">

Email: adeelad342@gmail.com

</p>



</section>





<footer className="text-left p-5 text-gray-500 border-t border-white/10">

© 2026 Adeel

</footer>



</div>

)

}