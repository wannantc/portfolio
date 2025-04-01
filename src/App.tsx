import React, { useEffect, useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown,
  GraduationCap,
  Briefcase,
  Code,
  Terminal,
  Code2,
  Database
} from 'lucide-react';

function App() {
  const [notification, setNotification] = useState<string | null>(null);

  const handleEmailCopy = () => {
    const email = "goncalomoraisgoncalves02@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setNotification("Email copiado para a área de transferência!");
      setTimeout(() => setNotification(null), 3000);
    });
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.scroll-animate').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header/Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('./assets/hero-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Gonçalo Gonçalves
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up-delay">
              Desenvolvedor Full Stack
            </p>
            <div className="prose prose-lg prose-invert mx-auto animate-fade-in-delay">
              <p className="text-gray-300 leading-relaxed">
                Com 22 anos, sempre fui fascinado pelo mundo tecnológico. Minha jornada na programação
                começou com uma formação sólida na ATEC, onde desenvolvi uma base forte em desenvolvimento
                de software. Sou apaixonado por criar soluções inovadoras e estou constantemente
                aprendendo novas tecnologias para expandir meus horizontes.
              </p>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors animate-slide-left"
                style={{ animationDelay: '0.5s' }}
              >
                <Github className="w-6 h-6 hover-scale" />
              </a>
              <a
                href="https://www.linkedin.com/in/gonçalo-gonçalves-3b3551359"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors animate-slide-left"
                style={{ animationDelay: '0.7s' }}
              >
                <Linkedin className="w-6 h-6 hover-scale" />
              </a>
              <button
                onClick={handleEmailCopy}
                className="text-gray-300 hover:text-white transition-colors animate-slide-left"
                style={{ animationDelay: '0.9s' }}
              >
                <Mail className="w-6 h-6 hover-scale" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="w-8 h-8 text-white opacity-75" />
        </div>
      </header>

      {/* Notification */}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          {notification}
        </div>
      )}

      {/* Timeline Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 scroll-animate">Minha Jornada</h2>
          <div className="max-w-4xl mx-auto">
            {/* Timeline Item 0 */}
            <div className="flex flex-col md:flex-row gap-8 mb-16 scroll-animate">
              <div className="md:w-1/3 flex justify-end">
                <div className="bg-blue-500 p-3 rounded-full h-fit">
                  <GraduationCap className="w-6 h-6 animate-pulse-slow" />
                </div>
              </div>
              <div className="md:w-2/3 relative">
                <div className="absolute top-0 -left-2 h-full w-0.5 bg-blue-500 opacity-30"></div>
                <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold mb-2">Escola Secundaria Aguas Santas</h3>
                  <p className="text-gray-400 mb-2">ATEC | 2017 - 2020</p>
                  <p className="text-gray-300">
                    Curso de Gestão de Sistemas Informáticos, onde adquiri conhecimentos fundamentais em:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-2">
                    <li>Programação Orientada a Objetos</li>
                    <li>Python</li>
                    <li>c#/c</li>
                    <li>HTML/Php/Mysql</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Timeline Item 1 */}
            <div className="flex flex-col md:flex-row gap-8 mb-16 scroll-animate">
              <div className="md:w-1/3 flex justify-end">
                <div className="bg-blue-500 p-3 rounded-full h-fit">
                  <GraduationCap className="w-6 h-6 animate-pulse-slow" />
                </div>
              </div>
              <div className="md:w-2/3 relative">
                <div className="absolute top-0 -left-2 h-full w-0.5 bg-blue-500 opacity-30"></div>
                <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold mb-2">Curso Profissional de Informática</h3>
                  <p className="text-gray-400 mb-2">ATEC | 2020 - 2023</p>
                  <p className="text-gray-300">
                    Formação técnica especializada em desenvolvimento de software, com foco em:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-2">
                    <li>Programação Orientada a Objetos</li>
                    <li>Desenvolvimento Web Full Stack</li>
                    <li>Gestão de Bases de Dados</li>
                    <li>Metodologias Ágeis</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex flex-col md:flex-row gap-8 mb-16 scroll-animate">
              <div className="md:w-1/3 flex justify-end">
                <div className="bg-green-500 p-3 rounded-full h-fit">
                  <Briefcase className="w-6 h-6 animate-pulse-slow" />
                </div>
              </div>
              <div className="md:w-2/3 relative">
                <div className="absolute top-0 -left-2 h-full w-0.5 bg-green-500 opacity-30"></div>
                <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold mb-2">Estágio Profissional</h3>
                  <p className="text-gray-400 mb-2">Instituto Criap | 2023</p>
                  <p className="text-gray-300">
                    Participação em projetos reais, desenvolvendo soluções web e aplicando conhecimentos em:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-2">
                    <li>React e Next.js</li>
                    <li>Node.js e Express</li>
                    <li>PostgreSQL</li>
                    <li>Git e CI/CD</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex flex-col md:flex-row gap-8 scroll-animate">
              <div className="md:w-1/3 flex justify-end">
                <div className="bg-purple-500 p-3 rounded-full h-fit">
                  <Code className="w-6 h-6 animate-pulse-slow" />
                </div>
              </div>
              <div className="md:w-2/3 relative">
                <div className="absolute top-0 -left-2 h-full w-0.5 bg-purple-500 opacity-30"></div>
                <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold mb-2">Projetos Pessoais</h3>
                  <p className="text-gray-400 mb-2">2020 - Presente</p>
                  <p className="text-gray-300">
                    Desenvolvimento contínuo de projetos pessoais para aprimoramento de habilidades:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-2">
                    <li>Aplicações Web Full Stack</li>
                    <li>Contribuições Open Source</li>
                    <li>Experimentação com Novas Tecnologias</li>
                    <li>Desenvolvimento Mobile com React Native</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 scroll-animate">Competências</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-transform scroll-animate">
              <Terminal className="w-12 h-12 mb-4 text-blue-400 animate-pulse-slow" />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-300">Node.js, Python, SQL, APIs RESTful</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-transform scroll-animate" style={{ transitionDelay: '0.2s' }}>
              <Code2 className="w-12 h-12 mb-4 text-green-400 animate-pulse-slow" />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-300">React, HTML5, CSS3, JavaScript</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-transform scroll-animate" style={{ transitionDelay: '0.4s' }}>
              <Database className="w-12 h-12 mb-4 text-purple-400 animate-pulse-slow" />
              <h3 className="text-xl font-semibold mb-2">Databases</h3>
              <p className="text-gray-300">PostgreSQL, MongoDB, MySQL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 scroll-animate">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow scroll-animate">
              <div className="relative overflow-hidden group">
                <img 
                  src="./assets/project1.jpg"
                  alt="Project 1"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                <p className="text-gray-300 mb-4">
                  Desenvolvimento de uma plataforma completa de e-commerce usando React e Node.js
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-500 rounded-full text-sm hover-scale">React</span>
                  <span className="px-3 py-1 bg-green-500 rounded-full text-sm hover-scale">Node.js</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow scroll-animate" style={{ transitionDelay: '0.2s' }}>
              <div className="relative overflow-hidden group">
                <img 
                  src="./assets/project2.jpg"
                  alt="Project 2"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                <p className="text-gray-300 mb-4">
                  Aplicação de gestão de tarefas com funcionalidades em tempo real
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-500 rounded-full text-sm hover-scale">MongoDB</span>
                  <span className="px-3 py-1 bg-yellow-500 rounded-full text-sm hover-scale">Express</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Gonçalo Gonçalves. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;