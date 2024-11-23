import type { Meta, StoryObj } from '@storybook/react'
import { Article } from './article'

const meta: Meta<typeof Article> = {
    title: 'Components/Article',
    component: Article,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className="max-w-[436px]">
                <Story />
            </div>
        ),
    ],
}

export default meta
type Story = StoryObj<typeof Article>

const defaultArgs = {
    imageUrl: 'https://picsum.photos/350/200',
    title: 'Lorem ipsum dolor sit amet',
    subtitle: 'Pellentesque lacinia mollis',
    description:
        'Cras varius vulputate neque eu consequat. Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    buttonEvent: () => {
        console.log('Button clicked')
    },
}

export const Default: Story = {
    args: {
        ...defaultArgs,
    },
}

export const PrimaryVariant: Story = {
    args: {
        ...defaultArgs,
        variant: 'primary',
    },
}
export const SecondaryVariant: Story = {
    args: {
        ...defaultArgs,
        variant: 'secondary',
    },
}

export const LongContent: Story = {
    args: {
        ...defaultArgs,
        description: `Cras varius vulputate neque eu consequat. 
        Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras varius vulputate neque eu consequat. Vivamus placerat rutrum elit. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras varius vulputate neque eu consequat. 
        Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras varius vulputate neque eu consequat. Vivamus placerat rutrum elit. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas`,
    },
}

export const NoImage: Story = {
    args: {
        ...defaultArgs,
        imageUrl: '',
        title: 'A Very Long Title That Might Wrap to Multiple Lines',
        subtitle: 'This is a longer subtitle that could potentially wrap to multiple lines as well',
        description:
            'Cras varius vulputate neque eu consequat. Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras varius vulputate neque eu consequat. Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    },
}

export const NoSubtile: Story = {
    args: {
        ...defaultArgs,
        subtitle: '',
    },
}
