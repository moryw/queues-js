const Queue = require('./Queue');

const load = flights => {
  const runway = new Queue(3)
  flights.forEach(flight => {});
  return runway;
};

const clear = runway => {
  while(false) {

    console.log('\nFlights wait...\n');
    console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
  }

  console.log('\nAll planes took off, runway clear.');
};

module.exports = { load, clear };