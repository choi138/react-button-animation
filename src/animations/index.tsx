import { useEffect, useRef } from 'react'
import * as S from './styled'

function Animation() {
    const ref = useRef<any>()

    const size = 100; // px
    const color = "#fff";
    const duration = 4000; // s

    useEffect(() => {
        const applyContainer = () => {
            ref.current.classList.add('effect-container');
        };

        const applyStyles = (e: any) => {
            const { offsetX, offsetY } = e;
            const { style } = ref.current;
            const sizeOffset = 50;

            style.setProperty('--effect-duration', `${duration}ms`);
            style.setProperty('--effect-top', `${offsetY - sizeOffset}px`);
            style.setProperty('--effect-left', `${offsetX - sizeOffset}px`);
            style.setProperty('--effect-height', `${size}px`);
            style.setProperty('--effect-width', `${size}px`);
            style.setProperty('--effect-color', color );
        }

        const onClick = (e: any) => {
            ref.current.classList.remove('active');
            applyStyles(e)
            ref.current.classList.add('active');
        }

        applyContainer();

        ref.current.addEventListener('mouseup', onClick);

        const cleanupRef = ref.current;

        return () => {
            cleanupRef.removeEventListener('mouseup', onClick);
        }
    }, [])
    return (
        <>
            <S.Wrapper>
                <S.Title>Hello</S.Title>
                <S.ButtonDiv ref={ref}>
                    <S.Button>Button</S.Button>
                </S.ButtonDiv>
            </S.Wrapper>
        </>
    )
}

export default Animation