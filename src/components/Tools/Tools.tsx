import styles from './Tools.module.css'


import IconTS from '/assets/ts.svg'
import IconNodeJS from '/assets/nodejs.svg'
import IconNextJS from '/assets/next.svg'
import IconNest from '/assets/nestjs.svg'
import IconReactNative from '/assets/rnative.svg'
import LazyLoad from 'react-lazy-load';

/*
import IconMongoDB from '/assets/mongodb.svg'
import IconMySQL from '/assets/mysql.svg'
import IconFirebase from '/assets/firebase.svg'
import IconPostgree from '/assets/postgree.png'
import IconVite from '/assets/vite.svg'
import IconTailwind from '/assets/tail.svg'
import IconBootstrap from '/assets/bootstrap.svg'
import IconVueJS from '/assets/vuejs.svg'
import IconJS from '/assets/js.svg'
import IconSass from '/assets/sass.svg'
import IconGrafQL from '/assets/grafql.png'
import IconFigma from '/assets/figma.svg'
import IconJest from '/assets/jest.png'
import IconChacka from '/assets/chacka.svg'
import IconReact from '/assets/react.svg'

*/

/*
const imgs = [IconJS, IconTS, IconReact, IconNodeJS, IconNextJS, IconVueJS, IconNest, IconReactNative, IconMongoDB, IconMySQL, IconFirebase,
IconPostgree, IconVite, IconTailwind, IconBootstrap, IconSass, IconGrafQL, IconFigma, IconJest, IconChacka
]
*/


const imgs = [IconTS,IconNodeJS, IconNextJS, IconNest, IconReactNative]

export const Tools = () => {


  return (
    <div className={styles.container}>
      {
        imgs.map(e =>
          <LazyLoad>
          <img src={e}  className={styles.skill} />
          </LazyLoad>
          )
      }
    </div>
  )

}

