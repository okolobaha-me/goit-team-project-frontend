import {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {Controller, useForm} from 'react-hook-form';

import {
    Backdrop,
    Button,
    ButtonWrapper,
    ErrWrapper,
    Form,
    Input,
    InputName,
    Label,
    ModalContainer,
    ModalContent,
    StyledRating,
    Title,
} from './ModalWrapper.styled';

export const ModalWrapper = ({ closeModal }) => {
    const modalRoot = document.querySelector('#modal-root');
    const { handleSubmit, control } = useForm();
    const [ratingErr, setRatingErr] = useState(null);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        const root = document.getElementById('root');
        const bodyStyle = document.body.style;
        root.style.pointerEvents = 'none';
        bodyStyle.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            root.style.pointerEvents = 'auto';
            bodyStyle.overflow = 'visible';
        };
    });

    const handleKeyDown = event => {
        if (event.code === 'Escape') {
            closeModal();
        }
    };

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            closeModal();
        }
    };

    const onSubmit = data => {
        console.log(data);
    };
    const onError = err => setRatingErr(err.rating.message);

    return createPortal(
        <Backdrop onClick={handleBackdropClick}>
            <ModalContainer variant={'input'}>
                <ModalContent>
                    <Title>Обрати рейтинг книги</Title>
                    <Form>
                        <Controller
                            name={'rating'}
                            control={control}
                            rules={{
                                required:
                                    'Поставте оцінку щоб відправити відгук',
                            }}
                            render={({ field: { onChange, value } }) => (
                                <ErrWrapper>
                                    <StyledRating
                                        name="simple-controlled"
                                        value={Number(value)}
                                        onChange={newValue => {
                                            setRatingErr(null);
                                            onChange(newValue);
                                        }}
                                    />
                                    {ratingErr && <p>{ratingErr}</p>}
                                </ErrWrapper>
                            )}
                        />

                        <Controller
                            name={'comment'}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Label>
                                    <InputName>Резюме</InputName>
                                    <Input
                                        placeholder={'...'}
                                        value={value}
                                        onChange={onChange}
                                    />
                                </Label>
                            )}
                        />
                        <ButtonWrapper>
                            <Button
                                onClick={closeModal}
                                variant={'transparent'}
                            >
                                Назад
                            </Button>
                            <Button
                                onClick={handleSubmit(onSubmit, onError)}
                                variant={'accent'}
                            >
                                Зберегти
                            </Button>
                        </ButtonWrapper>
                    </Form>
                </ModalContent>
            </ModalContainer>
        </Backdrop>,
        modalRoot
    );
};
