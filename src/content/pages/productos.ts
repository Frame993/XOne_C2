// Lote 2 · Menú «Productos». Textos reales de xone.es/{slug}/ y xone.es/en/{slug}/ (24-nov-2026).
// Reescrituras propias (titulares de sección, frases de apertura): ver CONTENT_MAP.md › «Páginas · lote 2».
import type { Page } from "./types";

export const productos: Record<string, Page> = {
  /* ------------------------------------------------------------------ */
  xonecode: {
    es: {
      group: 1,
      seo: { title: "XOneCode: la IA, en cada paso de tus proyectos XOne | XOne", description: "Agentes de IA especializados en XOne, integrados con los mejores modelos de IA, sistema de tareas con Autopilot, servidores MCP y skills para programar con cualquier asistente." },
      hero: { title: "XOneCode: la IA, en cada paso de", accent: "tus proyectos XOne", lead: "Agentes de IA especializados en XOne, integrados con los mejores modelos de IA, sistema de tareas con Autopilot, servidores MCP y skills para programar con cualquier asistente.", labels: ["XOneCode", "Autopilot", "MCP", "Skills"], secondary: { label: "Ver la plataforma", slug: "que-es-xone" } },
      blocks: [
        { type: "intro", lead: "Tú decides qué construir;", accent: "XOneCode se encarga del cómo.", text: ["XOne ha integrado la inteligencia artificial en todos los niveles de la plataforma. Tus equipos dedican menos tiempo a lo repetitivo y más a lo que de verdad aporta valor: los proyectos avanzan más rápido, con más calidad y con un consumo de IA optimizado."] },
        {
          type: "rows", index: "Agentes", eyebrow: "Cómo trabaja", title: "Un programador más,", accent: "especializado en XOne",
          items: [
            { title: "XOneCode, tu agente de programación para XOne", text: ["XOneCode es un agente de programación con IA, al nivel de los más avanzados del mercado, pero especializado en XOne. Se integra con los mejores modelos de IA del mercado, para que trabajes siempre con la tecnología más avanzada.", "Conoce la plataforma a fondo: entiende tu proyecto, crea pantallas, scripts y estilos, los prueba y los despliega en el dispositivo.", "Al trabajar con las herramientas propias de XOne, el agente recibe solo el contexto que necesita en cada momento. Así se reduce el consumo de tokens y las respuestas son más precisas. Además, cada proyecto muestra lo que se ha gastado en cada sesión, para tenerlo siempre bajo control."] },
            { title: "Tú defines, los agentes desarrollan", text: ["Cada tarea que defines entra en un sistema de tareas que los agentes de IA van procesando hasta convertirla en desarrollo real. Puedes seguir el avance de cada tarea y revisar lo que han hecho los agentes.", "El sistema funciona con Autopilot, el gestor de proyectos y tareas de XOne, integrado con el entorno de desarrollo: las tareas que defines en él llegan directamente a los agentes. También puede partir de diseños creados con herramientas de diseño con IA, como Google Stitch."], note: "El trabajo pasa de la planificación al código sin pasos intermedios." },
            { title: "Tú descansas, tus proyectos siguen avanzando", text: ["Envía las tareas al terminar tu jornada y desconecta. En modo autónomo, los agentes de XOneCode las van programando una tras otra, las prueban y las dejan listas para que las revises cuando vuelvas.", "Es como sumar a tu equipo un turno que no se acaba nunca: la producción continúa mientras tú descansas, para ti, para tu empresa y para tus clientes. Y cuando prefieras tener la última palabra en cada paso, el modo supervisado te deja aprobar lo que hace el agente antes de seguir."] },
            { title: "Abierto a cualquier asistente de IA: MCP y skills", text: ["XOne dispone de servidores MCP (Model Context Protocol, el estándar abierto para conectar la IA con herramientas). Con ellos puedes programar en XOne desde el asistente de IA que prefieras: crear y editar proyectos, consultar la documentación o probar las apps en dispositivos reales.", "Además, las skills de XOne son paquetes de conocimiento que enseñan a la IA a trabajar como un experto en la plataforma:"], list: ["Generar proyectos XOne completos a partir de una descripción.", "Resolver dudas con la documentación de XOne.", "Crear integraciones de datos entre bases de datos, servicios REST y SOAP.", "Configurar la monitorización con XoneMonitor."] },
            { title: "Nuevos controles para diseños más modernos", text: ["Los frameworks de XOne incorporan nuevos controles para crear aplicaciones con diseños actuales, listos para que la IA los utilice desde el primer momento."] },
          ],
        },
        {
          type: "showcase", index: "Ciclo completo", eyebrow: "Más productividad", title: "Del diseño al soporte,", accent: "con IA",
          steps: [
            { title: "Diseño", text: "De la idea a la pantalla en mucho menos tiempo, con diseños generados y adaptados por la IA." },
            { title: "Análisis", text: "Requisitos y tareas claros desde el primer día, organizados en Autopilot." },
            { title: "Desarrollo", text: "Agentes que programan sobre tu proyecto XOne, lo prueban y lo despliegan." },
            { title: "Documentación", text: "Siempre al día, generada a la vez que el código." },
            { title: "Soporte", text: "Respuestas más rápidas y precisas para tus usuarios." },
          ],
        },
      ],
    },
    en: {
      group: 1,
      seo: { title: "XOneCode: AI at every step of your XOne projects | XOne", description: "AI agents specialized in XOne, integrated with the best AI models, a task system with Autopilot, MCP servers and skills to code with any assistant." },
      hero: { title: "XOneCode: AI at every step of", accent: "your XOne projects", lead: "AI agents specialized in XOne, integrated with the best AI models, a task system with Autopilot, MCP servers and skills to code with any assistant.", labels: ["XOneCode", "Autopilot", "MCP", "Skills"], secondary: { label: "See the platform", slug: "que-es-xone" } },
      blocks: [
        { type: "intro", lead: "You decide what to build;", accent: "XOneCode takes care of how.", text: ["XOne has built artificial intelligence into every layer of the platform. Your teams spend less time on repetitive work and more on what really adds value: projects move faster, with higher quality and optimized AI usage."] },
        {
          type: "rows", index: "Agents", eyebrow: "How it works", title: "One more programmer,", accent: "specialized in XOne",
          items: [
            { title: "XOneCode, your coding agent for XOne", text: ["XOneCode is an AI coding agent on a par with the most advanced on the market, but specialized in XOne. It integrates with the best AI models on the market, so you always work with the most advanced technology.", "It knows the platform inside out: it understands your project, creates screens, scripts and styles, tests them and deploys them to the device.", "Because it works with XOne's own tools, the agent receives only the context it needs at each step. This reduces token usage and makes its answers more accurate. Each project also shows what was spent in every session, so you always keep it under control."] },
            { title: "You define it, the agents build it", text: ["Every task you define goes into a task system that AI agents work through until it becomes real development. You can follow the progress of each task and review what the agents have done.", "The system runs on Autopilot, XOne's project and task manager, built into the development environment: the tasks you define there go straight to the agents. It can also start from designs created with AI design tools such as Google Stitch."], note: "Work flows from planning to code with no intermediate steps." },
            { title: "You rest, your projects keep moving", text: ["Send your tasks at the end of the day and log off. In autonomous mode, XOneCode's agents code them one after another, test them and leave them ready for you to review when you are back.", "It is like adding a shift to your team that never ends: production carries on while you rest, for you, for your company and for your clients. And when you would rather have the final say at every step, supervised mode lets you approve what the agent does before it moves on."] },
            { title: "Open to any AI assistant: MCP and skills", text: ["XOne provides MCP servers (Model Context Protocol, the open standard for connecting AI to tools). With them you can work in XOne from the AI assistant you prefer: create and edit projects, look up the documentation or test apps on real devices.", "In addition, XOne skills are knowledge packages that teach the AI to work like an expert on the platform:"], list: ["Generate complete XOne projects from a description.", "Answer questions using the XOne documentation.", "Build data integrations between databases, REST and SOAP services.", "Set up monitoring with XoneMonitor."] },
            { title: "New controls for more modern designs", text: ["XOne frameworks include new controls for building apps with today's designs, ready for the AI to use from day one."] },
          ],
        },
        {
          type: "showcase", index: "Full cycle", eyebrow: "More productivity", title: "From design to support,", accent: "with AI",
          steps: [
            { title: "Design", text: "From idea to screen in far less time, with designs generated and adapted by AI." },
            { title: "Analysis", text: "Clear requirements and tasks from day one, organized in Autopilot." },
            { title: "Development", text: "Agents that code on your XOne project, test it and deploy it." },
            { title: "Documentation", text: "Always up to date, generated alongside the code." },
            { title: "Support", text: "Faster, more accurate answers for your users." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "nueva-mxdp": {
    es: {
      group: 1,
      seo: { title: "Plataforma de desarrollo multiexperiencia (MXDP) | XOne", description: "XOne se ha convertido en una plataforma de desarrollo multiexperiencia que aplica inteligencia artificial y nuevas formas de interactuar con las apps móviles." },
      hero: { title: "Plataforma de desarrollo", accent: "multiexperiencia (MXDP)", lead: "XOne se ha convertido en una plataforma de desarrollo multiexperiencia que aplica inteligencia artificial y nuevas formas de interactuar con las apps móviles.", labels: ["MXDP", "IA", "IoT", "PWA"], secondary: { label: "Ver la marketectura", slug: "marketectura" } },
      blocks: [
        { type: "intro", lead: "Nuevas formas de interacción", accent: "con el usuario.", text: ["XOne va más allá y, atendiendo a la demanda del mercado, se ha convertido en una plataforma de desarrollo multiexperiencia, aplicando lo último en inteligencia artificial y adoptando nuevas formas de interactuar con las apps móviles para mantener a los usuarios interesados, a medida que la movilidad se convierte en la puerta de entrada al negocio digital.", "XOne ha evolucionado para centrarse en casos de uso valiosos, que van más allá de un dispositivo móvil y una aplicación, respaldando el diseño y la creación de experiencias integradas, personalizadas y ambientales, que abarcan múltiples puntos de contacto digitales."] },
        {
          type: "cells", index: "Tecnologías", eyebrow: "Qué aporta", title: "Trece capacidades para", accent: "cualquier canal", cols: 3,
          items: [
            { label: "Big data · BI", icon: "activity", text: "Genera, procesa y almacena grandes volúmenes de datos de forma más sencilla, eficiente y eficaz, con el objetivo de que saques mayor partido a tu información y tomes las mejores decisiones.", link: { label: "Más sobre big data", slug: "bigdata" } },
            { label: "Machine learning", icon: "cpu", text: "Soluciones habilitadas con inteligencia artificial para optimizar los flujos de trabajo, el compromiso de los empleados y la productividad, y tomar decisiones óptimas.", link: { label: "Más sobre machine learning", slug: "machine-learning" } },
            { label: "IoT", icon: "signal", text: "Datos de Internet de las Cosas integrados en los flujos de trabajo para rastrear, cuantificar y evaluar actividades, predecir tendencias y responder más rápido, y wearables para mayor agilidad.", link: { label: "Más sobre IoT y wearables", slug: "iot-wearables" } },
            { label: "MicroApps", icon: "grid", lead: "Una experiencia uniforme en múltiples canales.", text: "Orientadas al cliente y creadas para proporcionar una funcionalidad específica para realizar tareas de manera más rápida y dinámica.", link: { label: "Más sobre MicroApps", slug: "microapps" } },
            { label: "Microservicios", icon: "layers", text: "Apps como una serie de pequeños servicios autónomos que se comunican entre sí: más agilidad, escalabilidad y reusabilidad, con desarrollos y despliegues independientes.", link: { label: "Más sobre microservicios", slug: "bus-integracion-esb-enterprise-service-bus#microservicios" } },
            { label: "Biometría", icon: "lock", lead: "Interacciones entre las personas y la tecnología.", text: "Métodos de autenticación biométrica para identificar, medir y analizar el comportamiento humano y proteger las comunicaciones y los datos corporativos.", link: { label: "Más sobre seguridad y biometría", slug: "ciberseguridad" } },
            { label: "MXDP Dev Tools", icon: "code", text: "Las herramientas adecuadas de diseño, desarrollo y ejecución para unificar y acelerar el desarrollo de las apps y aportar las experiencias adecuadas a clientes, partners y usuarios.", link: { label: "Más sobre las herramientas", slug: "como-asiste-xone-desarolladores" } },
            { label: "XOne Vision", icon: "search", text: "RA y RV para aumentar el control y la eficiencia de los procesos: reconocer, clasificar o contar con visión por computación aplicada a tu empresa.", link: { label: "Más sobre XOne Vision", slug: "xonevision" } },
            { label: "Asistente virtual", icon: "chat", lead: "La IA aplicada al lenguaje natural conecta máquinas con personas.", text: "XOneAssist es un tutor virtual que da soporte e incrementa la productividad de los desarrolladores, reduciendo el tiempo y el coste.", link: { label: "Más sobre XOneAssist", slug: "xoneassist" } },
            { label: "Apps conversacionales", icon: "headset", text: "Conversaciones que se transforman en procesos automatizados, sin aprendizaje para el usuario, y comandos de voz para interactuar de forma más amigable y eficiente.", link: { label: "Más sobre apps conversacionales", slug: "voz" } },
            { label: "Frameworks nativos", icon: "device", text: "Frameworks nativos multiplataforma para crear aplicaciones nativas en cualquier plataforma del mercado y cualquiera de sus versiones (iOS, Android, Windows…).", link: { label: "Más sobre el desarrollo multiplataforma", slug: "multiplataforma-xone" } },
            { label: "Experiencia total", icon: "users", text: "Una estrategia que integra la experiencia del empleado, del cliente, del usuario y la multiexperiencia en múltiples puntos de contacto para acelerar el crecimiento.", link: { label: "Más sobre la experiencia total", slug: "user-experience" } },
            { label: "Progressive Web Apps", icon: "cloud", text: "Soluciones web con funcionalidades de app nativa para móviles y tabletas. Cualquier usuario puede instalarlas en su dispositivo sin descargarse nada.", link: { label: "Más sobre las PWA", slug: "pwa" } },
          ],
        },
      ],
    },
    en: {
      group: 1,
      seo: { title: "Multiexperience development platform (MXDP) | XOne", description: "XOne has become a multiexperience development platform that applies artificial intelligence and new ways of interacting with mobile apps." },
      hero: { title: "Multiexperience development", accent: "platform (MXDP)", lead: "XOne has become a multiexperience development platform that applies artificial intelligence and new ways of interacting with mobile apps.", labels: ["MXDP", "AI", "IoT", "PWA"], secondary: { label: "See the marketecture", slug: "marketectura" } },
      blocks: [
        { type: "intro", lead: "New ways of interacting", accent: "with the user.", text: ["XOne goes further and, in response to market demand, has become a multiexperience development platform, applying the latest in artificial intelligence and adopting new ways of interacting with mobile apps to keep users engaged, as mobility becomes the gateway to digital business.", "XOne has evolved to focus on valuable use cases that go beyond a single mobile device and application, supporting the design and creation of integrated, personalized and ambient experiences that span multiple digital touchpoints."] },
        {
          type: "cells", index: "Technologies", eyebrow: "What it brings", title: "Thirteen capabilities for", accent: "any channel", cols: 3,
          items: [
            { label: "Big data · BI", icon: "activity", text: "Generate, process and store large volumes of data more simply, efficiently and effectively, so you can get more out of your information and make the best decisions.", link: { label: "More on big data", slug: "bigdata" } },
            { label: "Machine learning", icon: "cpu", text: "AI-enabled solutions to optimize workflows, employee engagement and productivity, and to make optimal decisions.", link: { label: "More on machine learning", slug: "machine-learning" } },
            { label: "IoT", icon: "signal", text: "Internet of Things data built into workflows to track, quantify and evaluate activities, predict trends and respond faster, plus wearables for greater agility.", link: { label: "More on IoT and wearables", slug: "iot-wearables" } },
            { label: "MicroApps", icon: "grid", lead: "A consistent experience across multiple channels.", text: "Customer-oriented and built to provide specific functionality so tasks can be performed more quickly and dynamically.", link: { label: "More on MicroApps", slug: "microapps" } },
            { label: "Microservices", icon: "layers", text: "Apps as a series of small autonomous services that communicate with one another: more agility, scalability and reusability, with independent development and deployment.", link: { label: "More on microservices", slug: "bus-integracion-esb-enterprise-service-bus#microservicios" } },
            { label: "Biometrics", icon: "lock", lead: "Interactions between people and technology.", text: "Biometric authentication methods to identify, measure and analyze human behavior and protect corporate communications and data.", link: { label: "More on security and biometrics", slug: "ciberseguridad" } },
            { label: "MXDP Dev Tools", icon: "code", text: "The right design, development and runtime tools to unify and accelerate app development and deliver the right experiences for customers, partners and users.", link: { label: "More on the tools", slug: "como-asiste-xone-desarolladores" } },
            { label: "XOne Vision", icon: "search", text: "AR and VR to increase process control and efficiency: recognize, classify or count with computer vision applied to your company.", link: { label: "More on XOne Vision", slug: "xonevision" } },
            { label: "Virtual assistant", icon: "chat", lead: "AI applied to natural language connects machines with people.", text: "XOneAssist is a virtual tutor that supports developers and increases their productivity, reducing time and cost.", link: { label: "More on XOneAssist", slug: "xoneassist" } },
            { label: "Conversational apps", icon: "headset", text: "Conversations transformed into automated processes, with no learning curve for users, and voice commands to interact in a friendlier, more efficient way.", link: { label: "More on conversational apps", slug: "voz" } },
            { label: "Native frameworks", icon: "device", text: "Cross-platform native frameworks to create native applications on any platform on the market and any of its versions (iOS, Android, Windows…).", link: { label: "More on cross-platform development", slug: "multiplataforma-xone" } },
            { label: "Total experience", icon: "users", text: "A strategy that integrates employee, customer and user experience and multiexperience across multiple touchpoints to accelerate growth.", link: { label: "More on total experience", slug: "user-experience" } },
            { label: "Progressive Web Apps", icon: "cloud", text: "Web solutions with native-app features for phones and tablets. Any user can install them on their device without downloading anything.", link: { label: "More on PWAs", slug: "pwa" } },
          ],
        },
      ],
    },
  },
  /* ------------------------------------------------------------------ */
  "herramientas-rapidas-de-desarrollo-xonecloud": {
    es: {
      group: 1,
      seo: { title: "XOneCloud, herramientas de desarrollo rápido | XOne", description: "XOne ofrece un enfoque multimodal para el desarrollo de apps móviles nativas, con herramientas de desarrollo rápido y servicios de back-end móviles." },
      hero: { title: "XOneCloud, herramientas de", accent: "desarrollo rápido", lead: "XOne ofrece un enfoque multimodal para el desarrollo de apps móviles nativas, con herramientas de desarrollo rápido y servicios de back-end móviles.", labels: ["Cloud", "Studio", "Push", "Offline"], secondary: { label: "XOne Android Developer Framework", slug: "frameworkandroid" } },
      blocks: [
        { type: "intro", lead: "Crear apps móviles no es difícil: si ya tienes el diseño claro,", accent: "solo tienes que lanzarte.", text: ["Herramienta colaborativa de alta productividad de desarrollo web. XOneCloud está pensada para facilitar el trabajo a los programadores.", "XOne cuenta con herramientas de desarrollo rápido, así como servicios de back-end móviles, utilizados para el diseño e implementación de apps 100 % nativas, lo que da lugar a una plataforma flexible y extensible que hace frente a los desafíos constantes de la movilidad."] },
        { type: "quote", text: "«La navegación móvil ha creado un nuevo perfil de usuario, con unas expectativas y necesidades caracterizadas por una alta exigencia y por la demanda de nuevas funcionalidades, muy avanzado tecnológicamente y totalmente conectado con los dispositivos.»" },
        {
          type: "cells", index: "Ventajas", eyebrow: "Hazlo tú mismo", title: "Seis motivos para empezar con", accent: "XOne Cloud Studio", subtitle: "Con XOne Cloud Studio se consiguen proyectos exitosos, partiendo de cero y en tiempos mínimos.", cols: 3,
          items: [
            { label: "Multiplataforma", icon: "device", text: "Permite la creación de apps móviles en todas las plataformas y sistemas operativos del mercado, para todo tipo de desarrolladores, profesionales y no profesionales, a través de una gran variedad de enfoques.", link: { label: "Más sobre el desarrollo multiplataforma", slug: "multiplataforma-xone" } },
            { label: "Productividad", icon: "activity", text: "Hace posible escalar y acelerar la entrega de aplicaciones móviles: desde pilotos sencillos para pocos usuarios hasta grandes proyectos con tecnologías complejas integradas para miles de dispositivos.", link: { label: "Conoce el IDE de XOne", slug: "como-asiste-xone-desarolladores" } },
            { label: "Online, offline y push", icon: "signal", text: "Aporta servicios y funciones principales del núcleo, como sincronización de datos sin conexión y notificaciones push para respaldar el desarrollo de apps móviles." },
            { label: "Soporte", icon: "headset", text: "Soporte en programación y plantillas estándar para realizar cualquier proyecto en movilidad. El IDE incluye herramientas de creación, modificación, compilación, implementación, depuración y distribución de apps.", link: { label: "Módulos de soporte multiexperiencia", slug: "modulos-mx-xone-cloud-studio" } },
            { label: "Baja curva de aprendizaje", icon: "book", text: "Programar en XOne Cloud Studio no requiere grandes conocimientos de movilidad (dispositivos, comunicaciones…) ni de bases de datos (gestores, ODBC). Con «escasos» conocimientos de desarrollo se puede programar de forma fácil." },
            { label: "Escalabilidad", icon: "layers", text: "Soluciones finales completamente escalables que se pueden modificar o ampliar de forma rápida e intuitiva, y que responden en rendimiento a medida que aumenta el número de usuarios.", more: ["Es la herramienta más apropiada para las empresas que desean experimentar con apps móviles sin una gran inversión inicial, o cuando los recursos de los desarrolladores profesionales son limitados."], link: { label: "Ver más herramientas de desarrollo", slug: "como-asiste-xone-desarolladores" } },
          ],
        },
      ],
    },
    en: {
      group: 1,
      seo: { title: "XOneCloud, rapid development tools | XOne", description: "XOne offers a multimodal approach to native mobile app development, with rapid development tools and mobile back-end services." },
      hero: { title: "XOneCloud,", accent: "rapid development tools", lead: "XOne offers a multimodal approach to native mobile app development, with rapid development tools and mobile back-end services.", labels: ["Cloud", "Studio", "Push", "Offline"], secondary: { label: "XOne Android Developer Framework", slug: "frameworkandroid" } },
      blocks: [
        { type: "intro", lead: "Building mobile apps is not difficult: if you already have a clear design,", accent: "just dive in.", text: ["A high-productivity collaborative web development tool. XOneCloud is designed to make programmers' work easier.", "XOne has rapid development tools as well as mobile back-end services, used to design and implement 100 % native apps, resulting in a flexible and extensible platform that meets the constant challenges of mobility."] },
        { type: "quote", text: "“Mobile browsing has created a new user profile, with expectations and needs characterized by high standards and demand for new features, very technologically advanced and fully connected to devices.”" },
        {
          type: "cells", index: "Advantages", eyebrow: "Do it yourself", title: "Six reasons to start with", accent: "XOne Cloud Studio", subtitle: "With XOne Cloud Studio you can achieve successful projects, starting from scratch and in minimal time.", cols: 3,
          items: [
            { label: "Cross-platform", icon: "device", text: "It enables the creation of mobile apps on all platforms and operating systems on the market, for all kinds of developers, professional and non-professional, through a wide variety of approaches.", link: { label: "More on cross-platform development", slug: "multiplataforma-xone" } },
            { label: "Productivity", icon: "activity", text: "It makes it possible to scale and accelerate mobile app delivery: from simple pilots for a few users to large projects with complex integrated technologies for thousands of devices.", link: { label: "Discover the XOne IDE", slug: "como-asiste-xone-desarolladores" } },
            { label: "Online, offline and push", icon: "signal", text: "It provides core services and functions, such as offline data synchronization and push notifications, to support mobile app development." },
            { label: "Support", icon: "headset", text: "Programming support and standard templates to carry out any mobility project. The IDE includes tools for creating, modifying, compiling, deploying, debugging and distributing apps.", link: { label: "Multiexperience support modules", slug: "modulos-mx-xone-cloud-studio" } },
            { label: "Gentle learning curve", icon: "book", text: "Programming in XOne Cloud Studio does not require extensive knowledge of mobility (devices, communications…) or databases (database managers, ODBC). With “limited” development knowledge you can program easily." },
            { label: "Scalability", icon: "layers", text: "Fully scalable end solutions that can be modified or extended quickly and intuitively, and that keep up in performance as the number of users grows.", more: ["It is the most suitable tool for companies that want to experiment with mobile apps without a large initial investment, or when professional developer resources are limited."], link: { label: "See more development tools", slug: "como-asiste-xone-desarolladores" } },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "replica-de-datos-y-documentacion-xone": {
    es: {
      group: 1,
      seo: { title: "Sistema inteligente de comunicaciones y réplica | XOne", description: "El sistema de comunicaciones de XOne, basado en machine learning, permite que las apps móviles funcionen con independencia de los enlaces de comunicación." },
      hero: { title: "Sistema inteligente de", accent: "comunicaciones", lead: "El sistema de comunicaciones de XOne, basado en machine learning, permite que las apps móviles funcionen con independencia de los enlaces de comunicación.", labels: ["Online", "Offline", "Push", "Sync"], secondary: { label: "Ver el bus de integración", slug: "bus-integracion-esb-enterprise-service-bus" } },
      blocks: [
        { type: "intro", lead: "Una de las funcionalidades", accent: "más importantes de XOne.", text: ["Una de las principales necesidades de un sistema de movilidad es la comunicación con la central, ya que los datos introducidos en los terminales tienen que ser incorporados a los sistemas de gestión. De igual manera, los terminales deben recibir datos de la central, de forma que los operadores móviles se mantengan actualizados.", "Sin la transmisión de datos, las apps de movilidad tendrían poco sentido en los sistemas empresariales."] },
        { type: "chips", index: "Modos", eyebrow: "Comunicaciones inteligentes", title: "Operativa offline y online,", accent: "sin código extra", subtitle: "Un robusto sistema basado en machine learning que predice y se anticipa a las necesidades del usuario: conmutación automática entre redes y tamaños de bloque variables en función de la red.", cols: 3, items: ["Online", "Offline", "Push"] },
        {
          type: "rows", index: "Réplica", eyebrow: "Trabaja sin conexión", title: "Los datos viajan aunque", accent: "no haya red",
          items: [
            { title: "Copias locales de los datos", text: ["Las apps pueden seguir funcionando con las copias locales de los datos, por lo que los usuarios pueden continuar trabajando aunque no haya conexión."] },
            { title: "Comunicación asíncrona, segura y desatendida", text: ["El sistema de réplica XOne permite que la comunicación se efectúe de manera asíncrona, segura y desatendida.", "Cuando hay comunicación, la réplica transmite y recibe datos. Cuando no la hay, la réplica busca formas de conectarse para comunicar con la central."] },
            { title: "Un servidor de réplica para todas tus apps", text: ["XOne moviliza diferentes apps dentro de una misma empresa empleando el mismo servidor de réplica.", "Intercomunica los distintos dispositivos que se estén utilizando en un proyecto (Android, iPhone, PC, Windows Mobile…), manteniendo la integridad referencial de todos los datos de forma transparente."] },
            { title: "Réplica documental", text: ["XOne permite, además, la transferencia de ficheros e imágenes. Este mecanismo habilita que determinados campos de la base de datos se utilicen como referencias a archivos que se transmitirán entre el cliente y el servidor."] },
          ],
        },
        {
          type: "cells", index: "Arquitectura", eyebrow: "Bajo el capó", title: "Qué hace el", accent: "servidor de réplica", cols: 4,
          items: [
            { label: "Solicitudes", icon: "download", lead: "Acepta las solicitudes de los clientes.", text: "Comandos de envío y recepción de datos, configuración y administración, recibidos vía TCP/IP." },
            { label: "Selectividad", icon: "grid", lead: "Gestiona la selectividad de los clientes.", text: "Las tablas de selectividad contienen las reglas que deben cumplir las operaciones para ir a cada cliente de cada base de datos." },
            { label: "Interconexión", icon: "plug", lead: "Interconecta los datos.", text: "Une los distintos sistemas de base de datos instalados en el servidor o en el cliente de réplica, según el dispositivo." },
            { label: "Procesamiento", icon: "refresh", lead: "Procesa los datos.", text: "Trata los datos que envían los clientes para insertarlos en las distintas bases de datos." },
          ],
        },
      ],
    },
    en: {
      group: 1,
      seo: { title: "Intelligent communications and replication system | XOne", description: "XOne's machine learning-based communications system lets mobile apps work independently of the availability of communication links." },
      hero: { title: "Intelligent", accent: "communications system", lead: "XOne's machine learning-based communications system lets mobile apps work independently of the availability of communication links.", labels: ["Online", "Offline", "Push", "Sync"], secondary: { label: "See the integration bus", slug: "bus-integracion-esb-enterprise-service-bus" } },
      blocks: [
        { type: "intro", lead: "One of XOne's", accent: "most important features.", text: ["One of the main needs of a mobility system is communication with headquarters, since the data entered on the devices has to be incorporated into the management systems. Likewise, the devices must receive data from headquarters, so that mobile operators stay up to date.", "Without data transmission, mobility apps would make little sense in enterprise systems."] },
        { type: "chips", index: "Modes", eyebrow: "Intelligent communications", title: "Offline and online operation,", accent: "with no extra code", subtitle: "A robust machine learning-based system that predicts and anticipates user needs: automatic switching between networks and variable block sizes depending on the network.", cols: 3, items: ["Online", "Offline", "Push"] },
        {
          type: "rows", index: "Replication", eyebrow: "Work offline", title: "Data keeps moving even", accent: "without a network",
          items: [
            { title: "Local copies of the data", text: ["Apps can keep running with local copies of the data, so users can continue working even when there is no connection."] },
            { title: "Asynchronous, secure, unattended communication", text: ["The XOne replication system allows communication to take place asynchronously, securely and unattended.", "When there is a connection, replication sends and receives data. When there is none, replication looks for ways to connect in order to communicate with headquarters."] },
            { title: "One replication server for all your apps", text: ["XOne mobilizes different apps within the same company using the same replication server.", "It interconnects the various devices used in a project (Android, iPhone, PC, Windows Mobile…), transparently maintaining the referential integrity of all data."] },
            { title: "Document replication", text: ["XOne also supports the transfer of files and images. This mechanism allows certain database fields to be used as references to files that will be transmitted between client and server."] },
          ],
        },
        {
          type: "cells", index: "Architecture", eyebrow: "Under the hood", title: "What the", accent: "replication server does", cols: 4,
          items: [
            { label: "Requests", icon: "download", lead: "Accepts client requests.", text: "Commands for sending and receiving data, configuration and administration, received via TCP/IP." },
            { label: "Selectivity", icon: "grid", lead: "Manages client selectivity.", text: "Selectivity tables contain the rules that operations must meet to go to each client of each database." },
            { label: "Interconnection", icon: "plug", lead: "Interconnects data.", text: "It connects the different database systems installed on the replication server or client, depending on the device." },
            { label: "Processing", icon: "refresh", lead: "Processes data.", text: "It handles the data sent by clients in order to insert it into the various databases." },
          ],
        },
      ],
    },
  },
  /* ------------------------------------------------------------------ */
  ciberseguridad: {
    es: {
      group: 1,
      seo: { title: "Ciberseguridad | XOne", description: "XOne adopta una política de seguridad avanzada para establecer, supervisar y mantener perímetros seguros de acceso a redes, aplicaciones, dispositivos y datos." },
      hero: { title: "Ciberseguridad", accent: "de extremo a extremo", lead: "XOne adopta una política de seguridad avanzada para establecer, supervisar y mantener perímetros seguros de acceso a redes, aplicaciones, dispositivos y datos.", labels: ["ENS", "ISO 27001", "IDS", "DMZ"], secondary: { label: "Consulta nuestras certificaciones", slug: "certificaciones" } },
      blocks: [
        { type: "intro", lead: "Acceso seguro a las aplicaciones y los datos, con un enfoque", accent: "modular y receptivo.", text: ["Para evitar ataques y amenazas, adoptamos una política de seguridad avanzada que permite establecer, supervisar y mantener perímetros seguros para el acceso a las redes, a las aplicaciones, a los dispositivos y a los datos.", "XOne está certificada en el Esquema Nacional de Seguridad (ENS, categoría media) y en ISO/IEC 27001:2022."], link: { label: "Consulta nuestras certificaciones", slug: "certificaciones" } },
        {
          type: "rows", index: "Módulos", eyebrow: "Capa a capa", title: "Protección para redes, apps,", accent: "dispositivos y datos",
          items: [
            { title: "XOne Broker DMZ", text: ["Mantén el control de tu información. El Broker de Seguridad DMZ de XOne es un sistema de protección frente a ataques vía web, que consigue una separación de todas las comunicaciones entre la central y los dispositivos. El sistema está preparado para poner tantos brokers como se consideren necesarios.", "Evita la suplantación de identidad y los ataques por denegación de servicio (DDoS), y establece comunicaciones entre los dispositivos y el servidor central:"], list: ["WebSocket o REST (configurable)", "Cifradas sobre SSL", "Ágiles: mejoran el rendimiento sobre la arquitectura Proxy de Réplica"] },
            { title: "IDS Core", text: ["Interconectividad total. Es el núcleo de cualquier infraestructura para el control de accesos e identidades: identifica al usuario, gestiona a qué recursos puede acceder y le da una identidad estable en todas las apps.", "Autentica, autoriza y securiza tanto las apps como los usuarios, y conecta multitud de identidades entre aplicaciones, API, nubes, dispositivos móviles, IoT… Admite autenticación con LDAP (SAML2p, WS-Federation y OpenID Connect) y acceso a API con la identidad de la aplicación o delegando la del usuario."], list: ["Protege tus recursos", "Autenticación de clientes y usuarios", "Gestión de sesión e inicio de sesión único", "Administración de clientes", "Emisión de identidad y tokens de acceso", "Validación de fichas"] },
            { title: "Sistemas de biometría", text: ["Experiencia de usuario cómoda y rápida. Las soluciones biométricas son la manera más segura de evitar fraudes y acelerar procesos, generando confianza entre clientes y usuarios.", "Touch ID reconoce huellas dactilares para desbloquear apps y dispositivos, firmar documentos o conceder permisos que requieren un nivel elevado de autenticación. Face ID desbloquea de forma segura con reconocimiento facial, funciona con poca luz y no necesita colaboración del usuario."] },
            { title: "Antifraude avanzado (DNI 3.0)", text: ["Prevención y protección antifraude. Captura y reconocimiento automático de documentos para identificar y detectar fraudes en DNI y pasaportes: detecta si un documento es original o una copia mediante luz infrarroja y la comparación con los datos biométricos guardados.", "Permite autenticar al usuario con el DNI en dispositivos con NFC: basta con acercar el lector para establecer un intercambio de datos rápido y de gran capacidad."] },
            { title: "Autenticación multifactor", text: ["Nivel de seguridad muy alto. XOne integra autenticación reforzada para aumentar la seguridad en las transacciones y evitar el fraude online, con dos o más factores en las operaciones bancarias según la directiva europea PSD2. La verificación se realiza mediante SMS."], list: ["Previene los ciberataques", "Se adapta a todas las formas de trabajo", "Cumple con las restricciones normativas", "Simplifica el acceso de los usuarios"] },
            { title: "Firmas electrónicas", text: ["Firma biométrica (ISO 19794-7): documentos jurídicamente vinculantes firmados a mano en smartphones y tablets Android, iOS y Windows. No requiere conectividad, la firma nunca se almacena disociada del documento, admite sello de tiempo y coordenadas, y el firmante siempre ve lo que firma (WYSIWYS).", "Firma digital: autentifica que los datos de un documento son exactamente los que introdujo el usuario, guardando fecha, hora, usuario y certificado. XOne ofrece firma simple y firma de Windows."] },
            { title: "Pagos y transacciones seguras", text: ["Integración con todas las pasarelas de pago, 100 % personalizables, con cifrado de la información sensible, protocolos SSL, verificación de dirección (AVS) y toda la normativa de seguridad vigente. XOne colabora en I+D con ITOS y homologa además la plataforma ADDON Payment."], list: ["Itos Technology (Redsys): B-50 e IC 20", "Ingenico (AXIS): ICMP e IWL 222", "Wannme", "Openpay", "Google Pay", "Apple Pay"] },
            { title: "Malla de ciberseguridad", text: ["Todas las herramientas de seguridad (antivirus, cortafuegos, servidores proxy, escáner de vulnerabilidades…) interoperan entre sí a través de capas como la gestión consolidada de políticas, la inteligencia de seguridad o la estructura de identidad, creando un perímetro que protege a los usuarios de todo tipo de amenazas."], list: ["Reduce los tiempos de despliegue y los fallos de seguridad", "Aumenta la agilidad y la resistencia", "Permite centrarse en tareas de mayor valor"], note: "Un sistema de seguridad más flexible, componible y resistente." },
          ],
        },
        {
          type: "cells", index: "Vigilancia", eyebrow: "Seguridad inteligente", title: "La confianza de saber que tu empresa", accent: "está protegida", cols: 3,
          items: [
            { label: "Data Loss Prevention", icon: "lock", lead: "Anticipa, previene y mitiga la pérdida de información.", text: "Inspecciona y controla la transferencia de archivos con información confidencial mediante un cifrado multiplataforma que protege los datos en local y en la nube." },
            { label: "Security Monitor", icon: "activity", lead: "Seguimiento constante, en tiempo real.", text: "Monitoriza eventos de seguridad y uso de los dispositivos por individuo, departamento, rol o proyecto, y detecta amenazas o comportamientos inusuales, como grandes transferencias de datos." },
            { label: "Security Warning", icon: "bell", lead: "Detección proactiva de incidentes.", text: "Respuestas y alertas automáticas ante amenazas, uso excesivo de datos o fallos de hardware: ataques de red, escuchas del tráfico, sitios de phishing o maliciosos…" },
          ],
        },
      ],
    },
    en: {
      group: 1,
      seo: { title: "Cybersecurity | XOne", description: "XOne applies an advanced security policy to establish, monitor and maintain secure access perimeters for networks, applications, devices and data." },
      hero: { title: "End-to-end", accent: "cybersecurity", lead: "XOne applies an advanced security policy to establish, monitor and maintain secure access perimeters for networks, applications, devices and data.", labels: ["ENS", "ISO 27001", "IDS", "DMZ"], secondary: { label: "See our certifications", slug: "certificaciones" } },
      blocks: [
        { type: "intro", lead: "Secure access to applications and data, with a", accent: "modular, responsive approach.", text: ["To prevent attacks and threats, we apply an advanced security policy that makes it possible to establish, monitor and maintain secure perimeters for access to networks, applications, devices and data.", "XOne is certified under the Esquema Nacional de Seguridad (ENS, Spain's National Security Framework, medium category) and ISO/IEC 27001:2022."], link: { label: "See our certifications", slug: "certificaciones" } },
        {
          type: "rows", index: "Modules", eyebrow: "Layer by layer", title: "Protection for networks, apps,", accent: "devices and data",
          items: [
            { title: "XOne Broker DMZ", text: ["Stay in control of your information. The XOne DMZ Security Broker is a protection system against web-based attacks that separates all communications between the central server and the devices. The system is designed to deploy as many brokers as deemed necessary.", "It prevents identity spoofing and denial-of-service (DDoS) attacks, and establishes communications between devices and the central server:"], list: ["WebSocket or REST (configurable)", "Encrypted over SSL", "Agile: better performance than the Replication Proxy architecture"] },
            { title: "IDS Core", text: ["Total interconnectivity. It is the core of any identity and access control infrastructure: it identifies the user, manages which resources they can access and gives them a stable identity across all apps.", "It authenticates, authorizes and secures both apps and users, and connects a wide range of identities across applications, APIs, clouds, mobile devices, IoT… It supports LDAP authentication (SAML2p, WS-Federation and OpenID Connect) and API access using the application's identity or delegating the user's."], list: ["Protects your resources", "Client and user authentication", "Session management and single sign-on", "Client administration", "Issuing of identity and access tokens", "Token validation"] },
            { title: "Biometric systems", text: ["A convenient, fast user experience. Biometric solutions are the safest way to prevent fraud and speed up processes, building trust among clients and users.", "Touch ID recognizes fingerprints to unlock apps and devices, sign documents or grant permissions that require a high level of authentication. Face ID unlocks securely with facial recognition, works in low light and requires no cooperation from the user."] },
            { title: "Advanced anti-fraud (DNI 3.0)", text: ["Fraud prevention and protection. Automatic document capture and recognition to identify and detect fraud in Spanish ID cards (DNI) and passports: it detects whether a document is an original or a copy using infrared light and comparison with the stored biometric data.", "It authenticates users with their DNI on NFC devices: simply bringing the reader close establishes a fast, high-capacity data exchange."] },
            { title: "Multi-factor authentication", text: ["A very high level of security. XOne integrates strong authentication to increase transaction security and prevent online fraud, with two or more factors in banking operations under the European PSD2 directive. Verification is done by SMS."], list: ["Prevents cyberattacks", "Adapts to all ways of working", "Complies with regulatory restrictions", "Simplifies the user access experience"] },
            { title: "Electronic signatures", text: ["Biometric signature (ISO 19794-7): legally binding documents signed by hand on Android, iOS and Windows smartphones and tablets. No connectivity required, the signature is never stored separately from the document, timestamps and coordinates can be added, and signers always see what they sign (WYSIWYS).", "Digital signature: it authenticates that a document's data is exactly what the user entered, storing date, time, user and certificate. XOne offers simple signature and Windows signature."] },
            { title: "Secure payments and transactions", text: ["Integration with all payment gateways, 100 % customizable, with encryption of sensitive information, SSL protocols, address verification (AVS) and all current security regulations. XOne collaborates on R&D with ITOS and has also certified the ADDON Payment platform."], list: ["Itos Technology (Redsys): B-50 and IC 20", "Ingenico (AXIS): ICMP and IWL 222", "Wannme", "Openpay", "Google Pay", "Apple Pay"] },
            { title: "Cybersecurity mesh", text: ["All security tools (antivirus, firewalls, proxy servers, vulnerability scanners…) interoperate through layers such as consolidated policy management, security intelligence and identity fabric, creating a perimeter that protects users from all kinds of threats."], list: ["Reduces deployment times and security failures", "Increases agility and resilience", "Lets you focus on higher-value tasks"], note: "A more flexible, composable and resilient security system." },
          ],
        },
        {
          type: "cells", index: "Monitoring", eyebrow: "Intelligent security", title: "The confidence of knowing your company", accent: "is protected", cols: 3,
          items: [
            { label: "Data Loss Prevention", icon: "lock", lead: "Anticipates, prevents and mitigates information loss.", text: "It inspects and controls the transfer of files containing confidential information with cross-platform encryption that protects data locally and in the cloud." },
            { label: "Security Monitor", icon: "activity", lead: "Constant, real-time tracking.", text: "It monitors security events and device usage by individual, department, role or project, and detects threats or unusual behavior, such as large data transfers." },
            { label: "Security Warning", icon: "bell", lead: "Proactive incident detection.", text: "Automatic responses and alerts for threats, excessive data usage or hardware failures: network attacks, traffic eavesdropping, phishing or malicious sites…" },
          ],
        },
      ],
    },
  },
  /* ------------------------------------------------------------------ */
  "bus-integracion-esb-enterprise-service-bus": {
    es: {
      group: 1,
      seo: { title: "Bus de integración (ESB) | XOne", description: "El bus de integración XOne interconecta con el sistema del cliente y permite dotar de movilidad a prácticamente cualquier sistema con escasos recursos." },
      hero: { title: "Bus de integración", accent: "(ESB)", lead: "El bus de integración XOne interconecta con el sistema del cliente y permite dotar de movilidad a prácticamente cualquier sistema con escasos recursos.", labels: ["ESB", "XML", "Push", "API"], secondary: { label: "Ver tipos de integración", slug: "tipos-de-integracion" } },
      blocks: [
        { type: "intro", lead: "Movilidad para prácticamente cualquier sistema,", accent: "con mínimos cambios.", text: ["El Bus de Integración XOne, con selectividad inteligente, permite la completa adaptación del sistema propietario del cliente, con mínimos cambios y para múltiples sistemas de bases de datos o entornos en sus instalaciones, como parte de la gestión de sus procesos internos.", "El envío inmediato de la información se realiza utilizando tecnología push, y su sencilla programación basada en XML se integra con todos los sistemas del mercado."], link: { label: "Ver tipos de integración", slug: "tipos-de-integracion" } },
        {
          type: "cells", index: "Integración", eyebrow: "Cómo funciona", title: "Conecta tus sistemas", accent: "sin tocarlos", cols: 2,
          items: [
            { label: "Grandes despliegues", icon: "server", lead: "Ofrece una mejor adaptabilidad y está diseñado para grandes despliegues.", text: "El componente de integración es totalmente configurable a través de XML y permite modelar las transformaciones de las entidades entre XOne y la solución del cliente.", more: ["Se ejecuta como un servicio de Windows o Linux, totalmente desasistido, monitorizando los entornos según la periodicidad establecida y garantizando la equivalencia de ambos sistemas con la frecuencia deseada."] },
            { label: "Tiempo real", icon: "signal", lead: "Envío de información prácticamente en tiempo real.", text: "La información generada por los terminales se envía en cuanto se recibe en el servidor de movilidad. Frecuencia de integración: cliente-XOne o XOne-cliente." },
            { label: "Varios sistemas", icon: "layers", lead: "Varios sistemas para una misma app.", text: "Obtén información de diferentes orígenes e intégrala en la propia aplicación de movilidad. El proceso contrario, el envío a diferentes sistemas, también es posible." },
            { label: "Seguimiento", icon: "activity", lead: "Seguimiento y gestión de cada paso.", text: "Con un reporte de errores integrado en el sistema operativo, permite seguir cada paso que se ejecuta y tomar decisiones de forma rápida y precisa. Los logs también pueden guardarse en la propia base de datos." },
          ],
        },
        { type: "chips", index: "ITF", eyebrow: "Comunicación entre sistemas", title: "Siete características de", accent: "su interfaz", cols: 4, items: ["Configurable a través de XML", "Servicio desasistido", "Frecuencia parametrizable", "Middleware", "Reporte de intercambio de datos", "Migración de back-ends sin afectar a la movilidad", "Uso de time-stamp"] },
        {
          type: "rows", index: "Arquitectura", eyebrow: "Microservicios", title: "La forma preferida de crear", accent: "apps nativas en la nube", anchor: "microservicios", subtitle: "Con una arquitectura de microservicios, las apps se crean con componentes independientes que ejecutan cada proceso como un servicio y se comunican mediante API ligeras.",
          items: [
            { title: "Escalado de servicios", text: ["Un conjunto de herramientas y servicios de tiempo de ejecución que facilitan el diseño, desarrollo, prueba, empaquetado, implementación, operación, monitorización y administración de microservicios, con servicios continuos y sin interrupciones."] },
            { title: "Independencia", text: ["Cada microservicio se puede diseñar, desarrollar e implementar independientemente de los demás, lo que proporciona agilidad: es más fácil publicar nuevas versiones con frecuencia."] },
            { title: "Rapidez y productividad", text: ["Cada microservicio es relativamente pequeño, fácil de administrar y desarrollar. El IDE carga proyectos más pequeños con más velocidad, aumentando la productividad de los desarrolladores."] },
            { title: "Despliegue", text: ["Dos aspectos clave: empaquetar y desplegar las apps para que sean portables entre proveedores de nube, y repartir la app en componentes débilmente acoplados, de una sola función, que se comunican por REST."] },
            { title: "Abstracción de problemas", text: ["Si se produce un problema en un servicio, solo se ve afectado ese servicio y los demás siguen atendiendo las solicitudes. Al resolverlo, se puede implementar el microservicio afectado sin tocar el resto de la aplicación."] },
            { title: "Tecnologías emergentes", text: ["Como los servicios se desarrollan de forma independiente y se ejecutan en paralelo, se pueden usar las tecnologías y plataformas más modernas."] },
          ],
        },
      ],
    },
    en: {
      group: 1,
      seo: { title: "Enterprise Service Bus (ESB) | XOne", description: "The XOne integration bus connects with the customer's system and makes it possible to mobilize virtually any system with minimal resources." },
      hero: { title: "Enterprise Service", accent: "Bus (ESB)", lead: "The XOne integration bus connects with the customer's system and makes it possible to mobilize virtually any system with minimal resources.", labels: ["ESB", "XML", "Push", "API"], secondary: { label: "See integration types", slug: "tipos-de-integracion" } },
      blocks: [
        { type: "intro", lead: "Mobility for virtually any system,", accent: "with minimal changes.", text: ["The XOne Integration Bus, with smart selectivity, makes it possible to fully adapt the customer's proprietary system, with minimal changes and for multiple database systems or on-premises environments, as part of the management of their internal processes.", "Information is sent immediately using push technology, and its simple XML-based programming integrates with all systems on the market."], link: { label: "See integration types", slug: "tipos-de-integracion" } },
        {
          type: "cells", index: "Integration", eyebrow: "How it works", title: "Connect your systems", accent: "without touching them", cols: 2,
          items: [
            { label: "Large deployments", icon: "server", lead: "Better adaptability, designed for large deployments.", text: "The integration component is fully configurable through XML and lets you model the transformations of entities between XOne and the customer's solution.", more: ["It runs as a Windows or Linux service, fully unattended, monitoring the environments at the established intervals and keeping both systems in sync at the desired frequency."] },
            { label: "Real time", icon: "signal", lead: "Information delivered practically in real time.", text: "Data generated by the devices is sent as soon as it reaches the mobility server. Integration frequency: customer-XOne or XOne-customer." },
            { label: "Several systems", icon: "layers", lead: "Several systems for one app.", text: "Obtain information from different sources and integrate it into the mobility app itself. The reverse process, sending to different systems, is also possible." },
            { label: "Tracking", icon: "activity", lead: "Tracking and management of every step.", text: "With error reporting integrated into the operating system, it tracks every step executed and supports fast, accurate decisions. Logs can also be stored in the database itself." },
          ],
        },
        { type: "chips", index: "ITF", eyebrow: "Communication between systems", title: "Seven features of", accent: "its interface", cols: 4, items: ["Configurable through XML", "Unattended service", "Configurable frequency", "Middleware", "Data exchange reporting", "Back-end migration without affecting mobility", "Use of time-stamp"] },
        {
          type: "rows", index: "Architecture", eyebrow: "Microservices", title: "The preferred way to build", accent: "cloud-native apps", anchor: "microservicios", subtitle: "With a microservices architecture, apps are built from independent components that run each process as a service and communicate through lightweight APIs.",
          items: [
            { title: "Service scaling", text: ["A set of runtime tools and services that make it easier to design, develop, test, package, deploy, operate, monitor and manage microservices, with services that run continuously and without interruption."] },
            { title: "Independence", text: ["Each microservice can be designed, developed and deployed independently of the others, which provides agility: it is easier to release new versions frequently."] },
            { title: "Speed and productivity", text: ["Each microservice is relatively small and easy to manage and develop. The IDE loads smaller projects faster, increasing developer productivity."] },
            { title: "Deployment", text: ["Two key aspects: packaging and deploying apps so they are portable across cloud providers, and splitting the app into loosely coupled, single-function components that communicate over REST."] },
            { title: "Problem isolation", text: ["If a problem occurs in one service, only that service is affected and the others keep serving requests. Once fixed, the affected microservice can be deployed without touching the rest of the application."] },
            { title: "Emerging technologies", text: ["Since services are developed independently and run in parallel, the most modern technologies and platforms can be used."] },
          ],
        },
      ],
    },
  },
  /* ------------------------------------------------------------------ */
  "cloud-vs-on-premise-xone": {
    es: {
      group: 1,
      seo: { title: "Infraestructura cloud y on-premise | XOne", description: "XOne permite el desarrollo rápido de una amplia gama de apps y soluciones corporativas, con infraestructura en local o como servicio SaaS en la nube." },
      hero: { title: "Infraestructura", accent: "cloud y on-premise", lead: "XOne permite el desarrollo rápido de una amplia gama de apps y soluciones corporativas, con infraestructura en local o como servicio SaaS en la nube.", labels: ["Cloud", "SaaS", "On-premise", "Híbrido"], secondary: { label: "Ver servicios de hosting", slug: "servicios-y-soporte" } },
      blocks: [
        { type: "intro", lead: "Construimos la solución que mejor se adapte a tus necesidades,", accent: "presentes y futuras.", text: ["Depende de las necesidades del negocio. XOne permite múltiples posibilidades a la hora de configurar sus entornos, ya sean de desarrollo, preproducción o producción.", "Como plataforma de desarrollo multiexperiencia, admite el desarrollo rápido de una amplia gama de apps y soluciones corporativas, al tiempo que garantiza que los departamentos de TI mantengan el control que necesitan."] },
        {
          type: "cells", index: "Modalidades", eyebrow: "Dónde despliegas", title: "Tu infraestructura o", accent: "la nuestra", cols: 2,
          items: [
            { label: "Infraestructura en local", icon: "server", lead: "Una aplicación «in-house» alojada para el cliente y gestionada por sus empleados.", text: "A pesar de las ventajas de la nube, hay escenarios que requieren una implementación en local: empresas que quieren que la información de su negocio esté en sus dependencias y que su equipo de TI se encargue del mantenimiento y la escalabilidad del hardware y el software.", more: ["Suele asociarse a empresas que buscan resultados profesionales sin riesgos de servidores sobrecargados ni de revelación de datos internos. La plataforma se ejecuta en las instalaciones del cliente, sobre cualquier gestor de base de datos: Oracle, SAP, SQL Server, MySQL, SQLite…"] },
            { label: "Software como servicio (SaaS)", icon: "cloud", lead: "Todos los requisitos técnicos de hardware y software en una única cuota de servicio.", text: "Para empresas sin técnicos de TI, que no pueden asumir los costes de una infraestructura propia o las cuotas de una privada, pero que necesitan un software escalable y flexible como base sólida para su crecimiento.", more: ["XOne proporciona esa infraestructura con un servicio cloud exclusivo que pone al alcance de sus clientes."] },
          ],
        },
      ],
    },
    en: {
      group: 1,
      seo: { title: "Cloud and on-premise infrastructure | XOne", description: "XOne enables rapid development of a wide range of enterprise apps and solutions, with on-premise infrastructure or as a cloud SaaS service." },
      hero: { title: "Cloud and on-premise", accent: "infrastructure", lead: "XOne enables rapid development of a wide range of enterprise apps and solutions, with on-premise infrastructure or as a cloud SaaS service.", labels: ["Cloud", "SaaS", "On-premise", "Hybrid"], secondary: { label: "See hosting services", slug: "servicios-y-soporte" } },
      blocks: [
        { type: "intro", lead: "We build the solution that best fits your needs,", accent: "now and in the future.", text: ["It depends on the needs of the business. XOne offers multiple options when it comes to configuring its environments, whether for development, pre-production or production.", "As a multiexperience development platform, it supports the rapid development of a wide range of enterprise apps and solutions, while ensuring that IT departments keep the control they need."] },
        {
          type: "cells", index: "Options", eyebrow: "Where you deploy", title: "Your infrastructure", accent: "or ours", cols: 2,
          items: [
            { label: "On-premise infrastructure", icon: "server", lead: "An in-house application hosted for the client and managed by its employees.", text: "Despite the advantages of the cloud, some scenarios require an on-premise deployment: companies that want their business information kept on their own premises and their IT team to maintain and scale the hardware and software.", more: ["It is usually associated with companies seeking professional results without the risks of overloaded servers or disclosure of internal data. The platform runs on the client's premises, on any database management system: Oracle, SAP, SQL Server, MySQL, SQLite…"] },
            { label: "Software as a Service (SaaS)", icon: "cloud", lead: "All the technical hardware and software requirements in a single service fee.", text: "For companies without IT technicians, that cannot afford their own infrastructure or the fees of a private one, but that need scalable, flexible software as a solid foundation for growth.", more: ["XOne provides that infrastructure with an exclusive cloud service that it makes available to its clients."] },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "sistema-de-actualizaciones-xone": {
    es: {
      group: 1,
      seo: { title: "Sistema de actualizaciones (XOne Live) | XOne", description: "XOne Live es el componente web que recibe las peticiones de los dispositivos, las valida y gestiona el envío de las actualizaciones desde el servidor." },
      hero: { title: "Sistema de actualizaciones", accent: "(XOne Live)", lead: "XOne Live es el componente web que recibe las peticiones de los dispositivos, las valida y gestiona el envío de las actualizaciones desde el servidor.", labels: ["Live", "IMEI", "UUID", "OTA"], secondary: { label: "Ver la réplica de datos", slug: "replica-de-datos-y-documentacion-xone" } },
      blocks: [
        { type: "intro", lead: "Todo está securizado mediante el identificador único", accent: "del dispositivo.", text: ["XOne Live es un componente web que se encarga de recibir las peticiones de los dispositivos, validarlas en el entorno de aplicación y gestionar el envío de las actualizaciones desde la parte del servidor.", "El identificador recibe distintos nombres según la plataforma: IMEI, PIN, UUID o SERIAL."] },
        {
          type: "rows", index: "Acceso", eyebrow: "Autorregistro", title: "Dispositivos que se dan de alta", accent: "solos",
          items: [
            { title: "Sistema de autorregistro", text: ["¿Se puede hacer una app en la que no sea necesario registrar previamente el dispositivo en el servidor? Sí, se puede hacer un servidor de réplica con autorregistro.", "XOne permite dar de alta a usuarios finales si se han autenticado de forma correcta, según los datos de conexión definidos por el cliente al diseñar la aplicación, sin registrar antes los dispositivos con XOne Manager."], note: "Si alguien instala el sistema de actualizaciones sin permiso del cliente, no tiene consecuencias: su identificador no está dado de alta como válido, así que no hay forma de entrar en su red." },
          ],
        },
        { type: "chips", index: "Capacidades", eyebrow: "Qué hace XOne Live", title: "Doce funciones para actualizar", accent: "sin fricción", cols: 3, items: ["Recepción de peticiones de los dispositivos", "Gestión de envío de actualizaciones", "Confirmación mediante last version", "Validación de dispositivos", "Servicio embebido en el framework", "Comprobaciones iniciales por dispositivo", "Información clara al usuario durante la instalación", "Varias apps en el mismo dispositivo y proyecto", "Log de operaciones", "Securización mediante identificador único", "Sistema de autorregistro", "Depuración y gestión de errores"] },
      ],
    },
    en: {
      group: 1,
      seo: { title: "Update system (XOne Live) | XOne", description: "XOne Live is the web component that receives requests from devices, validates them and manages the delivery of updates from the server." },
      hero: { title: "Update system", accent: "(XOne Live)", lead: "XOne Live is the web component that receives requests from devices, validates them and manages the delivery of updates from the server.", labels: ["Live", "IMEI", "UUID", "OTA"], secondary: { label: "See data replication", slug: "replica-de-datos-y-documentacion-xone" } },
      blocks: [
        { type: "intro", lead: "Everything is secured by the device's", accent: "unique identifier.", text: ["XOne Live is a web component that receives requests from devices, validates them in the application environment and manages the delivery of updates from the server side.", "The identifier has different names depending on the platform: IMEI, PIN, UUID or SERIAL."] },
        {
          type: "rows", index: "Access", eyebrow: "Self-registration", title: "Devices that", accent: "sign themselves up",
          items: [
            { title: "Self-registration system", text: ["Is it possible to build an app that does not require the device to be registered on the server beforehand? Yes, you can set up a replication server with self-registration.", "XOne can sign up end users who have authenticated correctly, according to the connection details defined by the customer when designing the application, without registering the devices in XOne Manager first."], note: "If someone installs the update system without the customer's permission, it has no consequences: its identifier is not registered as valid, so there is no way into the network." },
          ],
        },
        { type: "chips", index: "Capabilities", eyebrow: "What XOne Live does", title: "Twelve functions for", accent: "frictionless updates", cols: 3, items: ["Receiving requests from devices", "Managing the delivery of updates", "Confirmation via last version", "Device validation", "Service embedded in the framework", "Initial checks per device", "Clear information during installation", "Multiple apps on the same device and project", "Operations log", "Security through a unique identifier", "Self-registration system", "Debugging and error management"] },
      ],
    },
  },
  /* ------------------------------------------------------------------ */
  "multiplataforma-xone": {
    es: {
      group: 1,
      seo: { title: "Multiplataforma | XOne", description: "La plataforma de desarrollo multiexperiencia XOne opera en diferentes sistemas operativos con el mismo código, y sus desarrollos se ejecutan sin cambios." },
      hero: { title: "Multiplataforma:", accent: "un solo código", lead: "La plataforma de desarrollo multiexperiencia XOne opera en diferentes sistemas operativos con el mismo código, y sus desarrollos se ejecutan sin cambios.", labels: ["Android", "iOS", "Windows", "Web"], secondary: { label: "Ver dispositivos homologados", slug: "dispositivos-homologados" } },
      blocks: [
        { type: "intro", lead: "Compatible con todas las plataformas y sistemas operativos", accent: "del mercado.", text: ["La plataforma de desarrollo multiexperiencia XOne puede operar en diferentes sistemas operativos bajo el mismo código, logrando desarrollos que pueden ejecutarse sin cambios y de forma rápida en diversas plataformas del mercado: Android, iOS, Windows…"] },
        {
          type: "cells", index: "Código", eyebrow: "Escribe una vez", title: "Ejecuta en cualquier", accent: "dispositivo", cols: 3,
          items: [
            { label: "Tu dispositivo", icon: "device", lead: "Los límites los pone tu dispositivo, no XOne.", text: "XOne aprovecha incluso los terminales antiguos del cliente, teniendo en cuenta las limitaciones de su antigüedad: conectividad inalámbrica, periféricos, capacidad de almacenamiento…" },
            { label: "Frameworks nativos", icon: "layers", lead: "Uno para cada sistema operativo, e incluso para cada versión.", text: "Cuando una plataforma no soporta determinadas características, los frameworks se encargan de que su falta no afecte al resto de la app (graceful degradation).", link: { label: "Ver dispositivos homologados", slug: "dispositivos-homologados" } },
            { label: "Ventajas", icon: "check", lead: "El dispositivo que mejor se ajuste a cada perfil.", text: "Cada usuario puede emplear el dispositivo o dispositivos que más se ajusten a sus necesidades, y en un mismo desarrollo pueden convivir distintos terminales y sistemas operativos." },
          ],
        },
      ],
    },
    en: {
      group: 1,
      seo: { title: "Cross-platform | XOne", description: "The XOne multiexperience development platform runs on different operating systems with the same code, and its apps run without changes." },
      hero: { title: "Cross-platform:", accent: "a single codebase", lead: "The XOne multiexperience development platform runs on different operating systems with the same code, and its apps run without changes.", labels: ["Android", "iOS", "Windows", "Web"], secondary: { label: "See certified devices", slug: "dispositivos-homologados" } },
      blocks: [
        { type: "intro", lead: "Compatible with all platforms and operating systems", accent: "on the market.", text: ["The XOne multiexperience development platform can run on different operating systems with the same code, delivering apps that run quickly and without changes on various platforms on the market: Android, iOS, Windows…"] },
        {
          type: "cells", index: "Code", eyebrow: "Write once", title: "Run on any", accent: "device", cols: 3,
          items: [
            { label: "Your device", icon: "device", lead: "Your device sets the limits, not XOne.", text: "XOne even makes use of the customer's older devices, taking into account the limitations that come with age: wireless connectivity, peripherals, storage capacity…" },
            { label: "Native frameworks", icon: "layers", lead: "One for each operating system, and even for each version.", text: "When a platform does not support certain features, the frameworks ensure that their absence does not affect the rest of the app (graceful degradation).", link: { label: "See certified devices", slug: "dispositivos-homologados" } },
            { label: "Advantages", icon: "check", lead: "The device that best fits each profile.", text: "Each user can work with the device or devices that best fit their needs, and different devices and operating systems can coexist in the same development." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  "sistema-de-monitorizacion-con-ia": {
    es: {
      group: 1,
      seo: { title: "Sistema de monitorización con IA | XOne", description: "XOne Monitor comprueba que ciertas funciones del servidor funcionan correctamente y emplea machine learning para predecir caídas de servicio y fallos." },
      hero: { title: "Monitorización", accent: "con IA", lead: "XOne Monitor comprueba que ciertas funciones del servidor funcionan correctamente y emplea machine learning para predecir caídas de servicio y fallos.", labels: ["Monitor", "ML", "Logs", "Alertas"], secondary: { label: "Ver ciberseguridad", slug: "ciberseguridad" } },
      blocks: [
        { type: "intro", lead: "La seguridad de que", accent: "todo va bien.", text: ["XOne Monitor es un servicio que comprueba que ciertas funciones de nuestro servidor funcionan correctamente. Cubre una necesidad muy común en el mundo del software: la seguridad de que todo va como debería.", "Mediante procesos robóticos, permite ahorrar tiempo y recursos en el desarrollo de las tareas específicas de seguridad."] },
        {
          type: "rows", index: "Predicción", eyebrow: "Machine learning", title: "Anticiparse a los fallos", accent: "antes de que ocurran", subtitle: "Usar IA en sistemas de monitorización ayuda a predecir problemas futuros, a tener más control sobre los dispositivos, a mejorar su rendimiento y a interpretar mejor los datos.",
          items: [
            { title: "Sistema de predicción de fallos", text: ["XOne emplea técnicas de machine learning para predecir caídas de servicio, o incluso errores o fallos en el rendimiento de los sistemas monitorizados.", "Para ello se utilizan los logs de cada sistema, lo que permite realizar tareas de planificación de la capacidad gracias a la ciencia de datos."] },
          ],
        },
        { type: "chips", index: "Tareas", eyebrow: "Qué hace XOne Monitor", title: "Siete trabajos que", accent: "se hacen solos", cols: 2, items: ["Comprueba el estado de los servicios y, si están parados, los arranca y avisa por correo", "Envía correos con parámetros del estado del proyecto", "Mantiene periódicamente las tablas de la app y de la réplica", "Notifica por correo los comportamientos erróneos", "Crea logs de errores para su supervisión", "Crea, copia y traslada ficheros", "Comprime ficheros"] },
      ],
    },
    en: {
      group: 1,
      seo: { title: "AI-powered monitoring system | XOne", description: "XOne Monitor checks that certain server functions are working correctly and uses machine learning to predict service outages and failures." },
      hero: { title: "AI-powered", accent: "monitoring", lead: "XOne Monitor checks that certain server functions are working correctly and uses machine learning to predict service outages and failures.", labels: ["Monitor", "ML", "Logs", "Alerts"], secondary: { label: "See cybersecurity", slug: "ciberseguridad" } },
      blocks: [
        { type: "intro", lead: "The peace of mind that", accent: "everything is running smoothly.", text: ["XOne Monitor is a service that checks that certain functions of our server are working correctly. It meets a very common need in the software world: the assurance that everything is running as it should.", "Through robotic processes, it saves time and resources in carrying out specific security tasks."] },
        {
          type: "rows", index: "Prediction", eyebrow: "Machine learning", title: "Anticipating failures", accent: "before they happen", subtitle: "Using AI in monitoring systems helps predict future problems, gain more control over devices, improve their performance and better interpret data.",
          items: [
            { title: "Failure prediction system", text: ["XOne uses machine learning techniques to predict service outages, or even errors or performance failures in the monitored systems.", "Each system's logs are used for this, which makes it possible to carry out capacity planning tasks thanks to data science."] },
          ],
        },
        { type: "chips", index: "Tasks", eyebrow: "What XOne Monitor does", title: "Seven jobs that", accent: "run on their own", cols: 2, items: ["Checks service status and, if stopped, restarts services and sends an email", "Sends emails with project status parameters", "Performs periodic maintenance of the app and replica tables", "Notifies erroneous behavior by email", "Creates error logs for later review", "Creates, copies and moves files", "Compresses files"] },
      ],
    },
  },
  /* ------------------------------------------------------------------ */
  "notificaciones-push-xone": {
    es: {
      group: 1,
      seo: { title: "Notificaciones push | XOne", description: "En los dispositivos sin tecnología push nativa del fabricante o del operador, la plataforma XOne coloca un servicio propio de escucha mediante conexión IP." },
      hero: { title: "Notificaciones", accent: "push", lead: "En los dispositivos sin tecnología push nativa del fabricante o del operador, la plataforma XOne coloca un servicio propio de escucha mediante conexión IP.", labels: ["Push", "Alarmas", "Eventos", "Réplica"], secondary: { label: "Ver la réplica de datos", slug: "replica-de-datos-y-documentacion-xone" } },
      blocks: [
        { type: "intro", lead: "Datos enviados a los dispositivos mediante eventos", accent: "iniciados en el servidor.", text: ["Un sistema para colocar servicios de escucha en los dispositivos. En los que permiten push nativo, XOne lo utiliza para enviar los datos.", "Entre las soluciones que pueden emplear este sistema destacan el envío de alarmas a los terminales móviles, la gestión de procesos en tiempo real, el SAT y los servicios de mantenimiento. Además, permite hacer peticiones con el token push del dispositivo, para que servicios web externos envíen mensajes que se tratan con el framework XOne."] },
        {
          type: "cells", index: "Servidores", eyebrow: "Arquitectura push", title: "Tres piezas que avisan", accent: "a cada dispositivo", cols: 3,
          items: [
            { label: "Servidor de alarmas", icon: "bell", lead: "Recibe alarmas de diversas fuentes, las normaliza y las pone en colas de envío.", text: "Normalmente vienen de apps externas que monitorizan hardware, consultan bases de datos o reciben información de terceros. Usa conectores que se instalan según las necesidades y reconoce protocolos estándar como SMPP y protocolos propietarios de sistemas de control de producción." },
            { label: "Servidor de eventos", icon: "activity", lead: "Cada uno procesa un evento o conjunto de eventos muy específico.", text: "Opera de forma similar al servidor de alarmas, pero de manera independiente, preparado para comunicarse con un cliente push diferente." },
            { label: "Servidor de réplica", icon: "refresh", lead: "Usa la tecnología push para avisar de que hay datos pendientes de descargar.", text: "No es un componente separado del sistema push. Si la versión del servidor de réplica es antigua y no soporta push, el servidor de eventos puede comprobar las bases de datos de réplica y notificar a los clientes." },
          ],
        },
      ],
    },
    en: {
      group: 1,
      seo: { title: "Push notifications | XOne", description: "On devices without native push technology from the manufacturer or carrier, the XOne platform installs its own listening service over an IP connection." },
      hero: { title: "Push", accent: "notifications", lead: "On devices without native push technology from the manufacturer or carrier, the XOne platform installs its own listening service over an IP connection.", labels: ["Push", "Alarms", "Events", "Replication"], secondary: { label: "See data replication", slug: "replica-de-datos-y-documentacion-xone" } },
      blocks: [
        { type: "intro", lead: "Data sent to devices through", accent: "server-initiated events.", text: ["A system for placing listening services on devices. On devices that support native push, XOne uses it to send the data.", "Solutions that can use this system include sending alarms to mobile terminals, real-time process management, field service (SAT) and maintenance services. It can also make requests with the device's push token, so that external web services can send messages handled with the XOne framework."] },
        {
          type: "cells", index: "Servers", eyebrow: "Push architecture", title: "Three pieces that alert", accent: "every device", cols: 3,
          items: [
            { label: "Alarm server", icon: "bell", lead: "Receives alarms from various sources, normalizes them and places them in send queues.", text: "They usually come from external apps that monitor hardware, query databases or receive third-party information. It uses connectors installed as needed and recognizes standard protocols such as SMPP as well as proprietary protocols from production control systems." },
            { label: "Event server", icon: "activity", lead: "Each one processes a very specific event or set of events.", text: "It works like the alarm server, but independently, ready to communicate with a different push client." },
            { label: "Replication server", icon: "refresh", lead: "Uses push technology to announce data pending download.", text: "It is not a separate component of the push system. If the replication server is an older version without push support, the event server can check the replication databases and notify clients." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  xoneassist: {
    es: {
      group: 1,
      seo: { title: "XOneAssist | XOne", description: "XOneAssist es un tutor virtual para crear apps innovadoras que da soporte a los desarrolladores, aumenta su productividad y reduce el tiempo y el coste." },
      hero: { title: "XOneAssist,", accent: "tu tutor virtual", lead: "XOneAssist es un tutor virtual para crear apps innovadoras que da soporte a los desarrolladores, aumenta su productividad y reduce el tiempo y el coste.", labels: ["IA", "NLP", "Voz", "Bots"], secondary: { label: "Conoce XOneAssist", slug: "presentandoxoneassist" } },
      blocks: [
        { type: "intro", lead: "Un tutor virtual para programar", accent: "de forma rápida y fácil.", text: ["XOne está preparado para crear y desarrollar apps enriquecidas con tecnologías basadas en IA.", "Las conversaciones con bots son cada vez más precisas, ofrecen un trato más humano a los usuarios y agilizan la toma de decisiones de forma automática. Este tipo de soluciones nos proporcionan nuevas funcionalidades en nuestras apps móviles."] },
        {
          type: "cells", index: "Inteligencia", eyebrow: "Qué sabe hacer", title: "Aprende de tus hábitos y", accent: "entiende emociones", cols: 2,
          items: [
            { label: "Programación natural", icon: "code", lead: "Basada en aprendizaje automático.", text: "XOne es capaz de recopilar y analizar hábitos para poder satisfacer las necesidades concretas de los desarrolladores." },
            { label: "Sentimientos y emociones", icon: "chat", lead: "Análisis de sentimientos.", text: "Saber qué sienten los usuarios sobre una marca, producto o servicio, a partir de mensajes, comentarios o reacciones en diferentes redes sociales." },
          ],
        },
        { type: "chips", index: "Soluciones", eyebrow: "Capacidades de IA", title: "Seis tecnologías listas para", accent: "tus apps", cols: 3, items: ["Lenguaje natural", "Reconocimiento de voz", "Gestión de diálogo", "Análisis de texto", "Agentes virtuales", "Seguridad biométrica"] },
      ],
    },
    en: {
      group: 1,
      seo: { title: "XOneAssist | XOne", description: "XOneAssist is a virtual tutor for building innovative apps that supports developers, boosts their productivity and reduces time and cost." },
      hero: { title: "XOneAssist,", accent: "your virtual tutor", lead: "XOneAssist is a virtual tutor for building innovative apps that supports developers, boosts their productivity and reduces time and cost.", labels: ["AI", "NLP", "Voice", "Bots"], secondary: { label: "Discover XOneAssist", slug: "presentandoxoneassist" } },
      blocks: [
        { type: "intro", lead: "A virtual tutor for programming", accent: "quickly and easily.", text: ["XOne is ready to create and develop apps enriched with AI-based technologies.", "Conversations with bots are increasingly accurate, offer users a more human touch and automatically speed up decision-making. These kinds of solutions provide new features in our mobile apps."] },
        {
          type: "cells", index: "Intelligence", eyebrow: "What it can do", title: "Learns your habits and", accent: "understands emotions", cols: 2,
          items: [
            { label: "Natural programming", icon: "code", lead: "Based on machine learning.", text: "XOne can collect and analyze habits in order to meet developers' specific needs." },
            { label: "Sentiment and emotion", icon: "chat", lead: "Sentiment analysis.", text: "Find out how users feel about a brand, product or service, from messages, comments or reactions on different social networks." },
          ],
        },
        { type: "chips", index: "Solutions", eyebrow: "AI capabilities", title: "Six technologies ready for", accent: "your apps", cols: 3, items: ["Natural language", "Speech recognition", "Dialog management", "Text analysis", "Virtual agents", "Biometric security"] },
      ],
    },
  },
  /* ------------------------------------------------------------------ */
  "gestion-de-movilidad-empresarial-xone": {
    es: {
      group: 1,
      seo: { title: "Gestión de movilidad empresarial (EMM) | XOne", description: "XOne aporta una solución integral de gestión de movilidad empresarial (EMM) para habilitar el uso de los dispositivos móviles de los empleados en la empresa." },
      hero: { title: "Gestión de movilidad", accent: "empresarial (EMM)", lead: "XOne aporta una solución integral de gestión de movilidad empresarial (EMM) para habilitar el uso de los dispositivos móviles de los empleados en la empresa.", labels: ["EMM", "MDM", "MAM", "BYOD"], secondary: { label: "Ver ciberseguridad", slug: "ciberseguridad" } },
      blocks: [
        { type: "intro", lead: "Control de uso y acceso a los datos de la empresa", accent: "desde dispositivos móviles.", text: ["En vez de restringir los dispositivos móviles en el lugar de trabajo, muchas empresas eligen soluciones EMM que dan flexibilidad a los usuarios mientras el departamento de TI conserva el control.", "El objetivo de EMM no es solo posibilitar que los empleados trabajen con sus dispositivos móviles, sino ayudarles a ser lo más productivos posible."] },
        {
          type: "rows", index: "Gestión", eyebrow: "Una sola consola", title: "Dispositivos y apps de cualquier plataforma,", accent: "bajo control",
          items: [
            { title: "Gestiona dispositivos de forma segura", text: ["Además de abordar los problemas de seguridad, ayuda a que los empleados sean más productivos proporcionándoles las herramientas que necesitan.", "Ofrece una gestión exhaustiva de la movilidad empresarial, incluida la gestión de la información, de los dispositivos y de las apps móviles, y administra en una sola consola dispositivos Android, iOS, Windows…"], list: ["MAM (Mobile Application Management): controla qué usuarios acceden a las apps desde los dispositivos empresariales.", "MDM (Mobile Device Management): administra de forma remota y segura los dispositivos profesionales, protegiendo los datos corporativos."] },
            { title: "XOne Manager", text: ["Una herramienta operativa que facilita el trabajo: toda la información se gestiona desde XOne Manager y los datos buscados están siempre disponibles de forma inmediata.", "Es un MDM que permite el inventariado de dispositivos, con información del terminal, el software instalado o su usuario, y gestionar la instalación remota de apps y sus versiones, con el estado visible en todo momento desde una sencilla interfaz web."] },
          ],
        },
        {
          type: "cells", index: "Ventajas", eyebrow: "Qué aporta EMM", title: "Ocho beneficios para tu", accent: "empresa", cols: 4,
          items: [
            { label: "Productividad móvil", icon: "activity", text: "Aumenta la productividad de los empleados en dispositivos BYOD sin poner la seguridad en riesgo." },
            { label: "Seguridad", icon: "shield", text: "Seguridad de calidad empresarial de extremo a extremo de los dispositivos, datos y apps móviles." },
            { label: "Dispositivos", icon: "device", text: "Configuración, protección, soporte y gestión de dispositivos móviles. Controla fácilmente cualquier tipo de información." },
            { label: "Apps", icon: "grid", text: "Protección de la información a nivel de app, con administración de apps de calidad empresarial." },
            { label: "Recursos", icon: "euro", text: "Control de gastos y gestión eficiente de los recursos de los dispositivos, optimizando las telecomunicaciones móviles." },
            { label: "Incidencias", icon: "bell", text: "Funciones de control y seguimiento de incidencias, evitando retrasos y pérdidas de dispositivos." },
            { label: "UEM", icon: "server", text: "Administración unificada de endpoints a gran escala, protegiendo y controlando el sistema operativo y sus apps." },
            { label: "Multiplataforma", icon: "layers", text: "Visibilidad y control de dispositivos iOS, Android, Windows… desde una única plataforma, integrando la infraestructura existente." },
          ],
        },
        { type: "chips", index: "Herramienta", eyebrow: "Funcionalidades de XOne Manager", title: "Todo lo que necesitas para administrar", accent: "tu flota", cols: 3, items: ["Instalación de dispositivos desde cero", "Actualizaciones de apps, bases de datos, librerías y plataformas", "Estado de los dispositivos y terminales", "Alta de nuevos dispositivos", "Recuperación ante desastres", "Duplicado de datos entre dispositivos", "Control de errores", "Reportes de datos", "Consulta de dispositivos por plataforma", "Estado de la batería", "Visualización de pantallas de la app", "Porcentaje de memoria utilizado", "Sistema de autorregistro", "Copias de seguridad", "Borrado remoto en caso de robo o pérdida"] },
        {
          type: "rows", index: "BYOD", eyebrow: "Trae tu propio dispositivo", title: "Teletrabajo con tu equipo,", accent: "de forma segura",
          items: [
            { title: "Estrategia BYOD", text: ["Bring Your Own Device es una de las principales tendencias entre las empresas de vanguardia, impulsada por la evolución de la tecnología, el teletrabajo y el aumento de smartphones, tabletas, wearables y dispositivos IoT. Los empleados aportan su propio dispositivo en lugar del terminal de la compañía.", "Aumenta la productividad y la innovación, con los recursos corporativos disponibles en cualquier momento y lugar, además del beneficio financiero y una mejor conciliación. La red de técnicos y peritos de grandes aseguradoras que usan XOne trabaja así, eligiendo el mejor momento y lugar para sus tareas."], list: ["Reduce costes de mantenimiento", "Mejora la productividad", "Mejores condiciones laborales", "Reduce pérdidas de inventario"], note: "Productividad, flexibilidad, conciliación y seguridad." },
            { title: "Seguridad en entornos BYOD", text: ["XOne implementa políticas de seguridad adecuadas para que no se pongan en riesgo ni los datos ni la información confidencial.", "Su MDM administra y monitoriza los equipos que se conectan a la red empresarial, velando por la seguridad de la información y de la red, y permite la instalación remota de aplicaciones, la sincronización de archivos, etc."] },
          ],
        },
      ],
    },
    en: {
      group: 1,
      seo: { title: "Enterprise Mobility Management (EMM) | XOne", description: "XOne provides a comprehensive enterprise mobility management (EMM) solution to enable the use of employees' mobile devices in the company." },
      hero: { title: "Enterprise Mobility", accent: "Management (EMM)", lead: "XOne provides a comprehensive enterprise mobility management (EMM) solution to enable the use of employees' mobile devices in the company.", labels: ["EMM", "MDM", "MAM", "BYOD"], secondary: { label: "See cybersecurity", slug: "ciberseguridad" } },
      blocks: [
        { type: "intro", lead: "Control of the use of and access to company data", accent: "from mobile devices.", text: ["Instead of restricting mobile devices in the workplace, many companies choose EMM solutions that give users flexibility while the IT department retains control.", "The goal of EMM is not only to let employees work with their mobile devices, but to help them be as productive as possible."] },
        {
          type: "rows", index: "Management", eyebrow: "A single console", title: "Devices and apps on any platform,", accent: "under control",
          items: [
            { title: "Manage devices securely", text: ["In addition to addressing security issues, it helps employees be more productive by giving them the tools they need.", "It offers comprehensive enterprise mobility management, including information, device and mobile app management, and manages Android, iOS, Windows… devices from a single console."], list: ["MAM (Mobile Application Management): controls which users access apps from company devices.", "MDM (Mobile Device Management): manages business devices remotely and securely, protecting corporate data."] },
            { title: "XOne Manager", text: ["An operational tool that makes work easier: all information is managed from XOne Manager, and the data you are looking for is always available immediately.", "It is an MDM that enables device inventory, with information about the device, installed software and its user, and manages the remote installation of apps and their versions, with status visible at all times through a simple web interface."] },
          ],
        },
        {
          type: "cells", index: "Advantages", eyebrow: "What EMM brings", title: "Eight benefits for your", accent: "company", cols: 4,
          items: [
            { label: "Mobile productivity", icon: "activity", text: "Increase employee productivity on BYOD devices without putting security at risk." },
            { label: "Security", icon: "shield", text: "End-to-end, enterprise-grade security for devices, data and mobile apps." },
            { label: "Devices", icon: "device", text: "Configure, protect, support and manage mobile devices. Easily control any type of information." },
            { label: "Apps", icon: "grid", text: "Information protected at the app level, with enterprise-grade mobile app management." },
            { label: "Resources", icon: "euro", text: "Expense control and efficient management of device resources, optimizing mobile telecommunications." },
            { label: "Incidents", icon: "bell", text: "Control and tracking functions for incidents, avoiding delays and device loss." },
            { label: "UEM", icon: "server", text: "Unified endpoint management at scale, protecting and controlling the operating system and its apps." },
            { label: "Multiplatform", icon: "layers", text: "Visibility and control of iOS, Android, Windows… devices from a single platform, integrating existing infrastructure." },
          ],
        },
        { type: "chips", index: "Tool", eyebrow: "XOne Manager features", title: "Everything you need to manage", accent: "your fleet", cols: 3, items: ["Setting up devices from scratch", "Updates of apps, databases, libraries and platforms", "Status of devices and terminals", "Adding new devices", "Disaster recovery", "Data duplication across devices", "Error control", "Data reports", "Querying devices by platform", "Battery status", "Viewing app screens", "Percentage of memory used", "Self-registration system", "Backups", "Remote wipe if stolen or lost"] },
        {
          type: "rows", index: "BYOD", eyebrow: "Bring your own device", title: "Remote work on your own equipment,", accent: "securely",
          items: [
            { title: "BYOD strategy", text: ["Bring Your Own Device is one of the main trends among leading-edge companies, driven by the evolution of technology, remote work and the growing presence of smartphones, tablets, wearables and IoT devices. Employees bring their own device instead of the company's.", "It increases productivity and innovation, with corporate resources available anytime and anywhere, plus financial benefits and better work-life balance. The network of technicians and loss adjusters of large insurers that use XOne works this way, choosing the best time and place for their tasks."], list: ["Reduces maintenance costs", "Improves productivity", "Better working conditions", "Reduces inventory losses"], note: "Productivity, flexibility, work-life balance and security." },
            { title: "Security in BYOD environments", text: ["XOne implements appropriate security policies so that neither data nor confidential information is put at risk.", "Its MDM manages and monitors the equipment that connects to the corporate network, safeguarding the organization's information and network, and enables remote app installation, file synchronization, etc."] },
          ],
        },
      ],
    },
  },
};
