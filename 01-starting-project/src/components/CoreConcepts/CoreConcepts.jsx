import CoreConcept from '../CoreConcept/CoreConcept.jsx';
import Section from '../Section/Section.jsx';
import { CORE_CONCEPTS } from '../../data.js';

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((coreConcept) => (
          <CoreConcept key={coreConcept.title} {...coreConcept} />
        ))}
      </ul>
    </Section>
  );
}