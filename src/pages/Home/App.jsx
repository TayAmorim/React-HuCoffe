import Logo from "../../assets/logo.svg";
import "./App.css";
import { CardPlan } from "../../Components/card-plan";

const plano300 = ["2 Microlotes com 150g", "Caneca exclusiva com seu nome"];
const plano500 = [
  "2 Microlotes com 150g",
  "Caneca exclusiva com seu nome",
  "1 pacote de 200g especial",
];
const plano3000 = [
  "2 Microlotes com 500g",
  "Caneca exclusiva com seu nome",
  "2 pacotes de cafés especial de 3500kg ",
  "Kit Koar acrílico",
];

function App() {
  return (
    <div className="App">
      <header className="header-home">
        <img src={Logo} alt="Logo HuCoffe" />
        <section className="header-text">
          <h1>Conheça nossos planos</h1>
          <p>
            Seja onde for, em casa, sozinho ou em encontro com os amigos, ter os
            melhores cafés disponíveis, faz toda a diferença.
          </p>
        </section>
      </header>
      <main>
        <CardPlan
          name="Plano 300"
          price="100,00"
          description="300g de café por mês."
          benefits={plano300}
          popular={false}
        />
        <CardPlan
          name="Plano 500"
          price="180,00"
          description="500g de café por mês.  "
          benefits={plano500}
          popular={true}
        />
        <CardPlan
          name="Plano 3000"
          price="290,00"
          description="3kg de café por mês. "
          benefits={plano3000}
          popular={false}
        />
      </main>
    </div>
  );
}

export default App;
