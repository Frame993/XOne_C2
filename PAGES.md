# Inventario de páginas (fuente: sitemap de xone.es)

Cada página se crea en español (`/slug/`) y en inglés (`/en/slug/`), con el mismo slug que xone.es.
El texto en inglés sale de la versión inglesa real de xone.es (`xone.es/en/…`); sólo se traduce lo que falte allí.

Estado: ✅ hecha · ⏳ lote en curso · — pendiente

**Cómo añadir páginas** (cada lote): contenido en `src/content/pages/<grupo>.ts` (ES + EN con la misma forma, tipos en `types.ts`), registrar el objeto en `src/content/pages/index.ts` y el slug en `src/content/pages/slugs.ts`. Los enlaces a slugs aún no construidos apuntan a xone.es automáticamente.

## Lote 0 · Base
| Página | ES | EN |
|---|---|---|
| Inicio | `/` ✅ | `/en/` ✅ |

## Lote 1 · Plataforma (menú «Plataforma») + infraestructura (rutas, idiomas, plantilla de página) ✅
| Página | Slug |
|---|---|
| Plataforma XOne | `que-es-xone` |
| Marketectura | `marketectura` |
| Herramientas de desarrollo | `como-asiste-xone-desarolladores` |
| Servicios y soporte | `servicios-y-soporte` |
| Características XOne | `que-nos-hace-unicos-xone` |
| Movilidad XOne | `como-resolvemos-la-movilidad` |
| DevOps | `devops` |

## Lote 2 · Productos (menú «Productos»)
| Página | Slug |
|---|---|
| XOneCode (IA) | `xonecode` |
| MXDP | `nueva-mxdp` |
| Desarrollo XOneCloud | `herramientas-rapidas-de-desarrollo-xonecloud` |
| Réplica de datos y documental | `replica-de-datos-y-documentacion-xone` |
| Seguridad | `ciberseguridad` |
| Bus de integración | `bus-integracion-esb-enterprise-service-bus` |
| Cloud – On premise | `cloud-vs-on-premise-xone` |
| Sistema de actualizaciones | `sistema-de-actualizaciones-xone` |
| Multiplataforma | `multiplataforma-xone` |
| Monitorización con IA | `sistema-de-monitorizacion-con-ia` |
| Notificaciones push | `notificaciones-push-xone` |
| XOneAssist | `xoneassist` |
| EMM / MAM / MDM / BYOD | `gestion-de-movilidad-empresarial-xone` |

## Lote 3 · Soluciones y casos de éxito
| Página | Slug |
|---|---|
| Soluciones XOne | `soluciones-xone` |
| Casos de uso | `casos-de-uso-home` |
| Casos de éxito (listado) | `casos-de-exito-xone` |
| 12 casos de éxito | `casos-de-exito-xone/{cofares, gamesa, iberdrola, ingeteam, istobal, jcarrion, loomis, minits, navantia, orenes, sacyr, tubasa-buskme}` |
| Kit Digital | `kit-digital` |
| Sitio web y presencia en internet (Kit Digital) | `sitio-web-y-presencia-basica-en-internet` |
| Agente digitalizador · BI | `xone-agente-digitalizador-bi` |
| Agente digitalizador · Procesos | `xone-agente-digitalizador-procesos` |
| GSAT | `gsat` |
| iSAT | `isat` |

## Lote 4 · Comunidad, Empresa, contacto y legal
| Página | Slug |
|---|---|
| Clientes | `nuestros-clientes-xone` |
| Opiniones de clientes | `comentarios-clientes` |
| Socios estratégicos | `socios-estrategicos-xone` |
| Partners | `partners` |
| Hazte partner | `hazte-partner-xone` |
| Formulario de partner | `hazte-partner-formulario` |
| Programa de partners | `programadepartners` |
| Sobre nosotros | `sobre-nosotros` |
| Certificaciones | `certificaciones` |
| Financiación europea | `financiacion-europea` |
| Contacto | `contacto` |
| Aviso legal y privacidad | `uso-de-cookies-y-politica-de-privacidad` |

## Lote 5 · Recursos y noticias
| Página | Slug |
|---|---|
| Noticias (listado) | `noticias` |
| Documentación XOne | `documentacionxone` |
| Premios y reconocimientos | `premios-y-reconocimientos` |
| Colaboraciones I+D+i | `colaboraciones-id` |
| Plantilla de noticia + 61 noticias | `certificacion-iso-27001`, `tendencias-en-servicios-tecnicos`, … (sólo en español en xone.es; en inglés se traducen) |

## Lote 6 · Páginas técnicas fuera del menú
| Página | Slug |
|---|---|
| Big data | `bigdata` |
| Capacidades XOne | `capacidades-xone` |
| Comunicaciones seguras | `comunicaciones-seguras` |
| Dispositivos homologados | `dispositivos-homologados` |
| Framework Android | `frameworkandroid` |
| Gestión de clientes y proveedores | `gestion-de-clientes-proveedores` |
| IoT y wearables | `iot-wearables` |
| Low-code | `low-code` |
| Machine learning | `machine-learning` |
| Microapps | `microapps` |
| Modalidades de soporte | `modalidadessoporte` |
| Módulos MX XOne Cloud Studio | `modulos-mx-xone-cloud-studio` |
| Módulos XOne Extra | `modulos-xone-extra` |
| Multiexperiencia | `multiexperiencia2` |
| Plataforma MXDP | `plataforma-de-desarrollo-multiexperiencia-mxdp` |
| Presentando XOneAssist | `presentandoxoneassist` |
| PWA | `pwa` |
| Requisitos y funcionalidades | `requisitos-funcionalidades-xone` |
| Seguridad en las apps | `seguridad-en-las-apps-xone` |
| Tecnologías convergentes | `tecnologias-convergentes` |
| Tipos de integración | `tipos-de-integracion` |
| User experience | `user-experience` |
| Voz | `voz` |
| XOneVision | `xonevision` |

**Total**: inicio + 81 páginas, cada una en español e inglés, más 61 noticias (y su versión inglesa).
