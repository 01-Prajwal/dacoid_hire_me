import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

import './bar.css'

export default function Bars() {
    return (
        <div className="bar">
        <BarChart 
            series={[
                { data: [0, 0, 0, 0], stack: 'A', },
                { data: [0, 0, 0, 0], stack: 'A', },
                { data: [0, 0, 700, 0], stack: 'B', color: '#89A1FF' },
                { data: [0, 0, 200, 0], stack: 'B', color: 'green' },
                { data: [0, 0, 400, 400], stack: 'C', color: '#89A1FF' },
                { data: [0, 0, 0, 0], stack: 'C', },
                { data: [0, 0, 0, 150], stack: 'D', color: '#89A1FF' },
                { data: [0, 0, 0, 0], stack: 'D', },
                { data: [0, 0, 100, 290], stack: 'E', color: '#89A1FF' },
                { data: [0, 0, 0, 70], stack: 'E', color: '#fd9292' },
                { data: [0, 0, 0, 600], stack: 'F', color: '#89A1FF' },
                { data: [0, 0, 0, 300], stack: 'F', color: '#fd9292' },
                { data: [0, 0, 0, 400], stack: 'G', color: '#89A1FF' },
                { data: [0, 0, 0, 120], stack: 'G', color: '#fd9292' },
                { data: [0, 0, 0, 300], stack: 'H', color: '#89A1FF' },
                { data: [0, 0, 0, 90], stack: 'H', color: '#fd9292' },
                { data: [0, 0, 0, 0], stack: 'I', },
                { data: [0, 0, 470, 0], stack: 'I', color: '#89A1FF' },
                { data: [0, 0, 0, 0], stack: 'J', },
                { data: [0, 0, 90, 0], stack: 'J', color: '#89A1FF' },
                { data: [0, 0, 0, 0], stack: 'k', },
                { data: [0, 0, 70, 0], stack: 'K', color: '#89A1FF' },
                { data: [0, 0, 0, 0], stack: 'k', },
                { data: [0, 0, 0, 0], stack: 'k2', },
                { data: [0, 0, 0, 0], stack: 'k2', },
                { data: [0, 0, 0, 90], stack: 'k3', color: '#89A1FF' },
                { data: [0, 0, 0, 0], stack: 'k3', },
                { data: [0, 0, 100, 0], stack: 'l1', color: '#89A1FF' },
                { data: [0, 0, 0, 0], stack: 'l1', },
                { data: [0, 0, 0, 0], stack: 'l2', },
                { data: [0, 0, 0, 0], stack: 'l2', },
                { data: [0, 0, 100, 0], stack: 'l', color: '#89A1FF' },
                { data: [0, 0, 0, 0], stack: 'l', },
            ]}
            xAxis={[{ scaleType: 'band', data: ['12:00 AM', '6:00 AM', '12:00 PM','6:00 PM'] }]}
            // yAxis={[{ scaleType:'band',data:['900cal'] }]}

            // width={380}
            height={250}
        />
        </div>
    );
}
