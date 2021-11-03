importScripts('https://unpkg.com/comlink/dist/umd/comlink.js');

class WebWorker {
  async getSchools() {
    return await fetch('http://localhost:3333/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: '{"query":"query Query($schoolsFilter: FilterFindManySchoolInput, $schoolsLimit: Int) {\\n  schools(filter: $schoolsFilter, limit: $schoolsLimit) {\\n    SCH_NAME\\n    COMBOKEY\\n    RR_AM_F_POP\\n  }\\n}\\n","variables":{"schoolsLimit":2,"schoolsFilter":{"_operators":{"RR_AM_F_POP":{"gt":0}}}},"operationName":"Query"}',
    })
      .then((response) => response.json())
      .catch((err) => {
        console.error(err);
      });
  }
}

Comlink.expose(WebWorker);
