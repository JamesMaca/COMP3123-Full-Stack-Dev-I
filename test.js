{forecast && (
    <div>
        <h3>5-Day Forecast</h3>
        <ul>
            {forecast.list.reduce((acc, item) => {
                const date = new Date(item.dt * 1000).toLocaleDateString('en-US');
                if (!acc.some(day => day.date === date)) {
                    acc.push({ date, temp: item.main.temp });
                }
                return acc;
            }, []).slice(0, 5).map(day => (
                <li key={day.date}>
                    {day.date}: {day.temp}°C
                </li>
            ))}
        </ul>
    </div>
)}
