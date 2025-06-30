import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Trees, 
  Camera, 
  Users, 
  Calendar,
  Leaf,
  Sun,
  Heart,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const posts = [
    {
      id: 1,
      title: "Trilha Ecológica Renovada",
      description: "Nova sinalização e pontos de observação foram instalados na trilha principal.",
      date: "15 Nov 2024",
      category: "Infraestrutura"
    },
    {
      id: 2,
      title: "Workshop de Fotografia Natural",
      description: "Aprenda técnicas de fotografia de natureza com profissionais renomados.",
      date: "20 Nov 2024",
      category: "Eventos"
    },
    {
      id: 3,
      title: "Programa de Reflorestamento",
      description: "Participe do plantio de 500 mudas nativas neste sábado.",
      date: "25 Nov 2024",
      category: "Sustentabilidade"
    },
    {
      id: 4,
      title: "Festival de Inverno",
      description: "Música, gastronomia local e atividades para toda família.",
      date: "30 Nov 2024",
      category: "Eventos"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Trees className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">Reserva Florestal</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-emerald-600 transition-colors">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-emerald-600 transition-colors">Sobre</a>
              <a href="#atracoes" className="text-gray-700 hover:text-emerald-600 transition-colors">Atrações</a>
              <a href="#noticias" className="text-gray-700 hover:text-emerald-600 transition-colors">Notícias</a>
              <a href="#contato" className="text-gray-700 hover:text-emerald-600 transition-colors">Contato</a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-2">
                <a href="#inicio" className="text-gray-700 hover:text-emerald-600 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Início</a>
                <a href="#sobre" className="text-gray-700 hover:text-emerald-600 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre</a>
                <a href="#atracoes" className="text-gray-700 hover:text-emerald-600 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Atrações</a>
                <a href="#noticias" className="text-gray-700 hover:text-emerald-600 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Notícias</a>
                <a href="#contato" className="text-gray-700 hover:text-emerald-600 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Reserva<br />
            <span className="text-emerald-300">Reserva Florestal</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed">
            Um refúgio natural no coração da cidade, onde a biodiversidade e a tranquilidade se encontram
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Explorar a Reserva
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-emerald-900 font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Ver Programação
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre a Reserva</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Há mais de 30 anos preservando a natureza e oferecendo experiências únicas de conexão com o meio ambiente
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Nossa História</h3>
            
              <p className="text-gray-600 leading-relaxed">
                A Reserva Florestal foi criado em 1990 com o objetivo de preservar uma das últimas áreas verdes urbanas da região. Com mais de 150 hectares de mata nativa, a reserva abriga centenas de espécies de flora e fauna local.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nosso compromisso vai além da preservação: educamos, inspiramos e conectamos pessoas com a natureza através de programas educativos, trilhas ecológicas e eventos culturais.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Trees className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Hectares preservados</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Visitantes anuais</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                  alt="Vista à reserva" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                <Leaf className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="atracoes" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Principais Atrações</h2>
            <p className="text-xl text-gray-600">
              Descubra os pontos mais especiais da nossa reserva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Trees className="h-12 w-12 text-emerald-600" />,
                title: "Trilhas Ecológicas",
                description: "5 trilhas sinalizadas com diferentes níveis de dificuldade, totalizando 12km de percursos pela mata nativa.",
                image: "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              },
              {
                icon: <Camera className="h-12 w-12 text-emerald-600" />,
                title: "Mirante Panorâmico",
                description: "Vista privilegiada de 360º da cidade e da serra, ideal para fotografia e contemplação.",
                image: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              },
              {
                icon: <Sun className="h-12 w-12 text-emerald-600" />,
                title: "Área de Piquenique",
                description: "Espaços equipados com mesas, churrasqueiras e banheiros para momentos em família.",
                image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              },
              {
                icon: <Heart className="h-12 w-12 text-emerald-600" />,
                title: "Centro de Visitantes",
                description: "Exposição interativa sobre a fauna e flora local, loja de souvenirs e café.",
                image: "https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              },
              {
                icon: <Users className="h-12 w-12 text-emerald-600" />,
                title: "Playground Natural",
                description: "Área recreativa construída com materiais naturais para crianças de todas as idades.",
                image: "https://images.pexels.com/photos/1117163/pexels-photo-1117163.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              },
              {
                icon: <Leaf className="h-12 w-12 text-emerald-600" />,
                title: "Jardim Botânico",
                description: "Coleção de plantas nativas e medicinais com placas informativas e visitas guiadas.",
                image: "https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              }
            ].map((attraction, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={attraction.image} 
                    alt={attraction.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    {attraction.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{attraction.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News/Posts Section */}
      <section id="noticias" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notícias e Eventos</h2>
            <p className="text-xl text-gray-600">
              Fique por dentro das novidades e próximos eventos da reserva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-emerald-400 to-emerald-600">
                  {/* Placeholder for post image - you can replace with actual image paths */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="h-16 w-16 text-white/50" />
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors">
                      Ler mais →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Ver Todas as Notícias
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Visite-nos</h2>
            <p className="text-xl text-emerald-200">
              Planeje sua visita e entre em contato conosco
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Endereço</p>
                      <p className="text-emerald-200">Rua das Palmeiras, 1500<br />Centro - Cidade Verde - CEP 12345-678</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Horário de Funcionamento</p>
                      <p className="text-emerald-200">Terça a Domingo: 7h às 17h<br />Segunda-feira: Fechado</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Telefone</p>
                      <p className="text-emerald-200">(11) 9999-8888</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-emerald-200">contato@reservaflorestal.com.br</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Informações Importantes</h3>
                <ul className="space-y-2 text-emerald-200">
                  <li>• Entrada gratuita</li>
                  <li>• Estacionamento disponível</li>
                  <li>• Permitido animais com guia</li>
                  <li>• Proibido acampar</li>
                  <li>• Mantenha a reserva limpa</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none"
                    placeholder="Como podemos ajudá-lo?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Trees className="h-8 w-8 text-emerald-500" />
              <span className="text-xl font-bold">Reserva Florestal</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © 2024 Reserva Florestal. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Preservando a natureza para as futuras gerações
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;