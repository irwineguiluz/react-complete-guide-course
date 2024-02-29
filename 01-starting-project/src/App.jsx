import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data';

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
