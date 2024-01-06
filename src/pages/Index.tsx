import { useContext, useRef } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';
import { useInView } from 'framer-motion';
import AnimateWhenVisible, {
    AnimationEffects,
} from '../components/AnimateWhenVisible';

const IndexPage = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const { user, setUser } = useContext(UserContext);

    const animate = useRef(null);
    const isInView = useInView(animate, { once: true });

    return (
        <>
            <div
                className='flex flex-col justify-center items-center text-center text-7xl sm:text-9xl h-[85vh] mb-[15vh]'
                ref={animate}
            >
                <AnimateWhenVisible
                    effect={AnimationEffects.FadeInLeft}
                    delay={0.2}
                    duration={1.8}
                >
                    <h1 className='mb-4'>This is</h1>
                </AnimateWhenVisible>
                <AnimateWhenVisible
                    effect={AnimationEffects.FadeInRight}
                    delay={0.5}
                    duration={1.8}
                >
                    <h1 className='text-rainbow font-spectral font-bold'>
                        Elysium
                    </h1>
                </AnimateWhenVisible>
            </div>

            <AnimateWhenVisible
                effect={AnimationEffects.FadeInLeft}
                delay={0.2}
            >
                <div className='flex flex-col text-center text-5xl sm:text-6xl p-12 my-[30vh]'>
                    <h2>
                        The next gen{' '}
                        <span className='text-rainbow'>cloud computing</span>{' '}
                        platform.
                    </h2>
                </div>
            </AnimateWhenVisible>

            <AnimateWhenVisible
                effect={AnimationEffects.FadeInRight}
                delay={0.2}
            >
                <div className='flex flex-col text-center text-5xl sm:text-6xl p-12 mt-[60vh] mb-[40vh]'>
                    <h2>Tailored to fit developer's needs. </h2>{' '}
                </div>
            </AnimateWhenVisible>

            <AnimateWhenVisible
                effect={AnimationEffects.FadeInLeft}
                delay={0.2}
            >
                <div className='flex flex-col text-center text-5xl sm:text-6xl p-12 my-[60vh]'>
                    <h2 className='text-rainbow'>Anywhere.</h2>
                </div>
            </AnimateWhenVisible>

            <AnimateWhenVisible
                effect={AnimationEffects.FadeInRight}
                delay={0.2}
            >
                <div className='flex flex-col text-center text-5xl sm:text-6xl p-12 my-[60vh]'>
                    <h2 className='text-rainbow'>Anytime.</h2>
                </div>
            </AnimateWhenVisible>

            {/* <button */}
            {/*     onClick={() => */}
            {/*         setTheme(theme == Theme.Dark ? Theme.Light : Theme.Dark) */}
            {/*     } */}
            {/* > */}
            {/*     Theme */}
            {/* </button> */}
            {/* <button onClick={() => setUser({ name: 'asdf' })}> */}
            {/*     set logged in */}
            {/* </button> */}
            {/* <button onClick={() => setUser(null)}>set logged out</button> */}
        </>
    );
};

export default IndexPage;
