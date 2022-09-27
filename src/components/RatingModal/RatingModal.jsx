import {
    Button,
    ButtonWrapper,
    ErrWrapper,
    Form,
    Input,
    InputName,
    Label,
    StyledRating,
    Title,
} from './RatingModal.styled';
import {Controller, useForm} from 'react-hook-form';
import {useState} from 'react';

export const RatingModal = ({ closeModal }) => {
    const { handleSubmit, control } = useForm();
    const [ratingErr, setRatingErr] = useState(null);

    const onSubmit = data => {
        console.log(data);
        closeModal();
    };

    const onError = err => setRatingErr(err.rating.message);

    return (
        <>
            <Title>Обрати рейтинг книги</Title>
            <Form>
                <Controller
                    name={'rating'}
                    control={control}
                    rules={{
                        required: 'Поставте оцінку щоб відправити відгук',
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
                    <Button variant={'transparent'} onClick={closeModal}>
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
        </>
    );
};
