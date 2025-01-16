import Ratings from '@/Utils/Ratings'
import { Styles } from '@/Utils/style'
import { Avatar } from '@nextui-org/react'
import React from 'react'

type Props = {}

function ReviewCard({}: Props) {
  return (
    <div className="flex my-2">
    <div>
      <Avatar size="lg" src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/471258664_2255659494814304_2573653259977591654_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gtvK1iaNaJ0Q7kNvgGmVyC7&_nc_oc=Adjg3NaU3xRdV3Cqw1J7_yFUEaQfsQKOnPux0HkZvx1FC3fqcXHYMgGLSMeKwSmlAU0&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=AH4AbZ4nyfLmYMd0JrsfIsb&oh=00_AYBQ9hCCYoTqRgMwl-EKWNlckkD0NIvYwyZDQT2UR3p40Q&oe=678EAE06" />
    </div>
    <div className="pl-3">
      <div className="flex items-center">
        <span className={`${Styles.label} !text-xl text-white`}>
          {'badhon'}
        </span>
        <span className={`${Styles.label} pl-3`}>
          {'30 days ago'}
        </span>
        <Ratings rating={3.5} />
      </div>
      <p className={`${Styles.paragraph} whitespace-pre-line`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos itaque enim dicta debitis labore temporibus excepturi natus ratione laborum consectetur deserunt sit laboriosam nobis mollitia eligendi a nisi, magni voluptatibus?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos itaque enim dicta debitis labore temporibus excepturi natus ratione laborum consectetur deserunt sit laboriosam nobis mollitia eligendi a nisi, magni voluptatibus?
      </p>
    </div>
  </div>
  )
}

export default ReviewCard