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
import {ModalWrapper} from '../ModalWrapper';
import {useAddBookReviewMutation} from '../../../redux/books/booksSlice';

const RatingModal = ({ closeModal, bookId }) => {
    const { handleSubmit, control } = useForm();
    const [ratingErr, setRatingErr] = useState(null);

    const [addReview] = useAddBookReviewMutation();

    const onSubmit = data => {
        addReview({ ...data, id: bookId });
        closeModal();
    };

    const onError = err => setRatingErr(err.rating.message);

    return (
        <>
            <ModalWrapper closeModal={closeModal} variant={'input'}>
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
                        name={'resume'}
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
            </ModalWrapper>
        </>
    );
};

export default RatingModal;
