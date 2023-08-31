export type Vector2 = readonly [ x: number, y: number ];

export const ZERO: Vector2 = [ 0, 0 ];

export function add(a: Vector2, b: Vector2): Vector2 {
	return [ a[0] + b[0], a[1] + b[1] ];
}

export function subtract(a: Vector2, b: Vector2): Vector2 {
	return [ a[0] - b[0], a[1] - b[1] ];
}
