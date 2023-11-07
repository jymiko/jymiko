import { createRef, useState } from "react"
import HTMLLogo from './assets/img/html.svg'
import LoveIcons from './assets/img/love.svg'
import Angular from './assets/img/angular.svg'
import Javascript from './assets/img/javascript.svg'
import Nuxt from './assets/img/nuxt.svg'
import React from './assets/img/react.svg'
import Sass from './assets/img/sass.svg'
import Tailwind from './assets/img/tailwind.svg'
import Typescript from './assets/img/typescript.svg'
import Vue from './assets/img/vue.svg'
import Github from './assets/img/github.svg'
import Linkedin from './assets/img/linkedin.svg'
import Instagram from './assets/img/instagram.svg'
import { Folder, ExternalLink, MoveRight } from "lucide-react"

const App = () => {
  const [data, setData] = useState({
    arr: [
      {id: 1, name: 'about-me', title:'About Me'},
      {id: 2, name: 'technology', title:'Technology'},
      {id: 3, name: 'experience', title:'Experience'},
      {id: 4, name: 'projects', title:'Projects'},
      {id: 5, name: 'contact', title:'Contact'}
    ],
    selected: 'about-me'
  })

  const [myExperience, setMyExperience] = useState({
    data: [
      {
        name: 'gramedia-edukasi', 
        title:'Gramedia Edukasi',
        desc: [
          {
            job: 'Frontend Developer',
            company: 'Gramedia Edukasi',
            start: 'January 2023',
            end: 'Now',
            jobdesc: [
              'Design UI / UX',
              'Maintained and improvement existing platform',
              'Collaborate with product manager and backend teams to develop new features',
              'Consume API'
            ],
            tech: [
              'React JS', 'Next JS', 'Tailwind CSS', 'Redux', 'Figma'
            ]
          }
        ] 
      },
      {
        name: 'kompas-gramedia', 
        title:'Kompas Gramedia',
        desc: [
          {
            job: 'Frontend Developer',
            company: 'Kompas Gramedia',
            start: 'April 2021',
            end: 'December 2022',
            jobdesc: [
              'Maintained existing platform Gramedia Digital',
              'Design UI/UX for Gramedia Digital',
              'Revamp website Gramedia Digital',
              'Revamp main website Gramedia',
              'Create CMS to handle all packing orders from website Gramedia',
              'Create platform Web Reader to access all books from Gramedia',
              'Collaborate with product and backend teams to develop new features',
              'Consume API',
              'Create Unit Testing Components'
            ],
            tech: [
              'Vue JS', 'React JS', 'Nuxt JS', 'Next JS', 'SCSS', 'Tailwind CSS', 'React Query', 'Redux', , 'Axios', 'Jest', 'Figma'
            ]
          }
        ] 
      },
      {
        name: 'edgeprop-singapore', 
        title:'Edgeprop Singapore',
        desc: [
          {
            job: 'Software Engineer',
            start: 'September 2019',
            company: 'Edgeprop Singapore',
            end: 'April 2021',
            jobdesc: [
              'Maintained existing platform',
              'Collaborate with design, product and backend teams to develop new features',
              'Create feature Market Trends for knowing trend property in Singapore',
              'Create feature property research to know detail of some property',
              'Create streaming platform for property guide',
              'Consume API'
            ],
            tech: [
              'Next JS', 'React JS', 'Axios', 'Drupal', 'Node JS', 'PHP', 'Laravel'
            ]
          }
        ] 
      },
    ],
    selected: 'gramedia-edukasi'
  })

  const aboutMe = createRef<any>()
  const technology = createRef<any>()
  const experience = createRef<any>()
  const projects = createRef<any>()
  const contact = createRef<any>()
  

  const setActive = (name: string, index:number) => {
    setData(prevState => ({
      arr: prevState.arr,
      selected: name
    }))
    
    let refs:any = [
      aboutMe, technology, experience, projects, contact
    ]

    if(refs[index].current){
      refs[index].current.scrollIntoView({
        behavior: "smooth",
        nearest: "block"
      })
    }
  }

  const setActiveExperience = (name: string, index: number) => {
    setMyExperience(prevState => ({
      data: prevState.data,
      selected: name
    }))
  }

  return (
    <div className="w-full min-h-screen relative">
      <nav className="fixed w-full bg-white/60 z-50 top-0 px-2 md:px-0 backdrop-filter backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-end h-16 space-x-12">
          <ul className="hidden md:flex space-x-12 cursor-pointer">
          {data.arr.map(({name, id, title}, index) => (
            <li key={id}>
              <span 
                className={(data.selected === name) ? 'text-gradient font-semibold' : 'text-gradient-hover'}
                onClick={() => setActive(name, index)}
              >
                {title}
              </span>
            </li>
          ))}
          </ul>
          
          <div className="hidden md:block">
          <button className='bg-gradient-to-r from-teal-600 to-teal-900 rounded-lg px-4 py-2 text-teal-50 shadow-2xl'>
            Resume
          </button>
          </div>
          
        </div>
      </nav>
      <main className="mt-32 container mx-auto px-5" id='main-root'>
        <section ref={aboutMe} className="section">
          <div className="mb-10">
            <h2 className="text-3xl text-gradient">About Me</h2>
          </div>
          <div className="w-full lg:w-3/4 xl:w-1/2">
            <p className="text-center text-slate-800 leading-8">
            Hello, My name is Jatmiko and i'm passionate in Frontend Programming and Design. My interest in frontend started when i was in college. I enjoy writing code using HTML and CSS for assignment in college. And my interest in design started when i was parcitipating as a member of an organization on my campus. <br /><br /> Now I have 2 years experience as a frontend web developer. I can use CSS Preprocessor and Javascript Framework. And I also sometimes become a UI Designer even though I haven't implemented the best practices.
            </p>
          </div>
        </section>
        <section ref={technology} className="section">
          <div className="mb-8 text-center">
            <h2 className="text-3xl text-gradient">Technology</h2>
            <p className="text-base pt-4 text-slate-800">A few technologies I've been using with recently</p>
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-1 md:gap-6 gap-4 mt-4">
            <div className="tech-container">
              <div className="tech-list">
                <img src={HTMLLogo} alt="html-logo" className="w-auto h-full" />
              </div>
            </div>
            <div className="tech-container">
              <div className="tech-list">
                <img src={Sass} alt="sass-logo" className="w-auto h-full" />
              </div>
              <div className="tech-list">
                <img src={Tailwind} alt="tailwind-logo" className="w-auto h-full" />
              </div>
            </div>
            <div className="tech-container">
              <div className="tech-list favorite">
                <img src={React} alt="react-logo" className="w-auto h-full" />
                <img src={LoveIcons} alt="love-icons" className="absolute top-2 right-2 w-4 h-auto" />
              </div>
              <div className="tech-list">
                <img src={Angular} alt="angular-logo" className="w-auto h-full" />
              </div>
              <div className="tech-list">
                <img src={Vue} alt="vue-logo" className="w-auto h-full" />
              </div>
            </div>
            <div className="tech-container">
              <div className="tech-list">
                <img src={Typescript} alt="typescript-logo" className="w-auto h-full" />
              </div>
              <div className="tech-list">
                <img src={Javascript} alt="javascript-logo" className="w-auto h-full" />
              </div>
            </div>
            <div className="tech-container">
              <div className="tech-list">
                <img src={Nuxt} alt="nuxt-logo" className="w-auto h-full" />
              </div>
            </div>
          </div>
        </section>
        
        <div ref={experience} className="section">
          <div className="mb-8 text-center">
            <h2 className="text-3xl text-gradient">Experience</h2>
            <p className="text-base pt-4 text-slate-800">Where I've Worked</p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row">
              <ul className="min-w-[350px] relative flex md:flex-col flex-row md:overflow-x-hidden overflow-x-auto items-start cursor-pointer">
                {myExperience.data.map(({name, title}, index) => (
                  <li key={index}>
                    <span 
                      className={myExperience.selected === name ? 'tab-list tab-active' : 'tab-list'}
                      onClick={() => setActiveExperience(name, index)}
                    >
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="w-full h-auto px-1 pb-3 md:mt-0 mt-8">
                {myExperience.data.filter(arr => arr.name === myExperience.selected).map(({desc}) => {
                  return desc.map(({job, company, start, end, jobdesc, tech}) => (
                    <div className="w-full">
                      <p className="text-lg font-semibold text-slate-800">{job}</p>
                      <p className="text-base text-gradient my-1">{company}</p>
                      <p className="text-sm font-light text-slate-700 tracking-wide">{start} - {end}</p>
                      <ul className="mt-6 text-sm leading-5 tracking-wide text-slate-700 space-y-4 text-ellipsis overflow-hidden max-w-[550px] leading-10">
                        {jobdesc.map((item) => (
                          <li className="before:content-['\25b9'] before:pr-4 before:text-violet-600 before:text-xl">{item}</li>
                        ))}
                      </ul>
                      <div className="text-gradient mt-8 text-ellipsis overflow-hidden max-w-[550px] leading-8">{tech.join(', ')}</div>
                    </div>
                  ))
                })}
              </div>
            </div>
          </div>
        </div>
        <div ref={projects} className="section mx-20">
          <div className="mb-8 text-center">
            <h2 className="text-3xl text-gradient">Projects</h2>
            <p className="text-base pt-4 text-slate-700">A few projects I've been working on with recently</p>
          </div>
            <div className="w-full grid gap-5 grid-cols-4">
              <div className="bg-white rounded-xl p-5 shadow-lg shadow-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Folder className="text-teal-600 w-10 h-auto" stroke="currentColor"/>
                    <ExternalLink className="text-slate-400 w-5 h-auto" stroke="currentColor"/>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Gramedia Edukasi</p>
                  <p className="text-slate-600 text-sm tracking-wide leading-relaxed my-4">
                    Application for the company internal needs. Such as attendance, project & task management, etc
                  </p>
                </div>
                <p className="text-sm font-light text-teal-600 tracking-wide">Tailwind CSS, Vue 3, Typescript, Axios, Pinia</p>
              </div>
              {/* example */}
              <div className="bg-white rounded-xl p-5 shadow-lg shadow-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Folder className="text-teal-600 w-10 h-auto" stroke="currentColor"/>
                    <ExternalLink className="text-slate-400 w-5 h-auto" stroke="currentColor"/>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Gramedia Edukasi</p>
                  <p className="text-slate-600 text-sm tracking-wide leading-relaxed my-4">
                    Application for the company internal needs. Such as attendance, project & task management, etc
                  </p>
                </div>
                <p className="text-sm font-light text-teal-600 tracking-wide">Tailwind CSS, Vue 3, Typescript, Axios, Pinia</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-lg shadow-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Folder className="text-teal-600 w-10 h-auto" stroke="currentColor"/>
                    <ExternalLink className="text-slate-400 w-5 h-auto" stroke="currentColor"/>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Gramedia Edukasi</p>
                  <p className="text-slate-600 text-sm tracking-wide leading-relaxed my-4">
                    Application for the company internal needs. Such as attendance, project & task management, etc
                  </p>
                </div>
                <p className="text-sm font-light text-teal-600 tracking-wide">Tailwind CSS, Vue 3, Typescript, Axios, Pinia</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-lg shadow-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Folder className="text-teal-600 w-10 h-auto" stroke="currentColor"/>
                    <ExternalLink className="text-slate-400 w-5 h-auto" stroke="currentColor"/>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Gramedia Edukasi</p>
                  <p className="text-slate-600 text-sm tracking-wide leading-relaxed my-4">
                    Application for the company internal needs. Such as attendance, project & task management, etc
                  </p>
                </div>
                <p className="text-sm font-light text-teal-600 tracking-wide">Tailwind CSS, Vue 3, Typescript, Axios, Pinia</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-lg shadow-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Folder className="text-teal-600 w-10 h-auto" stroke="currentColor"/>
                    <ExternalLink className="text-slate-400 w-5 h-auto" stroke="currentColor"/>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Gramedia Edukasi</p>
                  <p className="text-slate-600 text-sm tracking-wide leading-relaxed my-4">
                    Application for the company internal needs. Such as attendance, project & task management, etc
                  </p>
                </div>
                <p className="text-sm font-light text-teal-600 tracking-wide">Tailwind CSS, Vue 3, Typescript, Axios, Pinia</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-lg shadow-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Folder className="text-teal-600 w-10 h-auto" stroke="currentColor"/>
                    <ExternalLink className="text-slate-400 w-5 h-auto" stroke="currentColor"/>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Gramedia Edukasi</p>
                  <p className="text-slate-600 text-sm tracking-wide leading-relaxed my-4">
                    Application for the company internal needs. Such as attendance, project & task management, etc
                  </p>
                </div>
                <p className="text-sm font-light text-teal-600 tracking-wide">Tailwind CSS, Vue 3, Typescript, Axios, Pinia</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-lg shadow-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Folder className="text-teal-600 w-10 h-auto" stroke="currentColor"/>
                    <ExternalLink className="text-slate-400 w-5 h-auto" stroke="currentColor"/>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Gramedia Edukasi</p>
                  <p className="text-slate-600 text-sm tracking-wide leading-relaxed my-4">
                    Application for the company internal needs. Such as attendance, project & task management, etc
                  </p>
                </div>
                <p className="text-sm font-light text-teal-600 tracking-wide">Tailwind CSS, Vue 3, Typescript, Axios, Pinia</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-lg shadow-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Folder className="text-teal-600 w-10 h-auto" stroke="currentColor"/>
                    <ExternalLink className="text-slate-400 w-5 h-auto" stroke="currentColor"/>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Gramedia Edukasi</p>
                  <p className="text-slate-600 text-sm tracking-wide leading-relaxed my-4">
                    Application for the company internal needs. Such as attendance, project & task management, etc
                  </p>
                </div>
                <p className="text-sm font-light text-teal-600 tracking-wide">Tailwind CSS, Vue 3, Typescript, Axios, Pinia</p>
              </div>
              
            </div>
        </div>
        <div ref={contact} className="section">
          <div className="mb-8 text-center">
            <h2 className="text-5xl text-gradient h-20">Send me a message!</h2>
            <p className="text-xl pt-4 text-slate-800 bg-transparent">
              Got a question or proposal, or just want to say hello? I'll try my best to get back to you!
            </p>
            <div className="lg:w-[90%] w-full mx-auto flex flex-col items-center mt-8">
              <textarea rows={8} placeholder="Write your message" className="w-full bg-transparent font-normal text-slate-600 placeholder:font-normal placeholder:text-slate-600 border-b border-slate-600 resize-none focus:outline-none focus:placeholder:text-teal-600 focus:border-teal-600 focus:text-teal-500"/>
              <button className="flex items-center justify-center space-x-4 mt-12 bg-gradient-to-r from-teal-600 to-teal-900 rounded-lg px-8 py-3 text-teal-50 shadow-2xl">
                <p>Shoot</p> <MoveRight className="w-8 h-auto"/>
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-3 items-center justify-center text-center bg-slate-900 text-sm text-white/70 tracking-wide">
        Build with React, Vite and Tailwind CSS
      </footer>
      <div className="fixed bottom-0 left-10">
        <div className="flex flex-col items-center space-y-6">
          <a href="#" className="social-list">
            <img src={Github} alt="github-logo" className="w-5 h-5" />
          </a>
          <a href="#" className="social-list">
            <img src={Linkedin} alt="linkedin-logo" className="w-5 h-5" />
          </a>
          <a href="#" className="social-list">
            <img src={Instagram} alt="instagram-logo" className="w-8 h-8" />
          </a>
          <div className="w-px h-28 bg-slate-800"/>
        </div>
      </div>
    </div>
  )
}

export default App