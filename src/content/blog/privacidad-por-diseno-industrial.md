---
title: "Privacidad por diseño: cómo auditar sin violar"
description: "En industria y en hogares, la privacidad no puede ser un parche legal que se agrega después. Tiene que estar en la arquitectura desde el principio. Así lo diseñamos."
pubDate: 2026-04-22
author: "Riro Systems"
tags: ["privacidad", "ops", "criterio", "legal"]
---

Hay una forma de hablar de privacidad en tecnología que consiste en agregar un párrafo al contrato. Y hay otra forma, más honesta, que consiste en diseñar el sistema de manera que la violación de privacidad sea técnicamente imposible.

Riro trabaja con la segunda.

## El problema con los sistemas convencionales

Los sistemas de videovigilancia industriales y residenciales convencionales capturan imágenes, las almacenan y muchas veces las envían a servidores externos. La privacidad, si se considera, se aborda con políticas de acceso y términos de uso.

Eso puede ser suficiente para cumplir formalmente con una regulación. No es suficiente para generar confianza real en los operarios ni para sobrevivir una inspección laboral seria.

En Argentina, la Ley 25.326 y el Convenio 187 de la OIT sobre condiciones de trabajo establecen restricciones claras: no podés instalar cámaras en vestuarios, baños ni zonas de descanso. No podés identificar biométricamente a trabajadores sin su consentimiento expreso. No podés almacenar imágenes de personas sin justificación operativa documentada.

## Privacidad por diseño: qué significa técnicamente

El concepto de *privacy by design*, desarrollado por Ann Cavoukian, establece que la protección de datos debe estar integrada en la arquitectura del sistema, no añadida después como feature.

En términos prácticos para Riro OPS:

**No capturamos rasgos faciales.** Frigate detecta *presencia humana* como bounding boxes — cajas anónimas que indican que hay una persona en determinada zona. No identifica quién es esa persona, no almacena ningún descriptor biométrico.

**No instalamos cámaras en zonas privadas.** La ocupación de vestuarios, baños y salas de descanso se infiere matemáticamente a partir de flujos en zonas adyacentes permitidas. El cálculo es preciso. Las cámaras no existen en esas áreas.

**No enviamos video fuera de la planta.** Todo el procesamiento ocurre en hardware instalado on-premise. Ningún frame sale del perímetro de la instalación.

## Por qué esto importa para tu operación

Más allá de la obligación legal, hay razones operativas para diseñar con privacidad desde el principio.

Un sistema que los operarios perciben como invasivo genera resistencia. Esa resistencia tiene costo real: mayor rotación, menor colaboración, potencial conflicto sindical.

Un sistema que audita sin identificar — que mide flujos, no personas — puede presentarse a los trabajadores de forma transparente y honesta. "El sistema cuenta cuánta gente hay en cada zona para calcular eficiencia del turno. No sabe quién sos ni te filma en el baño." Esa conversación es posible cuando la arquitectura lo respalda.

## Riro HOME: el mismo principio

La misma lógica aplica al entorno residencial. Las automatizaciones de Riro Home corren en tu red local. El análisis de presencia en distintas habitaciones — que permite automatizar la iluminación, la climatización y la seguridad — se hace en tu servidor. No en la nube de ningún proveedor.

Tus hábitos, tus horarios, los movimientos dentro de tu casa: nada de eso sale de tu propiedad.

---

*Si querés entender cómo esto aplica a tu planta o tu hogar, entrá en contacto para una evaluación técnica.*
