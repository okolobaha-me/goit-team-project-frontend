import {NumberDay, StatisticsHome, TextStats} from './Graph.styled';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,} from 'recharts';

export const Graph = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;
    let isTablet = window.matchMedia('(max-width: 1279px)').matches;

    const data = [
        {
            uv: 120,
            pv: 100,
        },
        {
            uv: 100,
            pv: 100,
        },
        {
            uv: 76,
            pv: 100,
        },
        {
            uv: 50,
            pv: 100,
        },
        {
            uv: 67,
            pv: 100,
        },
        {
            uv: 150,
            pv: 100,
        },
        {
            uv: 120,
            pv: 100,
        },
        {
            uv: 90,
            pv: 100,
        },
    ];

    const visibleData = () => {
        if (isMobile) return data.slice(data.length - 3);

        if (isTablet) return data.slice(data.length - 6);

        return data;
    };

    const getGraphHeight = () => {
        if (isMobile) return 210;

        return 235;
    };

    const averagePages = 35;

    return (
        <StatisticsHome>
            <TextStats>
                Кількість сторінок / день <NumberDay>{averagePages}</NumberDay>
            </TextStats>
            <ResponsiveContainer width="100%" height={getGraphHeight()}>
                <LineChart data={visibleData()}>
                    <CartesianGrid vertical horizontal={false} />
                    <XAxis
                        dataKey="name"
                        label={{
                            value: 'Час',
                            position: 'insideBottomRight',
                            offset: 0,
                        }}
                        stroke="#B1B5C2"
                        tickLine={false}
                    />
                    <YAxis hide={true} padding={{ top: 40, bottom: 20 }} />
                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#091E3F"
                        strokeWidth={2}
                        activeDot={{ r: 5 }}
                        animationDuration={400}
                    />

                    <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#FF6B08"
                        strokeWidth={2}
                        activeDot={{ r: 5 }}
                        animationDuration={1300}
                    />
                </LineChart>
            </ResponsiveContainer>
        </StatisticsHome>
    );
};
