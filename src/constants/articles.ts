import articleIamge1 from '../assets/articles/article-image-1.png'

import articleIamge2 from '../assets/articles/article-image-2.png'

export const defaultArgsCard1 = {
    imageUrl: articleIamge1,
    title: 'Lorem ipsum dolor sit amet',
    subtitle: 'Pellentesque lacinia mollis',
    description:
        'Cras varius vulputate neque eu consequat. Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    buttonEvent: () => {
        console.log('Button clicked')
    },
}

export const defaultArgsCard2 = {
    imageUrl: articleIamge2,
    title: 'Lorem ipsum dolor sit amet',
    subtitle: 'Pellentesque lacinia mollis',
    description:
        'Cras varius vulputate neque eu consequat. Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    buttonEvent: () => {
        console.log('Button clicked')
    },
}
