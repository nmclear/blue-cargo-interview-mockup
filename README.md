# Blue Cargo - Interview Challenge Mockup

https://bluecargo-nmclear.netlify.com/

---

## Endpoints:

| HTTP Header |           Endpoint           |                         Action |
| ----------- | :--------------------------: | -----------------------------: |
| GET         |          api/blocks          |    List current blocks in yard |
| POST        |          api/blocks          |          Add new block to yard |
| GET         |        api/blocks/:id        |       Get specs of block by id |
| PUT         |        api/blocks/:id        |    Update specs of block by id |
| DELETE      |        api/blocks/:id        |                Delete block id |
| GET         |     api/ports/:id/calls      | List all port calls by port id |
| POST        |     api/ports/:id/calls      |      Add new port call to port |
| GET         | api/ports/:id/calls/:call_id |       Get details of port call |
| PUT         | api/ports/:id/calls/:call_id |    Update details of port call |
| DELETE      | api/ports/:id/calls/:call_id |               Delete port call |

---

## Mock Data Example

```javascript
const example_block_data = {
  id: 0,
  name: 'AA-1',
  capacity: 1000,
  dwellTime: 3.5,
  forcast: [
    {
      timestamp: Date.now(),
      containers: 210
    },
    {
      timestamp: Date.now() + THREE_HOURS,
      containers: 110
    },
    {
      timestamp: Date.now() + 2 * THREE_HOURS,
      containers: 410
    },
    {
      timestamp: Date.now() + 3 * THREE_HOURS,
      containers: 610
    },
    {
      timestamp: Date.now() + 4 * THREE_HOURS,
      containers: 344
    },
    {
      timestamp: Date.now() + 5 * THREE_HOURS,
      containers: 256
    },
    {
      timestamp: Date.now() + 6 * THREE_HOURS,
      containers: 521
    }
  ]
};
```

```javascript
const example_port_call_data = {
  id: '0',
  name: 'ABC',
  vessel: 'Seas the Day',
  location: {
    lat: 33.643922,
    lng: -118.376684
  },
  eta: Date.now() + ONE_HOUR,
  etd: Date.now() + 5 * ONE_HOUR,
  containers: 200,
  dwellTime: 2
};
```
