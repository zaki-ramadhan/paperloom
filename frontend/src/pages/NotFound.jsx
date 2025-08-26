import Button from '@/components/Button';
import { ArrowUpLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <section className="min-w-screen min-h-screen bg-base-200 flex flex-col justify-center items-center">
            <span className="absolute top-1/2 left-1/2 -translate-1/2 text-[28rem] font-semibold bg-gradient-to-t bg-clip-text from-base-300/0 from-20% to-stone-400 text-transparent select-none tracking-tighter mix-blend-hard-light opacity-15 animate-pulse">404</span>
            <div className="overlay-mask absolute inset-0 bg-base-300/60 z-10"></div>
            <div className="content-wrp flex flex-col gap-3 z-20">
                <h1 className="text-7xl font-medium">Oops...</h1>
                <p className="text-xl text-stone-400 font-normal leading-relaxed">Page not found. <br/> It looks you're heading in the wrong direction.</p>
                <Button isLink to="/" className="btn pl-4 pr-6 mt-4 w-fit text-lg py-3 font-medium">
                    <ArrowUpLeft className='-mr-0.5 size-6'/>
                    Go Back
                </Button>
            </div>
        </section>
    )
}

export default NotFound
