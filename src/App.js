import './App.css';
import MyNavButtons from './components/MyNavButtons';

function App() {

  const SkillsSelectedData = [
  { id:'1', name: "Esprit de synthèse"},
  { id:'2', name: "Travail en équipe"},
  { id:'3', name: "Skill selected name here"}
  ];

  const SkillsData = [
  
  { id:'4', name: "Skill name here"},
  { id:'5', name: "Rigoureux"},
  { id:'6', name: "Skill name here"},
  { id:'7', name: "Engagé"},
  { id:'8', name: "Empathie"},
  { id:'9', name: "Communication"},
  { id:'10', name: "Skill name here"},
  { id:'14', name: "Ambitieux"},
  { id:'15', name: "Skill name here"},
  { id:'16', name: "Créatif"},
  { id:'17', name: "Skill name here"},
  { id:'18', name: "Empathie"},
  { id:'19', name: "Communication"},
  { id:'20', name: "Skill name here2"},
];

  return (
    <div className="App">
      <div className="menu">menu</div>

      <div className="page">
        <div className="header">HEADER</div>
        <div className="page-content">
          <div className="page-name">Macro-skill creation <span className="badge">BETA</span></div>
          <div className="AllContent">
            
            <div><MyNavButtons SkillsData={SkillsData} skillsSelected={SkillsSelectedData}/></div>
            <div className="react-form-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
