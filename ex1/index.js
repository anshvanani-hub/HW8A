import { circumference, area } from './circle.js';

const sampleRadii = [0, 1, 2.5, 10];

for (const r of sampleRadii) {
  const c = circumference(r).toFixed(2);
  const a = area(r).toFixed(2);
  console.log(`Radius ${r}: circumference=${c}, area=${a}`);
}


