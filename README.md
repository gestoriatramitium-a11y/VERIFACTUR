# FacturaRadar

FacturaRadar es una web app informativa en espanol para orientar a autonomos, pequenas empresas, freelancers, comercios locales y asesorias sobre VERI*FACTU, factura electronica, sistemas de facturacion y registro horario digital.

No es una app de facturacion real ni un software fiscal certificado. El test ofrece una orientacion general para preparar una conversacion util con una gestoria o asesoria profesional.

## Instalacion

```bash
npm install
npm run dev
npm run build
```

## Despliegue en Netlify

- Build command: `npm run build`
- Publish directory: `dist`

El archivo `netlify.toml` ya incluye la configuracion basica para sitios estaticos y redireccion SPA.

## Donde editar

- Preguntas del test: `src/data/questions.ts`
- Recursos, comparador, enlaces oficiales y placeholders de afiliado: `src/data/resources.ts`
- Logica de scoring orientativo: `src/utils/scoring.ts`
- Estilos generales: `src/styles.css`

## Monetizacion

Los enlaces placeholder tipo `/go/software-economico`, `/go/gestoria-online` y `/go/programa-profesional` estan en `src/data/resources.ts`. Sustituyelos por enlaces de afiliado cuando los tengas.

Los bloques de publicidad y comparativa patrocinada estan en `src/components/LeadMagnet.tsx` y `src/components/Comparator.tsx`, con comentarios en el codigo indicando donde insertar AdSense, afiliados o patrocinios.

## Aviso

FacturaRadar no constituye asesoramiento fiscal, laboral, contable ni juridico. La normativa puede cambiar. Antes de tomar decisiones, consulta fuentes oficiales o una asesoria profesional.
