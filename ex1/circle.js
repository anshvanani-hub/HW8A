export function circumference(radius) {
  if (typeof radius !== 'number' || !Number.isFinite(radius) || radius < 0) {
    throw new Error('Invalid radius');
  }
  return 2 * Math.PI * radius;
}

export function area(radius) {
  if (typeof radius !== 'number' || !Number.isFinite(radius) || radius < 0) {
    throw new Error('Invalid radius');
  }
  return Math.PI * radius * radius;
}


