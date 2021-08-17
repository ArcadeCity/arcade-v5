uniform sampler2D globeTexture;
varying vec2 vertexUV;

void main() {
  gl_FragColor = vec4(vec3(0, 0, 0.2) + texture2D(globeTexture, vertexUV).xyz, 1.0);
}
