import Header from './components/Header.jsx';
import { CORE_CONCEPTS } from './data';

function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreConcept) => <CoreConcept
                title={coreConcept.title}
                description={coreConcept.description}
                image={coreConcept.image}
              />
            )}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
