import CoreConcept from "../CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from '../../data.js';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((coreConcept) => (
          <CoreConcept key={coreConcept.title} {...coreConcept} />
        ))}
      </ul>
    </section>
  );
}