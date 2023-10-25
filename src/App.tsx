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
            start: 'February 2022',
            end: 'Now',
            jobdesc: [
              'Maintained and improvement no code platform',
              'Collaborate with design, product and backend teams to develop new features',
              'Consume API'
            ],
            tech: [
              'Vue JS', 'SCSS', 'Axios'
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
            start: 'February 2022',
            end: 'Now',
            jobdesc: [
              'Maintained and improvement no code platform',
              'Collaborate with design, product and backend teams to develop new features',
              'Consume API'
            ],
            tech: [
              'Vue JS', 'SCSS', 'Axios'
            ]
          }
        ] 
      },
      {
        name: 'edgeprop-singapore', 
        title:'Edgeprop Singapore',
        desc: [
          {
            job: 'Frontend Developer',
            start: 'February 2022',
            company: 'Edgeprop Singapore',
            end: 'Now',
            jobdesc: [
              'Maintained and improvement no code platform',
              'Collaborate with design, product and backend teams to develop new features',
              'Consume API'
            ],
            tech: [
              'Vue JS', 'SCSS', 'Axios'
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
                className={data.selected === name ? 'text-gradient font-semibold' : 'text-gradient-hover'}
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
      <main className="mt-32 container mx-auto">
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
                      <ul className="mt-6 text-sm leading-5 tracking-wide text-slate-700 space-y-4">
                        {jobdesc.map((item) => (
                          <li>{item}</li>
                        ))}
                      </ul>
                      <div className="text-slate-700 mt-8">{tech.join(', ')}</div>
                    </div>
                  ))
                })}
              </div>
            </div>
          </div>
        </div>
        <div ref={projects} className="min-h-[500px] pt-20">
            projects
        </div>
        <div ref={contact} className="min-h-[500px] pt-20">
            contact
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