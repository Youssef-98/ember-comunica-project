import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { newEngine } from '@comunica/actor-init-sparql';

export default class MapComponent extends Component {
  lat = 51.0109;
  lng = 3.7265;
  zoom = 9;

  get url() {
    return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  }

  @action
  async fetchQuery() {
    const result = await newEngine().query(
      `
      SELECT ?s ?p ?o WHERE {
        ?s ?p <http://dbpedia.org/resource/Belgium>.
        ?s ?p ?o
      } LIMIT 100`,
      {
        sources: ['http://fragments.dbpedia.org/2015/en'],
      }
    );
  }
}
