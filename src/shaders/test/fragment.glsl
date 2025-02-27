uniform sampler2D uTexture;
uniform float uOpacity;

varying vec2 vUv;
void main()

{
    vec4 texture = texture2D(uTexture, vUv);

    gl_FragColor = texture;
    gl_FragColor.a *= uOpacity;
    // gl_FragColor = vec4(vUv, 0.0, 1.0);




}