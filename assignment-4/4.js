function Counter({ count, onIncrement }) {
    return (
        <div className="card m-2" style={{ width: '18rem' }}>
            <div className="card-body text-center">
                <h5 className="card-title">Counter</h5>
                <p className="card-text">{count}</p>
                <button className="btn btn-primary" onClick={onIncrement}>Increment</button>
            </div>
        </div>
    );
}

function CounterApp() {
    const [counters, setCounters] = React.useState([]);

    const addCounter = () => {
        setCounters([...counters, { id: counters.length + 1, count: 0 }]);
    };

    const incrementCounter = (id) => {
        setCounters(counters.map(counter =>
            counter.id === id ? { ...counter, count: counter.count + 1 } : counter
        ));
    };

    return (
        <div className="container mt-5">
            <button className="btn btn-success mb-4" onClick={addCounter}>Create Counter</button>
            <div className="row">
                  {counters.map((counter, index) => (
                    <div className="col-md-4" key={index}>
                        <Counter
                            count={counter.count}
                            onIncrement={() => incrementCounter(counter.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

ReactDOM.render(<CounterApp />, document.getElementById('root'));
