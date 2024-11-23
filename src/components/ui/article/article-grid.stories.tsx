import type { Meta, StoryObj } from '@storybook/react'
import { Article } from './article'
import { ArticleGrid } from './article-grid'

const meta: Meta<typeof ArticleGrid> = {
    title: 'Components/Article/ArticleGrid',
    component: ArticleGrid,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className="max-w-[1200px]">
                <Story />
            </div>
        ),
    ],
}

export default meta
type Story = StoryObj<typeof ArticleGrid>

const defaultArgsCard1 = {
    imageUrl: 'https://picsum.photos/350/200',
    title: 'Lorem ipsum dolor sit amet',
    subtitle: 'Pellentesque lacinia mollis',
    description:
        'Cras varius vulputate neque eu consequat. Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    buttonEvent: () => {
        console.log('Button clicked')
    },
}

const defaultArgsCard2 = {
    imageUrl: 'https://picsum.photos/350/200',
    title: 'Lorem ipsum dolor sit amet',
    subtitle: 'Pellentesque lacinia mollis',
    description:
        'Cras varius vulputate neque eu consequat. Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    buttonEvent: () => {
        console.log('Button clicked')
    },
}

const defaultArgs = {
    className: 'bg-white',
    children: (
        <div className="flex w-full flex-wrap justify-center space-x-0 space-y-8 xl:space-y-0 xl:space-x-8">
            <div className="w-full max-w-[400px]">
                <Article {...defaultArgsCard1} />{' '}
            </div>
            <div className="w-full max-w-[400px]">
                <Article {...defaultArgsCard2} variant="secondary" />
            </div>
        </div>
    ),
}

export const Default: Story = {
    args: {
        ...defaultArgs,
    },
}
