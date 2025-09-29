precision mediump float;
#pragma glslify: import('../constants.glsl');

uniform float uTime;
in vec3 vUv;
out vec4 fragColor;

void main() {
  vec3 color = vec3(0.667, 0.533, 0.8);
  fragColor = vec4(color, 1.0);
}
