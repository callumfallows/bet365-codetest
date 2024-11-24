import { Article } from '../../components/ui/article/article'
import { ArticleGrid } from '../../components/ui/article/article-grid'
import { defaultArgsCard1, defaultArgsCard2 } from '../../constants/articles'

export default function HomePage() {
    return (
        <div className="min-h-screen flex min-w-full flex-col items-center justify-center">
            <ArticleGrid className="p-4 xl:p-24 bg-[#191B24] max-width[800px] rounded-xl py-8">
                <div className="flex w-full flex-wrap justify-center space-x-0 space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="max-w-[436px] m-0">
                        <Article {...defaultArgsCard1} />
                    </div>
                    <div className="max-w-[436px] m-0">
                        <Article {...defaultArgsCard2} variant="secondary" />
                    </div>
                </div>
            </ArticleGrid>
        </div>
    )
}
