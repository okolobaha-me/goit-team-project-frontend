import {
    Button,
    DatePickerCustom,
    DatesList,
    Form,
    Icon,
    Input,
    Label,
    Title,
    Wrapper,
    WrapperOdLabels,
} from './Results.styled';
import icons from '../../images/svg/icons.svg';
import moment from 'moment';
import { useState } from 'react';
import { useAddUpdateStatisticMutation } from '../../redux/books/booksSlice';
import { compareAsc, format } from 'date-fns';
import { DateItem } from './DateItem';
import CongratulationsModal from '../Modals/CongratulationsModal';
import TrainingFinishedModal from '../Modals/TrainingFinishedModal/TrainingFinishedModal';
import { WellDoneModal } from '../Modals';

export function Results({ results, endDate, minDate }) {
    const [pages, setPages] = useState(0);
    const [date, setDate] = useState(null);
    const [isWellDoneModalOpen, setIsWellDoneModalOpen] = useState(false);
    const [isTrainingFinishedModalOpen, setIsTrainingFinishedModalOpen] =
        useState(false);
    const [isCongratulationsModalOpen, setIsCongratulationsModalOpen] =
        useState(false);
    const [addInfo] = useAddUpdateStatisticMutation();

    const handleSubmit = e => {
        e.preventDefault();
        addInfo({ date: format(date._d, 'yyyy-MM-dd'), pages }).then(r => {
            if (r.data.message === 'Plan finished') {
                if (compareAsc(new Date(endDate), new Date()) === 1) {
                    setIsTrainingFinishedModalOpen(true);
                } else {
                    setIsWellDoneModalOpen(true);
                }
            }

            if (r.data.message === 'Book finished') {
                setIsCongratulationsModalOpen(true);
            }
        });
    };

    const closeModals = () => {
        setIsWellDoneModalOpen(false);
        setIsCongratulationsModalOpen(false);
        setIsTrainingFinishedModalOpen(false);
    };

    const disabledDate = current => {
        return current && current.valueOf() > Date.now();
    };

    return (
        <>
            <Wrapper>
                <Title>Результати</Title>
                <Form>
                    <WrapperOdLabels>
                        <Label>
                            Дата
                            <DatePickerCustom
                                disabledDate={disabledDate}
                                // minDate={new Date(minDate)}
                                // maxDate={moment()._d}
                                format="DD.MM.YY"
                                defaultValue={moment()}
                                onChange={setDate}
                                suffixIcon={
                                    <Icon>
                                        <use href={`${icons}#icon-polygon`} />
                                    </Icon>
                                }
                            />
                        </Label>
                        <Label>
                            Кількість сторінок
                            <Input
                                defaultValue={pages}
                                onChange={setPages}
                            ></Input>
                        </Label>
                    </WrapperOdLabels>
                    <Button type="submit" onClick={handleSubmit}>
                        Додати результат
                    </Button>
                </Form>
                <Title>СТАТИСТИКА</Title>
                <DatesList>
                    {results.slice(-5).map((item, index) => {
                        return <DateItem key={index} data={item}></DateItem>;
                    })}
                </DatesList>
            </Wrapper>

            {isWellDoneModalOpen && <WellDoneModal closeModal={closeModals} />}
            {isTrainingFinishedModalOpen && (
                <TrainingFinishedModal closeModal={closeModals} />
            )}
            {isCongratulationsModalOpen && (
                <CongratulationsModal closeModal={closeModals} />
            )}
        </>
    );
}
