precision mediump float;
#pragma glslify: import("../constants.glsl");

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float uTime;

in vec3 position;
in vec3 uv;
out vec3 vUv;

void main() {
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

}
