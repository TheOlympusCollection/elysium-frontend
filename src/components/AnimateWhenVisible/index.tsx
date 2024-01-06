import { useInView } from 'framer-motion';
import { PropsWithChildren, useRef } from 'react';

export interface AnimationEffect {
    transform: string;
    fade: boolean;
}

export enum AnimationEasing {
    CubicBezier = 'cubic-bezier(0.17, 0.55, 0.55, 1)',
}

export interface AnimationProps {
    effect?: AnimationEffect;
    duration?: number;
    delay?: number;
    easing?: AnimationEasing;
}

export namespace AnimationEffects {
    export const FadeIn: AnimationEffect = {
        transform: '',
        fade: true,
    };
    export const FadeInLeft: AnimationEffect = {
        transform: 'translateX(-200px)',
        fade: true,
    };
    export const FadeInRight: AnimationEffect = {
        transform: 'translateX(200px)',
        fade: true,
    };

    export const FlyInLeft: AnimationEffect = {
        transform: 'translateX(-70vw)',
        fade: false,
    };
    export const FlyInRight: AnimationEffect = {
        transform: 'translateX(70vw)',
        fade: false,
    };
}

const AnimateWhenVisible = (props: PropsWithChildren<AnimationProps>) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    let transform;
    let fade;
    let opacity;
    const duration =
        props.duration === undefined ? '1.0s' : props.duration + 's';
    const easing = props.easing === undefined ? '' : props.easing;
    const delay = props.delay === undefined ? '0.0s' : props.delay + 's';

    if (props.effect === undefined) {
        transform = AnimationEffects.FadeIn.transform;
        fade = AnimationEffects.FadeIn.fade;
    } else {
        transform = props.effect.transform;
        fade = props.effect.fade;
    }

    if (fade) {
        opacity = isInView ? 1 : 0;
    } else {
        opacity = 1;
    }

    return (
        <div
            ref={ref}
            style={{
                transform: isInView ? 'none' : transform,
                opacity: opacity,
                transition: `all ${duration} ${easing} ${delay}`,
            }}
        >
            {props.children}
        </div>
    );
};

export default AnimateWhenVisible;
