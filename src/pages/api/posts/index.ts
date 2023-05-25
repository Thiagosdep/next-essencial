import { NextApiRequest, NextApiResponse } from 'next';

export const postsContent = [
  {
    id: 1,
    updatedAt: new Date(),
    title: 'Aumente a performance do seu aplicativo com Next.js',
    description:
      'Descubra como impulsionar a performance do seu aplicativo web utilizando Next.js',
    content:
      'Com Next.js, você pode implementar renderização do lado do servidor (SSR) e renderização do lado do cliente (CSR), fornecendo uma experiência de usuário rápida e responsiva. Além disso, o Next.js possui recursos avançados, como o pré-rendering estático e o pré-rendering sob demanda, que podem melhorar ainda mais o desempenho do seu aplicativo. Aprenda a utilizar estratégias de cache, como a CDN (Content Delivery Network), para melhorar a velocidade de carregamento do seu aplicativo. Descubra também como otimizar a entrega de recursos, como imagens e arquivos estáticos, para reduzir o tempo de carregamento. Com as técnicas corretas, você pode impulsionar significativamente a performance do seu aplicativo utilizando Next.js.',
  },
  {
    id: 2,
    updatedAt: new Date(),
    title: 'Desenvolvendo sites estáticos de alta performance com Gatsby',
    description:
      'Explore as vantagens de construir sites estáticos de alta performance utilizando Gatsby',
    content:
      'Com o Gatsby, você pode criar páginas otimizadas estaticamente, o que significa que o conteúdo é gerado no momento da compilação, resultando em tempos de carregamento rápidos. Aproveite os recursos avançados do Gatsby, como o pré-carregamento de recursos e a divisão de código, para otimizar ainda mais a performance do seu site. Além disso, o Gatsby possui integrações com diferentes fontes de dados, como CMSs e APIs, permitindo que você desenvolva sites dinâmicos e rápidos. Aprenda a utilizar técnicas de otimização, como compressão de imagens e carregamento assíncrono de recursos, para melhorar a velocidade e a experiência do usuário. Com o Gatsby, você pode criar sites que se destacam em termos de performance.',
  },
  {
    id: 3,
    updatedAt: new Date(),
    title: 'Explorando as novidades da versão 18 do React',
    description:
      'Saiba mais sobre as novidades e melhorias da versão 18 do React e como elas podem impulsionar a performance do seu aplicativo',
    content:
      'A versão 18 do React traz recursos como o Suspense for Data Fetching, que permite que você carregue dados assincronamente com mais facilidade, melhorando a experiência do usuário. Além disso, a nova versão apresenta a API de Regras de Renderização, que possibilita um controle mais refinado sobre a renderização dos componentes. Descubra também como utilizar o novo algoritmo de reconciliação do React, que melhora a eficiência e o desempenho das atualizações de componentes. Com a versão 18 do React, você pode desenvolver aplicativos mais rápidos e eficientes, proporcionando uma melhor experiência para os usuários.',
  },
  {
    id: 4,
    updatedAt: new Date(),
    title: 'Maximize a performance do seu app mobile com React Native',
    description:
      'Descubra estratégias e dicas para maximizar a performance do seu aplicativo mobile utilizando React Native',
    content:
      'O React Native é uma poderosa framework de desenvolvimento de aplicativos móveis que permite criar aplicativos nativos para iOS e Android usando JavaScript. Para otimizar a performance do seu app, você pode adotar práticas como o uso de componentes nativos, que aproveitam ao máximo as capacidades do dispositivo, resultando em um desempenho mais rápido e uma experiência mais fluída. Além disso, é importante cuidar do desempenho da renderização dos componentes, evitando renderizações desnecessárias e atualizações excessivas. A utilização de bibliotecas de animação otimizadas e técnicas de carregamento assíncrono de dados também contribuem para a melhoria da performance. Ao seguir essas estratégias, você pode oferecer aos usuários uma experiência mobile ágil e responsiva, tornando seu aplicativo um sucesso.',
  },
];

export default (_request: NextApiRequest, response: NextApiResponse) => {
  return response.json(postsContent);
};
