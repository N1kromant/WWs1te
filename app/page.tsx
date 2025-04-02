'use client'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen py-4">
      <div className="container">
        <nav className="flex justify-between items-center mb-12">
          <div className="logo">
            n<span className="logo-highlight">1</span>kromant
          </div>
          <div className="flex">
            <a href="mailto:business@n1kromant.ru" className="nav-link">business@n1kromant.ru</a>
            <a href="https://github.com" className="nav-link">GitHub</a>
            <a href="https://telegram.org" className="nav-link">Telegram</a>
            <a href="https://discord.com" className="nav-link">Discord</a>
          </div>
        </nav>

        <div className="glass-panel max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">
                Привет, я <span className="highlight">Р</span>оман
              </h1>
              <h2 className="text-xl opacity-75 mb-4">Android Kotlin developer</h2>
              <p className="opacity-60 leading-relaxed">
                Начиная с 2020 я разрабатываю Kotlin + Compose<br />
                Android приложения. С 2018 занимаюсь web разработкой.<br />
                В качестве хобби интересуюсь реверсом.
              </p>
            </div>
            <div className="w-48 h-48 flex-shrink-0">
              <Image
                src="/avatar.png"
                alt="Profile photo"
                width={192}
                height={192}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8">
              <span className="highlight">Т</span>ехнологический стек:
            </h2>

            <div className="flex flex-wrap gap-12">
              <div className="content-block">
                <h3 className="text-xl mb-4 opacity-90">Android:</h3>
                <div className="tech-list">
                  <div className="tech-item">Kotlin</div>
                  <div className="tech-item">Compose</div>
                  <div className="tech-item">Hilt</div>
                  <div className="tech-item">Room/GraphQL</div>
                  <div className="tech-item">Retrofit</div>
                  <div className="tech-item">Coroutines + Flow</div>
                </div>
              </div>

              <div className="content-block">
                <h3 className="text-xl mb-4 opacity-90">Web:</h3>
                <div className="tech-list">
                  <div className="tech-item">Html&Css</div>
                  <div className="tech-item">PHP</div>
                  <div className="tech-item">Bootstrap</div>
                  <div className="tech-item">JavaScript/Typescript</div>
                  <div className="tech-item">React + Vite</div>
                  <div className="tech-item">nginx</div>
                  <div className="tech-item">Wordpress</div>
                  <div className="tech-item">Mysql/Sqlite</div>
                </div>
              </div>

              <div className="content-block">
                <h3 className="text-xl mb-4 opacity-90">Other:</h3>
                <div className="tech-list">
                  <div className="tech-item">asm</div>
                  <div className="tech-item">C, C++, C#</div>
                  <div className="tech-item">python</div>
                  <div className="tech-item">MVM/MVC/MVP</div>
                  <div className="tech-item">REST - API</div>
                  <div className="tech-item">Figma</div>
                  <div className="tech-item">Docker</div>
                  <div className="tech-item">CI/CD(github, gitlab)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
