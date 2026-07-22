export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  cover: "brand" | "deep" | "mint";
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "que-es-usdt-y-por-que-conviene-en-uruguay",
    title: "Qué es USDT y por qué conviene en Uruguay",
    excerpt:
      "USDT mantiene paridad con el dólar y se mueve con comisiones mínimas. Te contamos por qué es la forma más simple de proteger tus ahorros.",
    date: "2026-06-02",
    readTime: "5 min",
    category: "Educación",
    cover: "brand",
    content: `# Qué es USDT

USDT (Tether) es una stablecoin: una criptomoneda diseñada para mantener siempre una paridad 1 a 1 con el dólar estadounidense. A diferencia de Bitcoin o Ethereum, su valor no fluctúa con el mercado, lo que la convierte en una herramienta simple para ahorrar y operar sin exponerte a la volatilidad típica de las criptomonedas.

## Por qué conviene en Uruguay

Uruguay tiene acceso limitado y costoso al dólar formal para muchas personas. USDT ofrece una alternativa: comprás dólares digitales en minutos, sin colas, sin límites bancarios y con total disponibilidad.

* Preservás el valor de tu dinero frente a la inflación en pesos.
* Movés fondos las 24 horas, todos los días del año.
* Pagás comisiones mínimas al operar en redes como Tron o Polygon.

## Cómo empezar

Con Zenda podés comprar USDT en simples pasos, depositando por Red Pagos, Mercado Pago o transferencia bancaria. Tu saldo queda disponible al instante para operar, ahorrar o retirar cuando quieras.

**El primer paso siempre es el más simple**: creá tu cuenta, verificá tu identidad y hacé tu primera compra en minutos.`,
  },
  {
    slug: "como-comprar-tu-primera-cripto-en-5-minutos",
    title: "Cómo comprar tu primera cripto en 5 minutos con Zenda",
    excerpt:
      "Una guía paso a paso para crear tu cuenta, verificar tu identidad y hacer tu primera compra sin complicaciones.",
    date: "2026-06-18",
    readTime: "4 min",
    category: "Guías",
    cover: "mint",
    content: `# Antes de empezar

Comprar tu primera criptomoneda puede sonar intimidante, pero con Zenda es un proceso de cinco pasos que no debería llevarte más de cinco minutos.

## 1. Creá tu cuenta

Registrate con tu email y elegí una contraseña segura. No necesitás más que eso para empezar.

## 2. Verificá tu identidad

Subí tu cédula y una selfie. Este paso (KYC) es obligatorio por normativa y nos permite operar de forma segura y transparente.

## 3. Depositá fondos

Elegí el medio que más te convenga: Red Pagos, Mercado Pago o transferencia bancaria. El dinero se acredita en tu cuenta de Zenda en minutos.

## 4. Elegí cuánto comprar

Definí el monto en pesos o dólares y la criptomoneda que querés (USDT, TRX o Polygon).

## 5. Confirmá la operación

Revisá la comisión y la tasa de conversión, confirmá, y listo: tu saldo queda disponible al instante.

*Tip: en tu primera transacción recibís 10 USDT de regalo.*`,
  },
  {
    slug: "zenda-lanza-pagos-internacionales-para-empresas",
    title: "Zenda lanza pagos internacionales para empresas",
    excerpt:
      "Presentamos nuestra solución para importadores, exportadores y operadores de remesas: pagos internacionales en minutos, con blockchain.",
    date: "2026-07-10",
    readTime: "3 min",
    category: "Novedades",
    cover: "deep",
    content: `# Una nueva forma de operar con el exterior

Hoy lanzamos **Zenda para Empresas**, una solución de pagos internacionales basada en tecnología blockchain pensada para importadores, exportadores, empresas de comercio internacional y operadores de remesas.

## Qué cambia

Las transferencias bancarias tradicionales pueden tardar días y sumar comisiones de múltiples intermediarios. Con Zenda, tu empresa puede:

* Pagar a proveedores y recibir fondos del exterior en minutos.
* Reducir costos evitando intermediarios innecesarios.
* Convertir entre moneda fiduciaria y activos digitales para optimizar capital de trabajo.
* Operar con trazabilidad completa, bajo procedimientos de KYC y cumplimiento normativo.

## Para quién es

Desarrollamos esta solución para distintos volúmenes y necesidades: desde pequeños importadores hasta operadores de remesas con flujos constantes hacia múltiples países.

Si tu empresa opera con el exterior, [hablá con nuestro equipo](/empresas#contacto) y te ayudamos a encontrar la mejor solución para tu operativa.`,
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatPostDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("es-UY", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
