import { useState } from 'react'
import abhayImg from './assets/headshot.jpg';
import githubLogo from './assets/github-mark-white.png';
import gmaillogo from './assets/mail.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]"></div>
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-r from-purple-600 to-violet-500 rounded-full opacity-20 blur-2xl animate-spin" style={{animationDuration: '15s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full opacity-25 blur-xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-40 h-40 bg-gradient-to-r from-violet-600 to-purple-700 rounded-full opacity-15 blur-3xl animate-spin" style={{animationDuration: '12s'}}></div>
        <div className="absolute top-1/2 right-1/6 w-28 h-28 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 blur-2xl animate-spin" style={{animationDuration: '18s'}}></div>
        <div className="absolute top-1/6 right-2/3 w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-20 blur-xl animate-spin" style={{animationDuration: '25s'}}></div>
        <div className="absolute bottom-1/4 right-1/2 w-36 h-36 bg-gradient-to-r from-purple-700 to-violet-800 rounded-full opacity-18 blur-3xl animate-spin" style={{animationDuration: '14s'}}></div>
      </div>
      <div className="relative z-10 text-white backdrop-blur-sm bg-black/30">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="custom-flex-center"><img src={abhayImg} alt="Abhay" className = "rounded-full w-64 h-64 object-cover"/></div>
            <h1 className="w-full text-center text-6xl font-inter font-bold">Abhay Suri</h1>
            <h2 className="w-full text-center text-3xl font-inter ">Student Developer</h2>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/30 backdrop-blur-[18px] shadow-[0_8px_32px_0_rgba(31,38,135,0.1),0_0_1px_rgba(255,255,255,0.1)] relative overflow-hidden m-1 flex flex-col">
          <div className="flex items-center justify-center space-x-6">
            <a href="https://github.com/absuii" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img className="w-12 h-12" src={githubLogo} alt="GitHub logo" />
            </a>
            <a href="mailto:abhay.as.suri@gmail.com" className="hover:scale-110 transition-transform">
              <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="8" fill="white" fillOpacity="0"/>
                <path d="M6 14.5C6 12.0147 8.01472 10 10.5 10H37.5C39.9853 10 42 12.0147 42 14.5V33.5C42 35.9853 39.9853 38 37.5 38H10.5C8.01472 38 6 35.9853 6 33.5V14.5Z" stroke="white" strokeWidth="3"/>
                <path d="M8 15L24 27L40 15" stroke="white" strokeWidth="3"/>
              </svg>
            </a>
          </div>
        </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-full text-center text-6xl font-inter font-bold">About Me</h1>
          <p className="md:w-2/3 w-4/5 text-center text-2xl md:text-3xl font-inter">A student interested in Machine Learning and its uses in Robotics and Computer Science. Experienced in Web Development, Python, Java, and Competitive Programming, as a USA Computing Olympiad Gold competitor. Projects include ML models, robotics, community outreach, and apps solving real world problems.</p>
            <h1 className="w-full text-center text-6xl font-inter font-bold mt-16">Projects</h1>
          <div className="flex flex-row flex-wrap items-center justify-center">
            <Card title="Summer ML Projects" para="Explored machine learning on the FER2013, MNIST, and UCI Adult Income datasets using classical models (LR, SVM, KNN, Decision Tree, Random Forest, Gradient Boosting) and CNNs." link="https://github.com/absuii/Summer-ML-Projects/"></Card>
            <Card title="FinTrack" para="A personal finance tracker designed to help students take control of their money with clear insights, goal-setting, and spending analysis." link="https://googolgenius.github.io/fintrack/"></Card>
            <Card title="USACO" para="A collection of my competitive programming USA Computing Olympiad solutions, ranging from Bronze to Gold." link="https://github.com/absuii/Competitive-Programming"></Card>
            <Card title="Robotics" para="Autonomous and teleop systems engineered for the Decode season." link="https://github.com/DarkMatter4150/decode-pedro"></Card>
            <Card title="Cedar Rapids STEM Circle" para="Interactive site built to promote STEM opportunities for students in Cedar Rapids, featuring live events, project showcases, and community-driven resources." link="https://cedarrapidsstemcircle.web.app/"></Card>
          </div>
           <div className="m-12"></div>
        </div>
      </div>
    </div>
    </>
  )
}

function Card({ title, para, link}) {
  return (
    <a href={link}>
    <div className="w-72 h-52 p-6 m-1.5 rounded-3xl bg-white/5 border border-white/30 backdrop-blur-[18px] shadow-[0_8px_32px_0_rgba(31,38,135,0.1),0_0_1px_rgba(255,255,255,0.1)] relative overflow-hidden m-1 flex flex-col hover:scale-105 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_20px_50px_rgba(147,51,234,0.2)] transition-all duration-300 group-hover:-translate-y-1">
      <h3 className="relative text-xl font-semibold mb-2 text-center w-full text-white drop-shadow-md">
        {title}
      </h3>
      <p className="relative text-base text-l text-center w-full text-white drop-shadow-md">
        {para}
      </p>
    </div>
  </a>
  );
}

export default App
