import image from '../image/image.png'
import {ColumnBlock, ImageBlock, TextBlock, TitleBlock} from "./classes/Block";

export const model = [
    new TitleBlock("WebSite Constructor in JS by Nazirov",{
        tag:"h2",
        styles:{
            background:'linear-gradient(to right,#b3b3ff,#000080)',
            color:'#fff',
            padding:'1.5rem',
            'text-align':'center'
        }
    }),
    new ImageBlock(image,{
        ImageStyle:{
            width:'200px',
            height:'auto',
        },
        alt:'Image',
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        }
    }),
    new ColumnBlock([
        'Для использование конструктора нужно в поля value вводить значение например для text это какой нибудь текст а для image это url. \n',
        'В поля styles нужно написать стили к данному блоку в виде color:#000; для того чтобы заработал стиль нужно обязательно ставить точку с запятой.\n',
        'И у некоторых блоков есть 3 поле ввода где зависимости от блока вводится значение например для блока text,title этот тег с которым чтобы значениях этих блоках отображались. Для image alt . Для video формат видео например mp4.Для link ссылка. А для кнопки action.\n'],{
        styles: {
            background: 'linear-gradient(to bottom,#b3b3ff,#000080)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new TextBlock("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fuga laudantium nesciunt.",{
        styles: {
            background: 'linear-gradient(to left,#f2994a,#f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })

]
