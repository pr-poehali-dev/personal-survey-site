import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Портфолио Педагога</h1>
                <p className="text-sm text-gray-600">Дополнительное образование</p>
              </div>
            </div>
            <div className="hidden md:flex gap-2">
              {[
                { id: 'profile', label: 'Профиль', icon: 'User' },
                { id: 'circles', label: 'Кружки', icon: 'Users' },
                { id: 'methodology', label: 'Методика', icon: 'BookOpen' },
                { id: 'exhibitions', label: 'Выставки', icon: 'Image' },
                { id: 'games', label: 'Игротека', icon: 'Gamepad2' },
                { id: 'achievements', label: 'Достижения', icon: 'Award' },
                { id: 'contacts', label: 'Контакты', icon: 'MessageCircle' },
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="gap-2"
                >
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 via-orange-500 to-blue-500 rounded-full p-1">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <Icon name="GraduationCap" size={64} className="text-purple-600" />
              </div>
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-orange-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
            Добро пожаловать!
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in">
            Здесь вы найдете информацию о моей педагогической деятельности, методических разработках и достижениях моих учеников
          </p>
        </div>
      </section>

      <section id="profile" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-3 text-gray-900">Обо мне</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-scale border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" className="text-purple-600" />
                  Общие сведения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="IdCard" className="text-orange-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">ФИО педагога:</p>
                    <p className="text-gray-700">Маркина Анжелика Михайловна</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Calendar" className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Стаж работы:</p>
                    <p className="text-gray-700">5 лет</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Building" className="text-purple-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Место работы:</p>
                    <p className="text-gray-700">МАУДО ЦДТ города Оренбурга</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-orange-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="GraduationCap" className="text-orange-600" />
                  Образование
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="School" className="text-purple-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Среднее профессиональное образование</p>
                    <p className="text-gray-700">ГАПОУ «Педколледж» г. Орска</p>
                    <Badge className="mt-2 bg-purple-100 text-purple-700">Педагогика ДОП</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 hover-scale border-2 border-blue-100 bg-gradient-to-r from-purple-50 to-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-center">
                <Icon name="Heart" className="text-red-500" />
                Жизненное кредо
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl italic text-gray-800 text-center">
                "Каждый ребенок - это уникальная личность с безграничным потенциалом. Моя задача - помочь раскрыть таланты и вдохновить на творчество!"
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="circles" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-3 text-gray-900">Кружки</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-scale border-2 border-purple-100">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-50">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Palette" className="text-purple-600" />
                  Творческая мастерская
                </CardTitle>
                <CardDescription>Направление: Декоративно-прикладное искусство</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Target" size={18} className="text-orange-500" />
                    Цель:
                  </h4>
                  <p className="text-gray-700">Развитие творческих способностей детей через освоение различных техник декоративно-прикладного искусства</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="CheckCircle" size={18} className="text-green-500" />
                    Задачи:
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Обучение основам композиции и цветоведения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Развитие мелкой моторики и художественного вкуса</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Воспитание усидчивости и внимания к деталям</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Clock" size={18} className="text-blue-500" />
                    Расписание:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-100 text-purple-700">Пн 15:00-16:30</Badge>
                    <Badge className="bg-purple-100 text-purple-700">Ср 15:00-16:30</Badge>
                    <Badge className="bg-purple-100 text-purple-700">Пт 15:00-16:30</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-orange-100">
              <CardHeader className="bg-gradient-to-r from-orange-100 to-orange-50">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Scissors" className="text-orange-600" />
                  Волшебные ручки
                </CardTitle>
                <CardDescription>Направление: Рукоделие и дизайн</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Target" size={18} className="text-purple-500" />
                    Цель:
                  </h4>
                  <p className="text-gray-700">Формирование навыков работы с различными материалами и инструментами</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="CheckCircle" size={18} className="text-green-500" />
                    Задачи:
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Освоение техник оригами, квиллинга, скрапбукинга</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Развитие пространственного мышления</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Формирование эстетического вкуса</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Clock" size={18} className="text-blue-500" />
                    Расписание:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-700">Вт 14:00-15:30</Badge>
                    <Badge className="bg-orange-100 text-orange-700">Чт 14:00-15:30</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 hover-scale border-2 border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="flex items-center gap-2">
                <Icon name="BookOpen" className="text-blue-600" />
                Темы занятий
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Tabs defaultValue="autumn">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="autumn">Осень</TabsTrigger>
                  <TabsTrigger value="winter">Зима</TabsTrigger>
                  <TabsTrigger value="spring">Весна</TabsTrigger>
                  <TabsTrigger value="summer">Лето</TabsTrigger>
                </TabsList>
                <TabsContent value="autumn" className="space-y-2 mt-4">
                  <div className="p-3 bg-orange-50 rounded-lg hover-scale cursor-pointer">🍂 Осенние листья в технике декупаж</div>
                  <div className="p-3 bg-orange-50 rounded-lg hover-scale cursor-pointer">🎨 Панно "Золотая осень"</div>
                  <div className="p-3 bg-orange-50 rounded-lg hover-scale cursor-pointer">🍁 Композиция из природных материалов</div>
                </TabsContent>
                <TabsContent value="winter" className="space-y-2 mt-4">
                  <div className="p-3 bg-blue-50 rounded-lg hover-scale cursor-pointer">❄️ Новогодние игрушки ручной работы</div>
                  <div className="p-3 bg-blue-50 rounded-lg hover-scale cursor-pointer">⛄ Зимние открытки в технике скрапбукинг</div>
                  <div className="p-3 bg-blue-50 rounded-lg hover-scale cursor-pointer">🎄 Рождественские украшения</div>
                </TabsContent>
                <TabsContent value="spring" className="space-y-2 mt-4">
                  <div className="p-3 bg-green-50 rounded-lg hover-scale cursor-pointer">🌸 Весенние цветы из бумаги</div>
                  <div className="p-3 bg-green-50 rounded-lg hover-scale cursor-pointer">🦋 Бабочки в технике квиллинг</div>
                  <div className="p-3 bg-green-50 rounded-lg hover-scale cursor-pointer">🌷 Пасхальный декор</div>
                </TabsContent>
                <TabsContent value="summer" className="space-y-2 mt-4">
                  <div className="p-3 bg-yellow-50 rounded-lg hover-scale cursor-pointer">🌻 Летние композиции</div>
                  <div className="p-3 bg-yellow-50 rounded-lg hover-scale cursor-pointer">🐚 Морская тематика</div>
                  <div className="p-3 bg-yellow-50 rounded-lg hover-scale cursor-pointer">🌈 Яркие панно и аппликации</div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="methodology" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-3 text-gray-900">Методическая копилка</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'FileText', title: 'Учебные программы', count: '12 программ', color: 'bg-gradient-to-br from-purple-400 to-purple-600' },
              { icon: 'Lightbulb', title: 'Методические разработки', count: '25 материалов', color: 'bg-gradient-to-br from-orange-400 to-orange-600' },
              { icon: 'Video', title: 'Видеоуроки', count: '18 видео', color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
              { icon: 'FolderOpen', title: 'Конспекты занятий', count: '40+ занятий', color: 'bg-gradient-to-br from-green-400 to-green-600' },
              { icon: 'ClipboardCheck', title: 'Тесты и задания', count: '30 заданий', color: 'bg-gradient-to-br from-pink-400 to-pink-600' },
              { icon: 'Award', title: 'Проекты учеников', count: '50+ работ', color: 'bg-gradient-to-br from-indigo-400 to-indigo-600' },
            ].map((item, idx) => (
              <Card key={idx} className="hover-scale border-2 cursor-pointer group">
                <CardContent className="pt-6 text-center">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={item.icon} className="text-white" size={32} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="exhibitions" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-3 text-gray-900">Выставки и работы учеников</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { title: 'Осенняя фантазия', date: 'Октябрь 2024', img: 'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/3b60506d-7e6c-4f89-9a9f-8dbdd76b0a3f.jpg' },
              { title: 'Зимняя сказка', date: 'Декабрь 2024', img: 'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/ebbb63f4-c0dc-4eb9-9468-d2ea340804c3.jpg' },
              { title: 'Весенние мотивы', date: 'Март 2024', img: 'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/5f5d96f2-ae23-4b11-a474-dd696708c00b.jpg' },
              { title: 'Летний калейдоскоп', date: 'Июнь 2024', img: 'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/3b60506d-7e6c-4f89-9a9f-8dbdd76b0a3f.jpg' },
              { title: 'Новогодние чудеса', date: 'Декабрь 2023', img: 'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/ebbb63f4-c0dc-4eb9-9468-d2ea340804c3.jpg' },
              { title: 'День космонавтики', date: 'Апрель 2024', img: 'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/5f5d96f2-ae23-4b11-a474-dd696708c00b.jpg' },
              { title: 'Пасхальная радость', date: 'Апрель 2024', img: 'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/3b60506d-7e6c-4f89-9a9f-8dbdd76b0a3f.jpg' },
              { title: 'День Победы', date: 'Май 2024', img: 'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/ebbb63f4-c0dc-4eb9-9468-d2ea340804c3.jpg' },
            ].map((item, idx) => (
              <Card key={idx} className="hover-scale cursor-pointer group overflow-hidden border-2">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-4">
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 hover-scale border-2 border-purple-100">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="flex items-center gap-2">
                <Icon name="Camera" className="text-purple-600" />
                Фотографии с занятий
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {[
                  'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/5f5d96f2-ae23-4b11-a474-dd696708c00b.jpg',
                  'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/3b60506d-7e6c-4f89-9a9f-8dbdd76b0a3f.jpg',
                  'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/ebbb63f4-c0dc-4eb9-9468-d2ea340804c3.jpg',
                  'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/5f5d96f2-ae23-4b11-a474-dd696708c00b.jpg',
                  'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/3b60506d-7e6c-4f89-9a9f-8dbdd76b0a3f.jpg',
                  'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/ebbb63f4-c0dc-4eb9-9468-d2ea340804c3.jpg',
                  'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/5f5d96f2-ae23-4b11-a474-dd696708c00b.jpg',
                  'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/3b60506d-7e6c-4f89-9a9f-8dbdd76b0a3f.jpg',
                  'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/ebbb63f4-c0dc-4eb9-9468-d2ea340804c3.jpg',
                  'https://cdn.poehali.dev/projects/290e8a11-6867-4cae-8647-1740a18f63e3/files/5f5d96f2-ae23-4b11-a474-dd696708c00b.jpg',
                ].map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-lg hover-scale cursor-pointer overflow-hidden">
                    <img src={img} alt={`Занятие ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="games" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-3 text-gray-900">Игротека</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Puzzle', title: 'Творческие загадки', desc: 'Развиваем логику и воображение', color: 'bg-gradient-to-br from-purple-400 to-purple-600' },
              { icon: 'Dices', title: 'Игры на внимание', desc: 'Тренируем концентрацию', color: 'bg-gradient-to-br from-orange-400 to-orange-600' },
              { icon: 'Gamepad2', title: 'Командные активности', desc: 'Учимся работать в команде', color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
              { icon: 'Brain', title: 'Развивающие задачи', desc: 'Стимулируем мышление', color: 'bg-gradient-to-br from-green-400 to-green-600' },
              { icon: 'Sparkles', title: 'Творческие эстафеты', desc: 'Соревнуемся в креативности', color: 'bg-gradient-to-br from-pink-400 to-pink-600' },
              { icon: 'Trophy', title: 'Квесты и викторины', desc: 'Проверяем знания', color: 'bg-gradient-to-br from-indigo-400 to-indigo-600' },
            ].map((item, idx) => (
              <Card key={idx} className="hover-scale border-2 cursor-pointer">
                <CardContent className="pt-6">
                  <div className={`w-14 h-14 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon name={item.icon} className="text-white" size={28} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-3 text-gray-900">Достижения</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {[
              { 
                icon: 'Medal', 
                title: 'Победители городских конкурсов', 
                desc: '15 дипломов I степени в 2024 году',
                color: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
                items: ['Конкурс "Золотые руки" - 5 победителей', 'Фестиваль детского творчества - 7 призеров', 'Выставка "Мир глазами детей" - 3 лауреата']
              },
              { 
                icon: 'Award', 
                title: 'Областные достижения', 
                desc: '8 призовых мест на региональном уровне',
                color: 'bg-gradient-to-br from-orange-400 to-orange-600',
                items: ['Конкурс декоративно-прикладного искусства', 'Областная выставка детских работ', 'Фестиваль "Радуга талантов"']
              },
              { 
                icon: 'Trophy', 
                title: 'Всероссийские награды', 
                desc: '3 диплома всероссийских конкурсов',
                color: 'bg-gradient-to-br from-red-400 to-red-600',
                items: ['Онлайн-конкурс "Творческая Россия"', 'Всероссийская олимпиада по ИЗО', 'Конкурс "Талантливые дети России"']
              },
              { 
                icon: 'Star', 
                title: 'Благодарности педагогу', 
                desc: 'Признание профессиональных заслуг',
                color: 'bg-gradient-to-br from-purple-400 to-purple-600',
                items: ['Почетная грамота Министерства образования', 'Благодарность главы администрации города', 'Диплом "Педагог года" в номинации ДОП']
              },
            ].map((item, idx) => (
              <Card key={idx} className="hover-scale border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon name={item.icon} className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.items.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-3 text-gray-900">Контакты</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <Card className="hover-scale border-2 border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="text-center">Свяжитесь со мной</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-purple-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-700 text-sm">markina1722@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-gray-700 text-sm">+7 (905) 840-31-06</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-center">Мессенджеры</h4>
                <div className="flex justify-center gap-3 flex-wrap">
                  {[
                    { name: 'Telegram', icon: 'Send', color: 'from-blue-400 to-blue-600' },
                    { name: 'WhatsApp', icon: 'MessageCircle', color: 'from-green-400 to-green-600' },
                    { name: 'VK', icon: 'Users', color: 'from-indigo-400 to-indigo-600' },
                    { name: 'Viber', icon: 'Phone', color: 'from-purple-400 to-purple-600' },
                  ].map((messenger, idx) => (
                    <Button
                      key={idx}
                      className={`bg-gradient-to-r ${messenger.color} hover:scale-110 transition-transform gap-2`}
                    >
                      <Icon name={messenger.icon} size={18} />
                      {messenger.name}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gradient-to-r from-purple-900 to-orange-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Heart" className="text-red-400" size={20} />
            <p className="text-lg">Создано с любовью к творчеству и детям</p>
            <Icon name="Heart" className="text-red-400" size={20} />
          </div>
          <p className="text-white/80">© 2024 Портфолио педагога дополнительного образования</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;