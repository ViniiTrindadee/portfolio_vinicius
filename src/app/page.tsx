'use client';
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function BIPortfolioPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-neutral-900 p-6 md:p-8">
        <div className="flex flex-col h-full items-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Vinicius Trindade</h1>
          <p className="text-neutral-400 text-sm md:text-base mb-4">
            Analista de Dados com foco em Engenharia de Dados, especializado em BI,
            automações com Python, SQL e construção de pipelines de dados.
          </p>

          <div className="flex space-x-4 mb-6">
            <a href="https://github.com/ViniiTrindadee/" className="text-neutral-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vinicius-trindade-da-silva/" className="text-neutral-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:viniciustrindadedasilva@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6 md:p-12">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-center md:text-left">
            Power BI Reports Portfolio
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                image: "/abb.png",
                title: "Procurement IM&S PA Report",
                description: "Relatório focado em métricas de requisições e recebimentos para análise diária do time de Procurement.",
                tools: ["Power BI", "Excel", "Sharepoint"],
                link: "/projects/project1/"
              },
              {
                image: "/solman.png",
                title: "SAP Solman Governance",
                description: "Visualização de volume de chamados SAP para apoio na redução de backlog técnico.",
                tools: ["Power BI", "Sharepoint"],
                link: "/projects/project2"
              },
              {
                image: "/voicero.png",
                title: "Live Translator Bot",
                description: "Projeto de visualização de uso do bot que traduz ligações de voz em tempo real.",
                tools: ["Power BI", "SQL"],
                link: "/projects/project3"
              },
              {
                image: "/xflow.png",
                title: "Marketing Analytics",
                description: "Análise de campanhas de mídia com indicadores de performance e investimento.",
                tools: ["Power BI", "Excel"],
                link: "/projects/project4"
              },
              {
                image: "/cot.png",
                title: "Commitment of Traders",
                description: "Dashboard com dados de mercado futuro (COT Report) para análise de tendência de preço.",
                tools: ["Power BI", "SQL", "Python"],
                link: "/projects/project5"
              }
            ].map((project) => (
              <div key={project.title} className="bg-neutral-900 p-4 md:p-6 rounded-lg flex flex-col">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-contain bg-neutral-800"
                  />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">{project.title}</h2>
                <p className="text-neutral-400 text-sm md:text-base mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => {
                      const toolColors: { [key: string]: string } = {
                        'Power BI': 'bg-yellow-900 text-yellow-300',
                        'Excel': 'bg-green-900 text-green-300',
                        'Sharepoint': 'bg-emerald-900 text-emerald-300',
                        'SQL': 'bg-red-900 text-red-300',
                        'Python': 'bg-blue-600 text-blue-100'
                      };
                      return (
                        <span
                          key={tool}
                          className={`${toolColors[tool] || 'bg-neutral-800 text-neutral-300'} px-2 py-1 rounded-full text-xs`}
                        >
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                  <Link
                    href={project.link}
                    className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-full text-sm transition-colors shrink-0"
                  >
                    See details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Seção Graduação */}
          <div className="mt-16">
            <section className="bg-neutral-900 rounded-lg p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white">🎓 Graduação</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                <div className="flex flex-col items-center">
                  <img
                    src="/logo_fatec.jpg"
                    alt="Fatec"
                    className="h-24 object-contain mb-2"
                  />
                  <p className="text-sm md:text-base text-center font-semibold text-neutral-300">
                    Formado em Gestão da<br />Tecnologia da Informação
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="/logo_puc.jpg"
                    alt="PUC Minas"
                    className="h-24 object-contain mb-2"
                  />
                  <p className="text-sm md:text-base text-center font-semibold text-neutral-300">
                    Especialização em Engenharia<br />de Dados
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
