const handlerBarsContext = {
  "/galeria.html": {
    galeria: {
      images: [
        {
          src: "/imgs/produccion de cafe.jpg",
          alt: "Imagen Producción de Café",
        },
        {
          src: "imgs/don paco trabajando.jpg",
          alt: "Imagen Hombre trabajando en los palos de café",
        },
        {
          src: "imgs/palos de cafe.jpg",
          alt: "Imagen Palos de café",
        },
        {
          src: "imgs/cafe sanluis con rosquillas.jpg",
          alt: "Imagen Bolsa de café San Luis con rosquillas",
        },
        {
          src: "imgs/cafe sanluis ventas.jpg",
          alt: "Imagen Hombre vendiendo café San Luis",
        },
        {
          src: "imgs/barras de cafe.jpg",
          alt: "Imagen Barras de café",
        },
      ],
    },
  },
  "/negocios.html": {
    negocios: {
      cards: [
        {
          src: "imgs/cafe don paco.png",
          alt: "Imagen Recogiendo cafe",
          title: "Cafe Don Paco",
          description: `Cafe Don Paco es un pequeño micronegocio ubicado en Danli,
                        departamento de El Paraíso que se dedica a la produccion del
                        cafe en su fase mas temprana. Luego de ello, ellos envian los
                        granos de cafe a la Asociación de Caficultores locales donde
                        procesan el cafe, haciendo triaje, tostado, procesamiento y
                        empaquetamiento del grano de cafe.`,
        },
        {
          src: "imgs/logo sanluis.jpg",
          alt: "Imagen Produccion de Cafe",
          title: "Cafe San Luis",
          description: `Café San Luis ofrece servicios de comercialización y procesado
                        de café artesanal en San Luis, Comayagua, Honduras. También
                        ofrecen una línea de cafés saborizados tostado molido con marca
                        comercial “Café San Luis” para gustos variados y exigentes.`,
        },
        {
          src: "imgs/logo kafes.jpg",
          alt: "Imagen Kafes",
          title: "Kafes - Catacion, Tueste, Barismo",
          description: `En KAFES, ofrecemos un conjunto completo de servicios, desde el
                        trillado de café hasta el envasado, pasando por la cata de café
                        para garantizar la calidad en cada etapa. Nos enorgullece
                        ofrecer a nuestros clientes una experiencia completa, desde la
                        selección de granos hasta la taza final.`,
        },
      ],
    },
  },
  "/info_contacto.html": {
    contacto: {
      imgs: [
        {
          src: "/imgs/recogiendo cafe.jpg",
          alt: "Hombre recogiendo cafe",
        },
        {
          src: "/imgs/palos de cafe.jpg",
          alt: "Palos de cafe",
        },
        {
          src: "/imgs/produccion de cafe.jpg",
          alt: "Cafe en proceso de maduracion",
        },
      ],
    },
  },
  "/donacion.html": {
    donacion: {
      imgs: [
        {
          src: "imgs/donaciones.jpg",
          alt: "Dos personas recibiendo un reconocimiento y remuneracion por sus servicios.",
        },
        {
          src: "imgs/donaciones2.jpg",
          alt: "Un grupo de personas recibiendo certificacion de cafetaleros.",
        },
        {
          src: "imgs/pouring coffee.jpg",
          alt: "Un señor sirviendo cafe.",
        },
      ],
    },
  },
};

const pageContext = (page) => {
  const context = { ...handlerBarsContext[page] };
  return context;
};

export default pageContext;
