# FacturaRadar

FacturaRadar es una web app informativa en español para orientar a autónomos, pequeñas empresas, freelancers, comercios locales y asesorías sobre VERI*FACTU, factura electrónica, sistemas de facturación, gestoría online, asesoría fiscal y registro horario digital.

No es una app de facturación real ni un software fiscal certificado. El test ofrece una orientación general para preparar una conversación útil con una gestoría o asesoría profesional.

## Qué incluye

- Test diagnóstico orientativo con resultados guardados en localStorage.
- Comparador de soluciones para facturación, VERI*FACTU y gestión digital.
- Páginas legales editables: aviso legal, privacidad y cookies.
- Página de contacto preparada para Netlify Forms.
- Página de fuentes oficiales.
- Páginas intermedias `/go/...` preparadas para futuros enlaces de afiliado.
- Banner básico de cookies sin scripts externos.

## Instalación y uso local

```bash
npm install
npm run dev
npm run build
```

## Despliegue en Netlify

- Build command: `npm run build`
- Publish directory: `dist`

El archivo `netlify.toml` incluye la redirección SPA:

```toml
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

## Dónde editar

- Preguntas del test: `src/data/questions.ts`
- Lógica de resultados: `src/utils/scoring.ts`
- Recursos, comparador, fuentes oficiales y páginas `/go`: `src/data/resources.ts`
- Componentes principales: `src/components`
- Páginas legales y de contenido: `src/pages`
- Estilos generales e impresión/PDF: `src/styles.css`

## Afiliados y monetización

Los enlaces placeholder están en `src/data/resources.ts` y apuntan a rutas internas como:

- `/go/opcion-basica`
- `/go/software-economico`
- `/go/programa-profesional`
- `/go/gestoria-online`
- `/go/asesoria-tradicional`

Cada página `/go` incluye un comentario en el código indicando dónde sustituir el placeholder por el enlace de afiliado real.

## Netlify Forms

El formulario de contacto está en `src/pages/ContactPage.tsx` y el formulario oculto para Netlify está en `index.html`.

El lead magnet está en `src/components/LeadMagnet.tsx`. Si quieres conectarlo a Netlify Forms, Mailchimp, Brevo u otra herramienta, revisa también la política de privacidad antes de publicarlo.

## Aviso legal

Los textos legales son orientativos y contienen placeholders. Antes de publicar definitivamente, revisa:

- Responsable real del sitio.
- Email de contacto.
- Política de privacidad.
- Política de cookies.
- Uso real de analítica, publicidad, email marketing o afiliados.

FacturaRadar no constituye asesoramiento fiscal, laboral, contable ni jurídico. La normativa puede cambiar. Antes de tomar decisiones, consulta fuentes oficiales o una asesoría profesional.
