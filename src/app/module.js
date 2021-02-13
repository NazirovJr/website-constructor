import image from '../image/image.png'
import {ColumnBlock, ImageBlock, TextBlock, TitleBlock} from "./classes/Block";

export const model = [
    new TitleBlock("Hello world",{
        tag:"h2",
        styles:{
            background:'linear-gradient(to right,#ff0099,#493240)',
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
    new ColumnBlock(['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut ea nam omnis quod sequi?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut ea nam omnis quod sequi?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut ea nam omnis quod sequi?'],{
        styles: {
            background: 'linear-gradient(to bottom,#8e2de2,#4a00e0)',
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
