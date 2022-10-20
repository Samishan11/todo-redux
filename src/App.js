import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import Todo from './components/Todo';

function App() {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className="card"
              id="list1"
              style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
            >
              <div className="card-body py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i className="fas fa-check-square me-1" />
                  Todo App
                </p>
                <Addtodo />
                <Todo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default App;
