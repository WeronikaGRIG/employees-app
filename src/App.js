import './App.css';
import AppInfo from './components/app-info/app-info';
import SearchPanel from './components/search-panel/search-panel';
import AppFilter from './components/app-filter/app-filter';
import EmployeesList from './components/employees-list/employees-list';
import EmployeesAddForm from './components/employees-add-form/emploeyees-add-form';


function App() {
  // имитация
  const data = [
    { name: 'Alex A.', salary: 800, increase: false },
    { name: 'John B.', salary: 3000, increase: true },
    { name: 'Max C.', salary: 5000, increase: false }
  ]



  return (
    <div className="App">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />

    </div>
  );
}

export default App;
