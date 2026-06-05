---
title: "Frigate y el cómputo en el borde: por qué procesamos en tu planta, no en la nube"
description: "Frigate es el motor de visión por computadora que usamos en Riro OPS. Corre en tu infraestructura, detecta en milisegundos y no envía un solo frame a ningún servidor externo."
pubDate: 2026-05-08
author: "Riro Systems"
tags: ["técnico", "ops", "frigate", "edge-computing"]
---

Cuando decimos que Riro OPS procesa 100% local, no es un argumento de marketing. Es una decisión de arquitectura con consecuencias concretas en latencia, privacidad y confiabilidad.

El componente central de esa arquitectura es Frigate.

## Qué es Frigate

Frigate es un sistema de detección de objetos en tiempo real diseñado para correr en hardware local. Utiliza modelos de visión por computadora — específicamente redes neuronales entrenadas para detectar personas, vehículos y otros objetos — sin necesidad de conectividad a internet.

En términos simples: la cámara graba, Frigate analiza el video en tu servidor, y el resultado es una señal estructurada (alerta, conteo, evento) que puede conectarse a otros sistemas. Todo ocurre en tu red.

## Por qué no usamos la nube para inferencia

La alternativa sería enviar el video a un servicio de análisis en la nube. Algunos proveedores hacen esto de forma transparente, otros no tanto. Los problemas son tres:

**Latencia.** Entre que el frame llega al servidor remoto y vuelve la detección, pueden pasar cientos de milisegundos. En un entorno industrial donde estás contando unidades en una línea de producción, eso es inaceptable.

**Dependencia.** Si el proveedor de nube tiene un incidente, tu sistema de monitoreo se cae. Hemos visto plantas industriales sin datos durante horas por problemas de conectividad o caídas de servicio externo.

**Privacidad y compliance.** Enviar video de operarios a servidores externos tiene implicaciones legales directas. En Argentina, la Ley 25.326 de Protección de Datos Personales establece restricciones claras sobre el tratamiento de imágenes de personas.

## Hardware de aceleración: el Google Coral TPU

Para que Frigate procese múltiples cámaras en tiempo real sin requerir servidores costosos, usamos el acelerador Google Coral TPU (Tensor Processing Unit). Es un chip diseñado específicamente para inferencia de modelos de machine learning.

Con un Coral USB conectado a una computadora de bajo consumo, es posible procesar varias cámaras en simultáneo con detecciones en menos de 30 milisegundos. Sin GPU de servidor, sin costo de nube, sin dependencia externa.

## Lo que Riro OPS agrega sobre Frigate

Frigate detecta objetos. Riro OPS hace algo diferente: aplica lógica de negocio sobre esas detecciones.

Contamos unidades en una línea de producción. Inferimos ocupación de zonas sin cámaras en áreas privadas. Calculamos flujos, eficiencia por turno y desviaciones en tiempo real. Todo esto corre en tu infraestructura, con Frigate como capa de percepción y nuestro backend Python como capa de razonamiento.

El resultado es inteligencia operativa sin nube, sin suscripción, sin datos que salgan de tu planta.

---

*¿Querés ver cómo funciona esto en un entorno real? Leé el caso del Proyecto Piloto o escribinos.*
