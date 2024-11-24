import type { Meta, StoryObj } from '@storybook/react'
import { defaultArgsCard1, defaultArgsCard2 } from '../../../constants/articles'
import { Article } from './article'
import { ArticleGrid } from './article-grid'

const meta: Meta<typeof ArticleGrid> = {
    title: 'Components/Article/ArticleGrid',
    component: ArticleGrid,
    decorators: [
        (Story) => (
            <div className="max-w-[1200px] p-24">
                <Story />
            </div>
        ),
    ],
}

export default meta
type Story = StoryObj<typeof ArticleGrid>

const defaultArgs = {
    className: 'bg-white',
    children: (
        <div className="flex w-full flex-wrap justify-center space-x-0 space-y-8 lg:space-y-0 lg:space-x-8 p-2">
            <div className="w-full max-w-[436px]">
                <Article {...defaultArgsCard1} />{' '}
            </div>
            <div className="w-full max-w-[436px]">
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
