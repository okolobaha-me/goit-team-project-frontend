import { useForm } from 'react-hook-form';
import { Button, Input, Label, Form, Icon, Wrapper } from './FormLibrary.styled';
import icons from '../../images/svg/icons.svg';
import { NavLink } from 'react-router-dom';

const FormLibrary = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        reset();
    };
    return (
        <Wrapper>
            <NavLink>
                <Icon width="24" height="12">
                    <use href={`${icons}#icon-arrowBack`} />
                </Icon>
            </NavLink>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label>
                    Назва книги
                    <Input
                        {...register('title', { required: true })}
                        type="text"
                        name="title"
                        placeholder="..."
                        variant={'border'}
                    />
                </Label>
                <Label>
                    Автор книги
                    <Input
                        {...register('author', { required: true })}
                        type="text"
                        name="author"
                        placeholder="..."
                    />
                </Label>
                <Label>
                    Рік випуску
                    <Input
                        {...register('publicationDate', { required: false })}
                        type="number"
                        name="publicationDate"
                        placeholder="..."
                    />
                </Label>
                <Label>
                    Кількість сторінок
                    <Input
                        {...register('pages', { required: true })}
                        type="number"
                        name="pages"
                        placeholder="..."
                    />
                </Label>

                <Button type="submit" variant={'transparent'}>
                    Додати
                </Button>
            </Form>
        </Wrapper>
    );
};

export default FormLibrary;
