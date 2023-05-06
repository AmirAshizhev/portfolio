import previewHachaton from './images/preview_hackaton.png' 
import previewHotel from './images/preview_hotel.png' 
import previewRissian from './images/preview_russian.png' 

export const projectData = [
  {
    name: 'Хакатон Яндекс', 
    stack: 'HTML, CSS, JS, SCSS, webpack', 
    ghLink: 'https://github.com/IgorTimonin/YandexHackathon', 
    link: 'https://yandex-hackathon.vercel.app/', 
    about: 'Проект, выполенный в рамках хакатона, - HR landing page, на которой рассказывается о вакансиях экспертов сопровождения и работе в Яндекс Практикуме. Эксперты сопровождения - это наставники и ревьюеры, работающие парт-тайм на обучающих курсах Практикума.',
    image: previewHachaton,
  },
  {
    name: 'Поисковик отелей', 
    stack: 'React.js, Redux, JavaScript, HTML5, CSS3', 
    ghLink: 'https://github.com/AmirAshizhev/simple-hotel-check', 
    link: 'https://amirashizhev.github.io/simple-hotel-check/', 
    about: 'описание',
    image: previewHotel,
  },
  {
    name: 'Место', 
    stack: 'React.js, JavaScript, HTML5, CSS3', 
    ghLink: 'https://github.com/AmirAshizhev/react-mesto-auth', 
    link: 'https://amirashizhev.github.io/react-mesto-auth/', 
    about: 'Учебный проект в рамках курса Яндекс.Практикума Веб-разработчик. Он представляет собой страничку, где можно размещать свои карточки, а так же смореть на карточки размещенные другими людьми. Присутствует возможность возможность регистрации пользователя, а также входа в систему зарегестрированному пользователю.',
    image: '',
  },
  {
    name: 'Поисковик фильмов', 
    stack: 'React.js, JavaScript, HTML5, CSS3, Node.js', 
    ghLink: 'https://github.com/AmirAshizhev/movies-explorer-frontend', 
    link: 'проект пока не размещен', 
    about: 'Дипломный проект в рамках завершения Яндекс.Практикума Веб-разработчик. ',
    image: '',
  },
  {
    name: 'Путешествие по России', 
    stack: 'HTML5, CSS3', 
    ghLink: 'https://github.com/AmirAshizhev/russian-travel', 
    link: 'https://amirashizhev.github.io/russian-travel/', 
    about: 'Учебный проект в рамках курса Яндекс.Практикума Веб-разработчик. Он представляет собой адаптивный под разные экраны лендинг с картинками и ссылками на статьи и ресурсы о путешествиях по России.',
    image: previewRissian,
  },
];
