import { motion } from 'framer-motion'
import { Button } from '../button'
import { Card, CardContent, CardFooter, CardHeader } from '../card'

import defaultIcon from '../../../assets/icon--customer-service-2-fill.svg'

interface ArticleProps {
    imageUrl?: string
    title: string
    subtitle?: string
    description: string
    buttonText?: string
    variant?: 'primary' | 'secondary'
    buttonEvent?: () => void
}

export function Article({
    imageUrl,
    title,
    subtitle,
    description,
    variant = 'primary',
    buttonEvent,
    buttonText = 'Start',
}: ArticleProps) {
    return (
        <motion.div
            whileHover={{
                scale: 1.1,
            }}
        >
            <Card className="w-full overflow-hidden border-0 shadow-none bg-black spacey-y-0">
                <article>
                    {imageUrl && (
                        <div className="relative w-full">
                            <img src={imageUrl} alt={title} className="object-cover w-full h-full " />
                        </div>
                    )}
                    <section className="p-[18px]">
                        <CardHeader className="p-0 space-y-0 text-left">
                            <p className="text-[18px] font-bold text-subtitle">{subtitle}</p>
                            <h2
                                className={`text-[28px] font-bold ${
                                    variant === 'primary' ? 'text-primary' : 'text-secondary'
                                } p-0 m-0 `}
                            >
                                {title}
                            </h2>
                        </CardHeader>
                        <CardContent className="drop-shadow-none p-0 pt-4 text-left">
                            <p className="text-lg text-white">{description}</p>
                        </CardContent>
                        {buttonEvent && (
                            <CardFooter className="p-0 mt-[18px]">
                                <Button
                                    onClick={buttonEvent}
                                    className={`w-fit rounded-3xl ml-auto text-white ${
                                        variant === 'primary' ? 'bg-primarybg' : 'bg-secondarybg'
                                    }`}
                                >
                                    {buttonText} <img src={defaultIcon} alt="Start" className="w-[18px]" />
                                </Button>
                            </CardFooter>
                        )}
                    </section>
                </article>
            </Card>
        </motion.div>
    )
}
