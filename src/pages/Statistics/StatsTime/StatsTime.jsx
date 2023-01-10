import { PositionMob, Title, TitleSpan, TimeData, Time, BlockSTats, NumberPage } from './StatsTime.styled';

const StatsTime = () => {
    return(
        <>
            <Title>
            <TitleSpan> Статистика </TitleSpan>
            </Title>

            <PositionMob>
                <BlockSTats>
                    <TimeData>10.10.2019</TimeData>
                    <Time>08:10:23</Time>
                    <Time><NumberPage> 32 </NumberPage>стор.</Time>
                </BlockSTats>
                <BlockSTats>
                    <TimeData>10.10.2019</TimeData>
                    <Time>08:10:23</Time>
                    <Time><NumberPage> 32 </NumberPage>стор.</Time>
                </BlockSTats>
                <BlockSTats>
                    <TimeData>10.10.2019</TimeData>
                    <Time>08:10:23</Time>
                    <Time><NumberPage> 32 </NumberPage>стор.</Time>
                </BlockSTats>
                
            </PositionMob>
        </>
    )
}

export default StatsTime;